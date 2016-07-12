//返回顶部
jQuery.extend({
	backtop:function(obj){
	  $(window).on("scroll",function(){
	    var tops=$(window).scrollTop();//获取超出浏览器的top值
	        if(tops>=300){
	         $(obj).fadeIn(60);	
	        }else{
	         $(obj).fadeOut(60);
	        }
	    $(obj).click(function(){
			var newobj={st:tops};//创建一个普通对象
		//打包成jquery对象,加动画,从tops动画到1,动画的每一步都给了浏览器的的scrollTop值
			$(newobj).animate({st:1},{
				speed:1000,
				step:function(){
				$(window).scrollTop(newobj.st);
			}
		   })
		})
	 })


}
})