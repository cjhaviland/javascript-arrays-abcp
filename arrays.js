var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element){
  var a = [];
  a.push(array);
  a.unshift(element);
  return a;
}

