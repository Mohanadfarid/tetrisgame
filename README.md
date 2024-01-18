# React Tetris

A simple Tetris game built from scratch using React and Redux Toolkit.

![desktop view](./public/screenShots/desktop%20view.png)
_Description: desktop view ._

![mobile view](./public/screenShots/mobile%20view.png)
_Description: mobile view._

## Features

- **Responsive Design:** Play Tetris on any device with a responsive layout.

- **Dynamic Speed:** The speed of falling shapes starts at 1 per move and decreases 0.1 seconds every 3 rows cleared.

- **Manual Controls:** Interact with the game using buttons provided in the UI.

- **Pause and Resume:** Pause the game at any time and resume when ready to play.

- **Next Shape Preview:** See the upcoming shape in a preview window to plan your moves.

- **Score and Speed Display:** Track your progress with a score counter and dynamic speed display.

## Live Demo

Explore the live demo: [ Tetris Game Demo](https://mohanad-tetrisgame.netlify.app/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Mohanadfarid/tetrisgame.git

   ```

2. install dependencies

   ```bash
   cd tetrisgame
   npm install
   ```

## Usage

1. start server:
   ```bash
   npm start
   ```

2. Open your browser and visit http://localhost:3000 to play the game.

## UI Controls

- Left: Move shape left.

- Right: Move shape right.

- Down: Move shape down.

- Rotate: Rotate the shape to the right (if there isn't enough space it will do nothing).

- Pause/Resume: Click the pause button to pause the game, and click again to resume.

## Project Structure

- `src/` - Contains the source code for the React Redux Tetris game.

- `public/` -Static assets and HTML template.

## Dependencies

- React
- Redux Toolkit

## License

This project is licensed under the MIT License
