const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

    follower.style.left = e.clientX - 10 + 'px';
    follower.style.top = e.clientY - 10 + 'px';
});

document.querySelectorAll('a, span, .card').forEach(el => {
    el.addEventListener('mouseenter', () => {
        follower.style.transform = 'scale(1.5)';
    });

    el.addEventListener('mouseleave', () => {
        follower.style.transform = 'scale(1)';
    });
});