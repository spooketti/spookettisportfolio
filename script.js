let follow = document.querySelector(".coord")
document.addEventListener("mousemove", function(e) {

  var x = e.clientX;
  var y = e.clientY;
  var coords = "Mouse is at: (" + x + "," + y + ")";
  //follow.style.left = e.pageX + "px";
  //follow.style.top = e.pageY + "px";
  follow.innerHTML = coords
});

/*
current design: green-blue neon light flickering in its suddenly activited eyebulbs (key eyebulbs)

scraping metal
rusty cogs
eight insect legs
(23)

TproboscisT needle
（22）
*/