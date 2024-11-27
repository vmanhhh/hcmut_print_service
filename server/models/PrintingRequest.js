const { collection, addDoc, doc, getDoc, updateDoc, deleteDoc, getDocs, serverTimestamp, query, where } = require("firebase/firestore");
const { getCustomerById } = require('../models/User')
const db = require("../config/db").fireStore
const logger = require("../config/logger");
const { get_printer_by_id } = require("./Printer");
const { get_price_by_paper_properties } = require("./Paper");
const { create_printing_payment, get_printing_payment_by_printing_req } = require("./Payment");

// Function to create a new printing request
async function create_printing_req(data) {
    try {
        const printingRequestCollection = collection(db, 'PrintingRequest');
        data.created_at = serverTimestamp()

        //check valid info
        const props = data.properties
        if (!data.user_id || !props.size || !props.no_pages) return { error: 'Not given details' }
        const user = await getCustomerById(data.user_id)
        const must_be_price = await get_price_by_paper_properties(props.size, props.no_pages, props.type_of_paper) * (props.copies == undefined ? 1 : props.copies)
        if (check_payment_for_payment(user, must_be_price)) return { error: 'Not enough amount for payment' }

        const docRef = await addDoc(printingRequestCollection, data);

        //create payment
        create_printing_payment(docRef.id, amount)

        logger.info(`Created new printing request with id-${docRef.id} successfully`);
        return docRef.id
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


async function check_payment_for_payment(user, must_be_price) {
    try {
        const amount = must_be_price
        const reqs = get_pending_printing_reqs(user.id)
        reqs.forEach((ele) => {
            amount += ele.amount
        })
        return user.amount < amount ? false : true
    } catch (error) {
        return false
    }
}

//LẤY NHỮNG PRINTING REQUEST CHƯA HOÀN THÀNH VIỆC IN
async function get_pending_printing_reqs(user_id) {
    try {
        const data = []
        const reqs = get_printing_reqs_by_user_id(id)
        if (reqs.length == 0) return []
        reqs.forEach((req) => {
            const payment = get_printing_payment_by_printing_req(id)
            if (payment.confirmed_date.date === '') data.push(doc)
        })
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
        const docs = await getDocs(query(collection(db, 'PrintingRequest'), where('student_id', '==', id)))
        const reqs = []
        docs.forEach((doc) => {
            const tmp = doc.data()
            tmp.id = doc.id
            reqs.push(doc.data())
        });
        return reqs.length == 0 ? null : reqs
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
    get_all_printing_reqs
};
