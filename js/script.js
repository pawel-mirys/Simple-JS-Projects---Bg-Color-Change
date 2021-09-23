let bg = document.querySelector('body');
const btn = document.querySelector('.btn-outline-secondary');
const colors = ['red', 'blue', 'pink', 'yellow', 'green'];

const randomColor = () => {
    const randomIndex = parseInt(Math.random() * colors.length);
    console.log(randomIndex, colors[randomIndex]);
    bg.style.background = colors[randomIndex];
}

btn.addEventListener('click', randomColor);