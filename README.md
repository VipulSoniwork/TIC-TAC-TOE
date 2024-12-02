# Tic-Tac-Toe Game

## Overview
This project is a simple **Tic-Tac-Toe** game built using **React** and **CSS**. The game allows two players to take turns, playing with "X" and "O" markers. It includes features such as player turn indication, winner declaration, and the ability to reset the game.

## Features
- **Two Player Mode**: Two players can play alternately using "X" and "O".
- **Player Turn Indicator**: Displays whose turn it is at any moment.
- **Winning Logic**: The game checks if a player has won by completing a row, column, or diagonal.
- **Reset Functionality**: A button to restart the game and clear the board.
- **Animations**: Smooth transitions for tile click and hover effects.
- **Responsive Design**: The game board adapts to different screen sizes.

## Project Setup

1. Clone the repository to your local machine.
    ```bash
    git clone https://github.com/your-username/tic-tac-toe.git
    ```
    
2. Navigate to the project folder.
    ```bash
    cd tic-tac-toe
    ```

3. Install the dependencies.
    ```bash
    npm install
    ```

4. Start the application.
    ```bash
    npm start
    ```

5. Open the game in your browser at `http://localhost:3000`.

## How It Works
- **Game Board**: The game board is a 3x3 grid where players can click on empty boxes to place their markers ("X" or "O").
- **Turn Management**: After each player makes a move, the game checks if that player has won or if the board is full (a tie).
- **Winning Conditions**: The game checks for a winning condition after each move by comparing the three rows, columns, and two diagonals.
- **Reset Function**: The game can be reset using the "Play Again" button, clearing all marks and starting a new game.

## Dependencies
- **React**: JavaScript library for building user interfaces.
- **React DOM**: Provides DOM-specific methods for rendering React components.
- **CSS**: For styling and animations.

## Acknowledgments
This project was created to practice React fundamentals and build a classic game with interactive UI features.

## Vercel Link:
https://tic-tac-toe-theta-sable.vercel.app/


