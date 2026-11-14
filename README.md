# Rock Paper Scissors Game

A simple, interactive browser game where you play Rock, Paper, Scissors against the computer. Click one of the three hand-sign images, and the game instantly picks a random move for the computer, decides the winner, and updates the scores.

## Features

- Click-to-play controls using three hand-sign images (Rock, Paper, Scissors)
- Random computer choice on every round
- Live scoreboard for both you and the computer
- Round display that shows both choices and a comparison symbol (`>`, `<` or `=`)
- Instant result message: "You win!", "Computer wins!" or "It's a tie!"
- Hover effect on the images for a clear, responsive feel
- Runs entirely in the browser, with no installation or server needed

## Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and game elements |
| CSS3 | Layout (Flexbox), colors, and hover effects |
| JavaScript (ES6) | Game logic and DOM updates |

## Project Structure

```
rock-paper-scissors/
├── index.html      # Page layout and game elements
├── style.css       # Styling and layout
├── script.js       # Game logic
├── rock.png        # Rock image
├── paper.png       # Paper image
└── scissors.png    # Scissors image
```

## Getting Started

1. Download or clone the project folder.
2. Make sure `rock.png`, `paper.png` and `scissors.png` are in the same folder as `index.html`.
3. Open `index.html` in any modern web browser.
4. Start playing.

## How to Play

1. Click **Rock**, **Paper** or **Scissors**.
2. The computer picks its move at random.
3. The result appears below the scoreboard, and the winner's score increases by one.
4. Keep clicking to play more rounds.

## Game Rules

| Your Choice | Beats | Loses To |
|---|---|---|
| Rock | Scissors | Paper |
| Paper | Rock | Scissors |
| Scissors | Paper | Rock |

If both players choose the same move, the round is a tie and no score changes.

## How the Code Works

The game is built from three files that work together. `index.html` defines the title, the three clickable images, the scoreboard, the area that shows both choices, and the message line. `style.css` arranges these elements with Flexbox, applies a navy and ivory color theme, and adds a border highlight when you hover over an image. `script.js` contains the game logic: it stores the three possible moves in an array, picks a random index to get the computer's choice, and attaches a click listener to each image. When you click, the script compares your move with the computer's move, updates the message, the two displayed choices, the comparison symbol, and the correct score.

### Main Parts of `script.js`

| Part | Description |
|---|---|
| `choices` array | Holds the three valid moves: rock, paper, scissors |
| `getComputerChoice()` | Uses `Math.random()` to return a random move |
| Click listener | Runs one full round each time an image is clicked |
| Win condition checks | Compare both moves to decide a tie, a win, or a loss |
| DOM updates | Refresh the scores, choices, symbol, and message on screen |

## Customization

- **Colors:** Change the `#0e0d54` and `ivory` values in `style.css` to apply a new theme.
- **Image size:** Adjust the `height` and `width` of the `.option` class in `style.css`.
- **Images:** Replace the PNG files with your own, keeping the same file names.

## Author

Created as a beginner-friendly front-end project using HTML, CSS and JavaScript.
