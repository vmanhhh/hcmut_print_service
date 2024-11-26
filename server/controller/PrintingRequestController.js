const { collection, addDoc, doc, getDoc, updateDoc, deleteDoc } = require("firebase/firestore");

const db = require("../config/db").fireStore
const logger = require("../config/logger");
const { get_printing_reqs_by_user_id, get_printing_reqs_by_id } = require("../models/PrintingRequest");

// Function to create a new printing request
async function createPrintingRequest(req, res, next) {
    try {
        const result = await create_printer(req.body);
        res.json('Create new printer successfully');

    } catch (err) {
        next(err);
    }
}
// Function to get a printing request by ID
async function getPrintingRequestByUserId(req, res, next) {
    try {
        const result = await get_printing_reqs_by_user_id(req.body.id);
        if (result) res.status(401).json('Not found printing request with given id')
        res.json(result);
    } catch (error) {
        next(error)
    }
}
async function getPrintingRequestById(req, res, next) {
    try {
        const result = await get_printing_reqs_by_id(req.body.id);
        if (result == null) res.status(401).json('Not found printing request with given id')
        else res.json(result);
    } catch (error) {
        next(error)
    }
}

// Function to delete a printing request by ID
async function deletePrintingRequestById(id) {
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
    createPrintingRequest,
    getPrintingRequestByUserId,
    deletePrintingRequestById,
    getPrintingRequestById
};
