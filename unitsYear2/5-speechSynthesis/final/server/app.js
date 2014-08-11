/**
* Created with Ed-ScriptEd-Curriculum.
* User: efuquen
* Date: 2014-08-11
* Time: 01:24 PM
* To change this template use Tools | Templates.
*/
var express = require('express');
var request = require('request');

var app = express();

var oauthUrl = 'https://datamarket.accesscontrol.windows.net/v2/OAuth2-13';
var clientId = "Q9VnbjHWpTkLIsKh";
var clientSecret = "6CAX6IJg2SHq+mLGqXZOXIXb6rASx/NlQd9A9Xi28r4=";
var translatorScope = "http://api.microsofttranslator.com";

var translateUrl = "http://api.microsofttranslator.com/v2/Ajax.svc/Translate"

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Authorization");
  next();
 });

app.get('/token', function(req, res) {
    var formData = {
                    client_id: clientId, 
                    client_secret: clientSecret,
                    scope: translatorScope,
                    grant_type: "client_credentials"
                   };
    //res.set('Access-Control-Allow-Origin', '*');
    request.post(oauthUrl).form(formData).pipe(res);
});

app.get('/translate', function(req, res){
    request.get({
        url: translateUrl, 
        qs: req.query,
        headers: {
            Authorization: req.get("Authorization")
        }
    }).pipe(res);
})

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});