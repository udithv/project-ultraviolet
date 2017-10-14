#!/usr/bin/env node

const program = require('commander');
const { prompt } = require('inquirer');
const getPort = require('get-port');
const dockNames = require('docker-names');
const Table = require('cli-table-redemption');
const chalk = require('chalk');
const CFonts = require('cfonts');

const { getServers, startServer, stopServer } = require('./server_manager');
const hello = require('./hello');

const log = console.log;
const error = chalk.red;
const underline = chalk.underline;

const questions = [
    {
        type: 'confirm',
        name: 'stopall',
        message: 'Are you sure you want to stop all editor instances ?'
    }
];

program.version('0.0.1');

program
    .command('dock')
    .description('Visit dock to find out about running instances.')
    .action(() => {
        let table = new Table({
            head: ['NAME', 'PID'],
            colWidths: [35, 10]
        });

        getServers()
        .on('data', function ({key, value}) {
            table.push([key.toString(), value.toString()])
          })
          .on('error', function (err) {
            log('Error : ', err)
          })
          .on('end', function () {


             if(!table.length){
                log('No currently running servers');
             }else{
                log(table.toString());
             }
             
          });
    });

program
    .command('start')
    .description('Start the editor in the current directory')
    .action(() => {
        getPort()
            .then(port => {
                let name = dockNames.getRandomName();
                startServer(name,port)
                    .then(() => {
                        console.log('Server Initiated.');
                        console.log(`Instance Name : ${name}`);
                        console.log(`Visit Link: http://localhost:${port}`);
                    })
                    .catch((err) => {
                        console.log('Something Went Wrong. Try Again');
                    });
            });
    });

program
    .command('stop [name]')
    .description('Stop the editor.')
    .action((name) => {
        if(name){
            stopServer(name)
                .then(() => {
                    console.log('Server Stop');
                })
                .catch(err => {
                    console.log('Err : ', err);
                });
        }else{
            console.log('Stopping editor in current directory');
        }
        
    });

program
    .command('stop-all')
    .description('Stops all editor instances.')
    .action(() => {
        prompt(questions)
            .then(({ stopall }) => {
                if(stopall){
                    console.log('Stopping all editors');
                }else{
                    console.log('stop-all aborted');
                }
            });
    });

if(process.argv.length == 2) {
    hello()
     .then(() => program.outputHelp())
     .catch(err => log('Something Went Wrong. \n',err));
    
}




program.parse(process.argv);