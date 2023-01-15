import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const TOTALTIMEPLAY = 'videoplayer-current-time';
const realTimePlayer = localStorage.getItem(TOTALTIMEPLAY) || 0;

player.on(`timeupdate`, throttle(timesave, 1000));

function timesave({ seconds }) {
  localStorage.setItem(TOTALTIMEPLAY, seconds);
}

player.setCurrentTime(realTimePlayer);
