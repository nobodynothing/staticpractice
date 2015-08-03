(function() {
  var newTitle = document.getElementsByTagName('title');
  newTitle[0].innerHTML = 'THIS IS MY BLAGH';

  var body = document.getElementsByTagName('body');
  body[0].firstChild.innerHTML = "THIS IS MY BLAGH";

  document.body.children[1].remove();


  for (i=0; i < 2; i++) {
    var blogPost = document.createElement('article');
    var h1 = document.createElement('h1');
    var para = document.createElement('p');
    blogPost.appendChild(h1);
    blogPost.appendChild(para);
    document.body.appendChild(blogPost);
  }

  var allArt = document.getElementsByTagName('article');
  allArt[0].firstChild.innerHTML = 'BLAG UNO';
  allArt[0].children[1].innerHTML = 'dude';
  allArt[1].firstChild.innerHTML = 'BLAG DOS';
  allArt[1].children[1].innerHTML = 'bruh';



document.body.addEventListener('click', function fontChange() {
  this.classList.toggle('serif');
})

var makeDiv = function (labelName, lableInnerHTML, inputType) {
    var newDiv = document.createElement('div');

        var newLabel = document.createElement('label');
        newLabel.setAttribute("for", labelName);
        newLabel.innerHTML = lableInnerHTML;

        var newInput = document.createElement('input');
        newInput.setAttribute("type", inputType);
        newInput.setAttribute("name", labelName);

        newDiv.appendChild(newLabel);
        newDiv.appendChild(newInput);

        return newDiv;
}

document.body.appendChild(makeDiv("email", "Email:", "email"));
document.body.appendChild(makeDiv("cc", "Credit Card Number:", "text"));
document.body.appendChild(makeDiv("expiration", "Credit Card Expiration Date:", "text"));
document.body.appendChild(makeDiv("name", "Name on Card:", "text"));
document.body.appendChild(makeDiv("verification", "Verification Code:", "text"));
document.body.appendChild(makeDiv("city", "City:", "text"));
})();


var makeStateList = function() {
    var stateLabel = document.createElement('label');
    stateLabel.innerHTML = "State:";
    var stateDiv = document.createElement('div');
    var stateList = document.createElement("select");
    var states = function(valueName, valueInnerHTML) {
        var option = document.createElement("option");
        option.setAttribute("value", valueName);
        option.text = valueInnerHTML;
        stateList.appendChild(option);
    }
    states("AL", "Alabama");
    states("FL", "Florida");
    states("OR", "Oregon");
    states("WV", "West Virginia");
    stateDiv.appendChild(stateLabel);
    stateDiv.appendChild(stateList);
    document.body.appendChild(stateDiv);
}


makeStateList();
