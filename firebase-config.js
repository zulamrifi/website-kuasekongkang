// ============================================================
// KONFIGURASI FIREBASE - GANTI DENGAN DATA PROJECT ANDA
// Cara mendapatkan: Firebase Console → Project Settings → Your apps → SDK setup
// ============================================================
const firebaseConfig = {
  apiKey: "AIzaSyA95tw-ECPzfIH9eJmi3VxFYoGzRQdiwWM",
  authDomain: "website-kuasekongkang.firebaseapp.com",
  databaseURL: "https://website-kuasekongkang-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "website-kuasekongkang",
  storageBucket: "website-kuasekongkang.firebasestorage.app",
  messagingSenderId: "757740985056",
  appId: "1:757740985056:web:fc85a3e18b17f9413d8e85"
};

// Link website eksternal - ganti dengan URL website Anda
const EXTERNAL_LINKS = {
  konsultasiKeagamaan: "https://konsultasi-kuasekongkang.vercel.app/",    // Website konsultasi keagamaan
  kalkulatorWaris: "https://faraidh-zakat-kalkulator.vercel.app/",             // Kalkulator waris & zakat
  arsipDigital: "https://arsipdigital-kuasekongkang.vercel.app/"                 // Arsip digital
};
