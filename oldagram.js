function postTemplate(post) {
    return `
    <article class="post" id="${post.id}">
    <header>
        <img class="avatar" src="${post.avatar}" alt="${post.name} Avatar" height="34" width="34">
        <h3 class="author">${post.name}</h3>
        <p class="location">${post.location}</p>
    </header>
    <img class="post-featured-image" src="${post.post}" alt="${post.name} Art" width="375" height="375">
    <section class="buttons">
        <button type="button" class="like-btn" data-post-id="${post.id}"><img src="icons/like.svg" alt="Like" height="22"></button>
        <button type="button" class="comment-btn" data-post-id="${post.id}"><img src="icons/comment.svg" alt="Comment" height="22"></button>
        <button type="button" class="share-btn" data-post-id="${post.id}"><img src="icons/share.svg" alt="Share" height="22"></button>
    </section>
    <section class="likes-count">
        <p data-post-id="${post.id}">${post.likes} likes</p>
    </section>
    <section class="comments">
        <article class="comment"><h4 class="comment-author">${post.username}</h4> <p>${post.comment}</p></article>
    </section>
    </article>
    `
}

function likeBtnHandler(id) {
    const likesCount = document.getElementById(id).querySelector('.likes-count')
    const likeBtn = document.getElementById(id).querySelector('.like-btn')
    if (!posts[id].liked) {
        posts[id].liked = true
        posts[id].likes++
        likeBtn.innerHTML = '<img src="icons/liked.svg" alt="Liked" height="22">'
    } else {
        posts[id].liked = false
        posts[id].likes--
        likeBtn.innerHTML = '<img src="icons/like.svg" alt="Like" height="22">'
    }
    likesCount.textContent = posts[id].likes + ' likes'
}

function init() {
    for (let i in posts) {
        posts[i].id = i
        document.getElementById('posts').innerHTML += postTemplate(posts[i])
    }
    const likeBtns = document.querySelectorAll('.like-btn')
    for (let i = 0; i < likeBtns.length; i++) {
        likeBtns[i].addEventListener('click', function() {
            likeBtnHandler(i)
        })
    }
}

window.addEventListener('load', init)