# Pokemon Memory Game

Project: Memory Card - from [The Odin Project - React Curriculum](https://www.theodinproject.com/lessons/node-path-react-new-memory-card)

----> [view project](https://freefallrush-memory-card.netlify.app/) <----

## Description

This is a simple memory game built with React and TypeScript. The objective of the game is to click on Pokemon cards without repeating any. The game keeps track of your score and the highest score achieved. Upon clicking a card twice, the game resets and shows your best score. You can choose to play again or reset your best score.

## Features

- **Randomized Cards**: The cards are shuffled every time you click one.
- **Score Tracking**: The game tracks your current score and the best score achieved.
- **Game Over**: Clicking a card twice resets your score and ends the game.
- **Play Again**: After the game is over, you can play again without losing your best score.
- **Reset Best Score**: You can reset your best score and start fresh.
- **Rules Modal**: Shows how to play the game.
- **Responsive Design**: Works well on both desktop and mobile devices.

## Installation

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/FreeFallRush/Memory-Card.git
   ```

2. Navigate into the project folder:

   ```bash
   cd Memory-Card
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

## Usage

1. **Click on a Pokemon card**: To start playing, click any card.
2. **Keep track of your score**: Your score will increase each time you click a unique card.
3. **Game Over**: If you click a card twice, the game ends, and your best score is displayed.
4. **Play Again**: After the game is over, you can play again by clicking "Play Again."
5. **Reset Best Score**: If you want to start over with a new best score, click "Reset Best Score."

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Superset of JavaScript for type safety and improved developer experience.
- **CSS**: Used for styling the components and layouts.
- **useState & useEffect**: React hooks for managing state and side effects.
- **Pokemon API**: Used to fetch images of Pokemon for the game cards.
