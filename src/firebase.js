import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBpK3Uv5KUOlHAb8N5zZ1T6D1BKnOoMAYs",
    authDomain: "image-gallery-e6583.firebaseapp.com",
    projectId: "image-gallery-e6583",
    storageBucket: "image-gallery-e6583.appspot.com",
    messagingSenderId: "386359536823",
    appId: "1:386359536823:web:89f29343343c9ab1caf132",
};

initializeApp(firebaseConfig);
export const db = getFirestore()