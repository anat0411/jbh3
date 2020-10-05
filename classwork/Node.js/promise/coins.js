var express = require('express');
var router = express.Router();
var https = require("https");

var coins = [];
router.get('/',function(req,res,next){
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
          res.json(data);
        });
      
      }).on("error", (err) => {
        console.log("Error: " + err.message);
      });
});

router.get('/:id',function(req,res,next){
    loop()
    .then( (val) => {
        console.log(val);
        return loop2(val);
    })
    .then( (val2) => {
        return loop3(val2);
    })
    .then( (val3) => {
        console.log( "Finish!!!");
    })
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


function loop(){
    return new Promise((resolve,reject) => {
        try{
            for( let x = 0; x < 100; x++){
                console.log(x);
            }
            resolve("Done!");
        }catch(err){
            reject("Error");
        }
    });
}

module.exports = router;