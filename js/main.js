var videoElement = document.querySelector('video');

videoElement.addEventListener('timeupdate', setTime);

function setTime() {
    var minutes = Math.floor(videoElement.currentTime / 60);
    var seconds = Math.floor(videoElement.currentTime - minutes * 60);
    var minuteValue;
    var secondValue;
  
    if (minutes < 10) {
      minuteValue = '0' + minutes;
    } else {
      minuteValue = minutes;
    }
  
    if (seconds < 10) {
      secondValue = '0' + seconds;
    } else {
      secondValue = seconds;
    }
    var mediaTime = minuteValue + ':' + secondValue;
    timer.textContent = mediaTime;
} 

