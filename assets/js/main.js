var setTime = null;
setTime = setInterval(function() {
    var day = new Date();
    var h = day.getHours();
    var m = day.getMinutes();
    var s = day.getSeconds();
    var time = `${h}:${m}:${s}`;
    document.getElementById('time').innerText = time;
})
var main = `<div class="main_item">
<div class="wrap-main">
    <div class="main_item-game" id="banca" data="fish">
        <p>Bắn Cá</p>
        <div class="game">
            <img src="assets/img/game/banca.jpg" alt="">

        </div>

    </div>
    <div class="main_item-game" id="caro" data="caro">
        <p>Cờ caro</p>
        <div class="game">
            <img src="assets/img/game/caro.png" alt="">
        </div>

    </div>
    <div class="main_item-game">
        <p>flappy bird</p>
        <div class="game">
            <img src="assets/img/game/bird.jpg" alt="">
        </div>

    </div>
    <div class="main_item-game">
        <p>game bắn cá</p>
        <div class="game">
            <img src="assets/img/game/banca.jpg" alt="">
        </div>

    </div>

</div>


</div>`


// $('#banca').click(function() {
//     $('.out').css('display', 'block')
//     $('div.main_item').css('height', '100%');
//     $('.main').html(banca)
// })
$(document).on('click', '.main_item-game', function() {
    var game = $(this).attr('data');
    var iframe = `<iframe src="iframe/${game}/index.html" frameborder="0"></iframe>`

    $('.out').css('display', 'block')
    $('div.main_item').css('height', '100%');
    $('.main').html(iframe)
})
$('.out').click(function() {
    $('iframe').remove()
    $('.main').html(main)
})