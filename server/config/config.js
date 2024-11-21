import { query } from "express";
import { initializeApp } from "firebase/app";
import { getFirestore,collection,getDocs,setDoc,doc,getDoc } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAP8_QQMOQQZPFI2SQJo3OOfzN8a3lwLyg",
    authDomain: "spssapp-89373.firebaseapp.com",
    projectId: "spssapp-89373",
    storageBucket: "spssapp-89373.firebasestorage.app",
    messagingSenderId: "85999413488",
    appId: "1:85999413488:web:54f548f44cd04809627a35",
    measurementId: "G-FCB7QPRL15"
};
const app=initializeApp(firebaseConfig);
const db=getFirestore(app);

// STUDENT
var getPageLeft=async (id)=> {
    const docRef = doc(db,"Students",id);
    const docSnap = await getDoc(docRef);
    return docSnap.data().getPageLeft;
};
var updatePageLeft= async (pagePrinted,id)=>{
    const data = {pageLeft:pagePrinted};
    await setDoc(doc(db,'Students',id),data,{merge:true});
};
var addStudent=async (data)=>{
    await setDoc(doc(db,'Students',data.id),data,{merge:true});
};
var getStudentById =async (id)=>{
    if(id==null) return null;
    const docRef=await getDocs(collection(db,'Students'));
    docRef.docs.forEach(
        (doc)=>{
            if(doc.id==id) return doc;
        }
    )
};


//PAYMENT
var addPayment=async (data)=>{
    await setDoc(doc(db,'Payment',data.id),data,{merge:true});
}
var getPaymentAmount=async (id)=>{
    const docRef = doc(db,'Payment',id);
    const docSnap = await getDoc(docRef);
    return docSnap.data().amount;
}
var getPaymentStatus=async (id)=>{
    const docRef = doc(db,'Payment',id);
    const docSnap = await getDoc(docRef);
    return docSnap.data().status;
}
var getPaymentRequest=async (id)=>{
    const docRef = doc(db,'Payment',id);
    const docSnap = await getDoc(docRef);
    const request = docSnap.data().request;
    return getPrintingRequestById(request);
}

//DOCUMENT
var addDocument=async (data)=>{
    await setDoc(doc(db,'Payment',data.id),data,{merge:true});
}
var getDocumentType=async (id)=>{
    const docRef = doc(db,'Document',id);
    const docSnap = await getDoc(docRef);
    return docSnap.data().type;
}
var getDocumentNoPage=async (id)=>{
    const docRef = doc(db,'Document',id);
    const docSnap = await getDoc(docRef);
    return docSnap.data().no_page;
}
var getDocumentSize=async (id)=>{
    const docRef = doc(db,'Document',id);
    const docSnap = await getDoc(docRef);
    return docSnap.data().size;
}
var getDocumentById = async (id)=>{
    if(id==null) return null;
    const docRef=await getDocs(collection(db,'Document'));
    docRef.docs.forEach(
        (doc)=>{
            if(doc.id==id) return doc;
        }
    )
}
//PrintingRequest
var getPrintingRequestById = async (id)=>{
    if(id==null) return null;
    const docRef=await getDocs(collection(db,'PrintingRequest'));
    docRef.docs.forEach(
        (doc)=>{
            if(doc.id==id) return doc;
        }
    )
}
var getPrintingRequestStudent = async (id)=>{
    const docRef = doc(db,'PrintingRequest',id);
    const docSnap = await getDoc(docRef);
    const student = docSnap.data().student;
    return getStudentById(student);
}
var getPrintingRequestPrinter=async (id)=>{
    const docRef = doc(db,'PrintingRequest',id);
    const docSnap = await getDoc(docRef);
    const printer = docSnap.data().printer;
    return getPrinterById(printer);
}
var getPrintingRequestProperties=async (id)=>{
    const docRef = doc(db,'PrintingRequest',id);
    const docSnap = await getDoc(docRef);
    const properties = docSnap.data().properties;
    return getPropertiesById(properties);
}

//Printer
var addPrinter=async (data)=>{
    await setDoc(doc(db,'Printer',data.id),data,{merge:true});
}
var getPrinterStatus = async (id)=>{
    const docRef = doc(db,'Printer',id);
    const docSnap = await getDoc(docRef);
    return docSnap.data().status;
}
var getPrinterById = async (id)=>{
    if(id==null) return null;
    const docRef=await getDocs(collection(db,'Printer'));
    docRef.docs.forEach(
        (doc)=>{
            if(doc.id==id) return doc;
        }
    )
}


//Properties
var addProperties=async (data)=>{
    await setDoc(doc(db,'Properties',data.id),data,{merge:true});
}
var getPropertiesById = async (id)=>{
    if(id==null) return null;
    const docRef=await getDocs(collection(db,'Properties'));
    docRef.docs.forEach(
        (doc)=>{
            if(doc.id==id) return doc;
        }
    )
}


//PAPER
var addPaper=async (data)=>{
    await setDoc(doc(db,'Paper',data.id),data,{merge:true});
}
var getPaperType = async (id)=>{
    const docRef = doc(db,'Paper',id);
    const docSnap = await getDoc(docRef);
    return docSnap.data().type;
}
var getPaperPrice = async (id)=>{
    const docRef = doc(db,'Paper',id);
    const docSnap = await getDoc(docRef);
    return docSnap.data().price;
}

export {getPageLeft,updatePageLeft,addStudent,addPayment,getPaymentAmount,getPaymentStatus,
    getPaymentRequest,addDocument,getDocumentType,getDocumentNoPage,getDocumentSize,
    getPrintingRequestStudent,getPrintingRequestPrinter,getPrintingRequestProperties,
    addPrinter,getPrinterStatus,addProperties,addPaper,getPaperType,getPaperPrice};
