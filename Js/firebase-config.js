const firebaseConfig = {
  apiKey: "AIzaSyBkjpbeXLqvh_jPvmHIZVT90tgZlBiulxg",
  authDomain: "fashion-e8173.firebaseapp.com",
  projectId: "fashion-e8173",
  storageBucket: "fashion-e8173.firebasestorage.app",
  messagingSenderId: "544917298546",
  appId: "1:544917298546:web:3f560ae24d9e7bf391d1eb"
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()