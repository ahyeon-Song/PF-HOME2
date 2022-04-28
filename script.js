AOS.init(); 


// 모바일 감지 코드
// const filter = "win16|win32|win64|mac|macintel";
// if(0 > filter.indexOf(navigator.platform.toLowerCase())){
//     alert("Please visit with PC 👏");
// }



//  기존 창
//     var img = document.getElementsByClassName("gallery-img");
//     for (var x = 0; x < img.length; x++) {
//       img.item(x).onclick=function() {window.open(this.src, '_self')}; 
//     }

const newimg = document.getElementsByClassName('gallery-img');

function imageSizeX2() {
    const newimg = document.getElementsByClassName('gallery-img');
    neww = newimg.width;
    newh = newimg.height;
    newimg.width = neww * 2;
    newimg.height = newh * 2;
}

newimg.addEventListener('click', imageSizeX2);

