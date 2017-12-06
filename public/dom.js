window.onload = btnListener();

function fetch(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      const response = JSON.parse(xhr.responseText);
      callback(response);
    }
  };
  xhr.open('GET', url);
  xhr.send();
}
function btnListener() {
  const btn = document.querySelector('button');
  btn.addEventListener('submit', () => {
    const value1 = document.getElementById('firstValue').value;
    const value2 = document.getElementById('secondValue').value;
    const fullValue = `${value1}_${value2}`;
    console.log(fullValue);
  });
}
