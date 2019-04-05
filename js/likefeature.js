var retweetBox = document.getElementById('dialog');
var d = new Date();
let updateTweetList = () => {
    tweetListArr.forEach(tws => {
        let indexOfReTws = false;
        let reTwsObj = {};
        if (tws.retweetId != null) {
            let retweetId = tws.retweetId;
            tweetListArr.forEach((retws, index) => retweetId == retws.id ? indexOfReTws = index : false);
            reTwsObj = tweetListArr[indexOfReTws];
        }
        tweetList.innerHTML += `
    <div class="panel panel-body border rounded" id="tweets-list-${tws.id}">
        <div class="media">
            <a class="media-left" href="#fake">
                <img alt="" class="media-object-img-rounded avatar"  src="${tws.user.avartar}">
            </a>
            <div class="media-body">
            <b> ${tws.user.name} </b> ${'@' + tws.user.name.split(" ").join("").toLowerCase()}
                 <p id='body'>${insertHashtag(tws.content)}</p>
                 ${ indexOfReTws !== false ? `<p class="border rounded p-2">
                 <b>${reTwsObj.user.name}</b> ${'@' + reTwsObj.user.name.split(" ").join("").toLowerCase()} <br/>
                 ${insertHashtag(reTwsObj.content)}</p>` : ''}
                 <p class="font-italic" id='body'>${moment(tws.publishAt).fromNow()}</p>
        <ul class="nav nav-pills nav-pills-custom">
            <li> <a id="retweet-btn-${tws.id}" onclick="reTws(${tws.id})" > Retweet <span class="glyphicon glyphicon-retweet"></span></a> </li>
            <li> <a id="like-btn-${tws.id}" onclick="likeTws(${tws.id})"> Like <span class="glyphicon glyphicon-star"> ${tws.like}</span></a> </li>
            <li> <a id="delete-btn-${tws.id}" onclick="deleteTws(${tws.id})" style="color:red"> Delete <span class="glyphicon glyphicon-remove"></span></a> </li>
        </ul>
            </div>
        </div>
    </div> `
    });
}

updateRetweet = (retweetValue, tweetValue) => {
    let newTwsid = parseInt(getLastedId()) + 1;
    tweetList.innerHTML += `
    <div class="panel panel-body border boder-radius=5" id = "tweets-list-${newTwsid}">
        <div class="media">
            <a class="media-left" href="#fake">
                <img alt="" class="media-object-img-rounded" height= 30px width = 30px src="images/human.png">
            </a>
            <div class="media-body">
                <b> Pilot Team </b>  @pilotTeam
                <p> ${tweetValue} </p>
                <p  class='border rounded p-2'><b>${retweetValue.user.name}</b> ${'@' + retweetValue.user.name.split(" ").join("").toLowerCase()} <br/> ${insertHashtag(retweetValue.content)}</p>
                <p class="font-italic">${moment(d).fromNow()}</p>
                <ul class="nav nav-pills nav-pills-custom">
                    <li> <a id="retweet-btn-${newTwsid}" onclick="reTws(${newTwsid})" > Retweet <span class="glyphicon glyphicon-retweet"></span></a> </li>
                    <li> <a id="like-btn-${newTwsid}" onclick="likeTws(${newTwsid})"> Like <span class="glyphicon glyphicon-star"> 0 Like </span></a> </li>
                    <li> <a id="delete-btn-${newTwsid}" onclick="deleteTws(${newTwsid})" style="color:red"> Delete <span class="glyphicon glyphicon-remove"></span></a> </li>
                </ul>
            </div>
        </div>
    </div > `;

    tweetListArr.push({
        id: newTwsid,
        user: {
            name: 'Pilot team',
            avartar: 'images/human.png'
        },
        content: tweetInput.value,
        publishAt: new Date(),
        retweetId: retweetValue.id,
        like: 0,
        retweetTimes: 0,
        imageUrl: ''
    });
    putJson();
}


let reTws = (id) => {
    let tws = tweetListArr.filter(tws => tws.id === id)
    var retweetValue = prompt(`Retweet: ${tws[0].content} `)
    if (retweetValue == null) {
        return false;
    }
    updateRetweet(tws[0], insertHashtag(retweetValue));
}


let likeTws = (id) => {
    let likeBtn = document.querySelector(`#like-btn-${id} `);
    tweetListArr.forEach((tws) => {
        if (tws.id === id) {
            if (likeBtn.classList.value.indexOf('liked') < 0) {
                tws.like += 1;
                likeBtn.classList.toggle('liked');
                likeBtn.innerHTML = ` Unlike <span class="glyphicon glyphicon-star"> ${tws.like} </span> `;
            } else {
                tws.like -= 1;
                likeBtn.classList.toggle('liked');
                likeBtn.innerHTML = ` Like <span class="glyphicon glyphicon-star"> ${tws.like} </span> `;
            }
        }
    });
    putJson();
};

let deleteTws = (id) => {
    if (confirm('Delete this tweet, are you sure?')) {
        tweetListArr.filter(tws =>
            tws.id === id || tws.retweetId === id
        ).forEach(tws => {
            let twsElement = document.querySelector(`#tweets-list-${tws.id}`);
            twsElement.parentNode.removeChild(twsElement);
            tweetListArr.splice(tweetListArr.indexOf(tws), 1);
        });
    }
    putJson();
};

let uploadJson = () => {
    $.ajax({
        url: "https://api.myjson.com/bins/",
        type: "POST",
        data: JSON.stringify(tweetListArr),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
            console.log(data);
        }
    });
}
let putJson = () => {
    $.ajax({
        url: "https://api.myjson.com/bins/hoi3a",
        type: "PUT",
        data: JSON.stringify(tweetListArr),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
            console.log(data);
        }
    });
}