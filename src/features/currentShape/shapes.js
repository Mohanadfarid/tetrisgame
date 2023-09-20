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
  //first form
  [
    [
      { isfull: true, color: cyan },
      { isfull: true, color: cyan },
      { isfull: true, color: cyan },
      { isfull: true, color: cyan },
    ],
  ],
  //second form
  [
    [{ isfull: true, color: cyan }],
    [{ isfull: true, color: cyan }],
    [{ isfull: true, color: cyan }],
    [{ isfull: true, color: cyan }],
  ],
];

const blueJBlock = [
  //first form
  [
    [{ isfull: true, color: blue }],
    [
      { isfull: true, color: blue },
      { isfull: true, color: blue },
      { isfull: true, color: blue },
    ],
  ],
  //second form
  [
    [
      { isfull: true, color: blue },
      { isfull: true, color: blue },
    ],
    [{ isfull: true, color: blue }],
    [{ isfull: true, color: blue }],
  ],
  // thered form
  [
    [
      { isfull: true, color: blue },
      { isfull: true, color: blue },
      { isfull: true, color: blue },
    ],
    [
      { isfull: false, color: black },
      { isfull: false, color: black },
      { isfull: true, color: blue },
    ],
  ],
  //forth form
  [
    [
      { isfull: false, color: black },
      { isfull: true, color: blue },
    ],
    [
      { isfull: false, color: black },
      { isfull: true, color: blue },
    ],
    [
      { isfull: true, color: blue },
      { isfull: true, color: blue },
    ],
  ],
];

const orangeLBlock = [
  //first form
  [
    [
      { isfull: true, color: orange },
      { isfull: true, color: orange },
      { isfull: true, color: orange },
    ],
    [{ isfull: true, color: orange }],
  ],
  //second form
  [
    [
      { isfull: true, color: orange },
      { isfull: true, color: orange },
    ],
    [
      { isfull: false, color: black },
      { isfull: true, color: orange },
    ],
    [
      { isfull: false, color: black },
      { isfull: true, color: orange },
    ],
  ],
  // thered form
  [
    [
      { isfull: false, color: black },
      { isfull: false, color: black },
      { isfull: true, color: orange },
    ],
    [
      { isfull: true, color: orange },
      { isfull: true, color: orange },
      { isfull: true, color: orange },
    ],
  ],
  //forth form
  [
    [{ isfull: true, color: orange }],
    [{ isfull: true, color: orange }],
    [
      { isfull: true, color: orange },
      { isfull: true, color: orange },
    ],
  ],
];

const yellowOBlock = [
  [
    [
      { isfull: true, color: yellow },
      { isfull: true, color: yellow },
    ],
    [
      { isfull: true, color: yellow },
      { isfull: true, color: yellow },
    ],
  ],
];

const greenSBlock = [
  //first form
  [
    [{ isfull: true, color: green }],
    [
      { isfull: true, color: green },
      { isfull: true, color: green },
    ],
    [
      { isfull: false, color: black },
      { isfull: true, color: green },
    ],
  ],
  //second form
  [
    [
      { isfull: false, color: black },
      { isfull: true, color: green },
      { isfull: true, color: green },
    ],
    [
      { isfull: true, color: green },
      { isfull: true, color: green },
    ],
  ],
];

const purpleTBlock = [
  //first form
  [
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
  ],
  [
    //second form
    [
      { isfull: false, color: black },
      { isfull: true, color: purple },
    ],
    [
      { isfull: true, color: purple },
      { isfull: true, color: purple },
      { isfull: true, color: purple },
    ],
  ],
  //thered form
  [
    [{ isfull: true, color: purple }],
    [
      { isfull: true, color: purple },
      { isfull: true, color: purple },
    ],
    [{ isfull: true, color: purple }],
  ],
  //forth form
  [
    [
      { isfull: true, color: purple },
      { isfull: true, color: purple },
      { isfull: true, color: purple },
    ],
    [
      { isfull: false, color: black },
      { isfull: true, color: purple },
    ],
  ],
];

const redZBlock = [
  //first form
  [
    [
      { isfull: false, color: black },
      { isfull: true, color: red },
    ],
    [
      { isfull: true, color: red },
      { isfull: true, color: red },
    ],
    [{ isfull: true, color: red }],
  ],
  //second form
  [
    [
      { isfull: true, color: red },
      { isfull: true, color: red },
    ],
    [
      { isfull: false, color: black },
      { isfull: true, color: red },
      { isfull: true, color: red },
    ],
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

export const randomShapeGenerator = () => {
  //func that generate random shape at random position to be dispatched
  const shape = [[], [], [], [], [], [], [], [], [], []];

  const RowrandomShape = shapes[Math.floor(Math.random() * (7 - 1 + 1)) + 1];

  const randomformIndex =
    Math.floor(Math.random() * (RowrandomShape.length - 1 - 0 + 1)) + 0;
  console.log(RowrandomShape);
  console.log(randomformIndex);
  const randomStartingIndex =
    Math.floor(
      Math.random() * (9 - RowrandomShape[randomformIndex].length - 0 + 1)
    ) + 0;
  for (let i = 0; i < RowrandomShape[randomformIndex].length; i++) {
    shape[randomStartingIndex + i] = RowrandomShape[randomformIndex][i];
  }
  console.log(shape);
  return shape;
};
// to do later create func to generate random shape with random positon and random rotate
