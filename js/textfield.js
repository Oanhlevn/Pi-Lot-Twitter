var tweetInput = document.getElementById('tweet-input');
var charRemaining = document.getElementById('char-remaining');
var tweetBtn = document.getElementById('tweet-btn');
var tweetList = document.getElementById('tweet-list');
var retweetBox = document.getElementById('dialog');
var max_value;

let tweetListArr;
let getJson = async () => {
    await $.ajax({
        url: "https://api.myjson.com/bins/hoi3a",
        type: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
            tweetListArr = data;
            updateTweetList();

        }
    });
}
getJson();

tweetBtn.addEventListener('click', function () {
    charRemaining.innerHTML = 140 + " Characters Remaining";
    let newTwsid = parseInt(getLastedId()) + 1;
    console.log(tweetInput.value)
    tweetList.innerHTML += `
    <div class="panel panel-default">
    <div class="panel-body" id="tweets-list-${newTwsid}">
        <div class="media">
            <a class="media-left" href="#fake">
                <img alt="" class="media-object-img-rounded" height = 30px width = 30px src="images/human.png"> 
            </a>
            <div class="media-body">
            <b> Pilot Team </b>  @pilotTeam 
            <p id='body'>${insertHashtag(tweetInput.value)}</p>
            <p class="font-italic" id='body'>${moment(d).fromNow()}</p>
                <ul class="nav nav-pills nav-pills-custom">
                    <li> <a id="retweet-btn-${newTwsid}" onclick="reTws(${newTwsid})" href="#" > Retweet <span class="glyphicon glyphicon-retweet"></span></a> </li>
                    <li> <a id="like-btn-${newTwsid}" onclick="likeTws(${newTwsid})" href="#"> Like <span class="glyphicon glyphicon-star"></span></a> </li>
                    <li> <a id="delete-btn-${newTwsid}" onclick="deleteTws(${newTwsid})" href="#" style="color:red"> Remove <span class="glyphicon glyphicon-remove"></span></a> </li>
                </ul>
            </div>
        </div>
        </div>
    </div>`

    tweetListArr.push({
        id: newTwsid,
        user: {
            name: 'Pilot team',
            avartar: 'images/human.png'
        },
        content: tweetInput.value,
        publishAt: new Date(),
        retweetId: null,
        like: 0,
        retweetTimes: 0,
        imageUrl: ''
    })
    tweetInput.value = "";
    putJson();
});

tweetInput.addEventListener('input', function () {
    max_value = 140 - tweetInput.value.length;
    charRemaining.innerHTML = max_value + " Characters Remaining";

    if (max_value < 0) {
        charRemaining.style.color = 'red';
        tweetBtn.disabled = true;
    } else {

        charRemaining.style.color = 'black';
        tweetBtn.disabled = false;
    }

});

let getLastedId = () => {
    return tweetListArr[tweetListArr.length - 1].id;
}
