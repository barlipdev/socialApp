import {Repository} from '../repo/repository.js'

const email = document.querySelector("#email");
const password = document.querySelector("#password");

var repository = new Repository();

form.addEventListener( "invalid", function( event ) {
    event.preventDefault();
}, true );

form.addEventListener( "submit", function( event ) {
    if ( !this.checkValidity() ) {
        event.preventDefault();
    }
});

var submitButton = form.querySelector( "button:not([type=button]), input[type=submit]" );
    submitButton.addEventListener( "click", function( event ) {
        var invalidFields = form.querySelectorAll( ":invalid" ),
            errorMessages = form.querySelectorAll( ".error-message" ),
            parent;
            
        for ( var i = 0; i < errorMessages.length; i++ ) {
            errorMessages[ i ].parentNode.removeChild( errorMessages[ i ] );
        }

        for ( var i = 0; i < invalidFields.length; i++ ) {
            parent = invalidFields[ i ].parentNode;
            parent.insertAdjacentHTML( "afterend", "<div class='error-message'>" + 
                invalidFields[ i ].validationMessage +
                "</div>" );
        }

        if ( invalidFields.length > 0 ) {
            invalidFields[ 0 ].focus();
        }
    });

function login()
{
    repository.login(email.value, password.value);
}


    

    