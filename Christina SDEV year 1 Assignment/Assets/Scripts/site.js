//HIDES NAVBAR FOR MOBILE
function navbar() {
    var x = document.getElementById("NAV_BAR");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}//__________________________________________________________

//CANVAS FOR THE OUR WORK PAGE
function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
  
      ctx.beginPath();
      ctx.moveTo(0, 30);
      ctx.lineTo(150, 140);
      ctx.lineTo(300, 30);
      ctx.fillStyle = "#fb3b02";
      ctx.fill();
    }
}//__________________________________________________________

img_size = new Array(3);
img_size[0] = "Large";
img_size[1] = "Medium";
img_size[2] = "Small";

desc = new Array(3);
desc[0] = "2400 x 3600 pixels<br>203.2 x 304.8 mm<br>300 DPI PNG";
desc[1] = "1920 x 2880 pixels<br>162.56 x 243.84 mm<br>300 DPI PNG";
desc[2] = "640 x 960 pixels<br>54.19 x 81.28 mm<br>300 DPI PNG";

function change_image_desc(ig_size){
    //alert("Ihave been clicked");
    document.getElementById("IMG_SIZE").innerHTML = img_size[ig_size];
    document.getElementById("IMG_SIZE_DESC").innerHTML = desc[ig_size];
    
}
