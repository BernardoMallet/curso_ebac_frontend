$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#btn-cancel').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        
        const cardTitle = $('#cardTitle').val();
        const deadline = $('#deadline').val();
        const cardDescription = $('#cardDescription').val();
        const newList = $('<li style="display: none class="cardDone"></li>');

        $(`<h3>${cardTitle}</h3>`).appendTo(newList);
        $(`<time>${deadline}</time>`).appendTo(newList);
        $(`<p>${cardDescription}</p>`).appendTo(newList);
        $(newList).appendTo('ul');
        $(newList).fadeIn();

        $('cardTitle').val('');
        $('#deadline').val('');
        $('#cardDescription').val('');

        $('li').click(function(){
            $(this).addClass('cardDone');
        })
    }) 

})