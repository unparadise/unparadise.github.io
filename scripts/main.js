var myHeading = document.querySelector('h1');
myHeading.textContent = 'Frank Chen';


var heroImage = document.querySelector('img');

heroImage.onclick = function() {
    var imgSrc = heroImage.getAttribute('src');
    if(imgSrc === 'https://picsum.photos/500/360/?random') {
	imgSrc.setAttribute('src', './images/forest.png');
    } else {
	imgSrc.setAttribute('src', 'https://picsum.photos/500/360/?random');
    }
}
