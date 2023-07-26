const TennisGame3 = function (p1N, p2N) {
    this.score2 = 0;
    this.score1 = 0;

    this.namePlayer1 = p1N;
    this.namePlayer2 = p2N;
};

function isTie() {
    return this.score1 === this.score2;
}

function pointDifferenceIsOne() {
    return Math.abs(this.score1 - this.score2) === 1;
}

function scoreLessThan4(score) {
    return score < 4;
}

TennisGame3.prototype.getScore = function () {
    let s;

    function getScoreCase1(score1) {
        const p = ["Love", "Fifteen", "Thirty", "Forty"];
        return p[score1];
    }

    if ((scoreLessThan4(this.score1) && scoreLessThan4(this.score2) && (this.score1 + this.score2 < 6))) {
        s = getScoreCase1(this.score1);
        return isTie.call(this) ? s + "-All" : s + "-" + getScoreCase1(this.score2);
    } else if (isTie.call(this)) {
        return "Deuce";
    } else {
        let leadingPlayer = this.score1 > this.score2 ? this.namePlayer1 : this.namePlayer2;
        return pointDifferenceIsOne.call(this) ? "Advantage " + leadingPlayer : "Win for " + leadingPlayer;
    }
};

TennisGame3.prototype.wonPoint = function (playerName) {
    if (playerName === "player1")
        this.score1 += 1;
    else
        this.score2 += 1;

};

if (typeof window === "undefined") {
    module.exports = TennisGame3;
}
