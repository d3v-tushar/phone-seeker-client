// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3_PoO1Fq3ih2hjuSAu61C-U3UPUGzfJg",
  authDomain: "phone-seeker.firebaseapp.com",
  projectId: "phone-seeker",
  storageBucket: "phone-seeker.appspot.com",
  messagingSenderId: "709183717902",
  appId: "1:709183717902:web:3d6d97e0f9e8008d22f25f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;