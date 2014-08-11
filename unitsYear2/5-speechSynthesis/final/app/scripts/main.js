/**
* Created with Ed-ScriptEd-Curriculum.
* User: efuquen
* Date: 2014-08-11
* Time: 04:16 AM
* To change this template use Tools | Templates.
*/

var baseOAuthUrl = "https://datamarket.accesscontrol.windows.net/v2/OAuth2-13"
var clientId = "Q9VnbjHWpTkLIsKh";
var clientSecret = "6CAX6IJg2SHq+mLGqXZOXIXb6rASx/NlQd9A9Xi28r4=";
var translatorScope = "http://api.microsofttranslator.com";

function getAuthToken() {
    $.post(baseOAuthUrl, {
      	client_id: clientId, 
        client_secret: clientSecret,
        scope: translatorScope,
        grant_type: "client_credentials"
    }).done(function(data) {
        var xml = $($.parseXML(data));
        console.log(xml.find("access_token"));
    });
}

$("form").submit(function(event) {
    event.preventDefault();
    getAuthToken();
})