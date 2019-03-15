var retweetBox = document.getElementById('dialog');

tweetListArr = [{
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
}, {
    id: 3,
    user: {
        name: 'Minh Thang',
        avartar: 'https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_bigger.jpg'
    },
    content: 'Wowwwwww!!!',
    publishAt: '11:49 AM - 22 Feb 2019',
    retweetId: 1,
    like: 5000,
    retweetTimes: 582,
    imageUrl: 'https://pbs.twimg.com/media/D1H_sjeUYAAvi7-.jpg'
}];

let updateTweetList = () => {
    tweetListArr.forEach(tws => {
        console.log(tws);
        tweetList.innerHTML += `
    <div class="panel-body" id="tweets-list-${tws.id}">
        <div class="media">
            <a class="media-left" href="#fake">
                <img alt="" class="media-object-img-rounded" height = 30px width = 30px src="images/human.png">
            </a>
            <div class="media-body">
                 <p id='body'>${tws.content}</p>
                <ul class="nav nav-pills nav-pills-custom">
                    <li> <a id="retweet-btn-${tws.id}" onclick="reTws(${tws.id})" href="#" ><span class="glyphicon glyphicon-retweet"> Retweet </span></a> </li>
                    <li> <a id="like-btn-${tws.id}" onclick="likeTws(${tws.id})" href="#"><span class="glyphicon glyphicon-star"> ${tws.like} Like</span></a> </li>
                    <li> <a id="delete-btn-${tws.id}" onclick="deleteTws(${tws.id})" href="#" style="color:red"><span class="glyphicon glyphicon-delete"> Delete </span></a> </li>
                </ul>
            </div>
        </div>
    </div>`
    });

}

let sampleTwsArray = [{
    id: '',
    user: {
        name: '',
        avartar: ''
    },
    content: '',
    publishAt: '',
    retweetId: '',
    like: '',
    retweetTimes: '',
    imageUrl: ''
}],

updateRetweet = (retweetValue,tweetValue) => {
    // sampleTwsArray.forEach(tws => {
        // console.log(tweetValue.value);
        let newTwsid = parseInt(getLastedId()) + 1;
        tweetList.innerHTML += `
    <div class="panel-body" id="tweets-list-${newTwsid}">
        <div class="media">
            <a class="media-left" href="#fake">
                <img alt="" class="media-object-img-rounded" height = 30px width = 30px src="images/human.png">
            </a>
            <div class="media-body">
                <p> ${tweetValue} </p>
                 <p id='body'> ${retweetValue}</p>
                <ul class="nav nav-pills nav-pills-custom">
                    <li> <a id="retweet-btn-${newTwsid}" onclick="reTws(${newTwsid})" href="#" ><span class="glyphicon glyphicon-retweet"> Retweet </span></a> </li>
                    <li> <a id="like-btn-${newTwsid}" onclick="likeTws(${newTwsid})" href="#"><span class="glyphicon glyphicon-star"> 0 Like</span></a> </li>
                    <li> <a id="delete-btn-${newTwsid}" onclick="deleteTws(${newTwsid})" href="#" style="color:red"><span class="glyphicon glyphicon-delete"> Delete </span></a> </li>
                </ul>
            </div>
        </div>
    </div>`
    // });
}

updateTweetList();

let reTws = (id) => {
    let retweetBtn = document.getElementById(`retweet-btn-${id}`);
    let tws = tweetListArr.filter(tws => tws.id === id)
    var retweetValue = prompt(`Retweet: ${tws[0].content}`)
    if (retweetValue == null) {
        return false;
    }
    updateRetweet(tws[0].content,retweetValue);
}


let likeTws = (id) => {
    let likeBtn = document.getElementById(`like-btn-${id}`);
    tweetListArr.forEach((tws) => {
        if (tws.id === id) {
            if (likeBtn.classList.value.indexOf('liked') < 0) {
                tws.like += 1;
                likeBtn.classList.toggle('liked');
                likeBtn.innerHTML = `<span class="glyphicon glyphicon-star"> ${tws.like} Unlike </span>`;
            }
            else {
                tws.like -= 1;
                likeBtn.classList.toggle('liked');
                likeBtn.innerHTML = `<span class="glyphicon glyphicon-star"> ${tws.like} Like s</span>`;
            }
        }
    });
};

let deleteTws = (id) => {
    if (confirm('Delete this tweet, are you sure?')) {
        tweetListArr.filter(tws =>
            tws.id === id || tws.retweetId === id
        ).forEach(tws => {
            let twsElement = document.getElementById(`tweets-list-${tws.id}`);
            twsElement.parentNode.removeChild(twsElement);
            tweetListArr.splice(tweetListArr.indexOf(tws), 1);
        });
    }
};

