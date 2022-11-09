import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const app = initializeApp({
    apiKey: "AIzaSyByiYgXKEULB2--F9HyLYlyzm3qM7qBD0M",
    authDomain: "tiktok-upload-584f0.firebaseapp.com",
    projectId: "tiktok-upload-584f0",
    storageBucket: "tiktok-upload-584f0.appspot.com",
    messagingSenderId: "845753745938",
    appId: "1:845753745938:web:537e586714043a15f34ecb",
    measurementId: "G-CPJG6V1GZL"

});

const storage = getStorage(app);
export default storage;