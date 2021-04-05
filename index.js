function scuberGreetingForFeet(value){
if (value <= 400) {
  return 'This one is on me!';
} else if (value > 2500) {
  return 'No can do.';
} else if (value > 2000) {
  return 'I will gladly take your thirty bucks.';
}
}

function ternaryCheckCity(city){
  const response = city === 'NYC' ? 'Ok, sounds good.':'No go.';
  return response;
}

function switchOnCharmFromTip(tip){
let response;
  switch (tip) {
  case 'generous':
    response = "Thank you so much.";
    break;
  case 'not as generous':
    response = "Thank you."
    break;
  default:
    response = "Bye."
}
return response;
}