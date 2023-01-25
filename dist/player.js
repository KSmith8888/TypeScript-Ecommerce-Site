class Player {
    constructor(game) {
        this.hand = [];
        this.cardElements = [];
        this.total = 0;
        this.money = 100;
        this.currentBet = 0;
        this.aceOverage = 0;
        this.totalMoneyText = document.querySelector('#total-money-text');
        this.bet5Btn = document.querySelector('#bet-5-button');
        this.bet10Btn = document.querySelector('#bet-10-button');
        this.bet25Btn = document.querySelector('#bet-25-button');
        this.bet50Btn = document.querySelector('#bet-50-button');
        this.game = game;
        this.bet5Btn.addEventListener('click', () => { this.bet(5); });
        this.bet10Btn.addEventListener('click', () => { this.bet(10); });
        this.bet25Btn.addEventListener('click', () => { this.bet(25); });
        this.bet50Btn.addEventListener('click', () => { this.bet(50); });
    }
    bet(amount) {
        if (this.money >= amount) {
            this.currentBet = amount;
            this.money -= amount;
            this.disableBets();
            this.game.activateSelections();
            this.game.startNewGame();
        }
    }
    disableBets() {
        this.bet5Btn.disabled = true;
        this.bet10Btn.disabled = true;
        this.bet25Btn.disabled = true;
        this.bet50Btn.disabled = true;
        this.totalMoneyText.textContent = this.money.toString();
    }
    activateBets() {
        this.bet5Btn.disabled = false;
        this.bet10Btn.disabled = false;
        this.bet25Btn.disabled = false;
        this.bet50Btn.disabled = false;
    }
}
export { Player };
