document.getElementById('noBtn').onclick = function(event) {
    const noBtn = event.target;
    const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
    const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
};

document.getElementById('yesBtn').onclick = function() {
    window.location.href = 'success.html'; // Redirects to another page, make sure to create this page.
};
