let db = null;

if (typeof window !== "undefined") {
  const { initializeApp, getApps } = require("firebase/app");
  const { getFirestore } = require("firebase/firestore");

  const firebaseConfig = {
    apiKey: "AIzaSyBXEoNgZq1p8PDCb4B3Ya3BU5ZLBqxrMtU",
    authDomain: "bakery-app.firebaseapp.com",
    projectId: "bakery-app",
    storageBucket: "bakery-app.firebasestorage.app",
    messagingSenderId: "91057744734",
    appId: "1:91057744734:web:bb1fb26c5fc18b61807dcf",
  };

  const app =
    getApps().length === 0
      ? initializeApp(firebaseConfig)
      : getApps()[0];

  db = getFirestore(app);
}

export { db };