export const classIDS = {
    BOARD : "board-layout",
    CELL : "cell-list",
    POPUPParent : 'winner-popup',
    RESETBUTTON : 'play-again',
    POPPUPBox : 'winner-card',
    DIPLAYPOPUP :'show',
    POPPUPTEXT :'header-text'
}

export const boardState = [
 "", "", "",
 "", "", "",
 "", "", ""
];

export const textContent = {
    current : 'X',
}

export const pattern = {
    WINNING_PATTERNS : [
        [0,1,2],
        [3,4,5],
        [6,7,8],

        [0,3,6],
        [1,4,7],
        [2,5,8],

        [0,4,8],
        [2,4,6]
    ],
    LINE_CLASSES : {
   "0,1,2": "winner-top-row",
   "3,4,5": "winner-middle-row",
   "6,7,8": "winner-bottom-row",

   "0,3,6": "winner-left-column",
   "1,4,7": "winner-middle-column",
   "2,5,8": "winner-right-column",

   "0,4,8": "winner-diagonal",
   "2,4,6": "winner-reverse-diagonal"
}
}