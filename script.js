const spaceHolder = document.querySelector('.space-holder');
const horizontal = document.querySelector('.horizontal');
spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;

function calcDynamicHeight(ref) {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const objectWidth = ref.scrollWidth;
    return objectWidth - vw + vh + 300; // 144 is the padding (in pixels) desired on the right side of the .cards container. This can be set to whatever your styles dictate
}

window.addEventListener('scroll', () => {
    const sticky = document.querySelector('.sticky');
    horizontal.style.transform = `translateX(-${sticky.offsetTop}px)`;
});

window.addEventListener('resize', () => {
    spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
});


const reavealer = document.querySelectorAll('.revealer');

revealerObserver = new IntersectionObserver(function (entries) {
    for (let i = 0; i < entries.length; i++) {
        if (entries[i].intersectionRatio > 0) { // This should be a value between 0 and 1
            // 0 means the element is starting to appear in the viewport.
            // 1 means the element is 100% in the viewport.
            entries[i].target.classList.add('show-revealer');
        } else {
            entries[i].target.classList.remove('show-revealer');
        }
    }
});
if (reavealer.length > 0) {
    for (let i = 0; i < reavealer.length; i++) {
        revealerObserver.observe(reavealer[i]);
    }
}