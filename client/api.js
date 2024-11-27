const axios = require('axios')
const dotenv = require('dotenv')

dotenv.config()

const testToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkR5d01HVDNlTkZPc0tSejJpenczIiwiaWF0IjoxNzMyNzA0Njk3LCJleHAiOjE3MzI3MDgyOTd9.pczmDu3KZksP0wCnuV5u92roVeNIwRRrF5Mzm2o99ecn4Q1cP5behHAO9_r1aFZKISiQPpjZJ-AaDjhvQdEer9Ij3vKIaL_2b67spR4qaMbH5Hvqs-lg5_xCM2RXhBNlPe9ZuiUK6Kc6T2DXuJN9Ubuz0TbZ0V0oxRm9z1F351C2AGDAZmGXMuLqr5z2Mw7DmQPItGcGMjnakE_Rc4ZlpQbLuVfKLpSoh_pe9C_CSS9isveV0GkRtC1eRznyigZV1Uavimr3gJPn4Gp4FDu50qRnhFXGJd4OyNkBKHVWrQgaUuwO_8A7NO3bGIFgMnYgNRBPL_z-adl8r7SgshcOYQ'
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

// getStudentInfo({ id: 'DywMGT3eNFOsKRz2izw3' }, testToken).then((val) => { console.log(val) }).catch((err) => { console.log(err) })
async function getStudentInfo(id, token) {
    try {
        const response = await axios.post(`${process.env.SERVER_URL}/api/user/get_studentinfo`, id, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
        return response.data
    } catch (error) {
        throw error
    }
}
//  ---------- PRINTERS  ----------
// getPrintersByBuilding({ building: 'H1-107' },testToken).then((val) => { console.log(val) }).catch((err) => { })
async function getPrintersByBuilding(data, token) {
    try {
        const response = await axios.post(`${process.env.SERVER_URL}/api/printer/getbybuilding`, data, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
        return response.data
    } catch (error) {
        throw error
    }
}

// getAllPrinters(testToken).then((val) => { console.log(val) }).catch((err) => { })
async function getAllPrinters(token) {
    try {
        const response = await axios.get(`${process.env.SERVER_URL}/api/printer/getalls`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
        return response.data
    } catch (error) {
        throw error
    }
}

// addPrinter({ building: 'H1-107', enabled: true, location: 'Dĩ An, Bình Dương', model: 'Laser Brother HL-L2321D', status: 'normal' },testToken).then((val) => { }).catch((err) => { })
async function addPrinter(data, token) {
    try {
        const response = await axios.post(`${process.env.SERVER_URL}/api/printer/create`, data, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
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
// },testToken).then((val) => { console.log(val) }).catch((err) => { console.error(err) })
// USER
async function createPrintingRequest(data, token) {
    try {
        const response = await axios.post(`${process.env.SERVER_URL}/api/printingReq/create`, data, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
        return response.data
    } catch (error) {
        console.error(error)
    }
}

//ADMIN
async function name(params) {

}

// getPrintingRequestByUserId({ id: 'STUD1' },testToken).then((val) => console.log(val)).catch((err) => console.error(err))
async function getPrintingRequestByUserId(id, token) {
    try {
        const response = await axios.post(`${process.env.SERVER_URL}/api/printingReq/get_by_usrid`, id, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
        return response.data
    } catch (error) {
        throw error
    }
}


// getAllPrintingReqs(testToken).then((val) => { console.log(val) }).catch((err) => { })
async function getAllPrintingReqs(token) {
    try {
        const response = await axios.get(`${process.env.SERVER_URL}/api/printingReq/get_alls`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
        return response.data
    } catch (error) {
        throw error
    }
}

//  ---------- PRINTERS  ----------
// getAllPapers(testToken).then((val) => { console.log(val) }).catch((err) => { })
async function getAllPapers(token) {
    try {
        const response = await axios.get(`${process.env.SERVER_URL}/api/paper/get_alls`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
        return response.data
    } catch (error) {
        throw error
    }
}

// addPaper({ size: 'A4', number: 100, type_of_paper: '70 gms', price: 600, colored_price: 1700 },testToken).then((val) => { console.log(val) }).catch((err) => { console.error(err) })
async function addPaper(data, token) {
    try {
        const response = await axios.post(`${process.env.SERVER_URL}/api/paper/add_paper`, data, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
        return response.data
    } catch (error) {
        throw error
    }
}
// geAllPaperSizes(testToken).then((val) => { console.log(val) }).catch((err) => { console.error(err) })
async function geAllPaperSizes(token) {
    try {
        const response = await axios.get(`${process.env.SERVER_URL}/api/paper/get_sizes`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
        return response.data
    } catch (error) {
        throw error
    }
}

getAllTypeOfPaper(testToken).then((val) => { console.log(val) }).catch((err) => { console.error(err) })
async function getAllTypeOfPaper(token) {
    try {
        const response = await axios.get(`${process.env.SERVER_URL}/api/paper/get_types`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
        return response.data
    } catch (error) {
        throw error
    }
}

