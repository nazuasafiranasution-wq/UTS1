// --- SOAL 5: DATA DINAMIS (ARRAY OF OBJECTS) ---
let dataProduk = [
    { id: 1, nama: "Paracetamol 500mg", harga: 15000 },
    { id: 2, nama: "Vitamin C 1000mg", harga: 45000 },
    { id: 3, nama: "Masker Medis 3-Ply", harga: 35000 },
    { id: 4, nama: "Antiseptik Gel", harga: 20000 }
];

const container = document.getElementById("daftarItemContainer");

function tampilkanProduk() {
    container.innerHTML = "";
    dataProduk.forEach(item => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <h3>${item.nama}</h3>
            <p style="color: #27ae60; font-weight: bold;">Rp ${item.harga.toLocaleString()}</p>
            <button class="btn-delete" onclick="hapusProduk(${item.id})">Hapus</button>
        `;
        container.appendChild(card);
    });
}

// Tambah Produk
document.getElementById("btnTambahProduk").onclick = function() {
    const nama = document.getElementById("inputNamaProduk").value;
    const harga = document.getElementById("inputHargaProduk").value;

    if(nama && harga > 0) {
        dataProduk.push({ id: Date.now(), nama: nama, harga: parseInt(harga) });
        tampilkanProduk();
        document.getElementById("inputNamaProduk").value = "";
        document.getElementById("inputHargaProduk").value = "";
    } else {
        alert("Nama harus diisi dan harga harus positif!");
    }
};

// Hapus Produk
function hapusProduk(id) {
    dataProduk = dataProduk.filter(p => p.id !== id);
    tampilkanProduk();
}

// --- SOAL 4: VALIDASI JAVASCRIPT ---
document.getElementById("formRegistrasi").onsubmit = function(e) {
    e.preventDefault();
    let isValid = true;

    // Reset Pesan Error
    document.querySelectorAll(".error-msg").forEach(el => el.innerText = "");

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const telp = document.getElementById("telepon").value;
    const dok = document.getElementById("dokter").value;
    const jk = document.querySelector('input[name="jk"]:checked');

    // Validasi Field Tidak Kosong & Format
    if (!nama) { document.getElementById("errorNama").innerText = "Nama tidak boleh kosong!"; isValid = false; }
    
    if (!email.includes("@")) { document.getElementById("errorEmail").innerText = "Format email tidak valid!"; isValid = false; }
    
    if (!telp || parseInt(telp) <= 0) { document.getElementById("errorTelepon").innerText = "Nomor harus angka positif!"; isValid = false; }
    
    if (!dok) { document.getElementById("errorDokter").innerText = "Silakan pilih layanan!"; isValid = false; }
    
    if (!jk) { document.getElementById("errorJk").innerText = "Pilih jenis kelamin!"; isValid = false; }

    if (isValid) {
        alert("✅ Berhasil! Pendaftaran atas nama " + nama + " telah diterima.");
        this.reset();
    }
};

// Load Awal
tampilkanProduk();