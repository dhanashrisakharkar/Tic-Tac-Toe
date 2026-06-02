import { classIDS } from "../utils/constant.js";

export function addWinningLine(arr, clickText) {
  if (arr.length !== 3) return;
  const winnerPopUp = document.getElementById(classIDS.POPUPParent);
  const h1section = document.createElement("h1");
  const header = document.getElementById(classIDS.POPPUPTEXT);
  h1section.textContent = `yahoo 🏆 ${clickText} Wins! 🎉 😄`;
  winnerPopUp.showModal();
  header.append(h1section);
  addEventOnResetPlayButton();
}

function addEventOnResetPlayButton() {
  const rePlayButton = document.getElementById(classIDS.RESETBUTTON);
  const winnerPopUp = document.getElementById(classIDS.POPUPParent);
  rePlayButton.addEventListener("click", () => {
    winnerPopUp.close();
    window.location.reload();
  });
}
