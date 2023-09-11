<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
    <title>Hitung Nilai Rata-Rata</title>
</head>
<body>
    <div class="container">
        <h1>Hitung Nilai Rata-Rata</h1>
        <form id="gradeForm">
            <label for="nama">Nama Mahasiswa:</label>
            <input type="text" id="nama" name="nama" required>

            <label for="matkul">Mata Kuliah:</label>
            <input type="text" id="matkul" name="matkul" required>

            <label for="grade">Pilih Grade:</label>
            <select id="grade" name="grade">
                <option value="4">A</option>
                <option value="3">B</option>
                <option value="2">C</option>
                <option value="1">D</option>
                <option value="0">E</option>
            </select>

            <button type="button" id="hitungButton">Hitung</button>
        </form>
    </div>

    <div class="hasil" id="hasilTable">
        <h2>Hasil Perhitungan</h2>
        <table>
            <thead>
                <tr>
                    <th>Nama Mahasiswa</th>
                    <th>Mata Kuliah</th>
                    <th>Grade</th>
                    <th>Nilai Rata-rata</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody id="hasilBody">
                <!-- Hasil perhitungan akan ditampilkan di sini -->
            </tbody>
        </table>
    </div>
</body>
</html>
