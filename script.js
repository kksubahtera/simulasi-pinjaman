function doGet() {
  return HtmlService.createHtmlOutput(`
    <html>
      <head>
        <title>Simulasi Pinjaman</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: url('https://source.unsplash.com/1600x900/?finance') no-repeat center center fixed;
            background-size: cover;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
          }
          .container {
            background: rgba(255, 255, 255, 0.2);
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            backdrop-filter: blur(10px);
            width: 300px;
            text-align: center;
          }
          input, select, button {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: none;
            border-radius: 5px;
          }
          button {
            background: #4CAF50;
            color: white;
            cursor: pointer;
          }
          button:hover {
            background: #45a049;
          }
          label {
            color: white;
            font-weight: bold;
          }
          p {
            color: white;
            font-size: 14px;
          }
        </style>
        <script>
          function hitungSimulasi() {
            var jumlahPinjaman = parseFloat(document.getElementById('jumlahPinjaman').value);
            var tenor = parseInt(document.getElementById('tenor').value);
            var bunga = parseFloat(document.getElementById('bunga').value) / 100;
            var metode = document.getElementById('metode').value;
            
            var hasil = '';
            
            if (metode === 'flat') {
              var angsuranPokok = jumlahPinjaman / tenor;
              var angsuranBunga = jumlahPinjaman * bunga / 12;
              var totalAngsuran = angsuranPokok + angsuranBunga;
              hasil = `Cicilan per bulan: Rp ${totalAngsuran.toFixed(2)}`;
            } else if (metode === 'menurun') {
              var angsuranPokok = jumlahPinjaman / tenor;
              hasil = '<b>Detail Cicilan:</b><br>';
              for (var i = 1; i <= tenor; i++) {
                var bungaBulanIni = (jumlahPinjaman - (angsuranPokok * (i - 1))) * bunga / 12;
                var cicilanBulanIni = angsuranPokok + bungaBulanIni;
                hasil += `Bulan ${i}: Rp ${cicilanBulanIni.toFixed(2)}<br>`;
              }
            }
            
            document.getElementById('hasil').innerHTML = hasil;
          }
        </script>
      </head>
      <body>
        <div class="container">
          <h2>Simulasi Pinjaman</h2>
          <label>Jumlah Pinjaman (Rp):</label>
          <input type='number' id='jumlahPinjaman' placeholder='Masukkan jumlah pinjaman'><br>
          <label>Tenor (bulan):</label>
          <input type='number' id='tenor' placeholder='Masukkan tenor'><br>
          <label>Bunga (% per tahun):</label>
          <input type='number' id='bunga' placeholder='Masukkan bunga'><br>
          <label>Metode Bunga:</label>
          <select id='metode'>
            <option value='flat'>Flat</option>
            <option value='menurun'>Menurun</option>
          </select><br>
          <button onclick='hitungSimulasi()'>Hitung</button>
          <p id='hasil'></p>
        </div>
      </body>
    </html>
  `);
}
