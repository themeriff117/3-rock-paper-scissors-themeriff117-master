class RockPaperScissors {
  constructor(username) {
    this.username = username;
    this.score = {
      user: 0,
      cpu:0 
    },
    this.gameHistoryLog = [];
  }

  /**
   * RETURN: one of the following values (`rock`, `paper`, `scissors`)
   * using Math.random() method, you should be able to get one of the following values
   */
  generateCPUResponse(){
    const acceptedValues = [ `rock`, `paper`, `scissors` ];
    const randomrps = acceptedValues[Math.floor(Math.random() * acceptedValues.length)];
    //QUESTION: should I be using 'let' instead of 'const'?? I think I'm confusing them.
    return randomrps;
  }
  /**
   * returns one of the following values: `win`, `lose`, `tie`
   * tie:
   *     the user selection the same as the CPU
   * win: 
   *    (user is `rock` and cpu is `scissors
   *     OR
   *    (user is `paper` and cpu is `rock`) 
   *     OR 
   *    (user is `scissors` and cpu is `paper`)
   * `lose`:
   *    the opposite case :)
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   * @param {string} cpuSelection computer selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  determineWinner(userSelection, cpuSelection){
      if (userSelection === 'rock') {
        if (cpuSelection === 'paper') {
          return 'lose';
        }
        if (cpuSelection === 'rock') {
          return 'tie';
        }
        if (cpuSelection === 'scissors') {
          return 'win';
        }
      }
    if (userSelection === 'paper') {
      if (cpuSelection === 'paper') {
        return 'tie';
      }
      if (cpuSelection === 'rock') {
        return 'win';
      }
      if (cpuSelection === 'scissors') {
        return 'lose';
      }
    }
    if (userSelection === 'scissors') {
      if (cpuSelection === 'paper') {
        return 'win';
      }
      if (cpuSelection === 'rock') {
        return 'lose';
      }
      if (cpuSelection === 'scissors') {
        return 'tie';
      }
    }

   }

  /**
   * 
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  play(userSelection){
    console.WriteLine("Enter your name: ");
    string userName = Console.ReadLine();
    console.WriteLine("Let's begin playing, " + userName);

    //make buttons of rps 
    document.getElementById('generate').onclick = function () {

      let rpsvalues = ["rock", "paper", "scissors"];
      //QUESTION: What replaces 'var' again? That's the old way, and isn't the new way let or const?
      let select = document.createElement("select");
      select.name = "rps";
      select.id = "rps"

      for (const val of rpsvalues) {
        var option = document.createElement("option");
        option.value = val;
        option.text = val.charAt(0).toUpperCase() + val.slice(1);
        select.appendChild(option);
      }

      var label = document.createElement("label");
      label.innerHTML = "Make your move: "
      label.htmlFor = "rps";

      document.getElementById("container").appendChild(label).appendChild(select);
      //end button Selection

      //Call what the computer randomly generated
      let comResult = generateCPUResponse.call(randomrps);

      console.WriteLine("The computer choose: " + comResult + "! Your answer: " + option);
      //is 'option' what the user selected? I'm a little confused about that
      
      //Call the determineWinner method: determineWinner(userSelection, cpuSelection)
      return determineWinner.call(select, comResult, option);

    }


  }

}