import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBkjpbeXLqvh_jPvmHIZVT90tgZlBiulxg",
  authDomain: "fashion-e8173.firebaseapp.com",
  projectId: "fashion-e8173",
  storageBucket: "fashion-e8173.firebasestorage.app",
  messagingSenderId: "544917298546",
  appId: "1:544917298546:web:3f560ae24d9e7bf391d1eb"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);