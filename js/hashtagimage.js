trendHashList = document.getElementById("trends");
hashtagarr = [];

function insertHashtag(string) {
  let link = ""; let j; 
  let user = ["HoangOanh", "MinhThang", "HongLoc"];
  if (string.indexOf("#") == -1 && string.indexOf("https:") == -1 && string.indexOf("@")) {
    return string;
  } else {
    let content = string.split(" ");
    console.log(content);
    return content.map(word => {
      if (word.startsWith("#")) {
       j = hashtagarr.map(tag =>{return tag.text;}).indexOf(word);
       console.log(j);
        if (j== -1) {
          hashtagarr.push({
            text: word,
            time: 1
          });
          console.log (hashtagarr);
           trendHashList.innerHTML += `<li id=${word}><a href="#" onclick =filterHashtag('${word}')>${word}</a> <br>
        <span class="text-muted"> 1 tweet </span></li>`;
        return (`<a href='#' onclick =filterHashtag('${word}')> ${word} </a>`);
        } 
        else {
          hashtagarr[j].time++; 
          console.log(hashtagarr); 
         document.getElementById(word).innerHTML = `<a href="#" onclick =filterHashtag('${word}')>${word}</a> <br>
         <span class="text-muted"> ${hashtagarr[j].time} tweets </span>`;
         return (`<a href='#' onclick =filterHashtag('${word}')> ${word} </a>`); 
        }
         
      }
      if (word.startsWith("https:")) {
        link = word;
        return (`<a href='${word}'> ${word} </a>`);
      }
      if (word.startsWith("@") && user.indexOf(word.substring(1)) != -1) {
        return (`<font color ='blue'> ${word} </font>`);
      } else {
        return word;
      }
    }).join(" ").concat(`<img src='${link}' width='100%'>`).toString();

  }

}


function filterHashtag(hashtag) {
  for (i = 0; i < tweetListArr.length; i++) {
    if (!tweetListArr[i].content.includes(hashtag))

      document.getElementById(`tweets-list-${tweetListArr[i].id}`).classList.add("d-none");
    else
    (document.getElementById(`tweets-list-${tweetListArr[i].id}`).classList.remove("d-none") ); 

  }
}


// let userarr = [{name:"HoangOanh",avata:"" }, {name:"MinhThang",avata:""}, {name:"HongLoc", avata:""} ];
// function addUser(userar)
// { 
//  return  document.getElementById("username").innerHTML += userar.map((user,i) =>{return `<div id=${user}> <a href=#> ${userar[i].name} </a></div>` } ).join(" ");
// }
// addUser(userarr); 
