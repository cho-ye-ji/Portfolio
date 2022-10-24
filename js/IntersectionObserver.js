
// 마우스 내리면 살짝 변경되는 휠 효과
$('.sd').click(function(){
    $('.hero, .content').addClass('scrolled');
  });
  
  $('.hero').mousewheel(function(e){
    if( e.deltaY < 0 ){
      $('.hero, .content').addClass('scrolled');
      return false;
    }
  });
  $(window).mousewheel(function(e){
    if( $('.hero.scrolled').length ){
      if( $(window).scrollTop() == 0 && e.deltaY > 0 ){
        $('.hero, .content').removeClass('scrolled');
      }
    }
  });
  

const options = {
    root:null,
    rootMargin:"0px",
    threshold:0.5, //50%가 viewport 안에 들어와 있어야 콜백 실행
}

const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry => {
        console.log(entry.inIntersecting);
        if(entry.isIntersecting){
            entry.target.classList.add("active");
        }else{
            entry.target.classList.remove("active");
        }
    });
}, options);

const titleList = document.querySelectorAll('h2');

//반복문을 돌려 모든 DOM에 적용
titleList.forEach(el => observer.observe(el));

// 메인 자바
let num = 0;
let idex = 0;
let delta;
const mainImg = document.querySelector(".photozone");
const mainTit = document.querySelector(".main_tit01");
const elMaincon = document.querySelectorAll(".main-page");

$(window).on('mousewheel DOMMouseScroll', function(e){
    delta = e.originalEvent.wheelDelta || e.originalEvent.detail * -1;
    if(delta < 0){
        if(!(num ==12)){
            num++;
            if(num <= 11){
                mainImg.style =`width:${(num * 5) * 5}vw; height:${(num * 5) * 5}vh;`;
            }
        }
        if((num == 12)&&(idx < elMaincon.length)){
            idx++;
        }
    }else{
        if(!(idx == 0)){
            idx--;
        }
        if((num > 0) && (idx == 0)){
            num--;
            mainImg.style = `width:${(num * 5) * 50}vw; height:${(num*5)*50}vh;`;
        }
    }

    if(num >= 10){
        mainTit.style= `color:#fff;`;
        mainImg.classList.add("on");
    } else{
        mainTit.style=`color:#000;`;
        mainImg.classList.remove("on");
    }

    $('html,body').stop().animate({
        scrollTop:($(window).height())* idx
    }, 600)
});



