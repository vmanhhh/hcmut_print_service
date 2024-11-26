const { collection, addDoc, doc, getDoc, updateDoc, deleteDoc, getDocs, serverTimestamp } = require("firebase/firestore");

const db = require("../config/db").fireStore
const logger = require("../config/logger")

// Function to create a new printing request
async function create_printing_req(data) {
    try {
        const printingRequestCollection = collection(db, 'PrintingRequest');
        data.created_at = serverTimestamp()
        const docRef = await addDoc(printingRequestCollection, data);
        logger.info(`Created new printing request with id-${docRef.id} successfully`);
        return docRef.id
    } catch (error) {
        logger.error("Error creating printing request: \n" + error);
        return error
    }
}
async function get_all_printing_reqs() {
    const printingReqs = []
    await db.collection("PrintingRequest")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                doc.data().id = doc.id
                printingReqs.push(doc.data())
            });

            if (printingReqs.length == 0) return null
            return printers
        })
        .catch((error) => {
            throw error
        });
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
        const docs = await db.collection('PrintingRequest')
            .where('user_id', '==', id) // Filter payments by userId
            .get();


        if (docs.empty()) {
            return null
        } else {
            const payments = [];
            docs.forEach(doc => {
                const data = doc.data()
                data.id = doc.id
                payments.push(data); // Add each document's data to the payments array
            });
            return payments
        }
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
