function inputNama(){

    // Nama
    var varnama = document.getElementById('formNama').value;
    document.getElementById('textNama').innerHTML = varnama;

    // Role
    var varRole = document.getElementById('formRole').value;
    document.getElementById('textRole').innerHTML = varRole;

    //Availability
    var varAva = document.getElementById('formAva').value;
    document.getElementById('textAva').innerHTML = varAva;

    //Usia
    var varAge = document.getElementById('formAge').value;
    document.getElementById('textAge').innerHTML = varAge;

    //Lokasi
    var varLokasi = document.getElementById('formLokasi').value;
    document.getElementById('textLokasi').innerHTML = varLokasi;

    //Pengalaman
    var varYear = document.getElementById('formYear').value;
    document.getElementById('textYear').innerHTML = varYear;

    //Mail
    var varMail = document.getElementById('formMail').value;
    document.getElementById('textMail').innerHTML = varMail;
}