const http = require('http');
const fs = require ('fs');
const values = [];
const sitesToHack = [];

http.get('http://www.pass.be', res =>{
    res.setEncoding('utf-8');
        let body='';
    res.on('data', donnee =>{
        body += donnee;
    });
    res.on('end', () => {
        console.log('end');
        fs.writeFile('results.html', body, (err)=>{
            if (err) console.log(err);
            values.push(body);
            console.log('FILE GENERATED');
        });
    });
});