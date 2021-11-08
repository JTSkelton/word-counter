$(document).ready(function() {
  $("#form-text").submit(function(event) {
    event.preventDefault();
    const inputString = $("#form-textarea").val();
    const newArray = inputString.split(" ");

    function foo (array) {
      let a = [], b = [], previousWord;

      for (let newWord of newArray) {
        if (newWord !== previousWord) {
          a.push(newWord);
          b.push(1);
        }
        else ++b[b.length - 1];
        previousWord = newWord;
      }

      a.forEach(function(el, index) {
        a[index] = el + " Times Occured: " + b[index];
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


