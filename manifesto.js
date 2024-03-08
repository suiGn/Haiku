class Digitalities {
    constructor() {
      this.wind = "Digital";
      this.challenge = "Monopolies";
      this.freedom = "Code";
    }
  
    resist() {
      if (this.wind === "Digital") {
        this.challengePolies();
      }
      return this.freedom;
    }
  
    challengePolies() {
      console.log("Challenging monopolized data practices...");
      this.freedom = "Unshackled code spirit";
    }
  }
  
  const rev = new Digitalities();
  console.log(rev.resist());