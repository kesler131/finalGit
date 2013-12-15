/*
	jQuery Navigation Plugin
	Copyright (c) 2011 Daniel Thomson
	
	Licensed under the MIT license:
	http://www.opensource.org/licenses/mit-license.php
*/

(function(b){b.NavPlugin=function(a,c,d){this.el=b(c);this.namespace="navPlugin";this.opts=b.extend(!0,{},b.NavPlugin.settings,a);this.init();"function"===typeof d&&d.call()};b.NavPlugin.settings={itemWidth:100,itemHeight:30,navEffect:"slide",speed:200,vertical:!0};b.NavPlugin.prototype={init:function(){this.destroy();this.el.toprow=this.el.children("li");this.el.submenu=this.el.children("li.toprow").children("ul");this.el.stack=this.el.find("li:has(ul)");this.addClasses();this.addCss();this.addTopRowEffect(); this.addSubMenuEffect()},addClasses:function(){this.el.toprow.addClass("toprow");this.el.submenu.addClass("submenu");this.el.stack.addClass("stack")},addCss:function(){this.el.css({display:"inline"});this.el.find("li").css({width:this.opts.itemWidth+"px",height:this.opts.itemHeight+"px"});this.el.toprow.find("ul").find("li").find("ul").css({left:this.opts.itemWidth+"px"})},addTopRowEffect:function(){var a=this;this.el.children("li.toprow").bind("mouseover."+this.namespace,function(){clearTimeout(a.el.timer); b(this).addClass("hover");var c=b(this).children("ul").children("li"),d=b(this).siblings("li").children("ul").children("li");"slide"==a.opts.navEffect?(c.slideDown(a.opts.speed),d.slideUp(a.opts.speed)):"fade"==a.opts.navEffect?(c.css("display","block"),d.fadeOut(a.opts.speed)):(c.css("display","block"),d.css("display","none"));c.children("ul").css("display","none");return!1});this.el.children("li.toprow").bind("mouseout."+this.namespace,function(){b(this).removeClass("hover");a.setTimer();return!1})}, addSubMenuEffect:function(){var a=this;this.el.children("li.toprow").find("li").bind("mouseover."+this.namespace,function(){clearTimeout(a.el.timer);b(this).addClass("hover");b(this).children("ul").css("display","block");var c=b(this).children("ul").children("li"),d=b(this).siblings("li").children("ul").children("li");"slide"==a.opts.navEffect?(c.slideDown(a.opts.speed),d.slideUp(a.opts.speed)):"fade"==a.opts.navEffect?(c.css("display","block"),d.fadeOut(a.opts.speed)):(c.css("display","block"),d.css("display", "none"));c.children("ul").css("display","none");return!1});this.el.find("li.toprow").find("li").bind("mouseout."+this.namespace,function(){b(this).removeClass("hover");a.setTimer();return!1})},setTimer:function(){var a=this;clearTimeout(this.el.timer);this.el.timer=setTimeout(function(){a.hideNav()},500)},hideNav:function(){var a=this.el.find("li.toprow ul");"slide"==this.opts.navEffect?(a.children("li").slideUp(this.opts.speed),a.children("ul").slideUp(this.opts.speed)):"fade"==this.opts.navEffect? (a.children("li").fadeOut(this.opts.speed),a.children("ul").fadeOut(this.opts.speed)):(a.children("li").css("display","none"),a.children("ul").css("display","none"))},option:function(a){this.opts=b.extend(!0,{},this.opts,a)},destroy:function(){this.el.unbind("."+this.namespace)}};b.fn.navPlugin=function(a,c){var d;"string"===typeof a?(d=Array.prototype.slice.call(arguments,1),this.each(function(){var c=b.data(this,"navPlugin");c?!b.isFunction(c[a])||"_"===a.charAt(0)?alert("the plugin contains no such method: "+ a):c[a].apply(c,d):alert("The plugin has not been initialised yet when you tried to call this method: "+a)})):this.each(function(){var d=b.data(this,"navPlugin");d?d.option(a):b.data(this,"navPlugin",new b.NavPlugin(a,this,c))});return this}})(jQuery);