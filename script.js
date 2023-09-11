// Simpan data hasil perhitungan dalam array
const hasilData = [];

document.getElementById('hitungButton').addEventListener('click', function() {
    const nama = document.getElementById('nama').value;
    const matkul = document.getElementById('matkul').value;
    const gradeValue = document.getElementById('grade').value;

    if (nama === "" || matkul === "") {
        alert("Nama Mahasiswa dan Mata Kuliah harus diisi!");
        return;
    }

    let grade, nilaiRataRata;

    switch (gradeValue) {
        case "4":
            grade = "A";
            nilaiRataRata = 4;
            break;
        case "3":
            grade = "B";
            nilaiRataRata = 3;
            break;
        case "2":
            grade = "C";
            nilaiRataRata = 2;
            break;
        case "1":
            grade = "D";
            nilaiRataRata = 1;
            break;
        case "0":
            grade = "E";
            nilaiRataRata = 0;
            break;
        default:
            grade = "-";
            nilaiRataRata = 0;
            break;
    }

    // Simpan data hasil perhitungan dalam objek
    const hasil = {
        nama: nama,
        matkul: matkul,
        grade: grade,
        nilaiRataRata: nilaiRataRata
    };

    // Tambahkan data hasil perhitungan ke dalam array
    hasilData.push(hasil);

    // Tambahkan data ke dalam tabel hasil
    tambahkanDataKeTabel(hasil);

    // Reset form setelah tombol "Hitung" ditekan
    document.getElementById('nama').value = "";
    document.getElementById('matkul').value = "";
    document.getElementById('grade').value = "4";
});

// Fungsi untuk menambahkan data ke dalam tabel hasil
function tambahkanDataKeTabel(data) {
    const hasilBody = document.getElementById('hasilBody');
    const newRow = hasilBody.insertRow();
    newRow.innerHTML = `
        <td>${data.nama}</td>
        <td>${data.matkul}</td>
        <td>${data.grade}</td>
        <td>${data.nilaiRataRata}</td>
        <td>
            <button onclick="editData(${hasilData.length - 1})">Edit</button>
            <button onclick="hapusData(${hasilData.length - 1})">Delete</button>
        </td>
    `;
}

// Fungsi untuk mengedit data
function editData(index) {
    const data = hasilData[index];
    const namaInput = document.getElementById('nama');
    const matkulInput = document.getElementById('matkul');
    const gradeInput = document.getElementById('grade');

    namaInput.value = data.nama;
    matkulInput.value = data.matkul;
    gradeInput.value = (data.nilaiRataRata === 4) ? "4" : (data.nilaiRataRata === 3) ? "3" : (data.nilaiRataRata === 2) ? "2" : (data.nilaiRataRata === 1) ? "1" : "0";

    // Hapus data yang diedit dari tabel
    hapusData(index);
}

// Fungsi untuk menghapus data
function hapusData(index) {
    hasilData.splice(index, 1); // Hapus data dari array
    const hasilBody = document.getElementById('hasilBody');
    hasilBody.deleteRow(index); // Hapus baris dari tabel
}
