let follow = document.querySelector(".coord")
document.addEventListener("mousemove", function(e) {

  var x = e.clientX;
  var y = e.clientY;
  var coords = "Mouse is at: (" + x + "," + y + ")";
  //follow.style.left = e.pageX + "px";
  //follow.style.top = e.pageY + "px";
  follow.innerHTML = coords
});

var sequence = [38,38,40,40,37,39,37,39,66,65]
var pos = 0;
document.addEventListener('keydown', function(e) 
  {
  var expected = sequence[pos]
  if(e.keyCode == expected)
  {
    pos++;
    if(pos == 10)
    {
      var am,bm,cm
      function fun() 
      {
         
am="-webkit",bm='transform:rotate(1turn);',cm='transition:4s;';
        document.body.style += am+bm+am+cm+bm+cm
      }
    

  fun();
      setTimeout(() => {
   document.body.style -= am+bm+am+cm+bm+cm
}, "4000") 
      
      
        pos = 0;
      
        }
      
  }
else
  {
    pos = 0;
  }
})
/*
current design: green-blue neon light flickering in its suddenly activited eyebulbs (key eyebulbs)

scraping metal
rusty cogs
eight insect legs
(23)

TproboscisT needle
（22）
*/