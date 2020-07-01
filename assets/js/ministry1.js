$(document).ready(function(){
    $('.burger').on('click', function(){
        $('.nav__lists').toggleClass('open')
    })
})
$(document).ready(function(){
    $('.burger').on('click', function(){
        $(this).toggleClass('open')
    })
})
$(document).ready(function(){
    $('.search').on('click', function(){
        $('.search-bar').toggleClass('open')
    })
})