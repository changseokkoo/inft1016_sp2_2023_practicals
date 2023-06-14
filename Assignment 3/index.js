function changeImage1() {
    var img = document.getElementById("img1");
    var p = document.getElementById("p1");
  
    img.src = "b1.jpg";
    p.innerHTML = "by Michael Matti";
}
function changeImage2() {
    var img = document.getElementById("img2");
    var p = document.getElementById("p2");
    img.src = "b2.jpg";
    p.innerHTML = "by LollyKnit";
}
function changeImage3() {
    var img = document.getElementById("img3");
    var p = document.getElementById("p3");
    img.src = "b3.jpg";
    p.innerHTML = "by Gareth1953 All Right Now";
}
function changeImage4() {
    var img = document.getElementById("img4");
    var p = document.getElementById("p4");
    img.src = "b4.jpg";
    p.innerHTML = "by F H Mira";
}
function changeImage5() {
    var img = document.getElementById("img5");
    var p = document.getElementById("p5");
    img.src = "b5.jpg";
    p.innerHTML = "by Brisbane City Council";
}
var toggleButton = document.querySelector('.toggle');
    toggleButton.addEventListener("click", () => {
        document.querySelector('.inner_contents').classList.toggle('dark-mode');
        // document.querySelector('.contents').classList.toggle('.dark-mode');
    });

function getCurrentDateTime() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
    }
document.querySelector('.date-time').textContent = getCurrentDateTime();