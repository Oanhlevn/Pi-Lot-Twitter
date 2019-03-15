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
function insertHashtag(string)
{ 
  if (string.indexOf("#")==-1)
  { return string; }
  else
 {let index1 = string.indexOf("#"); 
 let string1 = string.slice (0,index1); 
 let string2= string.substring(index1); 
  let index2 = string2.indexOf(" "); 
  let string21 = string2.slice (0,index2); 
  let string4 = string2.substring( index2 ); 
  console.log(string2); 
  let string3 = string1.slice (index2);
  return (string1 + "<a href='#' onclick =' '> " + string21 + "</a>" + string4) ; 
}} 

function filterHashtag(hashtag)
{   
 for (i=0; i<tweetListArr.length; i++ )
 { if (!tweetListArr[i].content.includes(hashtag))
   document.getElementById(tweetListArr[i].id).classList.add( )

 }
}


//insertHashtag(tweetInput); 




