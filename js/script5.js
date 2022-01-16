let cardNum;
cardNum = prompt('Введите номер вашей карты');

number = cardNum.replace(cardNum.slice (0 , -4), "************");

alert ('Номер вашей карты' + number);

// console.log("Номер вашей карты: " + number.replace(number.slice (0 , -4), "**********"));