var setTime = null;
setTime = setInterval(function() {
        var day = new Date();
        var h = day.getHours();
        var m = day.getMinutes();
        var s = day.getSeconds();
        var time = `${h}:${m}:${s}`;
        document.getElementById('time').innerText = time;
    })
    // clock
var new_game = {
        "fish": [
            { "name": "fish", "image": 'banca.png', 'title': 'Bắn cá' },
        ],
        "caro": [
            { "name": "caro", "image": 'caro.png', 'title': 'Cờ caro' },
        ],
        "bird": [
            { "name": "bird", "image": 'bird.png', 'title': 'Flappy Bird' },
        ]
    }
    // obj game 
var main_item = ` 
<div class="main_item">

<div class="wrap-main">

</div>
</div>`
$('.main').html(main_item)

var game_array = []

function get_game() {
    for (let key in new_game) {
        game_array = new_game[key]
        for (var i = 0; i < game_array.length; i++) {
            var obj = game_array[i];
            main_item_game = `
                <div class="main_item-game" id="banca" data="${game_array[i].name}">
                    <p>${game_array[i].title}</p>
                    <div class="game">
                    <img src="assets/img/game/${game_array[i].image}" alt="">
                    </div>
                </div>
           `
            $('.wrap-main').append(main_item_game)

        }

    }
}
// get_game()

$(document).on('click', '.main_item-game', function() {
    var game = $(this).attr('data');
    var iframe = `<iframe src="iframe/${game}/index.html" frameborder="0"></iframe>`

    $('.out').css('display', 'block')
        // $('div.main_item').css('height', '100%');
    $('.main').html(iframe)

})
$('.out').click(function() {
    $('iframe').remove()
    $('.main').html(main_item)
        // $('.wrap-main').append(main_item_game)
    $(this).css('display', 'none')
    get_game()
})


var data = [];
var input = $('input')
var number = ""

function call() {
    var num = $('p.num_value');
    num.click(function() {
        data.push($(this).text())
        number = data.join('')
        input.val(number)
        console.log(number)


    })
    $('#delete_number').click(function() {


        if (data.length > 0) {
            number = number.split('')
            console.log(typeof number)
            number = data.pop()
            var num = data.join('')
        }

        input.val(num)


    })

}
call()