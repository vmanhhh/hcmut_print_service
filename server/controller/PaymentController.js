const { collection, addDoc, doc, getDoc, updateDoc, deleteDoc, getDocs, where, limit } = require("firebase/firestore");


const db = require("../config/db").fireStore
const logger = require("../config/logger")
const getCurrentDateTime = require("../middlewares/supportFunction");
const { query } = require("express");

async function createPrintingPayment(printingRequestId) {

}



async function confirmPrintingPayment(printingRequestId) {
    try {

    } catch (error) {

    }
}

async function getPaymentByUserId(id) {
    try {

        const docs = await db.collection('payments')
            .where('user_id', '==', userId) // Filter payments by userId
            .get();

        if (docs.empty) {
            console.log('No matching documents.');
            return null;
        } else {
            const payments = [];
            docs.forEach(doc => {
                payments.push(doc.data()); // Add each document's data to the payments array
            });
            return payments
        }
    } catch (error) {
        logger.error(`Error fetching payment with id-${paymentId}: ` + error);
        return error;
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


const createOrUpdatePaper = async (req, res) => {
    try {
        const paperData = req.body; // Dữ liệu của giấy từ client
        await addPaper(paperData);
        res.status(200).json({ message: "Paper added/updated successfully!" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Controller lấy thuộc tính "type" của tài liệu
const fetchPaperType = async (req, res) => {
    try {
        const paperId = req.params.id; // Lấy id của tài liệu từ params
        const paperType = await getPaperType(paperId);
        res.status(200).json({ paperType });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

// Controller lấy thuộc tính "price" của tài liệu
const fetchPaperPrice = async (req, res) => {
    try {
        const paperId = req.params.id; // Lấy id của tài liệu từ params
        const paperPrice = await getPaperPrice(paperId);
        res.status(200).json({ paperPrice });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};
module.exports = {
    createPayment,
    getPaymentByUserId,
    deletePaymentById,
    createOrUpdatePaper,
    fetchPaperType,
    fetchPaperPrice
};