const numberInput = document.getElementById("number");
const textInput = document.getElementById("msg");
const button = document.getElementById("button");
const btn = document.getElementById("btn");
const response = document.querySelector(".response");

btn.addEventListener("click", Send, false);

function Send() {
  //   e.preventDefault();
  const number = numberInput.value.replace(/\D/g, " ");
  const text = textInput.value;

  fetch("/", {
    method: "post",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ number: number, text: text }),
  })
    .then(function (res) {
      console.log(res);
    })
    .catch(function (err) {
      console.log(err);
    });
}
