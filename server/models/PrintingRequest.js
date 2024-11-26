const { collection, addDoc, doc, getDoc, updateDoc, deleteDoc, getDocs, serverTimestamp, query, where } = require("firebase/firestore");

const db = require("../config/db").fireStore
const logger = require("../config/logger");
const { get_printer_by_id } = require("./Printer");

// Function to create a new printing request
async function create_printing_req(data) {
    try {
        const printingRequestCollection = collection(db, 'PrintingRequest');
        data.created_at = serverTimestamp()
        const docRef = await addDoc(printingRequestCollection, data);

        //create payment
        const payment = await

            logger.info(`Created new printing request with id-${docRef.id} successfully`);
        return docRef.id
    } catch (error) {
        logger.error("Error creating printing request: \n" + error);
        return error
    }
}
async function get_all_printing_reqs() {
    const printingReqs = [];

    try {
        const querySnapshot = await getDocs(collection(db, 'PrintingRequest'));

        for (const doc of querySnapshot.docs) {
            const data = doc.data();
            data.id = doc.id;

            if (data.printer) {
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
    console.log('Unique type values:', uniqueArray);
}

// Function to get a printing request by ID
async function get_printing_reqs_by_user_id(id) {
    try {
        const docs = await getDocs(query(collection(db, 'PrintingRequest'), where('student_id', '==', id)))
        const reqs = []
        docs.forEach((doc) => {
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
