var data = {
    'A':{ name: 'Clap', sound:'clap.wav'},
    'B':{ name: 'Hihat', sound:'hihat.wav'},
    'C':{ name: 'Kick', sound:'kick.wav'},
    'D':{ name: 'Openhat', sound:'openhat.wav'},
    'E':{ name: 'Boom', sound:'boom.wav'},
    'F':{ name: 'Clap', sound:'clap.wav'},
    

};

var drumkit = document.getElementById('drumkit');

function construct() {
   for (var key in data) {
    var drumEl = document.createElement('div');
    drumEl.classList.add('drum');
    var h2 = document.createElement('h2');
    h2.textContent = key;
    var span = document.createElement('span');
    span.textContent = data[key].name;

    drumEl.appendChild(h2);
    drumEl.appendChild(span);
    drumkit.appendChild(drumEl);

    data[key].el = drumEl;

    drumEl.addEventListener('Click', function(event) {
        var key = event.currentTarget.querySelector('h2').textContent;
        playDrum(key);
    });
 }
};

    function playDrum(key) {
        var audio = new Audio();
        audio.src = data[key].sound;
        audio.play();

    };

    function handleKeyEvents(event) {
        playDrum(event.key.toUpperCase())
    }
construct();
window.addEventListener('keydown', handleKeyEvents);