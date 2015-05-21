var mainTemp = require('./templates/main.hbs');

document.querySelector('.main').innerHTML = mainTemp({file: 'MAIN'});
