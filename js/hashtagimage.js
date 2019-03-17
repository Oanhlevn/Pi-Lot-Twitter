

function insertHashtag(string) {
  let link = ""; let user =["hoangoanh","minhthang","hongloc"]; 
  if (string.indexOf("#") == -1 && string.indexOf("https:") == -1 && string.indexOf("@")) {
    return string;
  } else {
    let content = string.split(" ");
    console.log(content);
   return content.map(word => {
      if (word.startsWith("#")) {
        return (`<a href='#' onclick =filterHashtag('${word}')> ${word} </a>`);
      }
      if (word.startsWith("https:")) {
        link = word;
        return (`<a href='${word}'> ${word} </a>`);
      } else {
        return word; 
      }
      if (word.startsWith("@")&& !user.find(word1 =>{word1=word.substring(1);})==null)
       {return (`<font colour ='blue'> ${word} </font>`);}
      else 
      { return word; 
      }
    }).join(" ").concat(`<img src='${link}' width='100%'>`).toString();

  }

}


function filterHashtag(hashtag) {
  for (i = 0; i < tweetListArr.length; i++) {
    if (!tweetListArr[i].content.includes(hashtag))
      document.getElementById(`tweets-list-${tweetListArr[i].id}`).classList.add("d-none");
  }
}




