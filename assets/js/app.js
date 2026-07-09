function updateClock(){

    const now = new Date();

    document.getElementById("clock").innerHTML=
    now.toLocaleTimeString("id-ID");

}

setInterval(updateClock,1000);

updateClock();