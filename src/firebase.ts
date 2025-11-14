import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDRmRWtMZ-6iK_7TWOQKtWocX65UZ424Y",
  authDomain: "counter-portfolio-b3b73.firebaseapp.com",
  projectId: "counter-portfolio-b3b73",
  storageBucket: "counter-portfolio-b3b73.firebasestorage.app",
  messagingSenderId: "1022430506008",
  appId: "1:1022430506008:web:6182448acacf392fab676d",
  measurementId: "G-4PQYJ0YQ9F"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
