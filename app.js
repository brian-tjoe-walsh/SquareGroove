const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');
const users = require("./routes/api/users");
const grids = require("./routes/api/grids");
const samples = require("./routes/api/samples");
const User = require('./models/User');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');



mongoose
.connect(db, { useNewUrlParser: true })
.then(() => console.log("Connected to MongoDB successfully"))
.catch(err => console.log(err));


app.use(bodyParser.urlencoded({ 
  extended: false 
}));

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.json());

// app.get("/", (req, res) => {
  //   const user = new User({
    //     handle: 'vibe',
    //     email: 'vibe@vibe.vibe',
    //     password: 'issaVibe'
    //   });
    
    //   user.save();
    //   res.send("Hello World!");
    // });
    
    app.use("/api/users", users);
    app.use("/api/grids", grids);
    app.use("/api/samples", samples);
    
    
    const port = process.env.PORT || 5000;
    
    app.listen(port, () => console.log(`Server is running on port ${port}`));

    
      if (process.env.NODE_ENV === 'production') {
        app.use(express.static('frontend/build'));
        app.get('/', (req, res) => {
          res.sendFile(path.resolve(__dirname, 'frontend', 'public', 'index.html'));
        });
      }