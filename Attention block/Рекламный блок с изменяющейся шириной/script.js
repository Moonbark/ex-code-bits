let items = document.querySelectorAll(".item");

// items[1].className = "item active";

/*
let index = 0;
setInterval(function() {
  if (index) {
    items[index - 1].className = "item";
  } else {
    items[items.length - 1].className = "item";
  }
  if (index === items.length) {
    index = 0;
  }
  items[index].className = "item active";
  index++;
}, 2000);
*/

// создание рандомного градиента

function getNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function getColor(r, g, b) {
  let red = getNumber(...r);
  let green = getNumber(...g);
  let blue = getNumber(...b);
  return `rgb(${red},${green},${blue})`;
}

function setGradient(colors, angle = 120) {
  return `linear-gradient(${angle}deg, ${colors})`;
}

/*
В качестве аргументов функции getColor передается массив с минимальным и максимальным количеством присутствия каждого оттенка RGB-схемы. Так задается определенный характер цветовой гаммы, а не разброс красок в хаотичном формате.
*/

let index = 0;

setInterval(function() {
	let colorStart = getColor([100,200], [50,200], [200, 256]);
	let colorEnd = getColor([100,150], [50,100], [200, 256]);

	items[index].classList.add('active');

	items[index].style.backgroundImage = setGradient([colorStart, colorEnd]);

	for (let i = 0; i < items.length; i++) {
		if (i !== index) {
			items[i].classList.contains('active') && // непонятно зачем нужна эта строка
			items[i].classList.remove('active');
		}
	}
	index++;
	if (index === items.length) {
		index = 0;
	}
}, 2000);



