const express = require("express");
const app = express();


app.get("/", (req, res) => {
      var responseText = "Hello World!<br>";
      responseText += "<small>Requested at: " + req.requestTime + "</small>";
      res.send(responseText);
    });
    

app.post("/", (req, res) => {
      res.send("Got a POST request");
    });

app.put("/user", (req, res) => {
      res.send("Got a PUT request at /user");
        });
        
app.delete("/user", (req, res) => {
          res.send("Got a DELETE request at /user");
        });


app.listen(3000, () => {
    console.log("Example app listening on port 3000!");
});

const myLogger = (req, res, next) => {
      console.log("LOGGED");
      next();
    };
    app.use(myLogger);

app.use('/static', express.static(__dirname + '/public'));

//app.use((req, res, next) => {
  //    res.status(404).send("Sorry cant find that!");
   // });
    
    app.use((err, req, res, next) => {
          console.error(err.stack);
          res.status(500).send("Something broke!");
        });

        var birds = require('./birds');

app.use('/birds', birds);

const requestTime = (req, res, next) => {
      req.requestTime = Date.now();
      next();
    };
    app.use(requestTime);
    