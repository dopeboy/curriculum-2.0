/**
* Created with Ed-ScriptEd-Curriculum.
* User: efuquen
* Date: 2014-08-11
* Time: 04:16 AM
* To change this template use Tools | Templates.
*/

var authUrl = "http://zodiac-opinion.codio.io:3000/token"
var translateUrl = "http://zodiac-opinion.codio.io:3000/translate"

function getAuthToken(tokenHandler) {
    $.get(authUrl).done(function(data) {
        tokenHandler(data["access_token"]);
    }).fail(function(data) {
        console.log("Fail: " + JSON.stringify(data));
    });
}

function translate(text, from, to, authToken, handler) {
    var settings = {
        headers: {
            Authorization: "Bearer " + authToken
        },
        data: {
            text: text, from: from, to: to
        },
        type: 'GET'
    };
    $.ajax(translateUrl, settings).done(function(data){
        handler(data);
    });
}


function say (text, voice) {
  var speech = new SpeechSynthesisUtterance(text);
  speech.voice = voice;
  speechSynthesis.speak(speech);
}

$(function() {
    
    var voices;

    if (speechSynthesis) {
      // wait on voices to be loaded before fetching list
      speechSynthesis.onvoiceschanged = function() {
        voices = speechSynthesis.getVoices();
        voices.forEach(function (voice, index) {
          $('#voiceButtons').append('<li><button class="speak-btn">' + voice.name + '</button></li>');
        });

        $('.speak-btn').click(function () {
          var text = $('#translateTo').val();
          var voice = getVoiceFromName($(this).text());
          say(text, voice);
        });
      };

    } else {
      alert("Bad news!  Your browser doesn't have the Speech Synthesis API this project requires.  Try opening this webpage using the newest version of Google Chrome.");
    }

    function getVoiceFromName (name) {
      var foundVoice = null;

      voices.forEach(function (voice, index) {
        if (voice.name === name) {
          foundVoice = voice;
        }
      });

      return foundVoice;
    }

    $("form").submit(function(event) {
        getAuthToken(function(authToken){
           var text = $("#translateFrom").val();
           translate(text, "en", "es", authToken, function(data){
               $("#translateTo").val(data);
           }); 
        });
        event.preventDefault();
    })
});