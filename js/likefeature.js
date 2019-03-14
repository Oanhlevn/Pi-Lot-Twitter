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
                    <li> <a id="retweet-btn" href="#"><span class="glyphicon glyphicon-retweet"> Retweet </span></a> </li>
                    <li> <a id="like-btn-${tws.id}" onclick="like(${tws.id})" href="#"><span class="glyphicon glyphicon-star"> ${tws.like} Like</span></a> </li>
                    <li> <a id="delete-btn" href="#" style="color:red"><span class="glyphicon glyphicon-delete"> Delete </span></a> </li>
                </ul>
            </div>
        </div>
    </div>`
    });

}
updateTweetList(); 
let like = (id) => {
    let likeBtn = document.getElementById(`like-btn-${id}`);
    tweetListArr.forEach((tws) => {
        if (tws.id === id) {
            if (likeBtn.classList.value.indexOf('liked') < 0) {
                tws.like += 1;
                likeBtn.classList.toggle('liked');
                likeBtn.innerHTML = `<span class="glyphicon glyphicon-star"> ${tws.like} Liked</span>`;
            }
            else {
                tws.like -= 1;
                likeBtn.classList.toggle('liked');
                likeBtn.innerHTML = `<span class="glyphicon glyphicon-star"> ${tws.like} Like</span>`;
            }
        }
    });

}