$('.windows-button').click(function(){
    
});

$('#submit-button').click(function(){
  document.getElementById('loginpage').style.display = 'none';
  document.getElementById('see-desktop-root-app').style.display = 'block';
})

function redirect() {
  document.getElementById('loginpage').style.display = 'none';
  document.getElementById('see-desktop-root-app').style.display = 'block';
}


// drag elements

// Make the DIV element draggable:
dragElement(document.getElementById("browser"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

var app = new Vue({
    el: '#ip-user',
    data: {
            posts: []
          },
    mounted: function() {
    var vm = this
          this.$http.get('https://ipinfo.io/')
            .then(function(response) {
                         vm.posts = response
                                   })
                               }
                         })


// audio play 

function playSound(filename){
  var mp3Source = '<source src="' + filename + '.mp3" type="audio/mpeg">';
  var oggSource = '<source src="' + filename + '.ogg" type="audio/ogg">';
  var wavSource = '<source src="' + Windowsstartup + '.wav" type="audio/wav">';
  var embedSource = '<embed hidden="true" autostart="true" loop="false" src="' + filename +'.mp3">';
  document.getElementById("sound").innerHTML='<audio autoplay="autoplay">' + mp3Source + oggSource + wavSource + embedSource + '</audio>';
}

function trigger(){
  setInterval(clockRunner, 1);
    function clockRunner(){
      var audioElement = document.getElementById('audiotag1');
      audioElement.play();
    }
  }
// end

//open menu

function openmenu(){
  var x = document.getElementById("seemenu");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// end