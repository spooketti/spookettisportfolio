let follow = document.querySelector(".coord")
document.addEventListener("mousemove", function(e) {

  var x = e.clientX;
  var y = e.clientY;
  var coords = "Mouse is at: (" + x + "," + y + ")";
  //follow.style.left = e.pageX + "px";
  //follow.style.top = e.pageY + "px";
  follow.innerHTML = coords
});