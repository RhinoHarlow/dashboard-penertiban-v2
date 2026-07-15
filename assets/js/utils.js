/* ===================================================
   RHINOCEROS COMMAND CENTER
   Utility Function
=================================================== */

function formatRupiah(value){

    return new Intl.NumberFormat("id-ID",{

        style:"currency",

        currency:"IDR",

        maximumFractionDigits:0

    }).format(Number(value));

}

function formatKubikasi(value){

    return Number(value).toLocaleString("id-ID")+" m³";

}

function formatPersentase(realisasi,target){

    if(target==0) return "0 %";

    return ((realisasi/target)*100).toFixed(1)+" %";

}

function formatAngka(value){

    return Number(value).toLocaleString("id-ID");

}