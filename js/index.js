//导航
$("#menu-main-menu li").click(function() {

	if($(this).attr("data-id") == "technical") {
		//1技术
		$("#technical").show().siblings(".p_main").hide();
	} else if($(this).attr("data-id") == "life") {
		//2生活
		$("#life").show().siblings(".p_main").hide();
	} else if($(this).attr("data-id") == "contact") {
		//3联系方式
		$("#contact").show().siblings(".p_main").hide();
	}
});

//文章缩放及返回     置顶
$(".article").click(function() {
	$(this).siblings(".article").hide();
	$(this).removeClass("article").addClass("article_big");
	$(".return").show();
	$(".top").show();
	$(this).children(".art_img").hide();

	$(".return").click(function() {
		$(this).hide().siblings(".top").hide();
		$(".p_main .article_big").removeClass("article_big").addClass("article");
		$(".article").show().children(".art_img").show();
	});
});

//置顶置底
$(function() {
	$("#updown").css("top", window.screen.availHeight / 2 - 100 + "px");
	$(window).scroll(function() {
		if($(window).scrollTop() >= 100) {
			$('#updown').fadeIn(300);
		} else {
			$('#updown').fadeOut(300);
		}
	});
	$('#updown .up').click(function() {
		$('html,body').animate({
			scrollTop: '0px'
		}, 800);
	});
	$('#updown .down').click(function() {
		$('html,body').animate({
			scrollTop: document.body.clientHeight + 'px'
		}, 800);
	});
});