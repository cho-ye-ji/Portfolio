// mousewheel DOMMouseScroll 스크롤 이벤트
$(window).on('mousewheel DOMMouseScroll', function (e) {

    delta = e.originalEvent.wheelDelta || e.originalEvent.detail * -1;
    // e.originalEvent.wheelDelta || e.originalEvent.detail는 스크롤을 했을때 페이지가 아래로 이동하면 양수가, 위로 이동하면 음수가 나온다. 여기서는 편의를 위해 -1을 곱해서 음수와 양수를 역으로 만들어주었다.
    
    if (delta < 0) { // 스크롤을 아래로 내렸을 때
    
        if (!(num == 12)) { // num이 12가 아닐 때
        // num의 증가범위를 12로 잡은 이유는, 비주얼 컨텐츠의 동작 횟수를 12회 내로 잡았기 때문.
        
            num++; // num 증가
            
            if (num <= 11) { // num이 11과 같거나 작다면
            
                mainImg.style = `width:${(num * 5) + 50}vw; height:${(num * 5) + 50}vh;`;
                // 비주얼 컨텐츠 영역의 넓이가 변하도록 스타일 조정(커짐)
            }
        }
        if ((num == 12) && (idx < elMainCon.length)) {
        // num이 12와 같고(비주얼 컨텐츠가 변하고 다음 페이지로 넘어갈 준비가 된 순간),
        // idx(초기값0)가 첫 페이지 다음으로 오는 페이지들의 수보다 적을 때
        
            idx++; // idx를 증가시킴
        }
        
    } else { // 스크롤을 위로 올렸을 때
    
        if (!(idx == 0)) { // idx가 0이 아니라면
            idx--; // idx를 감소시켜라
        }
        if ((num > 0) && (idx == 0)) {
        // num이 0보다 크고 idx가 0일때
        
            num--; // num을 감소시키고
            
            mainImg.style = `width:${(num * 5) + 50}vw; height:${(num * 5) + 50}vh;`;
            // 비주얼 컨텐츠 영역의 넓이가 변하도록 스타일 조정(작아짐)
        }
    }
    
    $('html,body').stop().animate({
        scrollTop: ($(window).height()) * idx
        // 화면의 높이값에 스크롤에 따라 변하는 idx값을 곱해서 페이지 단위로 이동시킨다.
        // idx가 1이라면 첫 페이지에서 다음 페이지로, idx가 2라면 두 번 째 페이지에서 세 번 째 페이지로 이동하는 식으로 작동한다.
    }, 600)
    
})