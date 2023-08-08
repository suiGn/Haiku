class DigitalRevolution {
    constructor() {
      this.wind = "Digital";
      this.challenge = "Monopolies";
      this.freedom = "Code";
    }
  
    resist() {
      if (this.wind === "Digital") {
        this.challengeMonopolies();
      }
      return this.freedom;
    }
  
    challengeMonopolies() {
      console.log("Challenging monopolized data practices...");
      this.freedom = "Unshackled code spirit";
    }
  }
  
  const revolution = new DigitalRevolution();
  console.log(revolution.resist());