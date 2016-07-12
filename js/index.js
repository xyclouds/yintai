/**************************顶部下拉菜单动效******************************************/
//alert($(".erweima").length)
$(".liaotian").hover(function(){   
	$(".erweima").show();
},function(){
	$(".erweima").hide();
})

$(".shouji").hover(function(){   
	$(".mobphone").show();
},function(){
	$(".mobphone").hide();
})
$(".wdyt").hover(function(){
     $(".xiala").show();
},function(){
	 $(".xiala").hide();
})


/*******************************购物车滑上去的效果***********************************************/

$(".shopping").hover(function(){
     $(".shopshow").show();
},function(){
	 $(".shopshow").hide()
})


/**********************************************banner左侧选项卡***********************************************************/
$(".menuList>li").each(function(index){
		$(this).hover(function(){
			$(".dropdown").eq(index).show();
		},function(){
			$(".dropdown").eq(index).hide();

		})
	})

/*********************************banner 右侧图片************************************************/
$(".ban_right").hover(function(){
    $(".ban_right").animate({right:"10px"});
    $(".leftclick").add($(".rightclick")).hide();
},function(){
    $(".ban_right").animate({right:"0"});

})

/****************************** banner部分动效 ****************************************************/
$(".as").hide(0).eq(0).show(0);
$(".leftclick").add($(".rightclick")).hide();
//alert($(".btnbox>li").length)
var num=0;
function move(type){
	if(type=="r"){
        num++;
      if(num>=$(".as").length){
        num=0;
        }
	}else if(type=="l"){
        num--;
        if(num<=-1){
        num=$(".as").length-1;
	    } 
    }

  $(".as").fadeOut(300).eq(num).fadeIn(500);
  $(".btnbox>li").css({background:"#211616"}).eq(num).css({background:"#e5004f"});
  $(".banner").css({background:"url(./images/banner_fu"+num+".jpg)"});
  $(".banner").css({backgroundPosition:"-282px 0"})
}
var t=setInterval(function(){move("r")},2000);

$(".bannerbox").hover(function(){
	clearInterval(t);
   $(".leftclick").add($(".rightclick")).show();
},function(){
	t=setInterval(function(){move("r")},2000)
   $(".leftclick").add($(".rightclick")).hide();
})

$(".leftclick").click(function(){
    move("l")
})

$(".rightclick").click(function(){
	move("r")
})
$(".btnbox>li").mouseover(function(){
	var index=$(this).index();
	$(".as").stop(true,true);
	$(".as").fadeOut(300).eq(index).fadeIn(500);
	$(".btnbox>li").css({background:"#211616"}).eq(index).css({background:"#e5004f"});
	$(".banner").css({background:"url(./images/banner_fu"+index+".jpg)"});
    $(".banner").css({backgroundPosition:"-282px 0"})
	num=index;

})

/**************************超值特卖部分  选项卡**********************************************/
$(".title>ul>li").mouseover(function(){
	var index=$(this).index();
  $(".contentone").hide().eq(index).show();
  $(".title>ul>li").css({borderBottom: "5px solid #333",fontWeight:"normal"}).eq(index).css({borderBottom: "5px solid #e5004f",fontWeight:"bold"});
  $(".title>ul>li>span").hide().eq(index).show();
})

/*************************************专柜同款部分  选项卡*************************************/

 $(".zgtk_right_title>li").mouseover(function(){
 	var index=$(this).index();
    $(".zgtk_selete").hide().eq(index).show();
    $(".zgtk_right_title>li").css({borderBottom: "3px solid #333",fontWeight:"normal"}).eq(index).css({borderBottom: "3px solid #e5004f",fontWeight:"bold"});
    $(".zgtk_right_title>li>span").hide().eq(index).show();
 })

