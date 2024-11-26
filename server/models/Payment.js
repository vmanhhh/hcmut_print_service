const Payment = require('../models/Payment')
const { collection, addDoc, doc, getDoc, updateDoc, deleteDoc } = require("firebase/firestore");


const db = require("../config/db").fireStore
const logger = require("../config/logger")

async function createPayment(data, printingRequestId) {
    try {
        const paymentCollection = collection(db, 'Payment');
        data = {
            printing_request_id: printingRequestId,
            amount: data.amount,
            status: data.status,
            created_date: new Date().toISOString()
        }

        const docRef = await addDoc(paymentCollection, paymentData);
        logger.info(`Create new payment with id-${docRef.id} successfully`);
        return docRef.id
    } catch (error) {
        logger.error("Error creating payment: \n" + error);
        return error
    }
}

async function getPaymentById(paymentId) {

}

async function getPaymentByUserId(id) {
    try {

        const docs = await db.collection('payments')
            .where('user_id', '==', userId) // Filter payments by userId
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

async function updatePaymentById(paymentId, paymentData) {

}

async function deletePaymentById(paymentId) {
    try {
        const paymentDocRef = doc(db, 'Payment', paymentId);
        await deleteDoc(paymentDocRef);
        logger.info(`Payment deleted with id-${paymentId}: successfully`, paymentId);
        return true
    } catch (error) {
        logger.error(`Error deleting payment with id-${paymentId}:` + error);
        return error;
    }
}

module.exports = {
    createPayment,
    getPaymentByUserId,
    deletePaymentById
};