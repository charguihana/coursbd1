function goTo(page) {
  window.location.href = page;
}
/* seance1*/
let score = 0;

function show(id) {
  document.getElementById("rep" + id).style.display = "block";
}

function check(el, correct) {
  if (correct) {
    score++;
    el.parentElement.style.background = "lightgreen";
  } else {
    el.parentElement.style.background = "salmon";
  }
  document.getElementById("score").innerText = "Score : " + score;
}

function match(select) {
  let msg = document.getElementById("msg");

  if (select.value === "true") {
    msg.innerText = "✔️ Correct";
    msg.style.color = "green";
    score++;
  } else {
    msg.innerText = "❌ Faux";
    msg.style.color = "red";
  }

  document.getElementById("score").innerText = "Score : " + score;
}