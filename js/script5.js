let cardNum;
cardNum = prompt('Введите номер вашей карты');
let number = '1234567899876543';
number = ( number.replace(number.slice (0 , -4), "**********"));
alert ('Номер вашей карты' + number);
console.log("Номер вашей карты: " + number.replace(number.slice (0 , -4), "**********"));