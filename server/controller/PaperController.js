const { collection, addDoc, doc, getDoc, updateDoc, deleteDoc } = require("firebase/firestore");
const { add_paper, get_all_papers, get_price_by_paper_properties, get_all_type_of_papers, get_all_paper_size } = require("../models/Paper");


const db = require("../config/db").fireStore

async function createPaper(req, res, next) {
    try {
        await add_paper(req.body)
        res.json('Create new paper successfully')
    } catch (error) {
        next(error)
    }
}

async function getAllPapers(req, res, next) {
    try {
        const data = await get_all_papers()
        data != null ? res.json(data) : res.status(401).json('Not found papers')
    } catch (error) {
        next(error)
    }
}

async function getPrices(req, res, next) {
    try {
        const data = await get_price_by_paper_properties(req.body.size, req.body.number, req.body.type_of_paper)
        data != null ? res.json(data) : res.status(401).json('Not found papers')
    } catch (error) {
        next(error)
    }
}
async function getAllTypeOfPaper(req, res, next) {
    try {
        const data = await get_all_type_of_papers()
        data != null ? res.json(data) : res.status(401).json('Not found papers')
    } catch (error) {
        next(error)
    }
}
async function getAllPaperSize(req, res, next) {
    try {
        const data = await get_all_paper_size()
        data != null ? res.json(data) : res.status(401).json('Not found papers')
    } catch (error) {
        next(error)
    }
}
module.exports = { createPaper, getAllPapers, getPrices, getAllTypeOfPaper, getAllPaperSize }