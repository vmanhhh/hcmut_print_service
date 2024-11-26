const admin = require("firebase-admin");

// Ensure Firebase is initialized elsewhere in your app
// admin.initializeApp();

async function getSPSOByID(id) {
  try {
    const spsoRef = admin.firestore().collection("spso").doc(id);
    const doc = await spsoRef.get();

    if (!doc.exists) {
      return null;
    }

    return { id: doc.id, ...doc.data() };
  } catch (err) {
    throw err;
  }
}

async function getSPSOByUsername(username) {
  try {
    const spsoQuery = admin
      .firestore()
      .collection("spso")
      .where("username", "==", username)
      .limit(1);

    const querySnapshot = await spsoQuery.get();

    if (querySnapshot.empty) {
      return null;
    }

    const doc = querySnapshot.docs[0];
    return { id: doc.id, ...doc.data() };
  } catch (err) {
    console.error(err);
    throw err;
  }
}

async function setSPSOLastUsed(username) {
  try {
    const spsoQuery = admin
      .firestore()
      .collection("spso")
      .where("username", "==", username)
      .limit(1);

    const querySnapshot = await spsoQuery.get();

    if (querySnapshot.empty) {
      throw new Error("No SPSO found with this username");
    }

    const docRef = querySnapshot.docs[0].ref;
    await docRef.update({
      last_used: admin.firestore.FieldValue.serverTimestamp(),
    });

    return true;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

module.exports = {
  getSPSOByID,
  getSPSOByUsername,
  setSPSOLastUsed,
};
