# KUA Kecamatan Sekongkang — Website Resmi

## 🚀 Cara Deploy ke Vercel via GitHub

### 1. Setup Firebase
1. Buka [Firebase Console](https://console.firebase.google.com)
2. Buat project baru → nama bebas (contoh: `kua-sekongkang`)
3. Aktifkan layanan berikut:
   - **Authentication** → Sign-in method → Email/Password → Enable
   - **Firestore Database** → Create database → Production mode
   - **Storage** → Get started
4. Buka **Project Settings** → **Your Apps** → **Add Web App**
5. Salin konfigurasi Firebase

### 2. Edit Konfigurasi
Buka file `public/firebase-init.js` dan ganti nilai:
```js
apiKey: "GANTI_INI",
authDomain: "GANTI_INI",
projectId: "GANTI_INI",
storageBucket: "GANTI_INI",
messagingSenderId: "GANTI_INI",
appId: "GANTI_INI"
```

### 3. Setup Firestore Rules
Di Firebase Console → Firestore → Rules, paste:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Public read untuk semua collection (konten website)
    match /siteConfig/{doc} { allow read: if true; allow write: if request.auth != null; }
    match /petugas/{doc}    { allow read: if true; allow write: if request.auth != null; }
    match /statistik/{doc}  { allow read: if true; allow write: if request.auth != null; }
    match /materi/{doc}     { allow read: if true; allow write: if request.auth != null; }
    match /ulasan/{doc}     { allow read: if true; allow write: if request.auth != null; }
    match /konsultasi/{doc} { allow read: if request.auth != null; allow write: if true; }
    match /adminAccounts/{doc} { allow read, write: if request.auth != null; }
  }
}
```

### 4. Setup Storage Rules
Di Firebase Console → Storage → Rules, paste:
```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /petugas/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null && request.resource.size < 5 * 1024 * 1024;
    }
  }
}
```

### 5. Buat Admin Pertama
Di Firebase Console → Authentication → Users → Add user:
- Email: admin@kuasekongkang.id (atau email pilihan Anda)
- Password: (buat password kuat)

### 6. Deploy ke Vercel
1. Upload folder ini ke GitHub (repo baru)
2. Buka [vercel.com](https://vercel.com) → Import Git Repository
3. Pilih repo → Deploy
4. Selesai! Website live di `https://nama-repo.vercel.app`

## 📁 Struktur File
```
kua-sekongkang/
├── public/
│   ├── index.html        ← Landing page
│   ├── admin.html        ← Admin panel (butuh login)
│   ├── login.html        ← Halaman login admin
│   └── firebase-init.js  ← Konfigurasi Firebase (EDIT INI)
├── vercel.json           ← Konfigurasi Vercel
├── .gitignore
└── README.md
```

## 🔗 Fitur
- ✅ Landing page lengkap dengan animasi
- ✅ Admin panel dengan Firebase Firestore (database online)
- ✅ Upload foto petugas ke Firebase Storage
- ✅ Login aman dengan Firebase Authentication
- ✅ Statistik, materi, petugas, ulasan — semua bisa diedit
- ✅ Konsultasi dari pengunjung masuk ke database
- ✅ Setting ganti username & password admin
- ✅ Responsive mobile
