/* Task 1 */
const userDate = Number(prompt('Enter a day of the month'));

switch (userDate) {
  case 1:
  case 8:
  case 15:
  case 22:
  case 29:
    alert('Monday.');
    break;
  case 2:
  case 9:
  case 16:
  case 23:
  case 30:
    alert('Tuesday.');
    break;
  case 3:
  case 10:
  case 17:
  case 24:
  case 31:
    alert('Wednesday.');
    break;
  case 4:
  case 11:
  case 18:
  case 25:
    alert('Thursday.');
    break;
  case 5:
  case 12:
  case 19:
  case 26:
    alert('Friday.');
    break;
  case 6:
  case 13:
  case 20:
  case 27:
    alert('Saturday.');
    break;
  case 7:
  case 14:
  case 21:
  case 28:
    alert('Sunday.');
    break;
  default:
    alert('You entered incorrect date! Error!');
    break;
}

/* Task 2 */
const day = prompt('Enter a day from 1 to 31 :');

function isCorrect(value) {
  return Number(value) >= 1 && Number(value) <= 31;
}

function whichDecade(dayOfMonth) {
  let determinant = null;
  if (dayOfMonth >= 1 && dayOfMonth <= 10) {
    determinant = 1;
  } else if (dayOfMonth >= 11 && dayOfMonth <= 20) {
    determinant = 2;
  } else {
    determinant = 3;
  }
  return determinant;
}

if (isCorrect(day)) {
  const decade = whichDecade(day);
  switch (decade) {
    case 1:
      alert('Day refers to the first decade.');
      break;
    case 2:
      alert('Day refers to the second decade.');
      break;
    case 3:
      alert('Day refers to the third decade.');
      break;
    default:
      break;
  }
} else {
  alert('You entered incorrect date! Error!');
}
