let x = 0;
let y = 0;
let mouseX = 0;
let mouseY = 0;
let speed = 0.05; // 마우스 이동 속도
let _imgArr;
let _bird;

//function
function loop(){
    mouseX += (x - mouseX)*speed;
    mouseY += (y - mouseY)*speed;

    _imgArr[1].style.transform = `translate(${-mouseX/50}px, ${-mouseY/50}px)`;
    _imgArr[2].style.transform = `translate(${-mouseX/30}px, ${-mouseY/30}px)`;
    _imgArr[3].style.transform = `translate(${-mouseX/10}px, ${-mouseY/10}px)`;
    _bird.style.transform = `translate(${-mouseX/13}px, ${-mouseY/13}px)`;

    window.requestAnimationFrame(loop);
}


window.onload = function(){
    _imgArr = document.getElementsByTagName("img");
    _bird = document.getElementsByTagName("div")[0];

    window.addEventListener("mousemove", mouseFunc, false);

    function mouseFunc(e){
        x = (e.clientX - window.innerWidth/2);
        y = (e.clientY - window.innerHeight/2);
    };

    loop();
}