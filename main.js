// Mengecek apakah checkbox checked atau tidak
function checkboxChecked() {
    let angka = this.id[this.id.length - 2] + this.id[this.id.length - 1];
    if (document.getElementById(this.id).checked) {
        document.getElementById(`provinsi${angka}`).style.fill = '#80ed99';
    } else {
        document.getElementById(`provinsi${angka}`).style.fill = '#ced4da';
    }
    kalkulasi();
}

// Mengecek apakah peta terclick atau tidak
function petaClicked() {
    let angka = this.id[this.id.length - 2] + this.id[this.id.length - 1];
    if (!document.getElementById(`checkbox${angka}`).checked) {
        document.getElementById(this.id).style.fill = '#80ed99';
        document.getElementById(`checkbox${angka}`).checked = true;
    } else {
        document.getElementById(this.id).style.fill = '#ced4da';
        document.getElementById(`checkbox${angka}`).checked = false;
    }
    kalkulasi();
}

// Fungsi mouseover peta
function mouseOver() {
    document.getElementById(this.id).style.fill = '#80ed99';
}

// Fungsi mouseout peta
function mouseOut() {
    let angka = this.id[this.id.length - 2] + this.id[this.id.length - 1];
    if (!document.getElementById(`checkbox${angka}`).checked) {
        document.getElementById(this.id).style.fill = '#ced4da';
    }
}

// Fungsi kalkulasi jumlah provinsi yang pernah dikunjungi
function kalkulasi() {
    let jumlahchecked = document.querySelectorAll('input[type="checkbox"]:checked');
    let persen = parseFloat((jumlahchecked.length / 34) * 100).toFixed(2);
    document.getElementById('sum').innerText = `Kamu sudah pernah mengunjungi ${jumlahchecked.length}/34 provinsi di Indonesia! (${persen}%)`;
}

// Fungsi event listener setiap checkbox dan peta provinsi
for (let i = 1; i <= 34; i++) {
    let formattedNumber = ("0" + i).slice(-2);
    document.getElementById(`checkbox${formattedNumber}`).addEventListener("click", checkboxChecked, false);
    document.getElementById(`provinsi${formattedNumber}`).addEventListener("click", petaClicked, false);
    document.getElementById(`provinsi${formattedNumber}`).addEventListener("mouseover", mouseOver, false);
    document.getElementById(`provinsi${formattedNumber}`).addEventListener("mouseout", mouseOut, false);
}

// Fungsi tab
document.getElementById("defaultOpen").click();
function openPulau(evt, pulauName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(pulauName).style.display = "block";
    evt.currentTarget.className += " active";
}