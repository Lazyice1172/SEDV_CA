//CHANGE FONT SIZE
var Cookie = "Font Size";
window.onload=function () {

    var fontsize = decodeURIComponent(document.cookie);

    if (fontsize == "larger") {
        $(".textWithImages>div>p , .box p, .help p, fieldset>p, fieldset>div>span").css({
            "font-size": "30px"
        });
    } else {
        $(".textWithImages>div>p , .box p, .help p, fieldset>p, fieldset>div>span").css({
            "font-size": "18px"
        });
    }
};

var fontsize = "normal";
function decrease_font_size( )
{
    $(".textWithImages>div>p , .box p, .help p, fieldset>p, fieldset>div>span").css({
        "font-size": "18px"
    });
    var fontsize = "normal";
    document.cookie = Cookie + "=" + fontsize + ";path=/";
}

function increase_font_size( )
{
    $(".textWithImages>div>p , .box p, .help p, fieldset>p, fieldset>div>span").css({
        "font-size": "30px"
    });
    var fontsize = "larger";
    document.cookie = Cookie + "=" + fontsize + ";path=/";
}//____________________________________________________


