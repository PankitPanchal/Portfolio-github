jQuery(document).ready(function(a){var o=2500,j=(a(".cd-headline.letters").find("b").each(function(){var e=a(this),s=e.text().split(""),t=e.hasClass("is-visible");for(i in s)0<e.parents(".rotate-2").length&&(s[i]="<em>"+s[i]+"</em>"),s[i]=t?'<i class="in">'+s[i]+"</i>":"<i>"+s[i]+"</i>";var n=s.join("");e.html(n).css("opacity",1)}),a(".cd-headline")),T=o;function d(e){var s,t,n=m(e);e.parents(".cd-headline").hasClass("type")?((s=e.parent(".cd-words-wrapper")).addClass("selected").removeClass("waiting"),setTimeout(function(){s.removeClass("selected"),e.removeClass("is-visible").addClass("is-hidden").children("i").removeClass("in").addClass("out")},500),setTimeout(function(){b(n,150)},1300)):e.parents(".cd-headline").hasClass("letters")?(t=e.children("i").length>=n.children("i").length,function r(c,u,y,g){var q;c.removeClass("in").addClass("out"),c.is(":last-child")?y&&setTimeout(function(){d(m(u))},o):setTimeout(function(){r(c.next(),u,y,g)},g),c.is(":last-child")&&a("html").hasClass("no-csstransitions")&&(q=m(u),l(u,q))}(e.find("i").eq(0),e,t,50),h(n.find("i").eq(0),n,t,50)):e.parents(".cd-headline").hasClass("clip")?e.parents(".cd-words-wrapper").animate({width:"2px"},600,function(){l(e,n),b(n)}):e.parents(".cd-headline").hasClass("loading-bar")?(e.parents(".cd-words-wrapper").removeClass("is-loading"),l(e,n),setTimeout(function(){d(n)},3800),setTimeout(function(){e.parents(".cd-words-wrapper").addClass("is-loading")},800)):(l(e,n),setTimeout(function(){d(n)},o))}function b(e,s){e.parents(".cd-headline").hasClass("type")?(h(e.find("i").eq(0),e,!1,s),e.addClass("is-visible").removeClass("is-hidden")):e.parents(".cd-headline").hasClass("clip")&&e.parents(".cd-words-wrapper").animate({width:e.width()+10},600,function(){setTimeout(function(){d(e)},1500)})}function h(e,s,t,n){e.addClass("in").removeClass("out"),e.is(":last-child")?(s.parents(".cd-headline").hasClass("type")&&setTimeout(function(){s.parents(".cd-words-wrapper").addClass("waiting")},200),t||setTimeout(function(){d(s)},o)):setTimeout(function(){h(e.next(),s,t,n)},n)}function m(e){return e.is(":last-child")?e.parent().children().eq(0):e.next()}function l(e,s){e.removeClass("is-visible").addClass("is-hidden"),s.removeClass("is-hidden").addClass("is-visible")}j.each(function(){var e,s,t,n=a(this);n.hasClass("loading-bar")?(T=3800,setTimeout(function(){n.find(".cd-words-wrapper").addClass("is-loading")},800)):n.hasClass("clip")?(e=(s=n.find(".cd-words-wrapper")).width()+10,s.css("width",e)):n.hasClass("type")||(s=n.find(".cd-words-wrapper b"),t=0,s.each(function(){var r=a(this).width();t<r&&(t=r)}),n.find(".cd-words-wrapper").css("width",t)),setTimeout(function(){d(n.find(".is-visible").eq(0))},T)})});let mybutton=document.getElementById("btn-back-to-top");function scrollFunction(){mybutton.style.display=document.body.scrollTop>20||document.documentElement.scrollTop>20?"block":"none"}function backToTop(){document.body.scrollTop=0,document.documentElement.scrollTop=0}window.onscroll=function(){scrollFunction()},mybutton.addEventListener("click",backToTop);