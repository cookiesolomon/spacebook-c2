
var idNum = 0;
var posts = [];

$('button').on('click', function () {

    var post = { 'text': $('#post-name').val(), 'id': idNum++ };
    posts.push(post);
    renderPosts()
    comments();
    $('#post-name').val("");

});

//remove btn click event
$('.posts').on('click', '.remove-post',function () {
    var dataId = $(this).closest('p').data().id;
    //remove from the array
    posts.splice(dataId, 1);
    //rerender the posts
    renderPosts();
});


function renderPosts() {
    
    //removes all posts
    $('.posts').empty();
    //reappends all posts
    for (i = 0; i < posts.length; i++) {
        $('.posts').append('<div class="post">' +
        '<p data-id="' + posts[i].id + '">' + ' Name: ' + posts[i].text + 'ID: ' + posts[i].id + 
        '<button type="button" class="remove-post">Remove Post</button>'+
        '</p>' +
        '<input id="user-name" type="text" placeholder="username"><br><input id="comments-area" type="text" placeholder="leave a comment...">'+
        '<button type="button" class="comments-button">Comment!</button><button type="button" class="see-posts">See Comments</button>' +
        '<div class="comments"></div>'+
        '</div>'
    );
}

}

// function for adding comments to div class = comments above 

// //INDIVIDUAL PROJECT EXTENSION 1 (OPTIONAL!)
// Add a feature that allows each post to receive a comment. Each post will require it's own form,
//  allowing a user to leave their username and some kind of comment text.
//  List all the comments and associated users below the post.

function comments() {
   


    $('.posts').on('click', ".comments-button",function () {
        if ($('#comments-area').val().length > 0) {
            $(this).append('<div class=".comments"><p>' + $('#user-name').val() + $('#comments-area').val() + '</p></div>');

            $('#user-name').val("");
            $('#comments-area').val("");
            renderPosts();
        }
      
    });

    $('.delete').on('click', function () {
        $('.comments').remove();

    });

}

//will ony remove post---if remove them in order of data id,

//will only post a comment from comments area..also doesnt display anymore