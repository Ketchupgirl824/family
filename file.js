var images=["https://cdn.dribbble.com/users/2834752/screenshots/6195752/mar_16.gif",
"https://i.gifer.com/Al2.gif",
"https://th.bing.com/th/id/R.5b697af6ccbbafd41606f630bda8ffc9?rik=y3P6sVbRoJHDPw&pid=ImgRaw",
"https://newcastlebeach.org/explore/animated-grandma/",
"https://www.fg-a.com/grandparents-day-2.html"];
var names=["Amit","Priyanka","Ishani","Shakuntala","Nagin"];
  var i=0;
  function nextslide() {
    
    document.getElementById("album").src= images[i];  document.getElementById("name").innerHTML= names[i];
    i++;
    if(i == 5)
    {
      i=0;
    }
  }
  