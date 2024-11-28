const axios = require('axios')
const dotenv = require('dotenv')

dotenv.config()

const testToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkR5d01HVDNlTkZPc0tSejJpenczIiwiaWF0IjoxNzMyNzc3MjYwLCJleHAiOjE3MzI3ODA4NjB9.MSPuaBqM-GTgm_THc2SsCWvpXrGysfsx56ENmewsegSSOhFxKfyzN-hfngEmE-M3liYxmYKsPHH_Cl8YgsMnkRrDoQ9MIYu76yhmf3tv7Atj5ZYv0MvwooDx8kXhZiRl5X99R363pFpuEv5tZBbwEkGTeL394ey8pMv7CSaKD4R7Kl5FzEbGLn8n82AICZCp8Fi89TCBqUR6GwQ4CiWDshS9oDNDxGq4wa9rZLBLhCrcuraiW8Aon0Q8rfLCOgVoiBfv-jFXNMmHJZT5UUP3po36lsjrL-IwLH0_3KpX5crxUukDOuuRVRPZ7lR-IkyYVK7bbTXQWDR7ue1ddwI6BA'
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


// -------------------- PRINTING REQUESTS  --------------------
// createPrintingRequest({
//     user_id: 'DywMGT3eNFOsKRz2izw3', document: {
//         name: 'test.pdf'
//     }, properties: {
//         doubled_size: false,
//         copies: 1,
//         type_of_paper: '70 gms',
//         no_pages: 3,
//         size: 'A4',
//         colored: false
//     }
// }, testToken).then((val) => { console.log(val) }).catch((err) => { console.error(err) })
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


//SAMPLE FOR PRINTING REQUEST
// getPrintingRequestByUserId({ id: 'DywMGT3eNFOsKRz2izw3' }, testToken).then((val) => console.log(val)).catch((err) => console.error(err))
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
// confirmPrinting({ id: "SpPNS6q9y1ZzCtQYbmjO" }, testToken).then((val) => { console.log(val) }).catch((err) => { })
async function confirmPrinting(printingReqId, token) {
    try {
        const response = await axios.post(`${process.env.SERVER_URL}/api/printingReq/confirm_printing`, printingReqId, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
        return response.data
    } catch (error) {
        throw error
    }
}

//  -------------------- PRINTERS  --------------------
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

// getAllTypeOfPaper(testToken).then((val) => { console.log(val) }).catch((err) => { console.error(err) })
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

