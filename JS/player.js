let player;

    function onYouTubeIframeAPIReady() {
    player = new YT.Player('ytplayer', {
        height: '405',
        width: '660',
        videoId: 'KilehMXMxo0',
        playerVars: {
            controls : 0,
            autoplay: 0,
            rel : 0,
            showinfo: 0,
            disablekb: 0,
            modestbranding: 1
            
        },
        events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
        }
    });
    }


function onPlayerStateChange(event){
    switch(event.data){
        case 1 :
            $('.player__splash').addClass('hidden');
            $('.player__play-white').addClass('hidden');
            break;
        case 2 :
        //
    } 
};
 
function onPlayerReady(){
    const duration = player.getDuration();//продолжительность видео
    let interval;

    clearInterval(interval);

    interval = setInterval(() =>{
        const completed = player.getCurrentTime();//время с начало вопсроизведения видео
        const percents = (completed / duration) * 100;

        changeElementPosition(percents);
        
    },1000);

};

$('.player__play-white').on('click', e =>{
    e.preventDefault();
    player.playVideo();
});

$('.player__play').on('click', e =>{
    e.preventDefault();
    const block = $(e.currentTarget);
    const playerStatus = player.getPlayerState();

    if(playerStatus != 1){
        player.playVideo();
    }else {
        player.pauseVideo();
    } 
});

$('.player__splash').on('click', e =>{
    e.preventDefault();
    player.playVideo();   
});

$('.player__playback').on('click', e=>{
    e.preventDefault();

    const bar = $(e.currentTarget);

    const newElementPostition = e.pageX - bar.offset().left;
    const clickedPercents = (newElementPostition / bar.width()) * 100;
    const newPlayerTime = (player.getDuration() / 100)* clickedPercents;

    player.seekTo(newPlayerTime);
    changeElementPosition(clickedPercents);
});

function changeElementPosition(percents){
    $('.player__playback-mark').css({
        left:`${percents}%`
    })
};