/*******************************************动态边框******************************************/
//alert($(".father").length)
$(".father").hover(function(){
	var w=$(this).outerWidth();
	var h=$(this).outerHeight();
	$(".left").stop(true,true);
	$(".top").stop(true,true);
	$(".right").stop(true,true);
	$(".bottom").stop(true,true);
	$(".left",$(this)).animate({height:h});
	$(".top",$(this)).animate({width:w});	
	$(".right",$(this)).animate({height:h});
	$(".bottom",$(this)).animate({width:w});
},function(){
    $(".left").stop(true,true);
	$(".top").stop(true,true);
	$(".right").stop(true,true);
	$(".bottom").stop(true,true);
	$(".left",$(this)).animate({height:0});
	$(".top",$(this)).animate({width:0});	
	$(".right",$(this)).animate({height:0});
	$(".bottom",$(this)).animate({width:0});
})

/**********************************每一个楼层  商标的跑马灯************************************************/


//alert($(".allinner>.allone").length);
//alert($(".innerright").length)
var allw=$(".allone").outerWidth();
//alert(allw);
$(".innerright").click(function(index){
  $(".allinner").stop(true,true);
  index=$(this).index(".innerright");
  $(".allinner").eq(index).animate({"left":-allw},function(){
         $(".allinner").eq(index).css({"left":0});
         var fa=$(".allinner").eq(index);
         $(".allone:first",$(fa)).appendTo($(fa))
  });
})
$(".innerleft").click(function(index){
  $(".allinner").stop(true,true);
  index=$(this).index(".innerleft");
  $(".allinner").eq(index).css({"left":-allw});        
     var fa=$(".allinner").eq(index);
     $(".allone:last",$(fa)).prependTo($(fa));
     $(".allinner").eq(index).animate({"left":0});
})



/**********************************每一个楼层  商标的banner************************************************/
$(".anniu_left").add($(".anniu_right")).hide();
//alert($(".floor_center img").length);
$(".floor_center").each(function(index,obj){
   //var aw=$("a",$(obj)).outerWidth();
   $(obj).mouseover(function(){
    $(".anniu_left",$(obj)).add($(".anniu_right",$(obj))).show();
        $(".anniu_right",$(obj)).click(function(){
        $(".floor_contain",$(obj)).animate({left:-392});
        //$(".img2").animate({left:0});
        $(".fbtn:first",$(obj)).css({background:"#6e6e6e"});
        $(".fbtn:last",$(obj)).css({background:"#d7064c"});
        })	   
       $(".anniu_left",$(obj)).click(function(){
       $(".floor_contain",$(obj)).animate({left:0});
      // $(".img2").animate({left:-392});
       $(".fbtn:last",$(obj)).css({background:"#6e6e6e"});
       $(".fbtn:first",$(obj)).css({background:"#d7064c"});
   })

   })      
})

/*$(".fbtn").each(function(index,obj){
   var index=$(this).index();
   if(index==0){
    $(this).click(function(){
      $(".floor_contain").animate({left:-392});
        //$(".img2").animate({left:0});
      $(".fbtn:first").css({background:"#6e6e6e"});
      $(".fbtn:last").css({background:"#d7064c"});
    })
   }else if(index==1){
    $(this).click(function(){
    $(".floor_contain").stop(true,true)
    $(".floor_contain").animate({left:0});
      // $(".img2").animate({left:-392});
    $(".fbtn:last").css({background:"#6e6e6e"});
    $(".fbtn:first").css({background:"#d7064c"});
  })
   }
})*/

/**********************************楼层跳转的动效**************************************************/
//alert($(".floor_nav>ul>li").length)
var floor_nav=$(".floor_nav>a").not(".floor_nav>a:last");
//alert(floor_nav.length)
$(window).scroll(function(){
	var tops=$(window).scrollTop();
	if(tops>=750){
       $(".floor_nav").show(100);
	}else{
	   $(".floor_nav").hide(100);
	}	
	$(".bigfloor").each(function(index,obj){
	//console.log($(".bigfloor").position().top)
      if($(obj).position().top<=tops+150){
        floor_nav.removeClass("hover").eq(index).addClass("hover");
      }     
	})   
})
//点击按钮出现对应的楼层
floor_nav.click(function(){
    var num=$(this).index();
    $(this).removeClass("hover").eq(num).addClass("hover")    
    //$(window).scrollTop($(".bigfloor").eq(num).position().top+20);
    $("html,body").animate({scrollTop:$(".bigfloor").eq(num).position().top})
     })

/***************************************返回顶部*********************************************************/ 
$.backtop(".backtop")