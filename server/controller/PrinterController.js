const { create_printer,
    get_printer_by_id,
    update_printer,
    delete_printer_by_id,
    get_all_printers,
    get_printer_by_building } = require("../models/Printer")
const logger = require("../config/logger");
const { json } = require("express");

// Function to create a new printer
async function createPrinter(req, res, next) {
    try {
        const result = await create_printer(req.body);
        res.json('Create new printer successfully');
        logger.info(`Create new printer with id-${result} successfully`)
    } catch (err) {
        next(err);
    }
}

async function getPrinterById(req, res, next) {
    try {
        const result = get_printer_by_id(req.body.id)
        if (result == null) res.status(404).json('Not found printer info with given id')
        else {
            logger.info(`Create new printer with id-${req.body.id} successfully`)
            res.json(result)
        }
    } catch (error) {
        next(error)
    }
}


async function getAllPrinters(req, res, next) {
    try {
        let result = await get_all_printers()
        if (result == null) res.status(401).json('Not found printers')
        else res.json(result)
        logger.info(`Get all printers successfully`);
    } catch (error) {
        next(error)
    }
}

// Function to update a printer by ID
async function updatePrinter(req, res, next) {
    try {
        const result = update_printer(req.body)
        if (result) {

        }
    } catch (error) {
        next(error)
    }
}


async function getPrintersByBuilding(req, res, next) {
    try {
        const result = await get_printer_by_building(req.body)
        if (result) res.json(result)
        else res.status(401).json('Not found printer with given building')
    } catch (error) {
        next(error)
    }
}

// Function to delete a printer by ID
async function deletePrinterById(req, res, next) {
    try {
        const result = delete_printer_by_id(req.body.id)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createPrinter,
    getPrinterById,
    updatePrinter,
    deletePrinterById,
    getAllPrinters,
    getPrintersByBuilding
};
