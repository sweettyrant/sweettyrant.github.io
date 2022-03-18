var arrayImg = new Array();
arrayImg[0] = "img/1.jpg";
arrayImg[1] = "img/2.jpg";
arrayImg[2] = "img/3.jpg";
arrayImg[3] = "img/4.jpg";


getRandomImage(arrayImg);

function getRandomImage(imgAr) {
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];

    var imgStr = '<img class="photos" src="' + img + '" alt = "">';
    document.write(imgStr); document.close();
}