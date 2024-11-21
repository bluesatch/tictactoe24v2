class Game {
    // 1 build constructor
    constructor() {
        // 1a access DOM Elements
        this.gameRestartBtn = document.getElementById('gameRestart')
        this.submitBtn = document.getElementById('submitBtn')
        this.gameStatus = document.getElementById('gameStatus')
        this.gameActive = true
        this.currentPlayer = 'X'
        this.xWins = document.getElementById('xWins')
        this.oWins = document.getElementById('oWins')
        this.playerOne = document.getElementById('playerOne')
        this.playerTwo = document.getElementById('playerTwo')

        // 2a set winCount
        this.winCount = {
            x: 0,
            o: 0
        }

        // 3a set gameState
        this.gameState = [
            '', '', '',
            '', '', '',
            '', '', ''
        ]

        // 4a set winningConditions
        this.winningConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        this.players = {
            player1: 'Player 1',
            player2: 'Player 2'
        }
    }

}