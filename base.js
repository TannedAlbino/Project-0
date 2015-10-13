console.log("Sanity Check: JS is working!");

$(document).ready(function(){

app = new Blog();
app.addEventListeners();
//get the information from the submit 


});

function Blog() {
	//can't get past this point.  Don't know why.  
	//Tried a few different ways before trying solution to work backwards from, 
	//couldn't get it to work.  Not using local storage.
	this.posts = JSON.parse([ ]);
	// console.log("can't get JSON Array to work");  
	this.$submitButton = $('.btn');
	this.$post = $('#post');
	this.$blogDiv = $('.list');
}

Blog.prototype.addEventListeners = function() {
	var blog = this;
	this.$submitButton.on('click', function(event) {
// Stop the page from emptying itself
		event.preventDefault();
			console.log("Initial Submit is working");
		blog.createPost(blog.$post.val());
		});
	
};
Blog.prototype.createPost = function(content){
	var post = new Post(content);
	this.posts.push(blog);
	this.render(post);
};

Blog.prototype.render = function(post){
	var html = "<li class='list-item'>" + post.content + "<span class= 'history history-remove pull-right'></span></li>";
	this.$blogDiv.append(html);
	this.$post.val('');
	this.listenToDelete();
};

Blog.prototype.listenToDelete = function(){
	var blog = this;
	$('.history-remove').on('click', function(event){
		console.log(event.target);
		blog.delete(this.parentElement);
	});
};
Blog.prototype.delete = function(post){
		post.remove();
};

function Post(content){
	this.content = content;
}


// These were first attempts.  
// var newPost = document.getElementById("blogBox").onclick = function(){
// 	document.write(this.value);
// event.preventDefault();
// console.log(newPost);
// 	};
//Began to use jQuery

// $('#blogBox').click(function(event){
    
// });
//Different samples tried and worked.
    // function display(){ 
    //         document.write("You entered: " + document.myform.data.value);
    //     } 
//     var newBlog = $('<form>', function newBlog(){
//         document.write(submitButton);
        
//     }).append($('<input>', {
//         'name': 'q',
//         'value': 'stack overflow',
//         'type': 'hidden'
//     }));
//     newBlog.submit();
// });	
//other jQuery attemps
//display();
// 	$('#blog-box').on('submit', function(e){
// 		e.preventDefault();
// 		var newPost = $('<form>', {

// 		})
// 		)}
// });
//	(document).write $(#blog-box)
  // code in here

// });
