$(function() {
    console.log('ready Jquery');
   //      Je clique sur le bouton 
   //      on ajoute la classe show a UL 
   $('#menus').click(function(){
        console.log('OK');
        $('#kiwi ul').toggleClass('show');
   });
});


//        Test Load More            //

$(function () {
    $('#p').slice(0, 1).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $("div:hidden").slice(0, 2).slideDown();
        if ($("div:hidden").length == 0) {
            $("#load").toggleClass('slow');
            //          Permet de faire disparaitre le bouton           //
            $('#loadMore').remove();
        }
    });
});


