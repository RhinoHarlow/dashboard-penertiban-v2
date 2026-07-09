function updateClock(){

    const now = new Date();

    document.getElementById("clock").innerHTML=
    now.toLocaleTimeString("id-ID");

}

setInterval(updateClock,1000);

updateClock();

document.addEventListener("DOMContentLoaded", async () => {

    const data = await loadSheet();
    console.log(Object.keys(data[0]));
console.log(data[0]);
console.log(data[data.length - 1]);

    updateKPI(data);

});