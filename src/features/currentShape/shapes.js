const colors = [
  "cyan",
  "blue",
  "orange",
  "yellow",
  "green",
  "purple",
  "red",
  "black",
];
const cyan = colors[0];
const blue = colors[1];
const orange = colors[2];
const yellow = colors[3];
const green = colors[4];
const purple = colors[5];
const red = colors[6];
const black = colors[7];

const cyanIBlock = [
  [
    { isfull: true, color: cyan },
    { isfull: true, color: cyan },
    { isfull: true, color: cyan },
    { isfull: true, color: cyan },
  ],
];

const blueJBlock = [
  [
    { isfull: true, color: blue },
  ],
  [
    { isfull: true, color: blue },
    { isfull: true, color: blue },
    { isfull: true, color: blue },
  ],
];

const orangeLBlock = [
  [
    { isfull: true, color: orange },
    { isfull: true, color: orange },
    { isfull: true, color: orange },
  ],
  [
    { isfull: true, color: orange },
  ],
];

const yellowOBlock = [
  [
    { isfull: true, color: yellow },
    { isfull: true, color: yellow },
  ],
  [
    { isfull: true, color: yellow },
    { isfull: true, color: yellow },
  ],
];

const greenSBlock = [
  [
    { isfull: true, color: green },
  ],
  [
    { isfull: true, color: green },
    { isfull: true, color: green },
  ],
  [
    { isfull: false, color: black },
    { isfull: true, color: green },
  ],
];
const purpleTBlock = [
  [
    { isfull: false, color: black },
    { isfull: true, color: purple },
  ],
  [
    { isfull: true, color: purple },
    { isfull: true, color: purple },
  ],
  [
    { isfull: false, color: black },
    { isfull: true, color: purple },
  ],
];
const redZBlock = [
  [
    { isfull: false, color: black },
    { isfull: true, color: red },
  ],
  [
    { isfull: true, color: red },
    { isfull: true, color: red },
  ],
  [
    { isfull: true, color: red },
  ],
];

const shapes = {
  1: cyanIBlock,
  2: blueJBlock,
  3: orangeLBlock,
  4: yellowOBlock,
  5: greenSBlock,
  6: purpleTBlock,
  7: redZBlock,
};

export const randomShapeGenerator = () => { //func that generate random shape at random position to be dispatched
    const shape=[[],[],[],[],[],[],[],[],[],[]]
    const RowrandomShape=shapes[Math.floor(Math.random() * (7 - 1 + 1)) + 1]
    const randomStartingIndex=Math.floor(Math.random() * (9-RowrandomShape.length - 0 + 1)) + 0;
    for (let i = 0; i < RowrandomShape.length; i++) {
        shape[randomStartingIndex + i]=RowrandomShape[i]
    }
    return shape
};
// to do later create func to generate random shape with random positon and random rotate
