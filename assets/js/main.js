var setTime = null;
setTime = setInterval(function(){
    var day = new Date();
    var h = day.getHours();
    var m = day.getMinutes();
    var s = day.getSeconds();
    var time = `${h} : ${m} : ${s}`;
    document.getElementById('time').innerText = time;
})