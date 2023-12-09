$(document).ready(function() {
    $('button').click(function() {
        $('#test').hide();
        $(this).css({'border': '1px solid red'});
        $('.heading').addClass('selected');

        $("ul.wishList").append("<li>New blender</li>");
        $('p').html('Hello World!');

        $('#myDiv').animate({
            height: '200px',
            width: '200px'
        },
        5000, function () {
            $('#msgDiv').append('Animation completed');
        })


        $('#myDiv').animate({
            height: '200px',
            width: '200px'
        }, 
        {    // options parameter 
            duration: 5000,
            complete: function () {
                $(this).animate({
                    height: '100px',
                    width: '100px'
                }, 5000,
                function () {
                    $('#msgDiv').text('Animation completed..');
                });
            },
            start: function () {
                $('#msgDiv').append('starting animation..');
            }
        });

    })
})
// const button  = document.querySelector('button');
// button.addEventListener('click', function(){
//     document.getElementById('test').style.display = 'none';
//     button.style.border = '1px solid red'

// })

$.getJSON('/jquery/getjsondata', { name:'Steve'}, function(data, textStatus, jqXHR){
    alert(data.firstName);
})
.done(function () { alert('Request done!'); })
.fail(function (jqxhr,settings,ex) { alert('failed, '+ ex); });

if($('#myDiv').is('div')) {
    
}