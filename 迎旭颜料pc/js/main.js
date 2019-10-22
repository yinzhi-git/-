//项目共用js

$(function(){
	//测导航动画
	$(".fixed-right-list").hover(function(){
		$(this).stop().animate({margin:'0 0 0px -160px'});
		$(this).children('span').stop().show(400);
	},function(){
		$(this).stop().animate({margin:'0 -160px 0px 0'});
		$(this).children('span').stop().hide(200);
	});
	//兼容性css
	$('.index-proIn li:nth-child(3n-1)').css('margin','0 204px');
	$('.fenye li:first-child a').css('width','64px');
	$('.fenye li:last-child a').css('width','64px');
	$('.pro-list li:nth-child(3n)').css('margin-right','0px');


	$('.index-pro-list').hover(function(){
		$(this).children('div').children('img:nth-child(1)').hide();
		$(this).children('div').children('img:nth-child(2)').show();
	},function(){
		$(this).children('div').children('img:nth-child(1)').show();
		$(this).children('div').children('img:nth-child(2)').hide();
	})
	//首页行业应用
	$('.index-hangye-in li:nth-child(1)').css('width','556px').css('background-color', '#00923f');
	$('.index-hangye-in li:nth-child(1) .index-hangye-test h3').css('color','#ffffff');
	$('.index-hangye-in li:nth-child(1) .index-hangye-test p').css('color','#ffffff');
	$('.index-hangye-in li:nth-child(1) .index-hangye-test::after').css('background-color','#77c398');
	$('.index-hangye-in li').hover(function(){
		$(this).stop().animate({width:'556px'}).css('background-color', '#00923f');
		$(this).siblings().stop().animate({width:'322px'}).css('background-color', '#f8f8f8');
		$(this).children().children('div:nth-child(2)').children('h3').css('color','#ffffff');
		$(this).children().children('div:nth-child(2)').children('p').css('color','#ffffff');
		$(this).children().children('div:nth-child(2)').css('padding','55px 85px 0');
		$(this).siblings().children().children('div:nth-child(2)').css('padding','55px 32px 0')
		$(this).siblings().children().children('div:nth-child(2)').children('h3').css('color','#333');
		$(this).siblings().children().children('div:nth-child(2)').children('p').css('color','#666');
	},function(){})
	
})
//首页新闻切换
$(function(){
	$('.index-news-head>span').click(function(){
		$('.index-newsIn>div').hide();
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
	})
	$('.index-news-head>span:nth-child(1)').click(function(){
		$('.index-newsIn>div:nth-child(1)').show();
	})
	$('.index-news-head>span:nth-child(2)').click(function(){
		$('.index-newsIn>div:nth-child(2)').show();
	})
})






