let callMeForm = document.querySelector('.call-me-form');


 
document.addEventListener('DOMContentLoaded', async function(){
    let posts = await getPosts(); 
    
    let articles = document.querySelector('.articles');
     
    articles.innerHTML='';

    posts.forEach((post) =>{
        let postHTML = `
        <div class="col-12 col-md-6 col-lg-4 col-xl-4 list-item">
			<div class="cards list-content">
				<img class="card-img-top" src="${post.imageUrl}" alt="${post.title}">
				<div class="card-body">
					<h4 class="card-title">${post.title}</h4>
					<p class="card-text">${post.description}</p>
					<div class="button-box">
					<a href="/sight?id=${post.id}" class="btn btn-primary">Details</a>
					</div>
				</div>
			</div>
		</div>`;
    //Let's add some articles
    articles.insertAdjacentHTML('beforeend', postHTML);
    })
})

callMeForm.addEventListener('submit', function(e){
    e.preventDefault();
    let phoneInput = callMeForm.querySelector('input');

    fetch('http://localhost:3000/callback-requests',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            phoneNumber: phoneInput.value
        })
    }).then((res) => res.text())
    .then(() => alert('We will call you back as soon as possible!'));
})

 
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 50) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
 