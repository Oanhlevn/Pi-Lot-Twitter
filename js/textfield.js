var tweetInput = document.getElementById('tweet-input');
var charRemaining = document.getElementById('char-remaining');
var tweetBtn = document.getElementById('tweet-btn');
var tweetList = document.getElementById('tweet-list');

var max_value;
let tweetListArr = [{
    id: 1,
    user: {
        name: 'Tim Cook',
        avartar: 'https://pbs.twimg.com/profile_images/1035649273721847809/B0f8n_oe_bigger.jpg'
    },
    content: 'It’s not too late to get moving for #heartmonth! Thanks to everyone who joined our #TodayatApple Health & Fitness Walk in Brooklyn yesterday. #closeyourrings',
    publishAt: '11:49 AM - 22 Feb 2019',
    retweetId: '',
    like: 2900,
    retweetTimes: 302,
    imageUrl: 'https://pbs.twimg.com/media/D1KPPOqU0AAEoVX.jpg'
},
{
    id: 2,
    user: {
        name: 'Sundar Pichai',
        avartar: 'https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_bigger.jpg'
    },
    content: 'I love Pi-loi team',
    publishAt: '11:49 AM - 22 Feb 2019',
    retweetId: '',
    like: 5000,
    retweetTimes: 582,
    imageUrl: 'https://pbs.twimg.com/media/D1H_sjeUYAAvi7-.jpg'
}];

tweetBtn.addEventListener('click', function () {
    let newTwsid = parseInt(getLastedId()) + 1;
    tweetList.innerHTML += `
    <div class="panel-body" id="tweets-list-${newTwsid}">
        <div class="media">
            <a class="media-left" href="#fake">
                <img alt="" class="media-object-img-rounded" height = 30px width = 30px src="images/human.png">
            </a>
            <div class="media-body">
                 <p id='body'>${tweetInput.value}</p>

                <ul class="nav nav-pills nav-pills-custom">
                    <li> <a id="retweet-btn" href="#"><span class="glyphicon glyphicon-retweet"> Retweet </span></a> </li>
                    <li> <a id="like-btn-${newTwsid}" onclick="likeTws(${newTwsid})" href="#"><span class="glyphicon glyphicon-star"> 0 Like</span></a> </li>
                    <li> <a id="delete-btn-${newTwsid}" onclick="deleteTws(${newTwsid})" href="#" style="color:red"><span class="glyphicon glyphicon-delete"> Delete </span></a> </li>
                </ul>
            </div>
        </div>
    </div>`

    tweetListArr.push({
        id: newTwsid,
        user: {
            name: 'Me',
            avartar: 'https://pbs.twimg.com/profile_images/1035649273721847809/B0f8n_oe_bigger.jpg'
        },
        content: tweetInput.value,
        publishAt: new Date(),
        retweetId: null,
        like: 0,
        retweetTimes: 0,
        imageUrl: ''
    })
});

function resetField() {
    tweetInput.value = '';

}


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