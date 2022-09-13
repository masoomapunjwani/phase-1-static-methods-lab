class Formatter {
  //add static methods here
  static capitalize(string) {
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g,"");
  }

  static titleize(string) {
    let myString = string.charAt(0).toUpperCase() + string.slice(1);
    const wordArray = myString.split(" ");
    //array o words that should not be titleize
    const preposition = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from'];

    //titleize other words except prepoaitions
    const words = [];
    for(let word of wordArray) {
      if (preposition.includes(word)) {
        words.push(word)
      } else {
        words.push(this.capitalize(word));
      }
    }
    return words.join(" ");

  }
}