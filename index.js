var main = document.getElementById("main");
var maintitle = document.getElementById("maintitle");
var bg1 = document.getElementById("bg1");
var bg2 = document.getElementById("bg2");
var bg3 = document.getElementById("bg3");
var bg4 = document.getElementById("bg4");

var mpic1 = document.getElementById("mpic1");
var mpic2 = document.getElementById("mpic2");
var mpic3 = document.getElementById("mpic3");

bg1.addEventListener("click", function(){
    main.style.display="block";
    mpic1.style.backgroundImage="URL(imgs/gears/h1.png)";
    mpic1.style.display="cover";
    mpic2.style.backgroundImage="URL(imgs/gears/h2.png)";
    mpic2.style.display="cover";
    mpic3.style.backgroundImage="URL(imgs/gears/h3.png)";
    mpic3.style.display="cover";
    maintitle.textContent="Head Gear"
});

bg2.addEventListener("click", function(){
    main.style.display="block";
    mpic1.style.backgroundImage="URL(imgs/gears/b1.png)";
    mpic2.style.backgroundImage="URL(imgs/gears/b2.png)";
    mpic3.style.backgroundImage="URL(imgs/gears/b3.png)";
    maintitle.textContent="Body Gear"
});

bg3.addEventListener("click", function(){
    main.style.display="block";
    mpic1.style.backgroundImage="URL(imgs/gears/l1.png)";
    mpic2.style.backgroundImage="URL(imgs/gears/l2.png)";
    mpic3.style.backgroundImage="URL(imgs/gears/l3.png)";
    maintitle.textContent="Leg Gear"
});

bg4.addEventListener("click", function(){
    main.style.display="block";
    mpic1.style.backgroundImage="URL(imgs/gears/f1.png)";
    mpic2.style.backgroundImage="URL(imgs/gears/f2.png)";
    mpic3.style.backgroundImage="URL(imgs/gears/f3.png)";
    maintitle.textContent="Foot Gear"
});



