// SCROLL EVENT
$(window).scroll(function(){
  let sec02Top = $('.sec02').offset().top;
  let sec02Height = $('.sec02').height();
  let sec03Top = $('.sec03').offset().top;
  let sec03Height = $('.sec03').height();
  let sec04Top = $('.sec04').offset().top;
  let sec04Height = $('.sec04').height();
  let sec05Top = $('.sec05').offset().top;
  let sec05Height = $('.sec05').height();
  let sec06Top = $('.sec06').offset().top;
  let sec06Height = $('.sec06').height();
  let sec07Top = $('.sec07').offset().top;
  let sec07Height = $('.sec07').height();
  let winScrTop = $(this).scrollTop();
  // console.log(winScrTop);
  if(winScrTop + sec02Height / 3 >= sec02Top){
    $('.sec02').addClass('active');
  }
  if(winScrTop + sec03Height / 3 >= sec03Top){
    $('.sec03').addClass('active');
  } 
  if(winScrTop + sec04Height / 3 >= sec04Top){
    $('.sec04').addClass('active');
  }
  if(winScrTop + sec05Height / 3 >= sec05Top){
    $('.sec05').addClass('active');
  }
  if(winScrTop + sec06Height / 3 >= sec06Top){
    $('.sec06').addClass('active');
  }
  if(winScrTop + sec07Height / 3 >= sec07Top){
    $('.sec07').addClass('active');
  }
})

// SEC01 TRANSFORM EVENT (IT HAPPENS JUST ONE TIME WHEN WINDOW LOADS)
setTimeout(function(){
  $('.sec01').addClass('active');
},500)

// KEYWORD EVENT
let idx = 1;
let loopKeyword = setInterval(function(){
  // console.log(idx++);
  $('.keyword').hide();
  $('.keyword').eq(idx++).fadeIn(800);
  if(idx>3){
    idx=0;
  }
},2000);

// SCROLLBAR EVENT
let windowScrolling;
window.addEventListener('scroll', () => {
  if(!windowScrolling){
    console.log('start scrolling!');
    document.documentElement.classList.remove('scroll-hidden');
  }
  // SENSE SCROLL STOP EVENT AFTER A CERTAIN TIME
  clearTimeout(windowScrolling);
  windowScrolling = setTimeout(() => {
    console.log('stop scrolling!');
    windowScrolling = undefined;
    document.documentElement.classList.add('scroll-hidden');
  }, 400);
});

// IMAGE(BANNER) CLICK EVENT
let allBanner = $('.banner');
$('#btn-banner01').click(function(){
  $('.banner-wrap').css({display:'flex'});
  allBanner.hide();
  $('.banner01').show();
})
$('#btn-banner02').click(function(){
  $('.banner-wrap').css({display:'flex'});
  allBanner.hide();
  $('.banner02').show();
  
})
$('#btn-banner03-1, #btn-banner03-2').click(function(){      
  $('.banner-wrap').css({display:'flex'});
  allBanner.hide();
  $('.banner03').show();
 
})
$('#btn-banner04-1, #btn-banner04-2').click(function(){
  $('.banner-wrap').css({display:'flex'});
  allBanner.hide();
  $('.banner04').show();
})

// IMAGE(BANNER) CLOSE BUTTON EVENT
$('.btn-banner-close').click(function(){
  $('.banner-wrap').hide();
  allBanner.hide();
})