const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
require('dotenv').config()

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}))


app.get("/",function(req,res){

res.sendFile(__dirname + "/signup.html")

});

app.post("/", function (req,res){
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;


//mailchimp members required in this format to send post information.
  const data = {
    members:[
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        }
      }
    ]
  }
const jsonData = JSON.stringify(data); //This is the data to be sent to mailchimp needs to be stringied as per documentation from mailchimp;

const url = process.env.URL //mailchimp main endpoint to include list id.
const options = {
  method:"POST",
  auth: process.env.AUTH //auth to post to mailchimp.
}


//we send a request to mailchimp and then see what resposne we are getting back from them which we console.log
//in order for us to send the/post the info in mailchimp we need save that request in a constant ie request.
//later on we can use that constant request to send things over to the mailchimp server by calling request.write.

const request = https.request(url,options, function (response){ //http.request to post data to mailchimp / response from the mailchimp server

  if (response.statusCode === 200){
    res.sendFile(__dirname + "/success.html")
  }else{
    res.sendFile(__dirname + "/failure.html")
  }

  response.on("data",function(data){ //checking what data mailchimp server has sent us
    console.log(JSON.parse(data))
  })

})
request.write(jsonData); //to post the data to mailchimp
request.end();

})

app.post("/failure",function(req,res){
  res.redirect("/")

})

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("Server has started Successfully");
});

//API key
// 50ca2e460e6788150d938596479ac1b1-us14 ///remeber to change endpoint with us14

//List id
// 069ea7206a
