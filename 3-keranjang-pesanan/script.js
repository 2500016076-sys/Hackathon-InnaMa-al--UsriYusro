// Data 12 Katalog Produk Altul Store (Foto Asli & Presisi sesuai Jenis Barang)
const daftarMenu = [
    {
        id: 1,
        nama: "Pulpen Gel Black 0.5mm (pack 3)",
        harga: 15000,
        kategori: "tulis",
        deskripsi: "Pulpen gel tinta hitam pekat, cepat kering dan lancar",
        gambar: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        nama: "Pensil 2B Ujian (Set 5 Pcs)",
        harga: 12000,
        kategori: "tulis",
        deskripsi: "Pensil kayu 2B standar komputer mudah diarsir",
        gambar: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        nama: "Buku Tulis Grid A5 (80 Hal)",
        harga: 18000,
        kategori: "kertas",
        deskripsi: "Buku catatan kotak-kotak grid cocok untuk gambar/grafik",
        gambar: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        nama: "Binder Loose Leaf B5 Leather",
        harga: 35000,
        kategori: "kertas",
        deskripsi: "Binder isi ulang 26 ring bercover bahan sintetis elegan",
        gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIvGlL3LXyHdbK6RnD3g6ci9Mt7GQKqrWuYw9KiYgbgQ&s"
    },
    {
        id: 5,
        nama: "Highlighter Pastel (Set 4 Warna)",
        harga: 22000,
        kategori: "tulis",
        deskripsi: "Stabilo penanda teks warna pastel lembut tidak tembus kertas",
        gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6_5CVusexRaag_GC3z0RyYXquhCIbm8Ek2VRDMQSSeg&s=10"
    },
    {
        id: 6,
        nama: "Sticky Notes Neon Pack",
        harga: 8000,
        kategori: "kertas",
        deskripsi: "Kertas memo tempel serbaguna perekat kuat daya tahan lama",
        gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_hrbWkSJOuSJwBPx8aWQD1oyCyYAia_UtESrIHn5oeQ&s=10"
    },
    {
        id: 7,
        nama: "Gunting Stainless ",
        harga: 14000,
        kategori: "kantor",
        deskripsi: "Gunting tajam anti karat dengan pegangan ergonomis",
        gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpj-CTcmgHK83KZ4I3LtUs6LNf8IvT1_uIs3gTUPG8pA&s=10"
    },
    {
        id: 8,
        nama: "Stapler Mini + Isi 1 Box",
        harga: 16000,
        kategori: "kantor",
        deskripsi: "Stapler praktis ukuran saku lengkap dengan isinya",
        gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAUThP0Ja4cO62q3CDWTf8A7yimrYjjM5y8HZUp3393A&s=10"
    },
    {
        id: 9,
        nama: "Penggaris Besi",
        harga: 10000,
        kategori: "tulis",
        deskripsi: "Penggaris mistar stainless steel presisi tinggi",
        gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxrr202hW7p7asN8Xnjj0SbLkClIfTC4KwF2Hv3iumrw&s=10"
    },
    {
        id: 10,
        nama: "Penghapus Bebas Debu (Dust-Free)",
        harga: 5000,
        kategori: "tulis",
        deskripsi: "Penghapus pensil bersih tanpa meninggalkan sisa sampah",
        gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxXVtPJk5xJKlQHvS1wL4-EMVlRx7MbILUOuqYklFMLg&s=10"
    },
    {
        id: 11,
        nama: "Map Dokumen Zipper Bag A4",
        harga: 12000,
        kategori: "kantor",
        deskripsi: "Map plastik ritsleting tahan air untuk merapikan berkas",
        gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYSEj0rTMfkVf8qYJ80Bv_8fcTuKZK7wJcq8AuQCaLpQ&s=10"
    },
    {
        id: 12,
        nama: "Spidol Permanent Hitam",
        harga: 13000,
        kategori: "tulis",
        deskripsi: "Spidol marker cepat kering tahan air untuk berbagai permukaan",
        gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR50_8Y9GfwvZM8lZT20lkW7XSJ2pUnfy5HE_lbe25fFg&s=10"
    }
];

let keranjang = [];
let kategoriAktif = 'semua';
const gambarFallback = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo1DPMnKLhtYfsV7b6OKICCG1VoXLp240yCv1Z5h-8Eg&s=10";

// Elemen DOM (Menggunakan ID Asli dari Pengampu)
const elDaftarMenu = document.getElementById("daftar-menu");
const elIsiKeranjang = document.getElementById("isi-keranjang");
const elKeranjangKosong = document.getElementById("keranjang-kosong");
const elJumlahItem = document.getElementById("jumlah-item");
const elTotal = document.getElementById("total");
const elTombolPesan = document.getElementById("tombol-pesan");
const elInputCari = document.getElementById("input-cari");
const elFormPemesan = document.getElementById("form-pemesan");
const elModal = document.getElementById("modal-sukses");
const elDetailRingkasan = document.getElementById("detail-pesanan-ringkasan");
const elTutupModal = document.getElementById("tutup-modal");

