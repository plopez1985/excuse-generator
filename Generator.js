
   
function botondeGenerator() {
    let Generator = document.getElementById('Generator');
    Generator.innerHTML = excuseGenerator();
}

let excuseGenerator = () => {
    let quien = ['Dominga', 'Aura', 'Ambar', 'Nelson'];
    let verbo = ['camina', 'baila', 'come', 'viaja'];
    let que = ['con los pies', 'mucho', 'a pucon'];
    let cuando = ['despues del trabajo', 'ahora mismo', 'cuando yo termine', 'siempre', 'bastante'];

    let numeroramdomquien = (Math.floor(Math.random() * 4));
    let numeroramdonverbo = (Math.floor(Math.random() * 4));
    let numeroramdonque = (Math.floor(Math.random() * 3));
    let numeroramdoncuando = (Math.floor(Math.random() * 5));

    return quien[numeroramdomquien] + ' ' + verbo[numeroramdonverbo] + ' ' + que[numeroramdonque] + ' ' + cuando[numeroramdoncuando];
}