const { doc, addDoc, getDoc, getDocs, query, collection, where, orderBy, limit, limitToLast } = require("firebase/firestore");

const db = require("../config/db").fireStore;
// Hàm chung để lấy một trường cụ thể từ tài liệu

async function get_all_paper_size() {
    try {
        const docs = await getDocs(collection(db, 'Paper'))
        let uniqueVals = new Set()

        docs.forEach((doc) => {
            const data = doc.data();
            if (data.size) { // Check if the field 'type' exists
                uniqueVals.add(data.size); // Add the value to the Set
            }
        });
        uniqueVals = Array.from(uniqueVals);
        return uniqueVals.length == 0 ? null : uniqueVals
    } catch (error) {
        throw error
    }
}
async function get_all_type_of_papers() {
    try {
        const docs = await getDocs(collection(db, 'Paper'))
        let uniqueVals = new Set()

        docs.forEach((doc) => {
            const data = doc.data();
            console.log(doc.data())
            if (data.type_of_paper) { // Check if the field 'type' exists
                uniqueVals.add(data.type_of_paper); // Add the value to the Set
            }
        });
        uniqueVals = Array.from(uniqueVals);
        return uniqueVals.length == 0 ? null : uniqueVals
    } catch (error) {
        throw error
    }
}

// Thêm hoặc cập nhật một tài liệu
async function add_paper(data) {
    try {
        const docRef = await addDoc(collection(db, 'Paper'), data);
        return docRef.id
    } catch (error) {
        throw error
    }
}


async function get_price_by_paper_properties(size, number, type_of_paper) {
    async function A4(number, type_of_paper) {
        const docs = await getDocs(query(collection(db, 'Paper'),
            where("size", "==", "A4"),
            where('number', '>=', number),
            orderBy('number')))

        const prices = []
        if (!type_of_paper) type_of_paper = "70 gms"
        docs.forEach((doc) => {
            if (doc.data().type_of_paper === type_of_paper)
                prices.push({ price: doc.data().price, colored_price: doc.data().colored_price })
        })
        return prices.length == 0 ? null : prices[0]
    }
    try {
        const A4price = await A4(number, type_of_paper)

        if (size === "A4") return A4price
        else {
            const doc = await getDocs(query(collection(db, 'Paper'),
                where('A4', '==', size),
                limit(1)
            ))
            doc = doc.empty ? null : doc.docs[0]
            return A4price == null || doc == null ? null : ({ price: A4price.price * doc.A4, colored_price: A4price.colored_price * doc.A4 })
        }
    } catch (error) {
        throw (error)
    }
}


async function get_all_papers() {
    try {
        const data = []
        const docs = await getDocs(collection(db, 'Paper'))
        docs.forEach((doc) => {
            const tmp = doc.data()
            tmp.id = doc.id
            data.push(tmp)
        })
        return data.length == 0 ? null : data
    } catch (error) {

    }
}


module.exports = { add_paper, get_all_paper_size, get_all_type_of_papers, get_price_by_paper_properties, get_all_papers };