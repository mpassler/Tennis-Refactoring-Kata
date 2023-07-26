const TennisGame3 = function (p1N, p2N) {
    this.score2 = 0;
    this.score1 = 0;

    this.namePlayer1 = p1N;
    this.namePlayer2 = p2N;
};

TennisGame3.prototype.getScore = function() {
    let s;

    function getScoreCase1(score1) {
        const p = ["Love", "Fifteen", "Thirty", "Forty"]; 
        return p[score1];
    }

    if ((this.score1 < 4 && this.score2 < 4) && (this.score1 + this.score2 < 6)) {
        let score1 = this.score1;
        
        s= getScoreCase1(score1);
        return (this.score1 === this.score2) ? s + "-All" : s + "-" + getScoreCase1(this.score2);
    } else {
        if (this.score1 === this.score2)
            return "Deuce";
        s = this.score1 > this.score2 ? this.namePlayer1 : this.namePlayer2;
        return ((this.score1 - this.score2) * (this.score1 - this.score2) === 1) ? "Advantage " + s : "Win for " + s;
    }
};

TennisGame3.prototype.wonPoint = function(playerName) {
    if (playerName === "player1")
        this.score1 += 1;
    else
        this.score2 += 1;

};

if (typeof window === "undefined") {
    module.exports = TennisGame3;
}
