var swiper = new Swiper(".popular-content", {
    slidesPerView:1,
    spaceBetween: 10,
    // centeredSlides: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        280:{
            sslidesPerView:1,
            spaceBetween: 10,
        },
       
        320:{
            slidesPerView:2,
            spaceBetween: 10,
        },
        510:{
            slidesPerView:2,
            spaceBetween: 10,
        },
        758:{
            slidesPerView:3,
            spaceBetween: 15,
        },
        900:{
            slidesPerView:4,
            spaceBetween: 20,
        },
    }
  });
  var swiper = new Swiper(".cast-main", {
    slidesPerView:1,
    spaceBetween: 10,
    // centeredSlides: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        280:{
            sslidesPerView:1,
            spaceBetween: 10,
        },
       
        320:{
            slidesPerView:5,
            spaceBetween: 25,
        },
        510:{
            slidesPerView:6,
            spaceBetween: 30,
        },
       
        
    }
  });
  // let playBtn = document.querySelector('.play-movie');
  // let video = document.querySelector('.video-container');
  // let myvideo = document.querySelector('#myvideo');
  // let closeBtn = document.querySelector('.close-video');

  // playBtn.onClick = () => {
   
  //   video.classList.add('.show-video')
  //   //auto play when clcik
  //   myvideo.play();
  // };
  // closeBtn.onClick = () => {
  //   video.classList.remove('.show-video')
  //   //auto play when clcik 
  //   myvideo.pause();
  // };

  let playBtns = document.querySelectorAll('.play-movie');
  let videoContainer = document.querySelector('.video-container');
  let myvideo = document.querySelector('#myvideo');
  let closeBtn = document.querySelector('.close-video');
  
  playBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      videoContainer.classList.add('show-video');
      myvideo.play();
    });
  });
  
  closeBtn.addEventListener('click', () => {
    videoContainer.classList.remove('show-video');
    myvideo.pause();
  });