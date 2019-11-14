// import { log } from "util";

$(document).ready(onReady);

function onReady(){
    console.log('JQ');
    getTest();
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