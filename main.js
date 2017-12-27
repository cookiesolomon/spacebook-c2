
var idNum = 0;
var posts = [];

$('button').on('click', function () {

    var post = { 'text': $('#post-name').val(), 'id': idNum++ };
    posts.push(post);
    renderPosts()
    comments();
    $('#post-name').val("");

});

function renderPosts() {
    //removes all posts
    $('.posts').find('p').remove();
    //reappends all posts
    for (i = 0; i < posts.length; i++) {
        $('.posts').append('<p data-id="' + posts[i].id + '">' + ' Name: ' + posts[i].text + 'ID: ' + posts[i].id + '  <button type="button" class="remove">Remove Post</button><button type="button" class="see-posts">See Comments</button></p>');
    }

    //remove btn click event
    $('.remove').on('click', function () {
        //remove from the array
        for (var j = 0; j < posts.length; j++) {
            if ($('p').data().id === posts[j].id) {
                posts.splice(posts[j], 1);
            }
        }
        //rerender the posts
        renderPosts()
    });
}

// //INDIVIDUAL PROJECT EXTENSION 1 (OPTIONAL!)
// Add a feature that allows each post to receive a comment. Each post will require it's own form,
//  allowing a user to leave their username and some kind of comment text.
//  List all the comments and associated users below the post.

function comments() {
    $('.posts').append(
        '<form><input id="user-name" type="text" placeholder="username"><br><input id="comments-area" type="text" placeholder="leave a comment..."><br><button type="button" class="comments-button">Click Me!</button><button type="button" class="delete">Delete</button></form>')


    $('.comments-button').on('click', function () {
        if ($('#comments-area').val().length > 0) {
            $('.posts').append('<div class="display-comment"><p>' + $('#user-name').val() + $('#comments-area').val() + '</p></div>');

            $('#user-name').val("");
            $('#comments-area').val("");
        }

    });

    $('.delete').on('click', function () {
        $('.display-comment').remove();

    });

}

