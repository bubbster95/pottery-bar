// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getStorage, ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { getFirestore, doc, setDoc, updateDoc, getDoc } from 'firebase/firestore';
import { setLocalProfile } from './helpers'

require('dotenv').config("./");
// Initialize Firebase
// const firebaseApp = initializeApp({
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: "pottery-bar",
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASURMENT_ID
// });
const firebaseApp = initializeApp({
    apiKey: "AIzaSyBss_76GCGpgLSC7r852fj7-8KRKyGC0_M",
    authDomain: "pottery-bar.firebaseapp.com",
    projectId: "pottery-bar",
    storageBucket: "pottery-bar.appspot.com",
    messagingSenderId: "33568864284",
    appId: "1:33568864284:web:7b6c04ce5cbb52100787d9",
    measurementId: "G-1C97EPLGX4"
  });
  
const storage = getStorage(firebaseApp);
export const auth = getAuth();
const db = getFirestore();

// Check The last time Data was updated
export const getTimestampFromFiretore = async () => {
    // Get Time Stamp
    const docSnap = await getDoc(doc(db, 'timestamp', 'timestamp'));
    
    // Return timestamp data
    if (docSnap.exists()) return docSnap.data();
    else console.log("No Such Document");
    
}

export const updateTimeStamp = async () => {
    try {
        await updateDoc(doc(db, 'timestamp', 'timestamp'), {
            last_update: Date()
        });
    } catch (error) {
        console.log("Error updating timestamp: ", error);
    }
}

// Pulls image refrence from fibase then sets it as a BG style to a uniq div
export const getImageFromStore = async (imagePath) => {

    // Referance the storage bucket given in props
    const pathReference = ref(storage, imagePath);
    let finalUrl;

    await getDownloadURL(pathReference).then((url) => {
        return finalUrl = url
    }).catch((error) => {
        switch (error.code) {
        case 'storage/object-not-found':
            // File doesn't exist
            console.log('File Doesn\'t exist')
            break;
        case 'storage/unauthorized':
            // User doesn't have permission to access the object
            console.log("User doesn't have permission to access the object")
            break;
        case 'storage/unknown':
            // Unknown error occurred, inspect the server response
            console.log("Unknown error occurred, inspect the server response")
            break;
        default:
    }
});
return finalUrl
};  


// Adds images to firebase 
export const uploadHeroImageToStorage =  async ( file, imageName ) => {
    const heroStorage = ref(storage, 'RS/hero')
    let reference = ref(heroStorage, imageName);

    const uploadTask = uploadBytesResumable(reference, file)

    return getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        return downloadURL
    });
}

/*
####################
# Profile Functions #
####################
*/

// Creates a new user then logs them in.
export const createNewUser = async (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        getUserInfo(userCredential.user.uid, true)
        addUserToFirestore(email, user.uid)
        setLocalProfile(user)
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Error: ', errorCode, errorMessage)
    })
};

export const addUserToFirestore = async (email, uid) => {
    try {
        await setDoc(doc(db, 'users', uid), {
            email: email,
            uid: uid,
            level: 'customer'
        });
    } catch (error) {
        console.log("Error adding document: ", error)
    }
}

// Add new information to a user
export const addUserData = async (uid, newInfo) => {
    try {
        await updateDoc(doc(db, 'users', uid), newInfo);
        getUserInfo(uid, true)
    } catch (error) {
        console.log("Error updating document: ", error);
    }
}

// Signs in an existing user
export const signInUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            getUserInfo(userCredential.user.uid, true)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
};

// Get User Information
export const getUserInfo = async (uid, setLocal=false) => {
    // Get the user requested.
    const docSnap = await getDoc(doc(db, 'users', uid));

    // Return the user data
    if (docSnap.exists()) {
        if (setLocal) setLocalProfile(docSnap.data());
        return docSnap.data();
    } else {
        console.log("No Such Document");
    }
}

// Check WhiteList
export const checkWhiteList = async (uid, list) => {
    // Get the list requested.
    const docSnap = await getDoc(doc(db, 'white_list', list));

    // Check if a user is on that list.
    if (docSnap.exists()) {
        const whiteList = docSnap.data();
        return whiteList.uids.includes(uid) 
    } else {
        console.log("No Such White List");
    }
}

// Logs out current user 
export const logOutUser = () => {
    signOut(auth).then(() => {
        setLocalProfile(null)
    }).catch((error) => {
        console.log("Logout Error: ", error.code, error.message)
    });
};

/*
###############
# Danger ZONE #
###############
*/

export const replaceGymDB = async (newInfo, gym) => {
    try {
        await setDoc(doc(db, 'gyms', gym), newInfo);
        updateTimeStamp()
        console.log('Upadted Gym DB')
    } catch (error) {
        console.log("Error updating document: ", error);
    }
}