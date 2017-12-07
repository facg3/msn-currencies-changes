window.onload = btnListener();

function fetch(url, data, callback) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      const response = JSON.parse(xhr.responseText);
      callback(response);
    }
  };
  xhr.open('GET', url);
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

      const nameC = document.querySelector('.crate');
      nameC.innerHTML = `Every one of ${document.getElementById('secondValue').value} equal
      ${currenciesFunctions.rateCurrencies(response)} from
      ${document.getElementById('firstValue').value}`;
    });
  });
}
const currenciesFunctions = {
  rateCurrencies(res) {
    return res.asks[0][0];
  },
};
let data = () => {
  const value1 = document.getElementById('firstValue').value;
  const value2 = document.getElementById('secondValue').value;
  const Values1 = ['BTC', 'ETH', 'USDT', 'XMR'];
  const Values2 = ['ETH', 'ZEC', 'NXT', 'BCH', 'LTC', 'SC', 'BTC'];
  if (!Values1.includes(value1) || !Values2.includes(value2)) {
    return alert('not supported this curreny');
  }
  if (value1 === value2) {
    return alert("it's the same of curreny");
  }
  const fullValue = `${value1}_${value2}`;

  return fullValue;
};
