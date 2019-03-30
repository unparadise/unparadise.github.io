var myHeading = document.querySelector('h1');
myHeading.textContent = 'This is a JavaScript generated title';


var heroImage = document.querySelector('img');

heroImage.onclick = function() {
    var imgSrc = heroImage.getAttribute('src');
    if(imgSrc === 'https://picsum.photos/500/360/?random') {
	imgSrc.setAttribute('src', './images/forest.png');
    } else {
	imgSrc.setAttribute('src', 'https://picsum.photos/500/360/?random');
    }
}
