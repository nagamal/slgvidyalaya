function initShortcodes(a){if(a.find(".sc_tabs:not(.inited),.tabs_area:not(.inited)").length>0){a.find(".sc_tabs:not(.inited),.tabs_area:not(.inited)").each(function(){var c=jQuery(this).data("active");if(isNaN(c)){c=0}else{c=Math.max(0,c)}
jQuery(this).addClass("inited").tabs({active:c,show:{effect:"fade",duration:250},hide:{effect:"fade",duration:200},create:function(d,e){initShortcodes(e.panel)},activate:function(d,e){initShortcodes(e.newPanel)}})})}
if(a.find(".sc_toggles .sc_toggles_title:not(.inited)").length>0){a.find(".sc_toggles .sc_toggles_title:not(.inited)").addClass("inited").click(function(){jQuery(this).parent().toggleClass("sc_active");jQuery(this).parent().find(".sc_toggles_content").slideToggle(200,function(){initShortcodes(jQuery(this).parent().find(".sc_toggles_content"))})})}
if(a.find(".sc_tooltip_parent:not(.inited)").length>0){a.find(".sc_tooltip_parent:not(.inited)").addClass("inited").hover(function(){var c=jQuery(this);c.find(".sc_tooltip").stop().animate({marginTop:"5"},100).show()},function(){var c=jQuery(this);c.find(".sc_tooltip").stop().animate({marginTop:"0"},100).hide()})}
if(a.find(".sc_infobox.sc_infobox_closeable:not(.inited)").length>0){a.find(".sc_infobox.sc_infobox_closeable:not(.inited)").addClass("inited").click(function(){jQuery(this).slideUp()})}
if(a.find(".sc_contact_form .sc_contact_form_submit:not(.inited)").length>0){a.find(".sc_contact_form .sc_contact_form_submit:not(.inited)").addClass("inited").click(function(f){var c=jQuery(this).parents("form");var d=c.attr("action");userSubmitForm(c,d!=undefined?d:THEMEREX_ajax_url,THEMEREX_ajax_nonce);f.preventDefault();return false})}
if(a.find(".sc_contact_form_custom .bubble label:not(.inited)").length>0){a.find(".sc_contact_form_custom .bubble label:not(.inited)").addClass("inited").click(function(c){jQuery(this).parent().siblings(".bubble").find("label").removeClass("selected");jQuery(this).addClass("selected")})}
if(a.find(".sc_border:not(.inited)").length>0){a.find(".sc_border:not(.inited)").each(function(){if(jQuery(this).parents("div:hidden,article:hidden").length>0){return}
jQuery(this).addClass("inited");var c=Math.round(jQuery(this).width());var d=Math.round(c/4*3);jQuery(this).find(".slides").css({height:d+"px"});jQuery(this).find(".slides li").css({width:c+"px",height:d+"px"})})}
if(a.find(".sc_slider_autoheight").length>0){a.find(".sc_slider_autoheight").each(function(){jQuery(this).find("li.swiper-slide,li.flex-slide,li.chop-slide").each(function(){if(jQuery(this).data("autoheight")==undefined){jQuery(this).attr("data-autoheight",jQuery(this).height())}})})}
if(a.find(".sc_slider_flex:not(.inited)").length>0){a.find(".sc_slider_flex:not(.inited)").addClass("inited").each(function(){if(jQuery(this).parents("div:hidden,article:hidden").length>0){return}
if(jQuery(this).parents(".isotopeNOanim:not(.inited),.isotope:not(.inited)").length>0){return}
jQuery(this).flexslider({prevText:"",nextText:"",directionNav:jQuery(this).hasClass("sc_slider_controls"),controlNav:jQuery(this).hasClass("sc_slider_pagination")||jQuery(this).parents(".sc_slider_pagination_area").length>0,animation:"slide",animationLoop:true,slideshow:!jQuery(this).hasClass("sc_slider_noautoplay"),slideshowSpeed:isNaN(jQuery(this).data("interval"))?7000:jQuery(this).data("interval"),animationSpeed:600,pauseOnAction:true,pauseOnHover:true,useCSS:false,manualControls:jQuery(this).parents(".sc_slider_pagination_area").length>0?"#"+ jQuery(this).attr("id")+"_scroll ul li":"",after:function(c){if(c.parents(".sc_slider_pagination_area").length>0){sliderChangeActivePagination(c,c.currentSlide)}}});calcSliderDimensions(jQuery(this))})}
if(a.find(".sc_slider_chop:not(.inited)").length>0){a.find(".sc_slider_chop:not(.inited)").addClass("inited").each(function(){if(jQuery(this).parents("div:hidden,article:hidden").length>0){return}
if(jQuery(this).parents(".isotopeNOanim:not(.inited),.isotope:not(.inited)").length>0){return}
var d=jQuery(this);var c=d.data("effect").split("|");d.chopSlider({slide:"#"+ d.attr("id")+" .chop-slide",nextTrigger:d.hasClass("sc_slider_controls")?"#"+ d.attr("id")+" a.flex-next":"",prevTrigger:d.hasClass("sc_slider_controls")?"#"+ d.attr("id")+" a.flex-prev":"",hideControls:true,sliderPagination:d.parents(".sc_slider_pagination_area").length>0?"#"+ d.attr("id")+"_scroll ul li":"",useCaptions:true,everyCaptionIn:"#"+ d.attr("id")+" .sc_slider_info_item",showCaptionIn:"#"+ d.attr("id")+" .sc_slider_info_holder",captionTransform:"scale(0) translate(-600px,0px) rotate(45deg)",autoplay:!d.hasClass("sc_slider_noautoplay"),autoplayDelay:isNaN(d.data("interval"))?6000:d.data("interval"),defaultParameters:{type:"vertical",xOffset:20,yOffset:20,hPieces:10,vPieces:20,rotate:10,rotateSymmetric:false,scaleX:0.5,scaleY:-0.5,translateX:10,translateY:10,ease1:"ease",ease2:"ease",origin:"center center",dur1:1000,dur2:600,dur3:1000,pieceDelay:50,xFadeDelay:0,prevTransition:{rotate:-10,xOffset:10,startFrom:10}},t2D:csTransitions[c[0]]["random"],t3D:c.length>1?csTransitions[c[1]]["random"]:false,mobile:csTransitions.mobile["random"],noCSS3:csTransitions.noCSS3["random"],onStart:function(){},onEnd:function(){}});calcSliderDimensions(jQuery(this))})}
if(a.find(".sc_slider_s1 .sc_slider_swiper:not(.inited)").length>0){a.find(".sc_slider_s1 .sc_slider_swiper:not(.inited)").each(function(){if(jQuery(this).parents("div:hidden,article:hidden").length>0){return}
if(jQuery(this).parents(".isotopeNOanim:not(.inited),.isotope:not(.inited)").length>0){return}
jQuery(this).addClass("inited");var d=jQuery(this).attr("id");if(d==undefined){d="swiper_"+ Math.random();d=d.replace(".","");jQuery(this).attr("id",d)}
jQuery(this).addClass(d);jQuery(this).find(".slides li").css("position","relative");THEMEREX_Swipers[d]=new Swiper("."+ d,{nextButton:'.flex-next',prevButton:'.flex-prev',loop:true,grabCursor:true,pagination:jQuery(this).hasClass("sc_slider_pagination")?"#"+ d+" .flex-control-nav":false,paginationClickable:true,calculateHeight:false,autoplay:jQuery(this).hasClass("sc_slider_noautoplay")?false:(isNaN(jQuery(this).data("interval"))?7000:jQuery(this).data("interval")),autoplayDisableOnInteraction:false,initialSlide:0,speed:600,onFirstInit:function(j){var f=jQuery(j.container);if(!f.hasClass("sc_slider_autoheight")){return}
var e=f.find("li.swiper-slide").eq(1);var i=e.data("autoheight");if(i>0){var k=parseInt(e.css("paddingTop")),g=parseInt(e.css("paddingBottom"));f.height(i+(isNaN(k)?0:k)+(isNaN(g)?0:g));f.find(".swiper-wrapper").height(i+(isNaN(k)?0:k)+(isNaN(g)?0:g))}},onSlideChangeStart:function(k){var g=jQuery(k.container);if(!g.hasClass("sc_slider_autoheight")){return}
var f=k.activeIndex;var e=g.find("li.swiper-slide").eq(f);var j=e.data("autoheight");if(j>0){var l=parseInt(e.css("paddingTop")),i=parseInt(e.css("paddingBottom"));e.height(j);g.height(j+(isNaN(l)?0:l)+(isNaN(i)?0:i));g.find(".swiper-wrapper").height(j+(isNaN(l)?0:l)+(isNaN(i)?0:i))}},onSlideChangeEnd:function(i,h){var g=jQuery(i.container);if(g.parents(".sc_slider_pagination_area").length>0){var f=g.parents(".sc_slider_pagination_area").find(".flex-control-nav.manual ul li");var e=i.activeIndex>f.length?0:i.activeIndex- 1;sliderChangeActivePagination(g,e)}}});jQuery(this).data("settings",{mode:"horizontal"});var c=jQuery(this).find(".slides").data("current-slide");if(c>0){THEMEREX_Swipers[d].swipeTo(c- 1)}
prepareSliderNavi(jQuery(this));calcSliderDimensions(jQuery(this))})}
if(a.find(".sc_slider_s1 .sc_scroll:not(.inited)").length>0){a.find(".sc_slider_s1 .sc_scroll:not(.inited)").each(function(){if(jQuery(this).parents("div:hidden,article:hidden").length>0){return}
jQuery(this).addClass("inited");var d=jQuery(this).attr("id");if(d==undefined){d="scroll_"+ Math.random();d=d.replace(".","");jQuery(this).attr("id",d)}
jQuery(this).addClass(d);var c=jQuery(this).find("#"+ d+"_bar");if(c.length>0&&!c.hasClass(d+"_bar")){c.addClass(d+"_bar")}
THEMEREX_Swipers[d]=new Swiper("."+ d,{freeMode:true,grabCursor:true,direction:'vertical',slidesPerView:3,mousewheelControl:true});prepareSliderNavi(jQuery(this))})}
if(a.find(".sc_countdown:not(.inited)").length>0){var b={};a.find(".sc_countdown:not(.inited)").each(function(){if(jQuery(this).parents("div:hidden,article:hidden").length>0){return}
jQuery(this).addClass("inited");var i=jQuery(this).attr("id");if(i==undefined){i="countdown_"+ Math.random();i=i.replace(".","");jQuery(this).attr("id",i)}
var e=new Date();var d=e.getFullYear()+"-"+(e.getMonth()<9?"0":"")+(e.getMonth()+ 1)+"-"+(e.getDate()<10?"0":"")+ e.getDate();var h=jQuery(this).data("date");if(h==undefined||h==""||h<d){h=d}
h=h.split("-");var c=jQuery(this).data("time");if(c==undefined||c==""){c="00:00:00"}
c=c.split(":");if(c.length==2){c[2]=0}
var f=new Date(h[0],h[1]- 1,h[2],c[0],c[1],c[2]);var g=Math.round(f.getTime()/ 1000 - e.getTime() / 1000);
b[i]=jQuery("#"+ i).FlipClock(g,{countdown:true,clockFace:"DailyCounter"})})}
if(a.find(".sc_zoom:not(.inited)").length>0){a.find(".sc_zoom:not(.inited)").each(function(){if(jQuery(this).parents("div:hidden,article:hidden").length>0){return}
jQuery(this).addClass("inited");jQuery(this).find("img").elevateZoom({zoomType:"lens",lensShape:"round",lensSize:200})})}
if(a.find(".sc_skills_item:not(.inited)").length>0){skills_init(a);jQuery(window).scroll(function(){skills_init(a)})}
if(a.find(".sc_skills_arc:not(.inited)").length>0){skills_arc_init(a);jQuery(window).scroll(function(){skills_arc_init(a)})}
if(a.find(".sc_pan:not(.inited_pan)").length>0){a.find(".sc_pan:not(.inited_pan)").each(function(){if(jQuery(this).parents("div:hidden,article:hidden").length>0){return}
var d=jQuery(this).addClass("inited_pan");var c=d.parent();c.mousemove(function(k){var j={};var g=0;var i=d.width(),m=d.height();var f=c.width(),h=c.height();var l=c.offset();if(d.hasClass("sc_pan_vertical")){d.css("top",-Math.floor((k.pageY- l.top)/ h * (m - h)))
}
if(d.hasClass("sc_pan_horizontal")){d.css("left",-Math.floor((k.pageX- l.left)/ f * (i - f)))
}});c.mouseout(function(f){d.css({left:0,top:0})})})}}
var THEMEREX_Swipers={};function prepareSliderNavi(b){var a=b.find(".flex-direction-nav");if(a.length==0){a=b.siblings(".flex-direction-nav")}
if(a.length>0){a.find(".flex-prev").click(function(d){var c=jQuery(this).parents(".swiper-slider-container");if(c.length==0){c=jQuery(this).parents(".flex-direction-nav").siblings(".swiper-slider-container")}
var f=c.attr("id");d.preventDefault();return false});a.find(".flex-next").click(function(d){var c=jQuery(this).parents(".swiper-slider-container");if(c.length==0){c=jQuery(this).parents(".flex-direction-nav").siblings(".swiper-slider-container")}
var f=c.attr("id");d.preventDefault();return false})}
a=b.siblings(".flex-control-nav.manual");if(a.length>0){a.find("li").click(function(d){var c=jQuery(this).parents(".sc_slider_pagination_area").find(".swiper-slider-container");var f=c.attr("id");d.preventDefault();return false})}}
function sliderChangeActivePagination(e,a){var g=e.parents(".sc_slider_pagination_area").find(".flex-control-nav.manual");g.find("ul li").removeClass("active").eq(a).addClass("active");var c=g.height();var f=g.find(".active").offset().top- g.offset().top;var d=g.find(".sc_scroll_wrapper").offset().top- g.offset().top;var b=g.find(".active").height();if(f<0){g.find(".sc_scroll_wrapper").css({transform:"translate3d(0px, 0px, 0px)","transition-duration":"0.3s"})}else{if(c<=f+ b){g.find(".sc_scroll_wrapper").css({transform:"translate3d(0px, -"+(Math.abs(d)+ f+ b- c/4)+"px, 0px)","transition-duration":"0.3s"})}}}
function calcSliderDimensions(d){if(d.height()==0||d.hasClass("sc_slider_noresize")||!d.hasClass("inited")){return}
var a=d.data("old-width");var c=d.data("old-height");if(isNaN(a)||a<50||isNaN(c)||c<50){d.data("old-width",d.width());d.data("old-height",d.height())}else{if(a!=d.width()){if(a<d.width()){d.width(a)}
var b=Math.round(d.width()/ a * c);
d.find(".slides").height(b);d.find(".slides li").height(b)}}}
function skills_init(a){if(arguments.length==0){var a=jQuery("body")}
var b=jQuery(window).scrollTop()+ jQuery(window).height();a.find(".sc_skills_item:not(.inited)").each(function(){var t=jQuery(this);var d=t.offset().top;if(b>d){t.addClass("inited");var v=t.parents(".sc_skills").eq(0);var h=v.data("type");var y=t.find(".sc_skills_total").eq(0);var i=parseInt(y.data("start"));var p=parseInt(y.data("stop"));var u=parseInt(y.data("max"));var x=Math.round(i/u*100);var w=Math.round(p/u*100);var j=y.data("ed");var c=parseInt(y.data("duration"));var r=parseInt(y.data("speed"));var k=parseInt(y.data("step"));if(h=="bar"){var n=v.data("dir");var l=t.find(".sc_skills_count").eq(0);if(n=="horizontal"){l.css("width",x+"%").animate({width:w+"%"},c)}else{if(n=="vertical"){l.css("height",x+"%").animate({height:w+"%"},c)}}
skills_counter(i,p,r-(n!="unknown"?5:0),k,j,y)}else{if(h=="counter"){skills_counter(i,p,r- 5,k,j,y)}else{if(h=="pie"){var s=parseInt(y.data("steps"));var q=y.data("color");var o=y.data("easing");skills_counter(i,p,Math.round(1500/s),k,j,y);var g={segmentShowStroke:true,segmentStrokeColor:"#fff",segmentStrokeWidth:0,animationSteps:s,animationEasing:o,animateRotate:true,animateScale:true};var f=[{value:w,color:q},{value:100- w,color:"#E5F1FB"}];var e=t.find("canvas");e.attr({width:t.width(),height:t.width()}).css({width:t.width(),height:t.height()});var m=new Chart(e.get(0).getContext("2d")).Pie(f,g)}}}}})}
function skills_counter(f,b,e,d,a,c){f=Math.min(b,f+ d);c.text(f+ a);if(f<b){setTimeout(function(){skills_counter(f,b,e,d,a,c)},e)}}
function skills_arc_init(a){if(arguments.length==0){var a=jQuery("body")}
a.find(".sc_skills_arc:not(.inited)").each(function(){var f=jQuery(this);f.addClass("inited");var d=f.find(".sc_skills_data .arc");var e=f.find(".sc_skills_arc_canvas").eq(0);var g=f.find(".sc_skills_legend").eq(0);var b=Math.round(f.width()- g.width());var i=Math.floor(b/2);var h={random:function(c,j){return Math.floor((Math.random()*(j- c+ 1))+ c)},diagram:function(){var k=Raphael(e.attr("id"),b,b),c=hover=Math.round(b/2/d.length),j=Math.round(((b- 20)/ 2 - c) / d.length), m = Math.round(b / 9 / d.length), l = 400;
k.circle(i,i,Math.round(b/2)).attr({stroke:"none",fill:THEMEREX_theme_skin_bg?THEMEREX_theme_skin_bg:"#ffffff"});var n=k.text(i,i,f.data("subtitle")).attr({font:"lighter "+ Math.round(c*0.8)+'px "'+ THEMEREX_theme_font+'"',fill:"#888888"}).toFront();c-=Math.round(j/2);k.customAttributes.arc=function(B,p,q){var C=3.6*B,o=C==360?359.99:C,t=h.random(91,240),A=(t- o)*Math.PI/180,u=t*Math.PI/180,z=i+ q*Math.cos(u),s=i- q*Math.sin(u),w=i+ q*Math.cos(A),r=i- q*Math.sin(A),D=[["M",z,s],["A",q,q,0,+(o>180),1,w,r]];return{path:D,stroke:p}};d.each(function(q){var p=jQuery(this),o=p.find(".color").val(),r=p.find(".percent").val(),u=p.find(".text").text();c+=j;var s=k.path().attr({arc:[r,o,c],"stroke-width":m});s.mouseover(function(){this.animate({"stroke-width":hover,opacity:0.75},1000,"elastic");if(Raphael.type!="VML"){this.toFront()}
n.stop().animate({opacity:0},l,">",function(){this.attr({text:(u?u+"\n":"")+ r+"%"}).animate({opacity:1},l,"<")})}).mouseout(function(){this.stop().animate({"stroke-width":m,opacity:1},l*4,"elastic");n.stop().animate({opacity:0},l,">",function(){n.attr({text:f.data("subtitle")}).animate({opacity:1},l,"<")})})})}};h.diagram()})};jQuery(document).ready(function(){$(window).resize();if(jQuery().UItoTop){jQuery().UItoTop({easingType:'easeOutQuart'});}
if(jQuery().parallax){jQuery('#parallax_section_1').parallax("50%",0.8);}});jQuery(window).load(function(){jQuery(".preloaderimg").fadeOut();jQuery(".preloader").delay(200).fadeOut("slow").delay(200,function(){jQuery(this).remove();});});function swiper_slider_init(){var swiper1=new Swiper('.swiper-container1',{slidesPerView:1,spaceBetween:0,grabCursor:true,loop:true,autoplay:4000});var swiper2=new Swiper('.swiper-container2',{nextButton:'.swiper-button-next',prevButton:'.swiper-button-prev',pagination:'.swiper-pagination',slidesPerView:1,paginationClickable:true,spaceBetween:0,grabCursor:true,loop:true,autoplay:4000})
var swiper3=new Swiper('.swiper-container3',{nextButton:'.swiper-button-next3',prevButton:'.swiper-button-prev3',slidesPerView:1,spaceBetween:0,grabCursor:true,loop:true,autoplay:4000})
var swiper4=new Swiper('.swiper-container4',{scrollbar:'.swiper-scrollbar_tab4',scrollbarHide:true,direction:'vertical',slidesPerView:2,spaceBetween:0,grabCursor:true,mousewheelControl:true,freeMode:true});$('#tabs_sliders a').on('shown.bs.tab',function(e){if($(this).attr('href')=="#tab1"){var swiper4=new Swiper('.swiper-container4',{scrollbar:'.swiper-scrollbar_tab4',scrollbarHide:true,direction:'vertical',slidesPerView:2,spaceBetween:0,grabCursor:true,mousewheelControl:true,freeMode:true});}});$('#tabs_sliders a').on('shown.bs.tab',function(e){if($(this).attr('href')=="#tab22"){var swiper_5=new Swiper('.swiper-container5',{scrollbar:'.swiper-scrollbar_tab5',scrollbarHide:true,direction:'vertical',slidesPerView:2,spaceBetween:0,grabCursor:true,mousewheelControl:true,freeMode:true});}});$('#tabs_sliders a').on('shown.bs.tab',function(e){if($(this).attr('href')=="#tab22"){var swiper_5=new Swiper('.swiper-container5',{scrollbar:'.swiper-scrollbar_tab5',scrollbarHide:true,direction:'vertical',slidesPerView:2,spaceBetween:0,grabCursor:true,mousewheelControl:true,freeMode:true});}});$('#tabs_sliders a').on('shown.bs.tab',function(e){if($(this).attr('href')=="#tab2"){var swiper5=new Swiper('.swiper-container9',{scrollbar:'.swiper-scrollbar_tab9',scrollbarHide:true,direction:'vertical',slidesPerView:2,spaceBetween:0,grabCursor:true,mousewheelControl:true,freeMode:true});}});$('#tabs_sliders a').on('shown.bs.tab',function(e){if($(this).attr('href')=="#tab3"){var swiper6=new Swiper('.swiper-container10',{scrollbar:'.swiper-scrollbar_tab10',scrollbarHide:true,direction:'vertical',slidesPerView:2,spaceBetween:0,grabCursor:true,mousewheelControl:true,freeMode:true});}});var isSliderActive4=true;$('#tabs_sliders a').on('shown.bs.tab',function(e){if($(this).attr('href')=="#tab4"){var swiper7=new Swiper('.swiper-container11',{scrollbar:'.swiper-scrollbar_tab11',scrollbarHide:true,direction:'vertical',slidesPerView:2,spaceBetween:0,mousewheelControl:true,grabCursor:true,freeMode:true});}});var swiper8=new Swiper('.swiper-container6',{nextButton:'.flex-next',prevButton:'.flex-prev',slidesPerView:1,spaceBetween:0,loop:true,grabCursor:true,autoplay:4000})
var swiper9=new Swiper('.swiper-container7',{nextButton:'.flex-next',prevButton:'.flex-prev',slidesPerView:1,spaceBetween:0,grabCursor:true,loop:true,autoplay:4000})
var swiper10=new Swiper('.swiper-container_8',{scrollbar:'.swiper-scrollbar',scrollbarHide:true,nextButton:'.swiper-button-next8',prevButton:'.swiper-button-prev8',direction:'vertical',slidesPerView:3,spaceBetween:0,mousewheelControl:true,grabCursor:true,freeMode:true});var swiper11=new Swiper('.swiper-container_9',{scrollbar:'.swiper-scrollbar',scrollbarHide:true,nextButton:'.swiper-button-next9',prevButton:'.swiper-button-prev9',direction:'vertical',slidesPerView:7,spaceBetween:0,mousewheelControl:true,grabCursor:true,freeMode:true});var swiper12=new Swiper('.swiper-container_12',{scrollbar:'.swiper-scrollbar12',scrollbarHide:true,nextButton:'.swiper-button-next12',prevButton:'.swiper-button-prev12',slidesPerView:5,spaceBetween:25,grabCursor:true,freeMode:true});var swiper13=new Swiper('.swiper-container_13',{scrollbar:'.swiper-scrollbar13',scrollbarHide:true,nextButton:'.swiper-button-next13',prevButton:'.swiper-button-prev13',slidesPerView:'auto',spaceBetween:25,grabCursor:true,freeMode:true});var swiper14=new Swiper('.swiper-container_14',{scrollbar:'.swiper-scrollbar',scrollbarHide:true,direction:'vertical',slidesPerView:8,spaceBetween:0,mousewheelControl:true,grabCursor:true,freeMode:true});var swiper15=new Swiper('.swiper-container_15',{scrollbar:'.swiper-scrollbar15',scrollbarHide:true,direction:'vertical',slidesPerView:4,spaceBetween:10,grabCursor:true,freeMode:true});var swiper16=new Swiper('.swiper-container_16',{scrollbar:'.swiper-scrollbar16',scrollbarHide:true,nextButton:'.swiper-button-next16',prevButton:'.swiper-button-prev16',direction:'vertical',slidesPerView:3,spaceBetween:0,mousewheelControl:true,grabCursor:true,freeMode:true});var swiper17=new Swiper('.swiper-container_17',{nextButton:'.swiper-button-next17',prevButton:'.swiper-button-prev17',direction:'vertical',slidesPerView:'auto',spaceBetween:0,mousewheelControl:true,grabCursor:true,freeMode:true});var swiper=new Swiper('.swiper-slider-container2',{nextButton:'.flex-next',prevButton:'.flex-prev',slidesPerView:1,spaceBetween:0,grabCursor:true,loop:true,autoplay:4000})}
jQuery(window).load(function(){swiper_slider_init();});jQuery(window).ready(function(){swiper_slider_init();});jQuery(window).resize(function(){swiper_slider_init();});function swiper_slider_full(){var sliderleft=new Swiper('.slider-left',{nextButton:'.flex-next',prevButton:'.flex-prev',grabCursor:true,loop:true,loopedSlides:4,autoplay:6000,});var sliderright=new Swiper('.slider-right',{direction:'vertical',centeredSlides:true,slidesPerView:3,touchRatio:0.2,grabCursor:true,loop:true,loopedSlides:4,slideToClickedSlide:true});sliderleft.params.control=sliderright;sliderright.params.control=sliderleft;}
jQuery(window).load(function(){swiper_slider_full();});jQuery(window).ready(function(){swiper_slider_full();});jQuery(window).resize(function(){swiper_slider_full();});