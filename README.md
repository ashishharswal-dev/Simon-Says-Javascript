# Simon Game 🎮

## Overview

This is a classic Simon memory game implemented using vanilla JavaScript, HTML, and CSS. The game challenges players to repeat an increasingly complex sequence of colored button presses.

## How to Play

1. Press any key to start the game
2. Watch the sequence of colored buttons light up
3. Repeat the sequence by clicking the buttons in the same order
4. Each successful round increases the difficulty by adding another color to the sequence
5. If you make a mistake, the game ends and you can restart by pressing any key

## Features

- Retro game design with pixel art-inspired styling
- Sound effects for button presses and game events
- Increasing difficulty with each level
- Simple, responsive design

## Prerequisites

- A modern web browser
- Sound files for game effects

## Installation

1. Clone the repository
2. Ensure you have the following files in your project directory:
   - `index.html`
   - `simon.js`
   - `simon.css`
   - `sounds/` directory with sound files:
     - `green.mp3`
     - `red.mp3`
     - `yellow.mp3`
     - `blue.mp3`
     - `wrong.mp3`

3. Open `index.html` in your web browser

## Technologies Used

- HTML5
- Vanilla JavaScript (ES6+)
- CSS3
- "Press Start 2P" Google Font

## Game Rules

- The game starts with a single random color in the sequence
- Each round, a new color is added to the sequence
- Players must repeat the exact sequence by clicking the colored buttons
- Incorrect sequence results in game over
- The goal is to remember and repeat the longest possible sequence

## Customization

- Easily modify colors in `simon.css`
- Adjust game difficulty by changing timing in `simon.js`

## License

This project is open-source and available for personal and educational use.

## Acknowledgments

Inspired by the classic Simon electronic memory game.
