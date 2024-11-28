const { collection, addDoc, doc, getDoc, updateDoc, deleteDoc, getDocs, serverTimestamp, query, where } = require("firebase/firestore");
const { getCustomerById, get_customer_by_id } = require('../models/User')
const db = require("../config/db").fireStore
const logger = require("../config/logger");
const { get_printer_by_id } = require("./Printer");
const { get_price_by_paper_properties } = require("./Paper");
const { create_printing_payment, get_printing_payment_by_printing_req, get_printing_payment_by_userid, confirm_printing_payemnt } = require("./Payment");
const { getCurrentDateTime } = require("../middlewares/supportFunction");

// Function to create a new printing request
async function create_printing_req(data) {
    try {
        const printingRequestCollection = collection(db, 'PrintingRequest');
        data.created_at = getCurrentDateTime()
        data.estimated_date = { date: "", time: "" }
        data.status = "Đang xử lý"
        data.completed_date = { date: "", time: "" }
        //check valid info
        const props = data.properties
        if (!data.user_id || !props.size || !props.no_pages) return { error: 'Not given details' }
        const user = await get_customer_by_id(data.user_id)
        let must_be_price = await get_price_by_paper_properties(props.size, props.no_pages, props.type_of_paper)
        must_be_price = must_be_price.price * (props.copies == undefined ? 1 : props.copies) * props.no_pages

        const valid_amount = await check_enough_amout(user, must_be_price)
        if (!valid_amount) return { error: 'Not enough amount for payment' }

        const docRef = await addDoc(printingRequestCollection, data);

        //create payment
        await create_printing_payment(docRef.id, must_be_price, data.user_id)

        return { message: "Create printing request successfully" }
    } catch (error) {
        throw error
    }
}
async function get_all_printing_reqs() {
    const printingReqs = [];

    try {
        const querySnapshot = await getDocs(collection(db, 'PrintingRequest'));

        for (const doc of querySnapshot.docs) {
            const data = doc.data();
            data.id = doc.id;

            if (data.printer_id) {
                const printer = await get_printer_by_id(data.printer_id);
                if (printer) {
                    data.printer = printer;
                    data.printer.id = data.printer_id
                } else {
                    data.printer = null;
                }
                delete data.printer_id
            }
            printingReqs.push(data);
        }

        return printingReqs.length > 0 ? printingReqs : null;
    } catch (error) {
        console.error("Error fetching printing requests:", error);
        throw error;
    }
}
async function get_printing_reqs_by_id(id) {
    try {
        const docRef = doc(db, 'PrintingRequest', id);
        const docReq = await getDoc(docRef);
        if (docReq.exists()) {
            return docReq.data()
        } else {
            return null;
        }
    } catch (error) {
        throw error;
    }
}

async function complete_printing(id) {
    try {
        const req = await getDoc(doc(db, 'PrintingRequest', id));
        if (req.exists()) {
            data = req.data()
            data.completed_date = getCurrentDateTime()
            data.status = "Đã in tài liệu thành công"
            await updateDoc(doc(db, 'PrintingRequest', req.id), data)
            await confirm_printing_payemnt(req.id)
            return { message: 'Xác nhận tài liệu đã in và cập nhật thanh toán thành công' }
        } else {
            return null;
        }
    } catch (error) {
        throw error;
    }
}

async function check_enough_amout(user, must_be_price) {
    try {
        let amount = must_be_price
        const reqs = await get_pending_payment_amount(user.id)
        reqs.forEach((ele) => {
            amount += ele.amount
        })
        logger.info(`Current payment: ${must_be_price}, total_pending_amount: ${amount - must_be_price}, current amount: ${user.amount}, no_pending_payment:${reqs.length + 1}`)
        return amount < user.amount
    } catch (error) {
        return false
    }
}

//LẤY NHỮNG PRINTING REQUEST CHƯA HOÀN THÀNH VIỆC IN
async function get_pending_payment_amount(user_id) {
    try {
        const data = []
        const reqs = await get_printing_payment_by_userid(user_id)
        if (reqs.length == 0) return []
        for (const req of reqs) {
            if (req.confirmed_date.date === '') data.push(req)
        }
        return data
    } catch (error) {
        throw error
    }
}

async function get_all_building_printer() {
    const docs = await getDocs(doc(db, 'Printer'))
    const uniqueVals = new Set()

    docs.forEach((doc) => {
        const data = doc.data();
        if (data.building) { // Check if the field 'type' exists
            uniqueVals.add(data.type); // Add the value to the Set
        }
    });

    // Convert the Set to an array if you need an array of unique values
    const uniqueArray = Array.from(uniqueValues);
}

// Function to get a printing request by ID
async function get_printing_reqs_by_user_id(id) {
    try {
        const docs = await getDocs(query(collection(db, 'PrintingRequest'), where('user_id', '==', id)))
        const reqs = []
        docs.forEach((doc) => {
            const tmp = doc.data()
            tmp.id = doc.id
            reqs.push(tmp)
        });
        return reqs
    } catch (error) {
        throw error
    }
}
// Function to delete a printing request by ID
async function delete_printing_req(id) {
    try {
        const printingRequestDocRef = doc(db, 'PrintingRequest', id);
        await deleteDoc(printingRequestDocRef);
        logger.info(`Printing request deleted with id-${id} successfully`);
        return true
    } catch (error) {
        logger.error(`Error deleting printing request with id-${id}:` + error);
        return error;
    }
}

module.exports = {
    create_printing_req,
    get_printing_reqs_by_user_id,
    delete_printing_req,
    get_printing_reqs_by_id,
    get_all_printing_reqs,
    complete_printing
};
