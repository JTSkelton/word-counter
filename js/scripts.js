$(document).ready(function() {
  $("#form-text").submit(function(event) {
    event.preventDefault();
    const inputString = $("#form-textarea").val();
    const newArray = inputString.split(" ");

    function foo () {
      let a = [], b = [], previousWord;

      newArray.sort() //Have to sort the array beacuse the function below only campares the newWord to the previous word. Same words need to be stacked together for counter to work correctly.

      newArray.forEach(function(newWord) { //changed "for of" loop to .forEach
        const punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'; //Lines 13-18 are cleaning the punctuation off of words. This isnt perfect, as words like "U.S." will turn into "US" which would be the same as "us"
        let rawLetters = newWord.split('');
        let cleanLetters = rawLetters.filter(function(letter) {
          return punctuation.indexOf(letter) === -1;
        });
        newWord = cleanLetters.join('');
        console.log(newWord)
        if (newWord !== previousWord) {
          a.push(newWord);
          b.push(1);
        }
        else ++b[b.length - 1];
        previousWord = newWord;
      });

      a.forEach(function(el, index) {
        a[index] = el + " ::: Times Occured: " + b[index];
      });
    
      return a;
    }

    const results = foo(newArray);
    results.forEach(function(result) {
      let word = "<li>" + result + "</li>";
      $(".results ul").append(word);
    });
  });
});

//Example paragraph for you to use

//Following the announcement that the U.S. would reopen the borders, Virgin Atlantic saw a 600 percent increase in bookings to the U.S., the airline said in a press release. Bookings went up again by nearly 50 percent compared to the week before after the confirmation of the reopening date Oct. 15.
