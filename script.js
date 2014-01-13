
(function( js, $, undefined ) {
    //Private Property
    var isHot = true;

    //Public Property
    js.ingredient = "Bacon Strips";

    //Public Method
    js.fry = function() {
        var oliveOil;

        addItem( "\t\n Butter \n\t" );
        addItem( oliveOil );
        console.log( "Frying " + skillet.ingredient );
    };

    //Private Method
    function addItem( item ) {
        if ( item !== undefined ) {
            console.log( "Adding " + $.trim(item) );
        }
    }    
}( window.js = window.js || {}, jQuery ));
