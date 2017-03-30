
console.log('hi')

var asides = document.getElementsByTagName("aside");
for(var i = 0; i < asides.length; i++){
   //do something to each div like
   asides[i].remove();
}

elements = document.getElementsByClassName('l75')

for(var i = 0; i < elements.length; i++){
   //do something to each div like
   elements[i].style.width = "100%";
}
