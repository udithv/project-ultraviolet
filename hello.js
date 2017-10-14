const figlet = require('figlet');

module.exports = () => {
    return new Promise((resolve, reject) => {
        figlet.fonts(function(err, fonts) {
            if (err) {
                console.log('something went wrong...');
                console.dir(err);
                reject();
            }
            let font = fonts[Math.round(Math.random() * fonts.length)]
            figlet('UltraViolet Editor',{
                font
            }, (err, fig) => {
                if (err) {
                    console.log('Something went wrong...');
                    console.dir(err);
                    reject();
                }
                console.log(fig);
                console.log('\n');
                console.log('Re-enter to get a different banner.');
                resolve();
            });
        });
    });
};