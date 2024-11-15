const db = require("../config/db");

async function getCustomerByID(id) {
  try {
    // Tạo reference đến document trong collection 'customers'
    const customerRef = doc(db, "customers", id);
    // Lấy snapshot của document
    const customerSnap = await getDoc(customerRef);
    // Kiểm tra xem document có tồn tại không
    if (customerSnap.exists()) return customerSnap.data();
    else return null;
  } catch (err) {
    throw err;
  }
}

async function getCustomerByEmail(email) {
  try {
    // Tạo reference đến document trong collection 'customers'
    const customerRef = doc(db, "customers", email);
    // Lấy snapshot của document
    const customerSnap = await getDoc(customerRef);
    // Kiểm tra xem document có tồn tại không
    if (customerSnap.exists()) return customerSnap.data();
    else return null;
  } catch (err) {
    throw err;
  }
}

async function setCustomerLastUsed(email) {
  try {
    // kiểm tra email
    if (!email) {
      throw new Error("Email is required");
    }
    // Query để tìm customer với email tương ứng
    const customersRef = collection(db, "customers");
    const q = query(customersRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);
    // Nếu không tìm thấy email
    if (querySnapshot.empty) {
      throw new Error("No customer found with this email");
    }
    // Lấy document đầu tiên vì email là unique
    const customerDoc = querySnapshot.docs[0];
    // Update lastUsed time
    await updateDoc(doc(db, "customers", customerDoc.id), {
      lastUsed: serverTimestamp(),
    });
    return { updated: true };
  } catch (err) {
    throw err;
  }
}

async function getBalance(id) {
  try {
    // Lấy reference đến document customer
    const customerRef = doc(db, "customers", id);
    // Lấy snapshot của document
    const customerSnap = await getDoc(customerRef);
    // Kiểm tra document có tồn tại không
    if (!customerSnap.exists()) {
      throw new Error("Customer not found");
    }
    // Lấy balance từ dữ liệu customer
    const customerData = customerSnap.data();
    return customerData.balance || 0; // Trả về 0 nếu không có balance
  } catch (err) {
    throw err;
  }
}

import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";

async function updateBalance(id, addedBalance) {
  try {
    const customerRef = doc(db, "customers", id);
    const customerSnap = await getDoc(customerRef);
    if (!customerSnap.exists()) {
      throw new Error("Không tìm thấy khách hàng");
    }

    //Tính lại số dư mới
    const currentBalance = customerSnap.data().balance || 0;
    const newBalance = currentBalance + Number(addedBalance);

    //Cập nhật số dư mới vào database
    await updateDoc(customerRef, {
      balance: newBalance,
      lastUpdated: new Date(),
      updatedBy: "system",
    });
    return {
      success: true,
      newBalance: newBalance,
    };
  } catch (err) {
    throw err;
  }
}

module.exports = {
  getCustomerByID,
  getCustomerByEmail,
  setCustomerLastUsed,
  getBalance,
  updateBalance,
};
