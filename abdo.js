document.addEventListener('touchmove',createFlower);
document.addEventListener('touchstart',createFlower);
document.addEventListener('click',createFlower);

function createFlower(event){
    event.preventDefault();
    let x , y;
    if (event.type === 'click') {
        x = event.clientX;
        y = event.clientY;
    } else if (event.type === 'touchstart' || event.type === 'touchmove' ) {
        x = event.touches[0].clientX;
        y = event.touches[0].clientY;
    }
    let flowers = ['🌸','🌷','🌹','🌼','🏵️','🌻','💮','🌺'];
    let randIndex = Math.floor(Math.random() * flowers.length);
    let div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.top = `${y-25}px`;
    div.style.left = `${x-25}px`;
    div.style.fontSize = '30px';
    div.style.zIndex = -1;
    div.innerHTML = flowers[randIndex];
    document.body.appendChild(div);
    setTimeout(()=>{
        div.remove();
    },5000)
}