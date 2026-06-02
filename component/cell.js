import {
  classIDS,
  boardState,
  textContent,
  pattern,
} from "../utils/constant.js";

import { addWinningLine } from "./popup.js";

export function addCellInsideParent() {
  const cellList = document.getElementById(classIDS.CELL);
  for (let i = 0; i < 9; i++) {
    const cellButton = document.createElement("button");
    cellButton.classList.add("cell-box");
    cellButton.setAttribute("data-id", i);
    cellList.append(cellButton);
  }
  addEventListenerToCell(cellList);
}

function addEventListenerToCell(parent) {
  parent.addEventListener("click", (e) => {
    const button = e.target;
    const cellId = parseInt(button.getAttribute("data-id"));
    button.textContent = textContent.current;
    boardState[cellId] = textContent.current;
    button.disabled = true;
    checkISGameComplete(boardState, button.textContent);
  });
}

function checkISGameComplete(arr, clickText) {
  const newArr = pattern.WINNING_PATTERNS.find((inner, i) => {
    return inner.every((a) => boardState[a] === textContent.current);
  });
  textContent.current = textContent.current === "X" ? "O" : "X";
  if (newArr) {
    addWinningLine(newArr, clickText);
  } else {
    checkGameCellCompelte();
  }
}

function checkGameCellCompelte(){
    if(!boardState.includes('')) window.location.reload();
}
