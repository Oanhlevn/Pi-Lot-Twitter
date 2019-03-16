// let tweetListArr = [{
//     Id: '',
//     user: {
//         name: '',	
//         avartar: ''
//     },
//     content: '',
//     publishAt: '',
//     retweetId: '',
//     like:'',
//     retweetTimes: '',
//     imageUrl: ''
// }]

//let tweetInput = document.getElementById("tweet-input").value; 
function insertHashtag(string) {
  let link = "";
  if (string.indexOf("#") == -1 && string.indexOf("https:") == -1) {
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
    }).join(" ").concat(`<img src='${link}' width='100%'>`).toString();

  }

}

//  {let index1 = string.indexOf("#"); 
//  let string1 = string.slice (0,index1); 
//  let string2= string.substring(index1); 
//   let index2 = string2.indexOf(" "); 
//   let string21 = string2.slice (0,index2); 
//   let string4 = string2.substring(index2); 
//   let string3 = string1.slice (index2);
//   return (string1 + "<a href='#' onclick =filterHashtag("+"'" + string21 +"'" +")>" + string21 + "</a>" + string4) ; 
// }} 

function filterHashtag(hashtag) {
  for (i = 0; i < tweetListArr.length; i++) {
    if (!tweetListArr[i].content.includes(hashtag))
      document.getElementById(`tweets-list-${tweetListArr[i].id}`).classList.add("d-none");
  }
}




