/*

Instructions:

---- PART 1 ----
Start by removing that pirate flag (#pirate).

Next, add a gradient to the whole page by applying the "gradient" class to the body.

---- PART 2 ----
Now, to make things a little more complicated, let's activate the "Start" button:

When the user clicks the "Start" button, change the text of "status" to read "GO". 
Let's also change the background color of "status" to green.
Change the text of the "Start" button to read "Stop".

When the user clicks the bottom again, revert all of the above. 
So "status" should read "STOP", it's background color should be red, and the button itself should read "Start" again.

Hint: you will want to store the current state of the button in a variable.

---- PART 3 ----
Now that we have stored the status of our button, let's show the user an image if the mouse is over our green "GO" box.

If the user has activated the button, toggle the visibility of id "cat" to reveal our animated leopard.

*/
var clickd=false; /*muthafucka got shit on em*/

var over=true; /*muthafucka got mo shit on em*/


/*off*/

/*conjuction function*/
$("#pirate").hide(); /*davyjoneslocker*/
// $("#cat").show(); /*welcome2thejungle*/
$("body").addClass("gradient"); /*smear*/
$("#status").mousemove (function() {
        if (over == true) {  /*start button is off*/
            $('#cat').css("display","inline");
            $("#toggle").html("stop"); 
            over = false;   /*off*/
            
            }
            
        else {
            $("#cat").css("display","none"); /*scram cat*/
            $("#toggle").html("start"); 
            over = true; /*on*/
            
        }
});

$("#toggle").click(function(){
    if (clickd == false) {
        
        $("#status").html("go");  /*(id).location(feature)*/
        $("#status").css("background-color", "green");  /*(id).location(feature)*/
        $("#toggle").html("stop");  /*(id).location(feature)*/
        $("#cat").css("display","block"); 
                console.log("clicked false"); /*console is only used for call and response*/
        clickd = true; /*turns off*/
}
    else {
        $("#status").html("stop");
        $("#status").css("background-color","red");
        $("#toggle").html("start");
        $("#cat").css("display","none"); 

                 console.log("clickd true");
        clickd = false; /*turns on*/
  }
  
  
  
  
  
  
})
