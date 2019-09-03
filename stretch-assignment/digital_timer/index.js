let startTime = 0;
let endTime = startTime + (10 * 1000); // seconds * milliseconds
// console.log(startTime);
// console.log(endTime);
// console.log(new Date(startTime));
// console.log(new Date(endTime));

let secondTens =  document.querySelector('#secondTens');
let secondOnes =  document.querySelector('#secondOnes');
let msHundreds =  document.querySelector('#msHundreds');
let msTens =  document.querySelector('.digits #msTens');
let digits = document.querySelector('.digits');

function pad(number, length) {
  var str = '' + number;
  while (str.length < length) {
      str = '0' + str;
  }
  return str;
}

function timer() {
  startTime += 10;
  // paddedTime = pad(startTime, 5)

  // msTens.textContent = paddedTime.toString().charAt(3);
  // msHundreds.textContent = paddedTime.toString().charAt(2);
  // secondOnes.textContent = paddedTime.toString().charAt(1);
  // secondTens.textContent = paddedTime.toString().charAt(0);

  let milliseconds = (new Date(startTime)).getMilliseconds();
  let seconds = (new Date(startTime)).getSeconds();
  if (milliseconds < 100) {
    msTens.textContent = milliseconds.toString().charAt(0);
    msHundreds.textContent = 0; 
  } else {
    msTens.textContent = milliseconds.toString().charAt(1);
    msHundreds.textContent = milliseconds.toString().charAt(0);
  }
  if (seconds < 10) {
    secondOnes.textContent = seconds;
    secondTens.textContent = 0;
  } else {
    secondOnes.textContent = seconds.toString().charAt(1);
    secondTens.textContent = seconds.toString().charAt(0);
  }

  if(startTime >= endTime) {
    digits.style.color = "red";
    clearInterval(functionId);
  }
  
}

let functionId = window.setInterval(timer, 10);
