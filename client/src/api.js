import axios from 'axios'

const testToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkR5d01HVDNlTkZPc0tSejJpenczIiwiaWF0IjoxNzMyNzk5MzI0LCJleHAiOjE3MzI4MDI5MjR9.JtmO-3npApnNSBkGQrkjTM2KruvXcvYgE7rZ_DROoMsHt4CAa51Ns5hIGgjz4D7OONd8Jcb3ZJtMOsC0pO20fJCn2b_r38uX38s1CzvNcdCJf5qbpqVq_oXK2BeJS8xn8B1mtAP1QBx5WSRNn9AtPIoP3SZtxG9nyZGo9E2AYUNHd1cl6nNdJFc0WehrKXBBJORxzhFxSWdX7VtTvHfRiF1r3OvNIGOlmizN-kZV9MwPJBU7Ub4bynhNtiTrSRweepGwPjYRlCm_64gRSXN7ffT7YQYX1l9q2aMAmNBOL7wAIDB8OqRWNtg4Z9h_64aaKvK3S1jz3QTiBLMx1LXTbg'
// KHI ĐĂNG NHẬP ĐƯỢC TRẢ VỀ {token:'.....'} -> lấy đúng token này truyền vào các hàm bên dưới, mỗi hàm đều có comment mẫu, nên truyền đúng cấu trúc json như vậy để tránh lỗi :V
// Có thể mở comment để đối với các hàm get... để xem dữ liệu trả về
export const token = { token: '' }

// ---------- STUDENTS  ----------
login({ username: 'phuoc.hatruong@hcmut.edu.vn', password: 'hcmutK241' }).then((val) => { console.log(val.token) }).catch((err) => console.error(err))
export async function login(data) {
    try {
        const response = await axios.post(`https://sps-hcmut-server.vercel.app/api/user/login`, data)
        return response.data
    } catch (error) {
        throw error
    }
}

// getStudentInfo({ id: 'DywMGT3eNFOsKRz2izw3' }, testToken).then((val) => { console.log(val) }).catch((err) => { console.log(err) })
export async function getStudentInfo(id, token) {
    try {
        const response = await axios.post(`https://sps-hcmut-server.vercel.app/api/user/get_studentinfo`, id, {
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
// getPrintersByBuilding({ building: 'H1-107' }, testToken).then((val) => { console.log(val) }).catch((err) => { })
export async function getPrintersByBuilding(data, token) {
    try {
        const response = await axios.post(`https://sps-hcmut-server.vercel.app/api/printer/getbybuilding`, data, {
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
export async function getAllPrinters(token) {
    try {
        const response = await axios.get(`https://sps-hcmut-server.vercel.app/api/printer/getalls`, {
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
export async function addPrinter(data, token) {
    try {
        const response = await axios.post(`https://sps-hcmut-server.vercel.app/api/printer/create`, data, {
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
export async function createPrintingRequest(data, token) {
    try {
        const response = await axios.post(`https://sps-hcmut-server.vercel.app/api/printingReq/create`, data, {
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
export async function getPrintingRequestByUserId(id, token) {
    try {
        const response = await axios.post(`https://sps-hcmut-server.vercel.app/api/printingReq/get_by_usrid`, id, {
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
export async function getAllPrintingReqs(token) {
    try {
        const response = await axios.get(`https://sps-hcmut-server.vercel.app/api/printingReq/get_alls`, {
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
export async function confirmPrinting(printingReqId, token) {
    try {
        const response = await axios.post(`https://sps-hcmut-server.vercel.app/api/printingReq/confirm_printing`, printingReqId, {
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
export async function getAllPapers(token) {
    try {
        const response = await axios.get(`https://sps-hcmut-server.vercel.app/api/paper/get_alls`, {
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
export async function addPaper(data, token) {
    try {
        const response = await axios.post(`https://sps-hcmut-server.vercel.app/api/paper/add_paper`, data, {
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
export async function geAllPaperSizes(token) {
    try {
        const response = await axios.get(`https://sps-hcmut-server.vercel.app/api/paper/get_sizes`, {
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
export async function getAllTypeOfPaper(token) {
    try {
        const response = await axios.get(`https://sps-hcmut-server.vercel.app/api/paper/get_types`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
        return response.data
    } catch (error) {
        throw error
    }
}

