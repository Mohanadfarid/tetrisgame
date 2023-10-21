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

const cyanIBlock = {
  color: cyan,
  shape: [
    //first form
    [
      [
        { isactive: true, color: cyan },
        { isactive: true, color: cyan },
        { isactive: true, color: cyan },
        { isactive: true, color: cyan },
      ],
    ],
    //second form
    [
      [{ isactive: true, color: cyan }],
      [{ isactive: true, color: cyan }],
      [{ isactive: true, color: cyan }],
      [{ isactive: true, color: cyan }],
    ],
  ],
};

const blueJBlock = {
  color: blue,
  shape: [
    //first form
    [
      [
        { isactive: true, color: blue },
        { isactive: false, color: black },
        { isactive: false, color: black },
      ],
      [
        { isactive: true, color: blue },
        { isactive: true, color: blue },
        { isactive: true, color: blue },
      ],
    ],
    //second form
    [
      [
        { isactive: true, color: blue },
        { isactive: true, color: blue },
      ],
      [
        { isactive: true, color: blue },
        { isactive: false, color: black },
      ],
      [
        { isactive: true, color: blue },
        { isactive: false, color: black },
      ],
    ],
    // thered form
    [
      [
        { isactive: true, color: blue },
        { isactive: true, color: blue },
        { isactive: true, color: blue },
      ],
      [
        { isactive: false, color: black },
        { isactive: false, color: black },
        { isactive: true, color: blue },
      ],
    ],
    //forth form
    [
      [
        { isactive: false, color: black },
        { isactive: true, color: blue },
      ],
      [
        { isactive: false, color: black },
        { isactive: true, color: blue },
      ],
      [
        { isactive: true, color: blue },
        { isactive: true, color: blue },
      ],
    ],
  ],
};

const orangeLBlock = {
  color: orange,
  shape: [
    //first form
    [
      [
        { isactive: true, color: orange },
        { isactive: true, color: orange },
        { isactive: true, color: orange },
      ],
      [
        { isactive: true, color: orange },
        { isactive: false, color: black },
        { isactive: false, color: black },
      ],
    ],
    //second form
    [
      [
        { isactive: true, color: orange },
        { isactive: true, color: orange },
      ],
      [
        { isactive: false, color: black },
        { isactive: true, color: orange },
      ],
      [
        { isactive: false, color: black },
        { isactive: true, color: orange },
      ],
    ],
    // thered form
    [
      [
        { isactive: false, color: black },
        { isactive: false, color: black },
        { isactive: true, color: orange },
      ],
      [
        { isactive: true, color: orange },
        { isactive: true, color: orange },
        { isactive: true, color: orange },
      ],
    ],
    //forth form
    [
      [
        { isactive: true, color: orange },
        { isactive: false, color: black },
      ],
      [
        { isactive: true, color: orange },
        { isactive: false, color: black },
      ],
      [
        { isactive: true, color: orange },
        { isactive: true, color: orange },
      ],
    ],
  ],
};

const yellowOBlock = {
  color: yellow,
  shape: [
    [
      [
        { isactive: true, color: yellow },
        { isactive: true, color: yellow },
      ],
      [
        { isactive: true, color: yellow },
        { isactive: true, color: yellow },
      ],
    ],
  ],
};

const greenSBlock = {
  color: green,
  shape: [
    //first form
    [
      [
        { isactive: true, color: green },
        { isactive: false, color: black },
      ],
      [
        { isactive: true, color: green },
        { isactive: true, color: green },
      ],
      [
        { isactive: false, color: black },
        { isactive: true, color: green },
      ],
    ],
    //second form
    [
      [
        { isactive: false, color: black },
        { isactive: true, color: green },
        { isactive: true, color: green },
      ],
      [
        { isactive: true, color: green },
        { isactive: true, color: green },
        { isactive: false, color: black },
      ],
    ],
  ],
};

const purpleTBlock = {
  color: purple,
  shape: [
    //first form
    [
      [
        { isactive: false, color: black },
        { isactive: true, color: purple },
      ],
      [
        { isactive: true, color: purple },
        { isactive: true, color: purple },
      ],
      [
        { isactive: false, color: black },
        { isactive: true, color: purple },
      ],
    ],
    [
      //second form
      [
        { isactive: false, color: black },
        { isactive: true, color: purple },
        { isactive: false, color: black },
      ],
      [
        { isactive: true, color: purple },
        { isactive: true, color: purple },
        { isactive: true, color: purple },
      ],
    ],
    //thered form
    [
      [
        { isactive: true, color: purple },
        { isactive: false, color: black },
      ],
      [
        { isactive: true, color: purple },
        { isactive: true, color: purple },
      ],
      [
        { isactive: true, color: purple },
        { isactive: false, color: black },
      ],
    ],
    //forth form
    [
      [
        { isactive: true, color: purple },
        { isactive: true, color: purple },
        { isactive: true, color: purple },
      ],
      [
        { isactive: false, color: black },
        { isactive: true, color: purple },
        { isactive: false, color: black },
      ],
    ],
  ],
};

const redZBlock = {
  color: red,
  shape: [
    //first form
    [
      [
        { isactive: false, color: black },
        { isactive: true, color: red },
      ],
      [
        { isactive: true, color: red },
        { isactive: true, color: red },
      ],
      [
        { isactive: true, color: red },
        { isactive: false, color: black },
      ],
    ],
    //second form
    [
      [

        { isactive: true, color: red },
        { isactive: true, color: red },
        { isactive: false, color: black }
      ],
      [
        { isactive: false, color: black },
        { isactive: true, color: red },
        { isactive: true, color: red },
      ],
    ],
  ],
};

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
  const RowrandomShape = shapes[Math.floor(Math.random() * (7 - 1 + 1)) + 1];

  const randomformIndex =
    Math.floor(Math.random() * (RowrandomShape.shape.length - 1 - 0 + 1)) + 0;
  const randomStartingIndex =
    Math.floor(
      Math.random() * (9 - RowrandomShape.shape[randomformIndex].length - 0 + 1)
    ) + 0;

  return {
    shape: RowrandomShape,
    position: randomStartingIndex,
    shapeFormIndex: randomformIndex,
  };
};
// to do later create func to generate random shape with random positon and random rotate
