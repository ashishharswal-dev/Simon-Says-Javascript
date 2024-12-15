class SimonGame {
    constructor() {
        this.colors = ['green', 'red', 'yellow', 'blue'];
        this.sequence = [];
        this.playerSequence = [];
        this.isPlaying = false;
        this.level = 0;

        this.titleElement = document.getElementById('title');
        this.gameButtons = document.querySelectorAll('.button');
        
        this.sounds = {
            green: new Audio('./sounds/green.mp3'),
            red: new Audio('./sounds/red.mp3'),
            yellow: new Audio('./sounds/yellow.mp3'),
            blue: new Audio('./sounds/blue.mp3'),
            wrong: new Audio('./sounds/wrong.mp3')
        };

        this.initializeEventListeners();
    }

    initializeEventListeners() {
        // Key press to start game
        document.addEventListener('keydown', (e) => {
            if (!this.isPlaying) {
                this.startGame();
            }
        });

        // Button click listeners
        this.gameButtons.forEach(button => {
            button.addEventListener('click', () => {
                if (this.isPlaying) {
                    const color = button.dataset.color;
                    this.handlePlayerClick(color);
                }
            });
        });
    }

    startGame() {
        console.log("Starting game...");
        this.sequence = [];
        this.playerSequence = [];
        this.isPlaying = true;
        this.level = 1;
        this.titleElement.textContent = `Level ${this.level}`;
        this.addToSequence();
    }

    addToSequence() {
        const newColor = this.colors[Math.floor(Math.random() * this.colors.length)];
        this.sequence.push(newColor);
        this.playSequence();
    }

    async playSequence() {
        for (let color of this.sequence) {
            await this.activateButton(color);
        }
    }

    async activateButton(color) {
        return new Promise(resolve => {
            const button = document.querySelector(`.${color}`);
            button.classList.add('active');
            this.sounds[color].play();
            
            setTimeout(() => {
                button.classList.remove('active');
                resolve();
            }, 500);
        });
    }

    handlePlayerClick(color) {
        this.sounds[color].play();
        this.playerSequence.push(color);

        // Check if player's last move matches sequence
        const currentIndex = this.playerSequence.length - 1;
        if (this.playerSequence[currentIndex] !== this.sequence[currentIndex]) {
            this.gameOver();
            return;
        }

        // Check if player completed the full sequence
        if (this.playerSequence.length === this.sequence.length) {
            this.levelUp();
        }
    }

    levelUp() {
        this.level++;
        this.titleElement.textContent = `Level ${this.level}`;
        this.playerSequence = [];
        
        setTimeout(() => {
            this.addToSequence();
        }, 1000);
    }

    gameOver() {
        this.sounds.wrong.play();
        this.isPlaying = false;
        this.titleElement.textContent = 'Game Over! Press Any Key to Restart';
    }
}

// Initialize the game
document.addEventListener('DOMContentLoaded', () => {
    new SimonGame();
});