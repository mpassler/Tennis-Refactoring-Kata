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

function sumOfScoresLessThan6() {
    return this.score1 + this.score2 < 6;
}

function getLeadingPlayer() {
    return this.score1 > this.score2 ? this.namePlayer1 : this.namePlayer2;
}

TennisGame3.prototype.getScore = function () {
    function getScoreCase1(score1) {
        const p = ["Love", "Fifteen", "Thirty", "Forty"];
        return p[score1];
    }

    if ((scoreLessThan4(this.score1) && scoreLessThan4(this.score2) && sumOfScoresLessThan6.call(this))) {
        let suffix = isTie.call(this) ? "-All" : "-" + getScoreCase1(this.score2);    
        return getScoreCase1(this.score1) + suffix;
    } else if (isTie.call(this)) {
        return "Deuce";
    } else {
        let leadingPlayer = getLeadingPlayer.call(this);
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
