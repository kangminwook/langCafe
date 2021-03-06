﻿


// 마우스 움직임에따라 전등 움직이는 이벤트
function move_light(){
	var w_hei = $(window).height();
	
	$(window).on("mousemove",function(e){
		var x = e.pageX;
		var y = e.pageY;
		$("#section01 div").css("left",x/20).css("z-index","7");
		$("#section01 div").css("top",y/100).css("z-index","7");
	});
}



// 마우스 휠 이벤트
function mouseWheel(){
	//section01
	$("#section01").on("mousewheel",function(event,delta){
		if(delta < 0){
			$("#section02").addClass("on");
		}
	});

	//section02
	$("#section02").on("mousewheel",function(event,delta){
		if(delta < 0){
			$("#section03 div.menu").animate({"left":"50%"},1000)
		}
	});

	//section03
	$(window).on("scroll",function(){
		var scr = $(this).scrollTop();
		if(scr >= 1300){
			$("#section04 div.menu").animate({"left":"50%"},1000)
		}
	});

}



// menu_list_click_event
function menu_list_click_event(){
	//section03 메뉴
	$("#section03 ul li").click(function(){
		var test = $(this).index();
		$("#section03 .menu_item").eq(test).css({"background":"rgba(0,0,0,0.9)","width":"100%"}).show();		
		return false;
	});

	//section04 메뉴
	$("#section04 ul li").click(function(){
		var test = $(this).index();
		$("#section04 .menu_item").eq(test).css({"background":"rgba(0,0,0,0.9)","width":"100%"}).show();		
		return false;
	});

	//메뉴판 닫기
	$(".close").click(function(){
		$(".menu_item").hide();
	});
}





//카페 내부 전경 슬라이드
function cafe_slide()
{
	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		paginationClickable: true,
		spaceBetween: 30,
		centeredSlides: true,
		autoplay: 3000,
		autoplayDisableOnInteraction: true
	});
} 






// section06 전등 인사 문구 타이틀
function welcome_title(){
	$(window).on("scroll",function(){
		var scr = $(this).scrollTop();

		if(scr >=2300){
			$("#section06 h1").fadeIn(1500).css({"transform":"scale(1.8)"});
			return false;
		}
		
	});
}



// 우산 애니메이션
function umbrella(){
	$(window).on("scroll",function(){
		let umbrella_offsettop = $("#section08 .item01").offset().top;
		let window_scroll = $(this).scrollTop();
		if(window_scroll >= umbrella_offsettop-650){
			$("#section08 .item01").animate({"top":"15px","left":"9%"},2000);
			$("#section08 .item02").animate({"top":"15px","right":"18%"},1500);
			$("#section08 .item03").animate({"top":"150px","right":"25%"},2000);	
		}
		
	});
}



// 마지막 메뉴 스크롤 라인
function last_line(){
	$(window).on("scroll",function(){
		let window_scroll = $(this).scrollTop();
		let line01 = $("#section09 .image_line_01").offset().top;
		let line02 = $("#section09 .image_line_02").offset().top;
		let line03 = $("#section09 .image_line_03").offset().top;
		let line04 = $("#section09 .image_line_04").offset().top;
		let line05 = $("#section09 .image_line_05").offset().top;
		let line06 = $("#section09 .image_line_06").offset().top;
		let line07 = $("#section09 .image_line_07").offset().top;


		// 라인 1번
		if(window_scroll >= line01-350){
			$("#section09 .image_line_01").css({"opacity":"1"});
			
		}else{
			$("#section09 .image_line_01").css({"opacity":"0"});
		}


		// 라인 2번
		if(window_scroll >= line02-600){
			$("#section09 .image_line_02").css({"opacity":"1"});
			
		}else{
			$("#section09 .image_line_02").css({"opacity":"0"});
		}

		// 라인 3번
		if(window_scroll >= line03-400){
			$("#section09 .image_line_03").css({"opacity":"1"});
			
		}else{
			$("#section09 .image_line_03").css({"opacity":"0"});
		}

		// 라인 4번
		if(window_scroll >= line04-400){
			$("#section09 .image_line_04").css({"opacity":"1"});
			
		}else{
			$("#section09 .image_line_04").css({"opacity":"0"});
		}

		//스크롤 라인5번
		if(window_scroll >= line05-400){
			$("#section09 .image_line_05").css({"opacity":"1"});
			
		}else{
			$("#section09 .image_line_05").css({"opacity":"0"});
		}


		//스크롤 라인6번
		if(window_scroll >= line06-400){
			$("#section09 .image_line_06").css({"opacity":"1"});
			
		}else{
			$("#section09 .image_line_06").css({"opacity":"0"});
		}

		//스크롤 라인7번
		if(window_scroll >= line07-400){
			$("#section09 .image_line_07").css({"opacity":"1"});
			
		}else{
			$("#section09 .image_line_07").css({"opacity":"0"});
		}


	})
}



// 마지막 메뉴 클릭시 메뉴판 활성화
function last_menu_click(){
	//서브메뉴 클릭
	$("#section09 .on").click(function(){		
		$(this).find(".menuBoard").show();		
		$("#section09 .close").click(function(){
			$(this).parent().fadeOut();
		});
		
	});
}



// 텍스트 이벤트 드롭다운
function drop_txt_event(){
	$(window).on("scroll",function(){
		let window_scroll = $(this).scrollTop();
		let menu_txt = $("#section10 .menu_txt").offset().top;
		if(window_scroll >= menu_txt-250){
			$("#section10 .menu_txt").animate({"top":"190px"},1300);
		}
	});
}
