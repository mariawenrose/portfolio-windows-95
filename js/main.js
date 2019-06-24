function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var currentHours;
    
    var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";
    currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
    currentHours = ( currentHours == 0 ) ? 12 : currentHours;


    m = checkTime(m);
    document.getElementById('clock').innerHTML =
    h + ":" + m + " " + timeOfDay;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i}; 
    return i;
}