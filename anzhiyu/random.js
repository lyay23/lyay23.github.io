var posts=["posts/9ec06885/","posts/66e64d45/","posts/d58ccc41/","posts/22918/","posts/6e827460/","posts/6e827460/","posts/6ead9846/","posts/28799/","posts/79666db/","posts/e255a10a/","posts/fc2c180e/","posts/38742/","posts/e2e289e8/","posts/c7b053e8/"];function toRandomPost(){pjax.loadUrl("/"+posts[Math.floor(Math.random()*posts.length)])}