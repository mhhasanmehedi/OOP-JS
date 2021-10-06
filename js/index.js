let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let container = document.querySelector('ul');
document.querySelector('button').addEventListener('click', function (e) {
  e.preventDefault();
  if (input1.value === '' && input2.value === '') {
    alert('please add Valid number');
  } else {
    let obj = new Calculations(parseInt(input1.value), parseInt(input2.value));
    input1.style.borderBottom = 'white';
    input2.style.borderBottom = 'white';
    container.style.padding = '15px';
    container.innerHTML = `<li>Addition ${obj.add()}</li>`;
    container.innerHTML += `<li>Substruction ${obj.sub()}</li>`;
    container.innerHTML += `<li>Multiplication ${obj.mul()}</li>`;
    container.innerHTML += `<li>division ${obj.div()}</li>`;
    input1.value = ' ';
    input2.value = ' ';
  }
});
