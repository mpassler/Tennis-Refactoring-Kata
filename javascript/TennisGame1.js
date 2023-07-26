class TennisGame1 {
    constructor(player1Name, player2Name) {
        this.m_score1 = 0;
        this.m_score2 = 0;
        this.player1Name = player1Name;
        this.player2Name = player2Name;
    }

    wonPoint = function(playerName) {
        if (playerName === "player1")
            this.m_score1 += 1;
        else
            this.m_score2 += 1;
    };

    getScore = function() {
        var score = "";
        var tempScore = 0;
        if (this.m_score1 === this.m_score2) {
            return this.getScoreWhenEven(score);
        } else if (this.m_score1 >= 4 || this.m_score2 >= 4) {
            return this.getScoreWhenGT4();
        } else {
            return this.getScoreLT4(tempScore, score);
        }
    };

    getScoreLT4(tempScore, score) {
        for (var i = 1; i < 3; i++) {
            if (i === 1) tempScore = this.m_score1;
            else {
                score += "-";
                tempScore = this.m_score2;
            }
            switch (tempScore) {
                case 0:
                    score += "Love";
                    break;
                case 1:
                    score += "Fifteen";
                    break;
                case 2:
                    score += "Thirty";
                    break;
                case 3:
                    score += "Forty";
                    break;
            }
        }
        return score;
    }

    getScoreWhenGT4() {
        var minusResult = this.m_score1 - this.m_score2;
        if (minusResult === 1) return "Advantage player1";
        else if (minusResult === -1) return "Advantage player2";
        else if (minusResult >= 2) return "Win for player1";
        else return "Win for player2";
    }

    getScoreWhenEven(score) {
        switch (this.m_score1) {
            case 0:
                score = "Love-All";
                break;
            case 1:
                score = "Fifteen-All";
                break;
            case 2:
                score = "Thirty-All";
                break;
            default:
                score = "Deuce";
                break;
        }
        return score;
    }
}

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}