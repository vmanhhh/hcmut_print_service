const { collection, addDoc, doc, getDoc, getDocs, updateDoc, deleteDoc, query, where, serverTimestamp } = require("firebase/firestore");
const logger = require("../config/logger");

const db = require("../config/db").fireStore

const { getCurrentDateTime } = require("../middlewares/supportFunction")
async function create_printer(data) {
    try {
        const printerCollection = collection(db, 'Printer');
        data.enabled = data.enabled == undefined ? true : false
        data.created_date = serverTimestamp()
        const docRef = await addDoc(printerCollection, data);
        return docRef.id
    } catch (error) {
        throw error
    }
}

async function get_printer_by_id(printerId) {
    try {
        const printerDocRef = doc(db, 'Printer', printerId);
        const printerDoc = await getDoc(printerDocRef);
        if (printerDoc.exists()) {
            const data = printerDoc.data()
            data.id = printerDoc.id
            return data;
        } else {
            return null;
        }
    } catch (error) {
        throw error;
    }
}

async function get_printer_by_building(data) {
    try {
        const printers = []
        const docs = await getDocs(query(collection(db, 'Printer'), where('building', '==', data.building)))
        docs.forEach((doc) => {
            const data = doc.data()
            data.id = doc.id
            printers.push(data)
        });
        if (printers.length == 0) return null
        return printers
    } catch (error) {
        throw error
    }

}

async function get_all_printers() {
    const printers = []
    try {
        const collectionRef = collection(db, "Printer");

        // Fetch all documents in the 'Payment' collection
        const querySnapshot = await getDocs(collectionRef);

        querySnapshot.forEach((doc) => {
            const data = doc.data()
            data.id = doc.id
            printers.push(data)
        });
        if (printers.length == 0) {
            return null
        }
        return printers
    } catch (error) {
        throw error
    }

}

async function update_printer(data) {
    try {
        const printerDocRef = doc(db, 'Printer', data.id);
        data.last_updated = getCurrentDateTime()
        delete data.id
        await updateDoc(printerDocRef, data);
        return true
    } catch (error) {
        throw error;
    }
}

async function delete_printer_by_id(printerId) {
    try {
        const printerDocRef = doc(db, 'Printer', printerId);
        await deleteDoc(printerDocRef);
        return true
    } catch (error) {
        throw error;
    }
}

module.exports = {
    create_printer,
    get_printer_by_id,
    update_printer,
    delete_printer_by_id,
    get_all_printers,
    get_printer_by_building
};
