const { getFirestore, doc, getDoc, updateDoc, getDocs, query, where, or, collection, limit } = require("firebase/firestore");

const db = require("../config/db").fireStore;

async function get_customer_by_id(id) {
  try {
    const customerRef = doc(db, "User", id);
    const customerSnap = await getDoc(customerRef);

    // Kiểm tra xem document có tồn tại không
    if (customerSnap.exists()) {
      const data = customerSnap.data()
      data.id = customerSnap.id
      return data;
    }
    else return null;
  } catch (err) {
    throw err;
  }
}

async function get_customer_by_email_or_usrname(data) {
  try {
    const docs = await getDocs(query(collection(db, 'User'), or(where('username', '==', data), where('email', '==', data)), limit(1)))
    if (docs.empty) return null
    else {
      let data
      docs.forEach((doc) => {
        data = doc.data()
        data.id = doc.id
      })
      return data
    }
  } catch (err) {
    throw err;
  }
}



async function set_customer_last_used(email) {
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
    await updateDoc(doc(db, "User", customerDoc.id), {
      lastUsed: serverTimestamp(),
    });
    return { updated: true };
  } catch (err) {
    throw err;
  }
}

async function get_balance(id) {
  try {
    // Lấy reference đến document customer
    const customerRef = doc(db, "User", id);
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


async function update_balance(id, addedBalance) {
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
  get_customer_by_id,
  update_balance,
  get_customer_by_email_or_usrname,
}
