function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
/*Ajax contact form*/
$("#kontaktmig").submit(function (event) {
    // cancels the form submission
    event.preventDefault();
    submitForm();
});

function submitForm() {
    // Initiate Variables With Form Content
    var navn = $("#navn").val();
    var email = $("#email").val();
    var henvendelse = $("#henvendelse").val();
    var besked = $("#besked").val();
    $.ajax({
        type: "POST"
        , url: "formhandler.php"
        , data: "navn=" + navn + "&email=" + email + "&henvendelse=" + henvendelse + "&besked=" + besked
        , success: function (text) {
            if (text == "success") {
                formSuccess();
            }
            else {
                formFailure(text);
            }
        }
    });
}

function formSuccess() {
    $("#formfeedback").removeClass("hidden");
    $("#kontaktmig").addClass("hidden");
    $("#formfailure").addClass("hidden");
}

function formFailure(text) {
    $("#formfailure").removeClass("hidden");
    $("#formfailure").html(text);
}
/* Stefans js for animation*/
//var element_clicked = document.getElementById("clickme");
//element_clicked.addEventListener("click", rotateScript);
//function rotateScript(){
//    element_clicked.classList.add("spinlogo");
//}
//
//$("clickme").click(function(){
//    $(this).addClass("spinlogo");
//}
/*Billede Modal vindue*/
$(document).ready(function () {
    $('a').nivoLightbox({
        effect: 'slideRight'
        , keyboardNav: false
    , });
});
/* loader*/
var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}
/* TweenMax*/
window.addEventListener("load", altErLoadet);

function altErLoadet() {
    TweenMax.staggerFrom(".column_and_name_container p", 1, {
        opacity: "0"
    }, -.1);
}

function del2() {
    console.log("hele stagger animation slut");
    TweenMax.staggerFrom(".column_and_name_container svg", 1, {
        width: "0"
    }, .1);
}

function hveranimaionslut() {
    console.log("Hver animatiob slut")
}


/* Facebook*/ 

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/da_DK/sdk.js#xfbml=1&version=v2.12';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));