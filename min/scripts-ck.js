function mouseOnButton(t,o,e){$(tooltip).html("<h1>"+t+"</h1><h2>"+o+"</h2>"),"people"===e?($(tooltip).removeClass("misc-tooltip"),$(tooltip).removeClass("traditions-tooltip"),$(tooltip).addClass("people-tooltip")):"traditions"===e?($(tooltip).removeClass("misc-tooltip"),$(tooltip).removeClass("people-tooltip"),$(tooltip).addClass("traditions-tooltip")):($(tooltip).removeClass("people-tooltip"),$(tooltip).removeClass("traditions-tooltip"),$(tooltip).addClass("misc-tooltip"))}function moveToTop(){$(".accordion").animate({scrollTop:0},500)}function openTab2(t){var o="#"+t,e=$(o).offset();$(".accordion").animate({scrollTop:e.top-237},1e3),setTimeout(function(){$(o).addClass("activeItem")},800)}function openTab3(t,o){o="#"+o,$(o).hasClass("currentz")?($(o).next().children("h1").removeClass("activeItem"),moveToTop(),setTimeout(function(){openTab2(t)},1300)):($(o).next().children("h1").removeClass("activeItem"),$(o).next(".pane").siblings(".pane:visible").slideUp(slideSpeed),setTimeout(function(){$(o).next(".pane").slideToggle(slideSpeed),setTimeout(function(){$(o).toggleClass("currentz")},100)},1e3),$(o).siblings("h3").removeClass("currentz"),$(o).children("h1").removeClass("activeItem"),moveToTop(),setTimeout(function(){openTab2(t)},1500))}var tooltip=$("#tools"),tipAdjustX=25,tipAdjustY=-18,slideSpeed=1e3;$(".button, .circle-cities").hover(function(){$(tooltip).addClass("show")},function(){$(tooltip).removeClass("show")}),$(".button, .circle-cities").mousemove(function(t){var o={x:-1,y:-1};o.x=t.pageX,o.y=t.pageY,$(tooltip).css({top:o.y+tipAdjustY,left:o.x+tipAdjustX})}),$(".button, .circle-cities").hover(function(){var t=$(this).data("element"),o=$(this).data("info"),e=$(this).data("category");mouseOnButton(t,o,e)},function(){mouseOnButton()}),$(".circle-map, .circle-cities").on("click",function(){var t=$(this).data("title"),o=$(this).data("category");openTab3(t,o)}),$(function(){$(".accordion div").show(),$(".accordion div").slideToggle(800),$(".accordion h3").click(function(){$(this).next(".pane").slideToggle(slideSpeed).siblings(".pane:visible").slideUp(slideSpeed),$(this).delay(1.2*slideSpeed).toggleClass("currentz"),$(this).siblings("h3").removeClass("currentz"),$(this).next().children("h1").removeClass("activeItem")})});