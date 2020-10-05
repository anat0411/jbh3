var express = require('express');
var router = express.Router();
var https = require("https");

var coins = [];
router.get('/',function(req,res,next){
    getData()
    .then( data => {
        console.log("Inside Then");
        res.json(data);

    })
    .catch( err => {
        res.status(204).json(err);
    });
    console.log( "After Function");
});

router.get('/:id',function(req,res,next){
    loop()
    .then( (val) => {
        console.log(val);
        //return loop2(val);
    })
    // .then( (val2) => {
    //     return loop3(val2);
    // })
    // .then( (val3) => {
    //     console.log( "Finish!!!");
    // })
    .catch( (err) => {
        console.log(err);
    });

    console.log( "Before Loop");
    for( let x = 0; x < 100; x++){
        console.log( x);
    }
    console.log("After Loop");





    for( let i = 0; i < coins.length ; i++ ){
        if( coins[i].id == req.params.id){
            res.status(200).json(coins[i]);
        }
    }
    res.status(204).json();
});


function 

(){
    return new Promise((resolve,reject) => {
        try{
            if( x > 10){
                resolve(10);
            }
            if( x < 5) {
                
                (5);
            }
            for( var x = 0; x < 100; x++){
                console.log(x);
            }
            resolve("Done!");
        }catch(err){
            reject(err);
        }
    });
}

function getData(){
    return new Promise( (resolve,reject) =>{
        try{
            https.get('https://api.coingecko.com/api/v3/coins/list', (resp) => {
                let data = '';
            
                // A chunk of data has been recieved.
                resp.on('data', (chunk) => {
                    data += chunk;
                });
            
                // The whole response has been received. Print out the result.
                resp.on('end', () => {
                    //console.log(JSON.parse(data));
                    coins = JSON.parse(data);
                    resolve(data);
                    //res.json(data);
                });
            
            }).on("error", (err) => {
                reject(err);
                console.log("Error: " + err.message);
            });

        }catch(err){
            reject(err);
        }
        
    });
}

module.exports = router;