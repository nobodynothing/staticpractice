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
