let num = 0;
function d_dec() {
  num = num - 3;
	document.getElementById('value').innerHTML = num;
}
function decrement() {
  num--;
  document.getElementById('value').innerHTML = num;
}
function reset() {
	num = 0;
  document.getElementById('value').innerHTML = num;
}
function increment() {
  num++;
  document.getElementById('value').innerHTML = num;
}
function d_inc() {
  num = num + 3;
	document.getElementById('value').innerHTML = num;
}
