
// -------- SEARCH BAR FUNCTION -------- //
$('input').on('keyup', () => {
    $('a').each( function (){
        let search = $('input').val().toLowerCase();
        let caption = $(this).attr('data-title').toLowerCase();
        // if the caption isnt included. hide() the image             
        if ( !caption.includes(search) ) {
            $(this).fadeOut(600);           
        } // show function added if user removes values to the input. 
        else {
            $(this).fadeIn(600);
        }
       
    });
    
    
})




