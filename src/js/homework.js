let one = prompt("Какой Вы хотите сайт? 0 - Визитка, 1 - Корпоративный, 2 - Интернет-магазин");
let two = prompt("На чем адаптивность? 0 - Только под мобилки, 1 - Только под ПК, 2 - Full");
let three = prompt("Вы дизайн предоставите? 0 - Да, 1 - Нет, делай сам =)");
let price = 0;

if(one == "0") {
    price = 30000;
} else if(one == "1") {
    price = 35000;
} else {
    price = 180000;
}

if(one == "0") {
    price += 5000;
} else if(one == "1") {
    price += 5000;
} else {
    price += 15000;
}

if(one == "0") {
    price += 0;
} else {
    price += 8000;
}

alert("Стоимость сайта: " + price);
