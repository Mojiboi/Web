let querry;
document.getElementById('wel').textContent = "Lets have some fun?"
querry = window.prompt("please Enter querry:");
document.getElementById('wel').textContent = `Welcome ${querry}`




const button = document.getElementById('moveButton');

button.addEventListener('mouseover', () => {
    // Generate random position within the viewport
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    button.style.position = 'absolute';
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
});

document.getElementById('explodeButton').addEventListener('click', explode);

function explode() {
    const container = document.getElementById('explosionContainer');
    const shapes = ['🌸', '🌺', '💖', '💝', '💐', '🌼', '🌹','yeah'];
    document.body.style.backgroundColor = 'purple'
    for (let i = 0; i < 250; i++) {
        const shape = document.createElement('div');
        shape.className = 'shape';
        shape.textContent = shapes[Math.floor(Math.random() * shapes.length)];
        
        const x = Math.random() * 1600 - 900;
        const y = Math.random() * 1600 - 900;
        
        shape.style.setProperty('--x', `${x}px`);
        shape.style.setProperty('--y', `${y}px`);
        shape.style.left = `${window.innerWidth / 2}px`;
        shape.style.top = `${window.innerHeight / 2}px`;
        
        container.appendChild(shape);
        
        shape.addEventListener('animationend', () => {
            shape.remove();
            document.body.style.backgroundColor = 'white'

        });
    }
}
