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
