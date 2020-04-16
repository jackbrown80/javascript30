function playSound(e) {
  this.console.log(e.keyCode);
  const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return; // do nothing
  audio.currentTime = 0;
  audio.play()
  this.console.log(key);
  key.classList.add('playing');
}

function removeTransition(e) {
  console.log(e);
  if (e.propertyName !== 'transform') return; //
  console.log(e);
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);