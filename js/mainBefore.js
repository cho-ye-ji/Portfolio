$(function(){
    $("#gnb>ul>li:nth-child(1)").on("click",function(e){
		e.preventDefault();
		$("html,body").stop().animate({"scrollTop":0},1400);
	});
    $("#gnb>ul>li:nth-child(2)").on("click",function(e){
		e.preventDefault();
		$("html,body").stop().animate({"scrollTop":800},1400);
	});
    $("#gnb>ul>li:nth-child(3)").on("click",function(e){
		e.preventDefault();
		$("html,body").stop().animate({"scrollTop":2200},1400);
	});
    $("#gnb>ul>li:nth-child(4)").on("click",function(e){
		e.preventDefault();
		$("html,body").stop().animate({"scrollTop":3050},1400);
	});
    $("#gnb>ul>li:nth-child(5)").on("click",function(e){
		e.preventDefault();
		$("html,body").stop().animate({"scrollTop":3900},1400);
	});
    $("#gnb>ul>li:nth-child(6)").on("click",function(e){
		e.preventDefault();
		$("html,body").stop().animate({"scrollTop":6000},1400);
	});
    $("#gnb>ul>li:nth-child(7)").on("click",function(e){
		e.preventDefault();
		$("html,body").stop().animate({"scrollTop":9000},1400);
	});
    
        
    $(".indicator>li:nth-child(1)").on("click",function(e){
		e.preventDefault();
		$("html,body").stop().animate({"scrollTop":0},1400);
	});
    $(".indicator>li:nth-child(2)").on("click",function(e){
		e.preventDefault();
		$("html,body").stop().animate({"scrollTop":800},1400);
	});
    $(".indicator>li:nth-child(3)").on("click",function(e){
		e.preventDefault();
		$("html,body").stop().animate({"scrollTop":2200},1400);
	});
    $(".indicator>li:nth-child(4)").on("click",function(e){
		e.preventDefault();
		$("html,body").stop().animate({"scrollTop":3050},1400);
	});
    $(".indicator>li:nth-child(5)").on("click",function(e){
		e.preventDefault();
		$("html,body").stop().animate({"scrollTop":3900},1400);
	});
    $(".indicator>li:nth-child(6)").on("click",function(e){
		e.preventDefault();
		$("html,body").stop().animate({"scrollTop":6000},1400);
	});
    $(".indicator>li:nth-child(7)").on("click",function(e){
		e.preventDefault();
		$("html,body").stop().animate({"scrollTop":9000},1400);
	});
    
    
    $(window).on('scroll',function(){
        
        var scroll = $(window).scrollTop();
        
        if(scroll>= 0 && scroll< 1500){
			$(".indicator>li").removeClass();
			$(".indicator>li").eq(0).addClass("on");
		}
        if(scroll>= 1500 && scroll< 3000){
			$(".indicator>li").removeClass();
			$(".indicator>li").eq(1).addClass("on");
		}
        if(scroll>= 3000 && scroll< 4500){
			$(".indicator>li").removeClass();
			$(".indicator>li").eq(2).addClass("on");
            
		}
        if(scroll>= 4500 && scroll< 6000){
			$(".indicator>li").removeClass();
			$(".indicator>li").eq(3).addClass("on");
		}
        if(scroll>= 6000 && scroll< 7500){
			$(".indicator>li").removeClass();
			$(".indicator>li").eq(4).addClass("on");
		}
        if(scroll>= 7500 && scroll< 9000){
			$(".indicator>li").removeClass();
			$(".indicator>li").eq(5).addClass("on");
		}
        if(scroll>= 9000 && scroll< 15000){
			$(".indicator>li").removeClass();
			$(".indicator>li").eq(6).addClass("on");
		}

    })
    

    
})

