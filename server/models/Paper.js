const db = require("../config/db");
const { doc, setDoc, getDoc } = require("firebase/firestore");

// Hàm chung để lấy một trường cụ thể từ tài liệu
async function getPaperField(id, field) {
  const docSnap = await getDoc(doc(db, "Paper", id));
  if (!docSnap.exists()) throw new Error(`Paper with ID ${id} not found`);
  const data = docSnap.data();
  if (!(field in data))
    throw new Error(`Field "${field}" not found in Paper with ID ${id}`);
  return data[field];
}

// Thêm hoặc cập nhật một tài liệu
async function addPaper(data) {
  if (!data.id) throw new Error("Cần chọn loại giấy");
  await setDoc(doc(db, "Paper", data.id), data, { merge: true });
}

// Lấy thuộc tính "type" của tài liệu
async function getPaperType(id) {
  return getPaperField(id, "type");
}

// Lấy thuộc tính "price" của tài liệu
async function getPaperPrice(id) {
  return getPaperField(id, "price");
}

module.exports = { addPaper, getPaperType, getPaperPrice };
