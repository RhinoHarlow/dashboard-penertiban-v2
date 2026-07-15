function formatRupiah(angka){

    return new Intl.NumberFormat("id-ID",{

        style:"currency",

        currency:"IDR",

        maximumFractionDigits:0

    }).format(angka);

}

function formatKubikasi(angka){

    return angka.toLocaleString("id-ID")+" m³";

}