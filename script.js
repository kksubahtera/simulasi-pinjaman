document.getElementById("hitungBtn").addEventListener("click", function() {
    let jumlahPinjaman = parseFloat(document.getElementById("jumlahPinjaman").value);
    let tenor = parseInt(document.getElementById("tenor").value);
    let bunga = parseFloat(document.getElementById("bunga").value) / 100;
    let metode = document.getElementById("metode").value;

    let hasil = document.getElementById("hasil");
    
    if (isNaN(jumlahPinjaman) || isNaN(tenor) || isNaN(bunga)) {
        hasil.innerHTML = "<span style='color: red;'>Harap masukkan angka yang valid!</span>";
        return;
    }

    let angsuran = "";
    
    if (metode === "Menurun") {
        let pokok = jumlahPinjaman / tenor;
        for (let i = 1; i <= tenor; i++) {
            let sisaPinjaman = jumlahPinjaman - (pokok * (i - 1));
            let bungaBulanIni = sisaPinjaman * bunga / 12;
            let totalBayar = pokok + bungaBulanIni;
            angsuran += `Bulan ${i}: Rp ${totalBayar.toFixed(2)}<br>`;
        }
    } else {
        let bungaPerBulan = (jumlahPinjaman * bunga) / 12;
        let angsuranTetap = (jumlahPinjaman / tenor) + bungaPerBulan;
        for (let i = 1; i <= tenor; i++) {
            angsuran += `Bulan ${i}: Rp ${angsuranTetap.toFixed(2)}<br>`;
        }
    }

    hasil.innerHTML = angsuran;
});
