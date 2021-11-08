// const colors = ["red", "blue", "blue"];
// function filterItems(arr,query) {
//     return arr.filter(function(el) {
//         return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
//     })
// }

// return(filterItems(colors, "blue"));
// filterItems(colors, colors[1]);
// for an array called "shapes":

// let shapes = [red,red,red,blue,green];
// shapes.forEach(element=> console.log(element));

  
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
    
      return [a, b];
    }
    
    const result = foo(newArray);
    console.log('[' + result[0] + ']'+'[' + result[1] + ']')
    console.log(newArray)
   
  });
});


//words.filter(word => word.length > 6);
