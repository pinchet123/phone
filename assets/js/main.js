var setTime = null;
setTime = setInterval(function(){
    var day = new Date();
    var h = day.getHours();
    var m = day.getMinutes();
    var s = day.getSeconds();
    var time = `${h}:${m}:${s}`;
    document.getElementById('time').innerText = time;
})

    var banca = `<iframe src="iframe/fish/index.html" frameborder="0"></iframe>`

    $('#banca').click(function(){
        $('.out').css('display' , 'block')
        $('div.main_item').css('height' , '100%');
        $('.main').html(banca)
    }) 