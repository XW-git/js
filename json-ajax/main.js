/*
https://www.youtube.com/watch?v=rJesac0_Ftw
*/

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
ourRequest.onload = function() {
    console.log(ourRequest.responseText);
};
ourRequest.send();
