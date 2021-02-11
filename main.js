// Fungsi event listener setiap checkbox dan peta provinsi
for (let i = 1; i <= 34; i++) {
    let formattedNumber = ('0' + i).slice(-2);
    document.getElementById(`checkbox${formattedNumber}`).addEventListener('click', checkboxChecked, false);
    document.getElementById(`provinsi${formattedNumber}`).addEventListener('click', petaClicked, false);
    document.getElementById(`provinsi${formattedNumber}`).addEventListener('mouseover', mouseOver, false);
    document.getElementById(`provinsi${formattedNumber}`).addEventListener('mouseout', mouseOut, false);
}

// Fungsi mewarnai peta
function mewarnai(id) {
    document.getElementById(`provinsi${id}`).style.fill = '#80ed99';
}

// Fungsi hapus warna (ganti warna jadi default)
function hapusWarna(id) {
    document.getElementById(`provinsi${id}`).style.fill = '#ced4da';
}

// Mengecek apakah checkbox checked atau tidak
function checkboxChecked() {
    let angka = this.id.slice(-2);
    if (document.getElementById(this.id).checked) {
        mewarnai(angka);
    } else {
        hapusWarna(angka);
    }
    kalkulasi();
}

// Mengecek apakah peta terclick atau tidak
function petaClicked() {
    let angka = this.id.slice(-2);
    if (!document.getElementById(`checkbox${angka}`).checked) {
        mewarnai(angka);
        document.getElementById(`checkbox${angka}`).checked = true;
    } else {
        hapusWarna(angka);
        document.getElementById(`checkbox${angka}`).checked = false;
    }
    kalkulasi();
}

// Fungsi mouseover peta
function mouseOver() {
    let angka = this.id.slice(-2);
    mewarnai(angka);
}

// Fungsi mouseout peta
function mouseOut() {
    let angka = this.id.slice(-2);
    if (!document.getElementById(`checkbox${angka}`).checked) {
        hapusWarna(angka);
    }
}

// Fungsi kalkulasi jumlah provinsi yang pernah dikunjungi
function kalkulasi() {
    let jumlahchecked = document.querySelectorAll('input[type="checkbox"]:checked');
    let persen = parseFloat((jumlahchecked.length / 34) * 100).toFixed(2);
    document.getElementById('sum').innerText = `Kamu sudah pernah mengunjungi ${jumlahchecked.length}/34 provinsi di Indonesia! (${persen}%)`;
}

// Fungsi tab
document.getElementById('defaultOpen').click();
function openPulau(evt, pulauName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }

    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
    }

    document.getElementById(pulauName).style.display = 'block';
    evt.currentTarget.className += ' active';
}
