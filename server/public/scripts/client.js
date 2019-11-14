import { log } from "util";

// import { log } from "util";

$(document).ready(onReady);

function onReady(){
    console.log('JQ');
    getTest();
    $('#sendMessageButton').on('click', sendMessage);
}

function sendMessage(){
    console.log('in sendMessage');
    // get user input and put into object
    let objectToSend= {
        user: $('#nameIn').val('');
        message: $('#messageIn').val('');
        $.ajax({
            type: 'POST',
            url: '/messages',
            data: objectToSend
        }).then( function( err ){
            alert('error sending message. See console for details');
            console.log(err );
        }).catch( function( err){

        })
    }
}

function getTest(){
    //use AJAX to make a GET call to /test
    $.ajax({
        type: 'GET',
        url: '/test'
    }).then( function( response){
        //put response on DOM
        console.log('Back from GETwith:', response);
        $('#testOut').text( response );
    }).catch(function( error){
        //handle any errors
        alert('error getting test. See console for details');
        console.log(err);
    })
} //end testGet

function testPost(){
    // assemble objectToSend
    let objectToSend = {
        test: 'this is a test'
    } // end objectToSend
    // AJAX POST to our server
    $.ajax({
        type: 'POST',
        url: '/test',
        data: objectToSend
    }).then( function(response){
        console.log('back from POST with:', response);
    }).catch(function(error){
        alert('error with POST, check console for details');
        console.log(error);
    }) // end AJAX
} // end testPost

function getMessages(){
    $.ajax({
        type: 'GET',
        url: '/messages'
    }).then( function(response){
        console.log('back from GET with: ', response);
        let el = $('#messagesOut');
        el.empty();
        for (let i = 0; i<response.length; i++);
            let thingy = repsonse [i];
            el.append(`<li>${}`)
    }).catch( function( req, res))
    //update DOM

}