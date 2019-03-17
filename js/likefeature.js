var retweetBox = document.getElementById('dialog');
var d = new Date();

let updateTweetList = () => {
    tweetListArr.forEach(tws => {
        console.log(tws);
        tweetList.innerHTML += `
    <div class="panel panel-body border rounded" id="tweets-list-${tws.id}">
        <div class="media">
            <a class="media-left" href="#fake">
                <img alt="" class="media-object-img-rounded" height = 30px width = 30px src="images/human.png">
            </a>
            <div class="media-body">
            <b> Pilot Team </b>  @pilotTeam 
                 <p id='body'>${tws.content}</p>
                 <p class="font-italic" id='body'>${moment(d).fromNow()}</p>
                <ul class="nav nav-pills nav-pills-custom">
                
                    <li> <a id="retweet-btn-${tws.id}" onclick="reTws(${tws.id})" href="#" > Retweet <span class="glyphicon glyphicon-retweet"></span></a> </li>
                    <li> <a id="like-btn-${tws.id}" onclick="likeTws(${tws.id})" href="#"> Like <span class="glyphicon glyphicon-star"> ${tws.like}</span></a> </li>
                    <li> <a id="delete-btn-${tws.id}" onclick="deleteTws(${tws.id})" href="#" style="color:red"> Delete <span class="glyphicon glyphicon-remove"></span></a> </li>
                </ul>
            </div>
        </div>
    </div>`
    });
}

updateRetweet = (retweetValue, tweetValue) => {
    let newTwsid = parseInt(getLastedId()) + 1;
    tweetList.innerHTML += `
    <div class="panel panel-body border boder-radius=5" id="tweets-list-${newTwsid}">
        <div class="media">
            <a class="media-left" href="#fake">
                <img alt="" class="media-object-img-rounded" height = 30px width = 30px src="images/human.png">
            </a>
            <div class="media-body">
            <b> Pilot Team </b>  @pilotTeam 
                <p> ${tweetValue} </p>
                 <p id='body' class='border rounded'> ${retweetValue.content}</p>
                 <p class="font-italic" id='body'>${moment(d).fromNow()}</p>
                <ul class="nav nav-pills nav-pills-custom">
                    <li> <a id="retweet-btn-${newTwsid}" onclick="reTws(${newTwsid})" href="#" > Retweet <span class="glyphicon glyphicon-retweet"></span></a> </li>
                    <li> <a id="like-btn-${newTwsid}" onclick="likeTws(${newTwsid})" href="#"> Like <span class="glyphicon glyphicon-star"> 0 Like </span></a> </li>
                    <li> <a id="delete-btn-${newTwsid}" onclick="deleteTws(${newTwsid})" href="#" style="color:red"> Delete <span class="glyphicon glyphicon-remove"></span></a> </li>
                </ul>
            </div>
        </div>
    </div>`;

    tweetListArr.push({
        id: newTwsid,
        user: {
            name: 'Me',
            avartar: 'https://pbs.twimg.com/profile_images/1035649273721847809/B0f8n_oe_bigger.jpg'
        },
        content: tweetInput.value,
        publishAt: new Date(),
        retweetId: retweetValue.id,
        like: 0,
        retweetTimes: 0,
        imageUrl: ''
    })
}

updateTweetList();

let reTws = (id) => {
    let retweetBtn = document.getElementById(`retweet-btn-${id}`);
    let tws = tweetListArr.filter(tws => tws.id === id)
    var retweetValue = prompt(`Retweet: ${tws[0].content}`)
    if (retweetValue == null) {
        return false;
    }
    updateRetweet(tws[0], retweetValue);
}


let likeTws = (id) => {
    let likeBtn = document.getElementById(`like-btn-${id}`);
    tweetListArr.forEach((tws) => {
        if (tws.id === id) {
            if (likeBtn.classList.value.indexOf('liked') < 0) {
                tws.like += 1;
                likeBtn.classList.toggle('liked');
                likeBtn.innerHTML = ` Unlike <span class="glyphicon glyphicon-star"> ${tws.like} </span>`;
            } else {
                tws.like -= 1;
                likeBtn.classList.toggle('liked');
                likeBtn.innerHTML = ` Like <span class="glyphicon glyphicon-star"> ${tws.like} </span>`;
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

