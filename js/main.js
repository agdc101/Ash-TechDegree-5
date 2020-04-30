

$('input').on('keyup', () => {

    $('a').each( function (){
        let search = $('input').val();
        let caption = $(this).attr('data-title');
        let image = $(this);

        if ( !caption.includes(search) ) {
            console.log('hooray');

            // if the caption isnt included. hide() the image
        }
       
    });
    
    
})




