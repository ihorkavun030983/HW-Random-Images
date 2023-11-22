let pictures = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg'];
let randomImg = pictures[Math.floor(Math.random() * pictures.length)];
document.write('<img src="' + randomImg + '"/>');
