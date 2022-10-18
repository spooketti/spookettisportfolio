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
      
      function fun() {var a="-webkit-",b='transform:rotate(1turn);',c='transition:4s;';document.head.innerHTML+='<style>body{'+a+b+a+c+b+c}

  fun();
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