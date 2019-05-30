console.log('hi, this is sound.js');

//tone.js
var synthOne = new Tone.Synth({
  oscillator:{
    type: 'square8'
  },
  envelope:{
    attack: 0.001,
    decay: 2,
    sustain: 0
  }
}).toMaster();

var synthTwo = new Tone.MonoSynth({
  oscillator: {
    type: "fatsawtooth4",
  },
  filter: {
    type:"peaking"
  },
  envelope:{
    attach: 2,
    decay:1,
    sustain: 4,
    release: 16
  },
  filterEnvelope:{
    attach: 2,
    decay: 1,
    sustain: 1,
    release: 10,
    baseFrequency: 100,
    actaves: 2,
    exponent: 4,
  }
}).toMaster();

var socket = io();
var tweetCount = 0;
var notes = ['A2', 'C2', 'D2', 'E2', 'G2'];

socket.on('note', function(tweetText, userHandle, friendsCount){
  // var tweetWithHandle = '@' + userHandle + ': ' + tweetText;
  var tweetWithHandle = tweetText;
  tweetCount++;
  
  drip();
  triggerNote(tweetWithHandle);
  modify_qty();
  console.log(tweetText);
  // console.log(tweetCount);
});



function drip(){
  var height = Math.floor(Math.random() * 80);
  var width = Math.floor(Math.random() * 50);

  var drop = $('.container').clone();
  $('.container').remove();
   $('body').append(drop);
}


function modify_qty() {
    // var qty = document.getElementById('qty').value;
    // var new_qty = parseInt(qty,10) + val;
    // var new_qty = tweetCount;
    
    // if (new_qty < 0) {
    //     new_qty = 0;
    // }
    
    // document.getElementById('qty').value = new_qty;
    // return new_qty;

    document.getElementById('qty').value = tweetCount;
    // return tweetCount;

    document.getElementById('cups').value = Math.floor(tweetCount / 8);
    document.getElementById('ppl').value = Math.floor(tweetCount / 16);
}


function triggerNote(tweet){

  // getting tweet position on the page radomally
  // var height = Math.floor(Math.random() * 80);
  // var width = Math.floor(Math.random() * 50);
  // var height = 

  // adding html tags to tweet
  // var tweetHtml = '<div class="tweet" id="' + tweetCount + '" style="top:' + height + 'vh; left:' + width + 'vw"><p>' + tweet + '</p></div>';
  // var tweetHtml = '<div class="tweet" id="' + tweetCount + '" style="bottom: 50px"><p id='tweetText'>' + tweet + '</p></div>';
var tweetHtml = '<div class="tweet" id="' + tweetCount + '" style="bottom: 50px">' + tweet + '</div>';

  // coloring the relevant hashtags
  tweetHtml = tweetHtml.replace('#thishashtag', '<span id="hashtag">#thishashtag</span>');


  // adding the tweet to the page
  $('.container').after(tweetHtml);

  // making tweet disappear gradually
  var id = '#' + tweetCount;

    $(id).delay(500).animate({
      'opacity': 00
    }, 4000, function(){
      $(id).remove();
    });


  // incrementing tweetCount
  // tweetCount++;

}

