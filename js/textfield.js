var tweetInput = document.getElementById('tweet-input');
var charRemaining = document.getElementById('char-remaining');
var tweetBtn = document.getElementById('tweet-btn');
var tweetList = document.getElementById('tweet-list'); 
var deleteBtn = document.getElementById('delete-btn');
var likeBtn = document.getElementById('like-btn');

var max_value; 
let tweetListArr =[{
	id: '',
	content:'',
	publishAt: '',
	retweetId: '',
	like:'',
	retweetTimes: ''
}];

function likePost(){
    likeBtn.innerText = "Unlike";
}
function deletePost(number) {
    tweetList.innerHTML = ''
}

tweetBtn.addEventListener('click', function() {
	tweetList.innerHTML +=  `<div class="panel-body" id="tweets-list">
					<div class="media">
						<a class="media-left" href="#fake">
							<img alt="" class="media-object-img-rounded" height = 30px width = 30px src="images/human.png">
						</a>
						<div class="media-body">
							<p id='body'>${tweetInput.value}</p>

							<ul class="nav nav-pills nav-pills-custom">
								<li> <a id="retweet-btn" href="#"><span class="glyphicon glyphicon-retweet"> Retweet </span></a> </li>
								<li> <a  onclick="likePost()" href="#"><span class="glyphicon glyphicon-like"> Like </span></a> </li>
								<li> <a id="delete-btn" onclick="deletePost()" href="#" style="color:red"><span class="glyphicon glyphicon-delete"> Delete </span></a> </li>
							</ul>
						</div>

					</div>
				</div>
            </div>`
            
    resetField();
});

function resetField() {
	tweetInput.value = '';
	charRemaining.innerHTML = 140 + " Characters Remaining";
}


tweetInput.addEventListener('input', function() {
	max_value = 140 - tweetInput.value.length;
	charRemaining.innerHTML = max_value + " Characters Remaining";
	
	if (max_value < 0) {
		charRemaining.style.color = 'red';
		tweetBtn.disabled = true;
	} else {
		
		charRemaining.style.color = 'black';
		tweetBtn.disabled = false;
	}

});// Code here