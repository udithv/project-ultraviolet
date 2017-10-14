const { startServer, stopServer } = require('./server_manager');

// startServer('first_Server',4040)
//         .then(() => {
//             console.log('Server Started');
//             return;
//         })
//         .catch(err => {
//             console.log('Err : ',err);
//         });



stopServer('first_Server')
        .then(() => {
            console.log('Server Stop');
        })
        .catch(err => {
            console.log('Err : ', err);
        });