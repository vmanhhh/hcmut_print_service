const axios = require('axios')
const dotenv = require('dotenv')

dotenv.config()


// ---------- STUDENTS  ----------

// login({ username: 'phuoc.hatruong@hcmut.edu.vn', password: 'hcmutK241' }).then((val) => { console.log(val.token) }).catch((err) => console.error(err))
async function login(data) {
    try {
        const response = await axios.post(`${process.env.SERVER_URL}/api/user/login`, data)
        return response.data
    } catch (error) {
        throw error
    }
}

getStudentInfo({ id: 'DywMGT3eNFOsKRz2izw3' }).then((val) => { console.log(val) }).catch((err) => { console.log(err) })
async function getStudentInfo(id) {
    try {
        const response = await axios.post(`${process.env.SERVER_URL}/api/user/get_studentinfo`, id)
        return response.data
    } catch (error) {
        throw error
    }
}
//  ---------- PRINTERS  ----------
// getPrintersByBuilding({ building: 'H1-107' }).then((val) => { console.log(val) }).catch((err) => { })
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


// ---------- PRINTING REQUESTS  ----------
// createPrintingRequest({
//     user_id: '', document: {
//         name: 'test.pdf'
//     }, properties: {
//         doubled_size: false,
//         copies: 1,
//         type_of_paper: '70 gms',
//         no_pages: '',
//         size: 'A4',
//         colored: false
//     }
// }).then((val) => { console.log(val) }).catch((err) => { console.error(err) })
// USER
async function createPrintingRequest(data) {
    try {
        const response = await axios.post(`${process.env.SERVER_URL}/api/printingReq/create`, data)
        return response.data
    } catch (error) {
        console.error(error)
    }
}

//ADMIN
async function name(params) {

}

// getPrintingRequestByUserId({ id: 'STUD1' }).then((val) => console.log(val)).catch((err) => console.error(err))
async function getPrintingRequestByUserId(id) {
    try {
        const response = await axios.post(`${process.env.SERVER_URL}/api/printingReq/get_by_usrid`, id)
        return response.data
    } catch (error) {
        throw error
    }
}


// getAllPrintingReqs().then((val) => { console.log(val) }).catch((err) => { })
async function getAllPrintingReqs() {
    try {
        const response = await axios.get(`${process.env.SERVER_URL}/api/printingReq/get_alls`)
        return response.data
    } catch (error) {
        throw error
    }
}

//  ---------- PRINTERS  ----------
// getAllPapers().then((val) => { console.log(val) }).catch((err) => { })
async function getAllPapers() {
    try {
        const response = await axios.get(`${process.env.SERVER_URL}/api/paper/get_alls`)
        return response.data
    } catch (error) {
        throw error
    }
}

// addPaper({ size: 'A4', number: 100, type_of_paper: '70 gms', price: 600, colored_price: 1700 }).then((val) => { console.log(val) }).catch((err) => { console.error(err) })
async function addPaper(data) {
    try {
        const response = await axios.post(`${process.env.SERVER_URL}/api/paper/add_paper`, data)
        return response.data
    } catch (error) {
        throw error
    }
}
// geAllPaperSizes().then((val) => { console.log(val) }).catch((err) => { console.error(err) })
async function geAllPaperSizes() {
    try {
        const response = await axios.get(`${process.env.SERVER_URL}/api/paper/get_sizes`)
        return response.data
    } catch (error) {
        throw error
    }
}

// getAllTypeOfPaper().then((val) => { console.log(val) }).catch((err) => { console.error(err) })
async function getAllTypeOfPaper() {
    try {
        const response = await axios.get(`${process.env.SERVER_URL}/api/paper/get_types`)
        return response.data
    } catch (error) {
        throw error
    }
}

