# Portfolio - Nila Fransisca Hardiyeni

Portfolio pribadi yang dibangun ulang menggunakan **ReactJS (Vite)** dan **Tailwind CSS**.

## Struktur Project

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   └── img/              <- letakkan semua gambar di sini
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data.js           <- semua konten (skills, project, sertifikat) diatur di sini
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── Modal.jsx
        ├── Certificates.jsx
        └── Footer.jsx
```

## Cara Menjalankan

1. Install dependencies:
   ```bash
   npm install
   ```

2. Jalankan development server:
   ```bash
   npm run dev
   ```
   Buka link yang muncul di terminal (biasanya `http://localhost:5173`).

3. Build untuk production:
   ```bash
   npm run build
   ```

## Menambahkan Gambar

Taruh semua gambar di folder `public/img/` dengan nama berikut (atau sesuaikan path-nya di `src/data.js` dan komponen terkait):

- `profile.png` — foto profil di section Home
- `about.jpg` — foto di section About
- `project1.jpg`, `project2.png`, `project3.png`, `project4.jpg` — gambar untuk setiap project
- `sertif1.png` sampai `sertif6.png` — gambar sertifikat

## Mengubah Konten

Semua data (pendidikan, skills, project, sertifikat, dan link sosial media) bisa diubah langsung di file `src/data.js` tanpa perlu menyentuh komponen lain.

## Mengubah Warna / Tema

Warna utama (pink) diatur di `tailwind.config.js` pada bagian `theme.extend.colors.pink`:
- `pink.light` — background section (#fff0f3)
- `pink.accent` — warna aksen utama (#ed99a7)
- `pink.soft` — warna pink lembut (#ffc0cb)
- `pink.hot` — warna pink terang untuk hover (#ff69b4)
