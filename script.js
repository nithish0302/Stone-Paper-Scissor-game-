const res = JSON.parse(localStorage.getItem("res")) || {
  win: 0,
  lose: 0,
  tie: 0,
};

showscore();

function comp() {
  const moves = ["rock", "paper", "scissor"];
  const val = Math.floor(Math.random() * moves.length);

  return moves[val];
}

function playerdec(comdec, move) {
  let result = "";

  if (move === comdec) {
    result = "Tie";
    res.tie += 1;
  } else if (
    (move === "rock" && comdec === "scissor") ||
    (move === "paper" && comdec === "rock") ||
    (move === "scissor" && comdec === "paper")
  ) {
    result = "You Win";
    res.win += 1;
  } else {
    result = "You Lose";
    res.lose += 1;
  }

  localStorage.setItem("res", JSON.stringify(res));

  updateScore(result);
}

function updateScore(result) {
  document.querySelector(".scorebo").innerHTML = result;

  showscore();
}

function showscore() {
  document.querySelector(".alwaysscore").innerHTML =
    `You win: ${res.win} and You lose: ${res.lose} and Tie: ${res.tie}`;
}

function resetScore() {
  res.win = 0;
  res.lose = 0;
  res.tie = 0;

  localStorage.removeItem("res");

  document.querySelector(".scorebo").innerHTML = "";

  showscore();
}
