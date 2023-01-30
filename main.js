let result = "";
let is_calc = false;

window.onload = function() {
  result = document.querySelector('.result span');
};


function c_click() {
  result.innerHTML = "0";
  is_calc = false;
}

function num_click(val) {
  if(is_calc)  result.innerHTML = "0";
  is_calc = false;  

  if(result.innerHTML == "0" && val == "0") {
    result.innerHTML = "0";
  }else if(result.innerHTML == "0" && val == ".") {
    result.innerHTML = "0.";
  }else if(result.innerHTML == "0") {
    result.innerHTML = val;
  }else{
    result.innerHTML += val;
  }
}

function negative_click() {
  result.innerHTML = -result.innerHTML;
}

function percent_click() {
  result.innerHTML = result.innerHTML / 100;
}

function sign_click(val) {
  if(is_calc) is_calc = false;
  
  if(is_sign_last()) {
    result.innerHTML = result.innerHTML.slice(0, -1) + val;
  } else {
    result.innerHTML += val;
  }
}

function equals_click() {
  if(is_sign_last())  result.innerHTML = result.innerHTML.slice(0, -1);

  let temp = new Function("return " + result.innerHTML.replaceAll("×", "*").replaceAll("÷", "/"))();
  if(temp == Infinity || Number.isNaN(temp)) {
    result.innerHTML = "Error";
  } else {
    result.innerHTML = temp;
    is_calc = true;
  }
}

function is_sign_last(){
	return ["+","-","×","÷"].includes(result.innerHTML.toString().slice(-1));
} 