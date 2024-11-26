const axios = require('axios')
const dotenv = require('dotenv')

dotenv.config()

class message {

}

//  PRINTERS
getPrintersByBuilding({ building: 'H1-107' }).then((val) => { console.log(val) }).catch((err) => { })
async function getPrintersByBuilding(data) {
    try {
        const response = await axios.post(`${process.env.SERVER_URL}/api/printer/getbybuilding`, data)
        return response.data
    } catch (error) {
        throw error
    }
}

// getAllPrinters().then((val) => { console.log(val) }).catch((err) => { })
async function getAllPrinters() {
    try {
        const response = await axios.get(`${process.env.SERVER_URL}/api/printer/getalls`)
        return response.data
    } catch (error) {
        throw error
    }
}

// addPrinter({ building: 'H1-107', enabled: true, location: 'Dĩ An, Bình Dương', model: 'Laser Brother HL-L2321D', status: 'normal' }).then((val) => { }).catch((err) => { })
async function addPrinter(data) {
    try {
        const response = await axios.post(`${process.env.SERVER_URL}/api/printer/create`, data)
        return { message: 'Add new printer successfully' }
    } catch (error) {
        throw error
    }
}


//  PRINTING REQUESTS
async function createPrintingRequest(data) {
    try {
        const response = await axios.post(`${process.env.SERVER_URL}/api/printingReq/create`, data)
    } catch (error) {
        console.error(error)
    }
}

// getPrintingRequestById('sample').then((val) => console.log(val)).catch((err) => console.err(err)) 
async function getPrintingRequestById(id) {
    try {
        const response = await axios.post(`${process.env.SERVER_URL}/api/printingReq/get_by_id`, { id: id })
        return response.data
    } catch (error) {
        throw error
    }
}


