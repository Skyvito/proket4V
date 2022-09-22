function setUpSpecialNavs(){$(".navbar-toggle").click(function(a){var c,b,d,e=$(this).closest("nav"),f=e.find("ul.site-navigation"),g=f.clone();f.parent().hasClass("nav-special")&&(a.stopPropagation(),$(this).hasClass("selected-nav")?($(".blocsapp-special-menu blocsnav").removeClass("open"),$(".selected-nav").removeClass("selected-nav"),setTimeout(function(){$(".blocsapp-special-menu").remove();$("body").removeClass("lock-scroll");$(".selected-nav").removeClass("selected-nav")},300)):($(this).addClass("selected-nav"),
e=e.attr("class").replace("navbar","").replace("row",""),f=f.parent().attr("class").replace("navbar-collapse","").replace("collapse",""),$(".content-tint").length=-1,$("body").append('<div class="content-tint"></div>'),g.insertBefore(".page-container").wrap('<div class="blocsapp-special-menu '+e+'"><blocsnav class="'+f+'">'),$("blocsnav").prepend('<a class="close-special-menu animated fadeIn" style="animation-delay:0.5s;"><div class="close-icon"></div></a>'),c="fadeInRight",b=0,d=60,$(".blocsapp-special-menu blocsnav").hasClass("fullscreen-nav")?
(c="fadeIn",d=100):$(".blocsapp-special-menu").hasClass("nav-invert")&&(c="fadeInLeft"),$(".blocsapp-special-menu blocsnav li").each(function(){$(this).parent().hasClass("dropdown-menu")?$(this).addClass("animated fadeIn"):(b+=d,$(this).attr("style","animation-delay:"+b+"ms").addClass("animated "+c))}),setTimeout(function(){$(".blocsapp-special-menu blocsnav").addClass("open");$(".content-tint").addClass("on");$("body").addClass("lock-scroll")},10)))});$("body").on("mousedown touchstart",".content-tint, .close-special-menu",
function(a){$(".content-tint").removeClass("on");$(".selected-nav").click();setTimeout(function(){$(".content-tint").remove()},10)}).on("click",".blocsapp-special-menu a",function(a){$(a.target).closest(".dropdown-toggle").length||$(".close-special-menu").mousedown()})}
function extraNavFuncs(){$(".site-navigation a").click(function(a){$(a.target).closest(".dropdown-toggle").length||$(".navbar-collapse").collapse("hide")});$("a.dropdown-toggle").click(function(a){$(this).parent().addClass("target-open-menu");$(this).closest(".dropdown-menu").find(".dropdown.open").each(function(c){$(this).hasClass("target-open-menu")||$(this).removeClass("open")});$(".target-open-menu").removeClass("target-open-menu")})}
function setFillScreenBlocHeight(){$(".bloc-fill-screen").each(function(a){var c=$(this);window.fillBodyHeight=0;$(this).find(".container").each(function(b){fillPadding=2*parseInt($(this).css("padding-top"));fillBodyHeight=c.hasClass("bloc-group")?fillPadding+$(this).outerHeight()+50:fillBodyHeight+fillPadding+$(this).outerHeight()+50});$(this).css("height",getFillHeight()+"px")})}function getFillHeight(){var a=$(window).height();return a<fillBodyHeight&&(a=fillBodyHeight+100),a}
function scrollToTarget(a){1==a?a=0:2==a?a=$(document).height():(a=$(a).offset().top,$(".sticky-nav").length&&(a-=$(".sticky-nav .navbar-header").height()));$("html,body").animate({scrollTop:a},"slow");$(".navbar-collapse").collapse("hide")}function animateWhenVisible(){hideAll();inViewCheck();$(window).scroll(function(){inViewCheck();scrollToTopView();stickyNavToggle()})}
function setUpDropdownSubs(){$("ul.dropdown-menu [data-toggle=dropdown]").on("click",function(a){a.preventDefault();a.stopPropagation();$(this).parent().siblings().removeClass("open");$(this).parent().toggleClass("open");(a=$(this).parent().children(".dropdown-menu")).offset().left+a.width()>$(window).width()&&a.addClass("dropmenu-flow-right")})}
function stickyNavToggle(){var a,c=0,b="sticky";$(".sticky-nav").hasClass("fill-bloc-top-edge")&&("rgba(0, 0, 0, 0)"==(a=$(".fill-bloc-top-edge.sticky-nav").parent().css("background-color"))&&(a="#FFFFFF"),$(".sticky-nav").css("background",a),c=$(".sticky-nav").height(),b="sticky animated fadeInDown");$(window).scrollTop()>c?($(".sticky-nav").addClass(b),"sticky"==b&&$(".page-container").css("padding-top",$(".sticky-nav").height())):($(".sticky-nav").removeClass(b).removeAttr("style"),$(".page-container").removeAttr("style"))}
function hideAll(){$(".animated").each(function(a){$(this).closest(".hero").length||$(this).removeClass("animated").addClass("hideMe")})}
function inViewCheck(){$($(".hideMe").get().reverse()).each(function(a){var c,b=jQuery(this);a=b.offset().top+b.height();var d=$(window).scrollTop()+$(window).height();b.height()>$(window).height()&&(a=b.offset().top);a<d&&(c=b.attr("class").replace("hideMe","animated"),b.css("visibility","hidden").removeAttr("class"),setTimeout(function(){b.attr("class",c).css("visibility","visible")},.01))})}
function scrollToTopView(){$(window).scrollTop()>$(window).height()/3?$(".scrollToTop").hasClass("showScrollTop")||$(".scrollToTop").addClass("showScrollTop"):$(".scrollToTop").removeClass("showScrollTop")}
function setUpVisibilityToggle(){$(document).on("click","[data-toggle-visibility]",function(a){function c(d){d.is("img")?d.toggle():d.slideToggle()}a.preventDefault();var b;a=$(this).attr("data-toggle-visibility");-1!=a.indexOf(",")?(b=a.split(","),$.each(b,function(d){c($("#"+b[d]))})):c($("#"+a))})}
function setUpLightBox(){window.targetLightbox;$(document).on("click","[data-lightbox]",function(a){a.preventDefault();var c=(targetLightbox=$(this)).attr("data-lightbox"),b=targetLightbox.attr("data-autoplay"),d='<p class="lightbox-caption">'+targetLightbox.attr("data-caption")+"</p>",e="no-gallery-set",f=targetLightbox.attr("data-frame");targetLightbox.attr("data-gallery-id")&&(e=targetLightbox.attr("data-gallery-id"));targetLightbox.attr("data-caption")||(d="");a="";1==b&&(a="autoplay");d=$('<div id="lightbox-modal" class="modal fade"><div class="modal-dialog"><div class="modal-content '+
f+' blocs-lb-container"><button id="blocs-lightbox-close-btn" type="button" class="close-lightbox" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><div class="modal-body"><a href="#" class="prev-lightbox" aria-label="prev"><span class="fa fa-chevron-left"></span></a><a href="#" class="next-lightbox" aria-label="next"><span class="fa fa-chevron-right"></span></a><img id="lightbox-image" class="img-responsive" src="'+c+'"><div id="lightbox-video-container" class="embed-responsive embed-responsive-16by9"><video controls '+
a+' class="embed-responsive-item"><source id="lightbox-video" src="'+c+'" type="video/mp4"></video></div>'+d+"</div></div></div></div>");$("body").append(d);"fullscreen-lb"==f&&($("#lightbox-modal").addClass("fullscreen-modal").append('<a class="close-full-screen-modal animated fadeIn" style="animation-delay:0.5s;" onclick="$(\'#lightbox-modal\').modal(\'hide\');"><div class="close-icon"></div></a>'),$("#blocs-lightbox-close-btn").remove());".mp4"==c.substring(c.length-4)?($("#lightbox-image, .lightbox-caption").hide(),
$("#lightbox-video-container").show()):($("#lightbox-image,.lightbox-caption").show(),$("#lightbox-video-container").hide());$("#lightbox-modal").modal("show");"no-gallery-set"==e?(0==$("a[data-lightbox]").index(targetLightbox)&&$(".prev-lightbox").hide(),$("a[data-lightbox]").index(targetLightbox)==$("a[data-lightbox]").length-1&&$(".next-lightbox").hide()):(0==$('a[data-gallery-id="'+e+'"]').index(targetLightbox)&&$(".prev-lightbox").hide(),$('a[data-gallery-id="'+e+'"]').index(targetLightbox)==
$('a[data-gallery-id="'+e+'"]').length-1&&$(".next-lightbox").hide());addLightBoxSwipeSupport()}).on("hidden.bs.modal","#lightbox-modal",function(){$("#lightbox-modal").remove()});$(document).on("click",".next-lightbox, .prev-lightbox",function(a){a.preventDefault();var c="no-gallery-set",b=$("a[data-lightbox]").index(targetLightbox),d=$("a[data-lightbox]").eq(b+1);targetLightbox.attr("data-gallery-id")&&(b=$('a[data-gallery-id="'+(c=targetLightbox.attr("data-gallery-id"))+'"]').index(targetLightbox),
d=$('a[data-gallery-id="'+c+'"]').eq(b+1));$(this).hasClass("prev-lightbox")&&(d=$('a[data-gallery-id="'+c+'"]').eq(b-1),"no-gallery-set"==c&&(d=$("a[data-lightbox]").eq(b-1)));".mp4"==(a=d.attr("data-lightbox")).substring(a.length-4)?(b="",1==d.attr("data-autoplay")&&(b="autoplay"),$("#lightbox-image, .lightbox-caption").hide(),$("#lightbox-video-container").show().html("<video controls "+b+' class="embed-responsive-item"><source id="lightbox-video" src="'+a+'" type="video/mp4"></video>')):($("#lightbox-image").attr("src",
a).show(),$(".lightbox-caption").html(d.attr("data-caption")).show(),$("#lightbox-video-container").hide());targetLightbox=d;$(".next-lightbox, .prev-lightbox").hide();"no-gallery-set"==c?($("a[data-lightbox]").index(d)!=$("a[data-lightbox]").length-1&&$(".next-lightbox").show(),0<$("a[data-lightbox]").index(d)&&$(".prev-lightbox").show()):($('a[data-gallery-id="'+c+'"]').index(d)!=$('a[data-gallery-id="'+c+'"]').length-1&&$(".next-lightbox").show(),0<$('a[data-gallery-id="'+c+'"]').index(d)&&$(".prev-lightbox").show())})}
function addSwipeSupport(){$(".carousel-inner").length&&$(".carousel-inner").swipe({swipeLeft:function(a,c,b,d,e){$(this).parent().carousel("next")},swipeRight:function(){$(this).parent().carousel("prev")},threshold:0})}function addKeyBoardSupport(){$(window).keydown(function(a){37==a.which?$(".prev-lightbox").is(":visible")&&$(".prev-lightbox").click():39==a.which&&$(".next-lightbox").is(":visible")&&$(".next-lightbox").click()})}
function addLightBoxSwipeSupport(){$("#lightbox-image").length&&$("#lightbox-image").swipe({swipeLeft:function(a,c,b,d,e){$(".next-lightbox").is(":visible")&&$(".next-lightbox").click()},swipeRight:function(){$(".prev-lightbox").is(":visible")&&$(".prev-lightbox").click()},threshold:0})}
$(document).ready(function(){$("#scroll-hero").click(function(a){a.preventDefault();$("html,body").animate({scrollTop:$("#scroll-hero").closest(".bloc").height()},"slow")});extraNavFuncs();setUpSpecialNavs();setUpDropdownSubs();setUpLightBox();setUpVisibilityToggle();addSwipeSupport();addKeyBoardSupport();-1!=navigator.userAgent.indexOf("Safari")&&-1==navigator.userAgent.indexOf("Chrome")&&$("#page-loading-blocs-notifaction").remove()});
$(window).load(function(){setFillScreenBlocHeight();animateWhenVisible();$("#page-loading-blocs-notifaction").remove()}).resize(function(){setFillScreenBlocHeight()});$(function(){$('[data-toggle="tooltip"]').tooltip()});