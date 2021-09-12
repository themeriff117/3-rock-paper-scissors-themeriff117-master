class RockPaperScissors {
            constructor(username) {
                this.username = username;
                this.score = {
                    user: 0,
                    cpu: 0
                },
                    this.gameHistoryLog = [];
            }
 
            getUsrScore() { return this.score.user; }
            getCpuScore() { return this.score.cpu; }
            getGameHistory() { return this.gameHistoryLog; }
 
            generateCPUResponse() {
                const acceptedValues = [`rock`, `paper`, `scissors`];
                return acceptedValues[Math.floor(Math.random() * 3)];
            }
 
            determineWinner(userSelection, cpuSelection) {
                if (userSelection === cpuSelection) {
                    return 'tie';
                };
 
                if (userSelection == 'rock' && cpuSelection == 'scissors') {
                    return 'win';
                };
 
                if (userSelection == 'paper' && cpuSelection == 'rock') {
                    return 'win';
                };
 
                if (userSelection == 'scissors' && cpuSelection == 'paper') {
                    return 'win';
                };
 
                return 'lose';
 
            }
 
            play(userSelection) {
                var cpu = this.generateCPUResponse();
                var outcome = this.determineWinner(userSelection, cpu);
                var logmsg = 'User:' + this.username + ' selected:' + userSelection + ', Cpu Selected:' + cpu + ' Outcome:' +outcome;
                if (outcome == 'win') {
                    this.score.user++;
                    logmsg = logmsg + ' ' + this.username + ' wins';
                };
                if (outcome == 'lose') {
                    this.score.cpu++;
                    logmsg = logmsg + ' Computer wins';
                };
 
                this.gameHistoryLog.push(logmsg);
                return logmsg;
 
            }
 
        }