var TennisGame3 = function(p1N, p2N) {
    this.score2 = 0;
    this.score1 = 0;

    this.p1N = p1N;
    this.p2N = p2N;
};

TennisGame3.prototype.getScore = function() {
    var s;
    if ((this.score1 < 4 && this.score2 < 4) && (this.score1 + this.score2 < 6)) {
        var p = ["Love", "Fifteen", "Thirty", "Forty"];
        s = p[this.score1];
        return (this.score1 === this.score2) ? s + "-All" : s + "-" + p[this.score2];
    } else {
        if (this.score1 === this.score2)
            return "Deuce";
        s = this.score1 > this.score2 ? this.p1N : this.p2N;
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
