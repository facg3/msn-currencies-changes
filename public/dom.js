window.onload = btnListener();

function fetch(url, data, callback) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      const response = JSON.parse(xhr.responseText);
      callback(response);
    }
  };
  xhr.open('POST', url);
  if (data) {
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.send(data);
  }
}


function btnListener() {
  const btn = document.querySelector('input');
  btn.addEventListener('click', (event) => {
    event.preventDefault();
    const currencies = data();
    fetch('/concurrent', currencies, (response) => {
      // console.log(response);
      const nameC = document.querySelector('.crate');
      nameC.innerHTML = currenciesFunctions.rateCurrencies(response);
    });
  });
}
const currenciesFunctions = {
  rateCurrencies(res) {
    return res.asks[0];
  },
};
let data = function () {
  const value1 = document.getElementById('firstValue').value;
  const value2 = document.getElementById('secondValue').value;
  const fullValue = `${value1}_${value2}`;

  return fullValue;
};
