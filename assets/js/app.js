function updateClock(){

    const now = new Date();

    document.getElementById("clock").innerHTML=
    now.toLocaleTimeString("id-ID");

}

setInterval(updateClock,1000);

updateClock();

document.addEventListener("DOMContentLoaded", async () => {

    const kubikasi = await loadKubikasi();

    const rupiah = await loadRupiah();

    console.log("Kubikasi :", kubikasi);

    console.log("Rupiah :", rupiah);

});