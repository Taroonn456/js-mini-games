
function play(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computer = choices[Math.floor(Math.random() * 3)];

  let result = "";
  if (userChoice === computer) {
    result = "It's a tie!";
  } else if (
    (userChoice === 'rock' && computer === 'scissors') ||
    (userChoice === 'paper' && computer === 'rock') ||
    (userChoice === 'scissors' && computer === 'paper')
  ) {
    result = You win! Computer chose ${computer};
  } else {
    result = You lose! Computer chose ${computer};
  }

  document.getElementById('result').innerText = result;
}
