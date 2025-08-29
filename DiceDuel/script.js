const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');
const result = document.getElementById('result');
const rollBtn = document.getElementById('rollBtn');

// Dice images (1-6)
const diceFaces = [
  "https://i.imgur.com/Ia6QWUG.png", // 1
  "https://i.imgur.com/fN4L7xX.png", // 2
  "https://i.imgur.com/Dp5gT7t.png", // 3
  "https://i.imgur.com/UMIACSt.png", // 4
  "https://i.imgur.com/Uw8dXSp.png", // 5
  "https://i.imgur.com/ZqL1H9N.png"  // 6
];

rollBtn.addEventListener('click', () => {
  const roll1 = Math.floor(Math.random() * 6);
  const roll2 = Math.floor(Math.random() * 6);

  dice1.src = diceFaces[roll1];
  dice2.src = diceFaces[roll2];

  if (roll1 > roll2) {
    result.textContent = "🎉 Player 1 Wins!";
  } else if (roll2 > roll1) {
    result.textContent = "🎉 Player 2 Wins!";
  } else {
    result.textContent = "🤝 It's a Draw!";
  }
});