// Render Kartu Produk Alat Tulis
function tampilkanMenu(dataMenu) {
    elDaftarMenu.innerHTML = "";
    if (dataMenu.length === 0) {
        elDaftarMenu.innerHTML = "<p class='redup' style='grid-column: 1/-1;'>Alat tulis tidak ditemukan.</p>";
        return;
    }

    dataMenu.forEach(item => {
        const kartuItem = document.createElement("div");
        kartuItem.className = "kartu-item";
        kartuItem.innerHTML = `
            <img src="${item.gambar}"
                 alt="${item.nama}"
                 class="gambar-menu"
                 loading="lazy"
                 onerror="this.onerror=null; this.src='${gambarFallback}';">
            <div class="konten-menu">
                <div>
                    <h3>${item.nama}</h3>
                    <p class="deskripsi-menu">${item.deskripsi}</p>
                </div>
                <div>
                    <p class="harga-menu">Rp${item.harga.toLocaleString("id-ID")}</p>
                    <button type="button" class="btn-tambah" onclick="tambahKeKeranjang(${item.id})">+ Tambah</button>
                </div>
            </div>
        `;
        elDaftarMenu.appendChild(kartuItem);
    });
}

// Tambah & Ubah Porsi Keranjang Belanja
function tambahKeKeranjang(id) {
    const produk = daftarMenu.find(item => item.id === id);
    const itemKeranjang = keranjang.find(item => item.id === id);

    if (itemKeranjang) {
        itemKeranjang.jumlah += 1;
    } else {
        keranjang.push({ ...produk, jumlah: 1 });
    }
    perbaruiKeranjang();
}

function ubahJumlah(id, perubahan) {
    const itemKeranjang = keranjang.find(item => item.id === id);
    if (itemKeranjang) {
        itemKeranjang.jumlah += perubahan;
        if (itemKeranjang.jumlah <= 0) {
            keranjang = keranjang.filter(item => item.id !== id);
        }
    }
    perbaruiKeranjang();
}

// Render Ulang Tampilan Keranjang Belanja
function perbaruiKeranjang() {
    elIsiKeranjang.innerHTML = "";
    let totalHarga = 0;
    let totalItem = 0;

    if (keranjang.length === 0) {
        elKeranjangKosong.style.display = "block";
        elTombolPesan.disabled = true;
    } else {
        elKeranjangKosong.style.display = "none";
        elTombolPesan.disabled = false;

        keranjang.forEach(item => {
            const subtotal = item.harga * item.jumlah;
            totalHarga += subtotal;
            totalItem += item.jumlah;

            const li = document.createElement("li");
            li.innerHTML = `
                <div class="item-keranjang-row">
                    <div>
                        <strong>${item.nama}</strong>
                        <div class="kontrol-jumlah">
                            <button type="button" class="btn-opsi-jml" onclick="ubahJumlah(${item.id}, -1)">-</button>
                            <span>${item.jumlah}</span>
                            <button type="button" class="btn-opsi-jml" onclick="ubahJumlah(${item.id}, 1)">+</button>
                        </div>
                    </div>
                    <span>Rp${subtotal.toLocaleString("id-ID")}</span>
                </div>
            `;
            elIsiKeranjang.appendChild(li);
        });
    }

    elJumlahItem.textContent = totalItem;
    elTotal.textContent = `Rp${totalHarga.toLocaleString("id-ID")}`;
}

// Pencarian & Filter Kategori
if (elInputCari) {
    elInputCari.addEventListener("input", (e) => {
        filterDanTampilkanMenu(e.target.value.toLowerCase(), kategoriAktif);
    });
}

document.querySelectorAll('.btn-kategori').forEach(btn => {
    btn.addEventListener('click', (e) => {
        kategoriAktif = e.target.getAttribute('data-kategori');
        document.querySelectorAll('.btn-kategori').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');

        const kataKunci = elInputCari ? elInputCari.value.toLowerCase() : '';
        filterDanTampilkanMenu(kataKunci, kategoriAktif);
    });
});

function filterDanTampilkanMenu(kataKunci, kategori) {
    const hasil = daftarMenu.filter(item => {
        const cocokNama = item.nama.toLowerCase().includes(kataKunci);
        const cocokKategori = kategori === 'semua' || item.kategori === kategori;
        return cocokNama && cocokKategori;
    });
    tampilkanMenu(hasil);
}

// Handling Submit Form Pemesanan
if (elFormPemesan) {
    elFormPemesan.addEventListener("submit", (e) => {
        e.preventDefault();
        const nama = document.getElementById("nama-pemesan").value;
        const metode = document.getElementById("metode-bayar").value;
        const catatan = document.getElementById("catatan").value || "-";

        elDetailRingkasan.innerHTML = `
            <p style="margin-bottom:6px;"><strong>Nama Pembeli:</strong> ${nama}</p>
            <p style="margin-bottom:6px;"><strong>Metode Bayar:</strong> ${metode}</p>
            <p style="margin-bottom:6px;"><strong>Catatan:</strong> ${catatan}</p>
            <hr style="margin:10px 0; border:0; border-top:1px dashed #CBD5E1;">
            <p style="font-size:1.05rem; color:#1E3A8A; font-weight:bold;">Total Pembayaran: ${elTotal.textContent}</p>
        `;
        elModal.style.display = "flex";

        keranjang = [];
        perbaruiKeranjang();
        elFormPemesan.reset();
    });
}

if (elTutupModal) {
    elTutupModal.addEventListener("click", () => {
        elModal.style.display = "none";
    });
}

// Inisialisasi awal
tampilkanMenu(daftarMenu);