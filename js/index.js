let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let container = document.querySelector("ul");
document.querySelector("button").addEventListener("click", function (e) {
  e.preventDefault();
  if (input1.value === "" && input2.value === "") {
    alert("please add Valid number");
  } else {
    let obj = new Calculations(parseInt(input1.value), parseInt(input2.value));
    input1.style.borderBottom = "white";
    input2.style.borderBottom = "white";
    container.style.padding = "15px";
    container.innerHTML = `<li>Addition value ${obj.add()}</li>`;
    container.innerHTML += `<li>Substruction value ${obj.sub()}</li>`;
    container.innerHTML += `<li>Multiplication value ${obj.mul()}</li>`;
    container.innerHTML += `<li>Division value ${obj.div()}</li>`;
    input1.value = " ";
    input2.value = " ";
  }
});
