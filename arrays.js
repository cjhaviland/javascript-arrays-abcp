var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element){
  var a = array.slice();
  a.unshift(element);
  return a;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  var a = array;
  a.unshift(element);
  return a;
}

function addElementToEndOfArray(array, element){
  var a = array.slice();
  a.push(element);
  return a;
}