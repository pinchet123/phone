var setTime = null;
setTime = setInterval(function() {
    var day = new Date();
    var h = day.getHours();
    var m = day.getMinutes();
    var s = day.getSeconds();
    var time = `${h}:${m}:${s}`;
    document.getElementById('time').innerText = time;
})
var game = ` <div class="main_item">
<div class="wrap-main">
    <div class="main_item-game" id="banca">
        <p>game bắn cá</p>
        <div class="game">
            <img src="assets/img/game/banca.jpg" alt="">
            
        </div>
        
    </div>
    <div class="main_item-game">
        <p>game bắn cá</p>
        <div class="game">
            <img src="assets/img/game/banca.jpg" alt="">
        </div>
        
    </div>
    <div class="main_item-game">
        <p>game bắn cá</p>
        <div class="game">
            <img src="assets/img/game/banca.jpg" alt="">
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
var banca = `<iframe src="iframe/fish/index.html" frameborder="0"></iframe>`

// $('#banca').click(function() {
//     $('.out').css('display', 'block')
//     $('div.main_item').css('height', '100%');
//     $('.main').html(banca)
// })
$(document).on('click', '#banca', function() {
    $('.out').css('display', 'block')
    $('div.main_item').css('height', '100%');
    $('.main').html(banca)
})
$('.out').click(function() {
    $('iframe').remove()
    $('.main').html(game)
})