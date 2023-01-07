'use strict';
const qrInput = document.querySelector('input'),
	generateBtn = document.querySelector('.generate__btn'),
	qrImg = document.querySelector('img');

generateBtn.addEventListener('click', e => {
	e.preventDefault();
	let qrValue = qrInput.value;
	console.log(qrInput.value);
	qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
});
