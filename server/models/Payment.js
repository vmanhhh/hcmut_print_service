const Payment = require('../models/Payment')
const { collection, addDoc, doc, getDoc, updateDoc, deleteDoc } = require("firebase/firestore");


const db = require("../config/db").fireStore
const logger = require("../config/logger")
const { getCurrentDateTime } = require("../middlewares/supportFunction")

async function create_printing_payment(printingRequestId, amount) {
    try {
        const paymentCollection = collection(db, 'Payment');

        data.printing_request_id = printingRequestId
        data.title = 'Printing '
        data.created_date = getCurrentDateTime()
        data.status = 'Đang xác nhận thanh toán'
        data.confirmed_date = { date: '', time: '' }
        data.amount = amount

        const docRef = await addDoc(paymentCollection, data);
        logger.info(`Create new payment with id-${docRef.id} successfully`);
        return docRef.id
    } catch (error) {
        logger.error("Error creating payment: \n" + error);
        return error
    }
}

async function get_printing_payment_by_printing_req(printingRequestId) {
    try {
        const docs = await getDocs(query(collection(db, 'Payment'), where('title', '==', 'Printing payment'), where('printing_request_id', '==', printingRequestId), limit(1)))
        if (docs.empty) return null
        const data = []
        docs.forEach((doc) => {
            const tmp = doc.data()
            tmp.id = doc.id
            data.push(tmp)
        })
        return data[0]
    } catch (error) {
        throw error
    }
}

async function confirm_printing_payemnt(printingRequestId, user_id) {
    try {
        const payment = await get_printing_payment_by_printing_req(printingRequestId)
        if (payment == null) return null
        const id = payment.id
        const docRef = await doc(db, 'Payment', id)
        delete payment.id
        payment.status = 'Đã xác nhận thanh toán'
        payment.confirmed_date = getCurrentDateTime()

        await updateDoc(docRef, payment)

        // UPDATE AMOUNT FOR CUSTOMER
        const user = await getCustomerId()

    } catch (error) {
        throw error
    }
}

async function createBuyPaper(data) {
    try {
        const paymentCollection = collection(db, 'Payment');

        data = {
            name: 'Buy paper',
            created_date: getCurrentDateTime(),
            user_id: data.user_id,
            typof_page: data.typof_page,
            no_pages: data.no_pages
        }

        data.amount = 0

        const docRef = await addDoc(paymentCollection, data);
        logger.info(`Create new payment with id-${docRef.id} successfully`);
        return docRef.id
    } catch (error) {
        logger.error("Error creating payment: \n" + error);
        return error
    }
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
    create_printing_payment,
    get_printing_payment_by_printing_req,
    deletePaymentById
};