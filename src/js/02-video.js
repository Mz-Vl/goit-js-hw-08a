import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const updateTime = throttle(function (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000);

player.on('timeupdate', function (data) {
    updateTime(data);
});

window.addEventListener('load', function () {
    const currentTime = localStorage.getItem('videoplayer-current-time');
    if (currentTime) {
        player.setCurrentTime(currentTime);
    }
});
