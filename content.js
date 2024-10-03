setInterval(() => {
    const shitty = document.getElementsByTagName("reddit-recent-pages")[0];
    if (shitty) {
        shitty.remove();
    }
    localStorage.removeItem("recent-subreddits-store");
    localStorage.removeItem("recent-searches-store");
}, 1000);