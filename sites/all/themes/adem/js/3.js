(function($) {
    $(document).ready(function() {

        $("a.fancybox").fancybox({
            'titlePosition'	: 'over'
        });
        $("a.fancybox_frame").fancybox({
            'width'				: '600px',
            'height'			: '400px',
            'autoScale'			: false,
            'transitionIn'		: 'none',
            'transitionOut'		: 'none',
            'type'				: 'iframe'
        });

        $("a.video").click(function() {
            $.fancybox({
                'padding'		: 0,
                'autoScale'		: false,
                'transitionIn'	: 'none',
                'transitionOut'	: 'none',
                'title'			: this.title,
                'width'			: 639,
                'height'		: 365,
                'href'			: this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
                'type'			: 'swf',
                'swf'			: {
                    'wmode'				: 'transparent',
                    'allowfullscreen'	: 'true'
                }
            });

            return false;
        });

        $("a#fancyBoxLink").fancybox({
            'href'   : '#epipheoVideo',
            'titleShow'  : false,
            'transitionIn'  : 'none',
            'transitionOut' : 'none'
        });

        $(".extLink").fancybox({
            'width' : 639,
            'height' : 365,
            'autoScale' : false,
            'transitionIn' : 'none',
            'transitionOut' : 'none',
            'type' : 'iframe'
        });

        $('a.login').live('click',function(e,data){
            // get block
            var f = $('#block-user-login');
            if(f.length == 0){
                return true;
            }
            e.preventDefault();
            // show login
            f.find('.form-actions').hide();
            var frm = f.children('form');
            if($('body').hasClass('Ademphis') && !frm.hasClass('done')){
                // make sure send people back
                frm.attr('action',frm.attr('action')+location.toString()).addClass('done');
            }
            var d = $('#dialog');
            d.html(f.html()).dialog({
                autoOpen: false,
                title:frm.data('title'),
                width:500,
                height:240,
                draggable:false,
                resizable:false,
                modal:true,
                buttons: {
                    "Cancel": function(){
                        $(this).dialog('close');
                    },
                    "Login": function(){
                        d.children('form').trigger('submit');
                    }
                }
            });
            var buttons = $('.ui-dialog-buttonset').children('button');
            var ssl_path = Drupal.settings.basePath;
            if(Drupal.settings.basePath == '/'){
                ssl_path = 'https://'+window.location.hostname+'/';
            }
            var btn_count = $('a.pull-left.btn.btn-success').length;
            if (btn_count === 0) {  // if there's already a button, don't add another...
                $('.ui-dialog-buttonset').before('<a href="'+ssl_path+'user/register" class="pull-left btn btn-success">'+frm.data('new-account')+'</a>');
            }
            $.each(buttons,function(i){
                var b = $(this);
                if(_.any(['ok','submit','save','login'],function(t){ return t == b.text().toLowerCase(); })){
                    $(this).attr('class','btn btn-primary');
                }
                if(_.any(['cancel'],function(t){ return t == b.text().toLowerCase(); })){
                    $(this).attr('class','btn');
                }
            });
            $('input:password').bind('keypress',function(e) {
                var code = (e.keyCode ? e.keyCode : e.which);
                if(code == 13) {
                    d.children('form').trigger('submit');
                }
            });
            d.dialog('open');
        });

        $('.alert .close').live('click',function(event,data){
            var t = $(this).parent();
            t.fadeOut('fast',function(){
                t.remove();
            });
        });

        /** other option controller */
        $('select','form.webform-client-form').change(function(){
            var d = $('#'+$(this).attr('id')+'-other');
            if(d.length > 0){
                if($(this).val() == 'Other' ){
                    d.parent().parent().show();
                    d.focus();
                }else{
                    d.val('').parent().parent().hide();
                }
            }
        });
        if (typeof $.fn.qtip != 'undefined') {
            $('#editions-table a.tip').qtip({
                style: {
                    name: 'dark',
                    tip: true,
                    width: 500,
                    border: {
                        width: 1,
                        radius: 3,
                        color: '#444444'
                    }
                },
                position: {
                    corner: {
                        target: 'rightMiddle',
                        tooltip: 'leftMiddle'
                    }
                }
            });
        }
        $('#partner_portal_search').submit(function(){
            if( $('#keys','#partner_portal_search').val().length > 0 ){
                $('#partner_portal_search').attr('action',$('#partner_portal_search').attr('action')+'/'+$('#keys','#partner_portal_search').val());
            }
        });
        $(".scroll").click(function(event){
            event.preventDefault();
            $('html,body').animate({
                scrollTop:$(this.hash).offset().top
            }, 500);
        });
        $('form.webform-client-form').submit(function(){
            $('.form-submit').fadeTo('fast', 0.1).attr('disabled','disabled');
        });
    });
})(jQuery);




(function ($) {

/**
 * Attach handlers to evaluate the strength of any password fields and to check
 * that its confirmation is correct.
 */
Drupal.behaviors.password = {
    attach: function (context, settings) {
        var translate = settings.password;
        $('input.password-field', context).once('password', function () {
            var passwordInput = $(this);
            var innerWrapper = $(this).parent();
            var outerWrapper = $(this).parent().parent().parent();

            // Add identifying class to password element parent.
            innerWrapper.addClass('password-parent');

            // Add the password confirmation layer.
            var confirmInput = $('input.password-confirm', outerWrapper);
            $(confirmInput).after('<div class="password-suggestions description"></div>');
            $(confirmInput).after('<span class="help-inline password-confirm">' + translate['confirmTitle'] + ' <span></span></span>').addClass('confirm-parent');

            var confirmResult = $('span.password-confirm', outerWrapper).css({ visibility: 'hidden' });
            var confirmChild = $('span', confirmResult);

            // Add the description box.
            var passwordMeter = '<span class="password-strength help-inline password-strength-text" aria-live="assertive"></span>';

            $(innerWrapper).append(passwordMeter);
            var passwordDescription = $('div.password-suggestions', outerWrapper).hide();
            // Check the password strength.
            var passwordCheck = function () {

                // Evaluate the password strength.
                var result = Drupal.evaluatePasswordStrength(passwordInput.val(), settings.password);
                // Update the suggestions for how to improve the password.
                if (passwordDescription.html() != result.message) {
                    passwordDescription.html(result.message);
                }

                // Only show the description box if there is a weakness in the password.
                if (result.strength == 100) {
                    passwordDescription.hide();
                }
                else {
                    passwordDescription.show();
                }

                // Adjust the length of the strength indicator.
                //$(innerWrapper).find('.indicator').css('width', result.strength + '%');

                // Update the strength indication text.
                var indication = $(innerWrapper).find('.password-strength-text');

                if(result.indicatorText == 'Weak'){
                    innerWrapper.parent().removeClass('success').removeClass('warning').addClass('error');
                }else if(result.indicatorText == 'Fair'){
                    innerWrapper.parent().removeClass('error').removeClass('success').addClass('warning');

                }else if(result.indicatorText == 'Good' || result.indicatorText == 'Strong'){
                    innerWrapper.parent().removeClass('error').removeClass('warning').addClass('success');
                }
                indication.html(result.indicatorText);

                passwordCheckMatch();
            };

            // Check that password and confirmation inputs match.
            var passwordCheckMatch = function () {

                if (confirmInput.val()) {
                    var success = passwordInput.val() === confirmInput.val();
                    if(success){
                        confirmInput.parent().parent().removeClass('error').addClass('success');
                    }else{
                        confirmInput.parent().parent().removeClass('success').addClass('error');
                    }
                    // Show the confirm result.
                    confirmResult.css({ visibility: 'visible' });

                    // Remove the previous styling if any exists.
                    if (this.confirmClass) {
                        confirmChild.removeClass(this.confirmClass);
                    }

                    // Fill in the success message and set the class accordingly.
                    var confirmClass = success ? 'ok' : 'error';
                    confirmChild.html(translate['confirm' + (success ? 'Success' : 'Failure')]).addClass(confirmClass);
                    this.confirmClass = confirmClass;
                }
                else {
                    confirmResult.css({ visibility: 'hidden' });
                }
            };

            // Monitor keyup and blur events.
            // Blur must be used because a mouse paste does not trigger keyup.
            passwordInput.keyup(passwordCheck).focus(passwordCheck).blur(passwordCheck);
            confirmInput.keyup(passwordCheckMatch).blur(passwordCheckMatch);
        });
    }
};
})
;
/** 
 * DPC GA for Youtube Embed
 * 
 * http://directperformance.com.br/
 *
 *  Copyright 2010 Direct Performance
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 * 
 * $Date: 2009-10-01 17:52:42 -0300 (qui, 01 out 2009) $
 * @fileoverview  métodos para medição de interações com vídeos Youtube Embedded usando eventos no Google Analytics
 * @author DirectPerformance -  http://www.directperformance.com.br/ <contato@directperformance.com.br>
 * @version $Revision: 11 $
 *
 */
 
var YoutubeTrackerGlobal = window.YoutubeTrackerGlobal = {};
YoutubeTrackerGlobal.bucket_ = [];
YoutubeTrackerGlobal.objects = [];
YoutubeTrackerGlobal.timeout = -1;
YoutubeTrackerGlobal.seekTimeout = -1;
YoutubeTrackerGlobal.callbackTracker = function(video_code,action,bucket,time_seconds){};
 
 /**
 * @class Youtube Tracking Component
 * This class encapsulates all logic for tracking youtube videos on a page
 * To track Embedded Youtube Videos:
 * 1) Specify  a ID for the OBJECT or EMBED tag
 *     Ex: <object id="myytplayer"> or <embed id="myytplayer">
 * 2) Include Youtube JS API parameters in OBJECT or EMBED url: &enablejsapi=1&playerapiid=ytplayer
 *     Ex: http://www.youtube.com/v/gRvUpoTT-Bo&hl=pt-br&fs=1&enablejsapi=1&playerapiid=myytplayer
 * 3) Specify atributo allowscriptaccess="always"
 *     Ex: <param name="allowscriptaccess" value="always"> or <embed allowscriptaccess="always">
 * @param {Number[]} [arg1=[10, 30, 60, 180, 600]] Array that represents the bucket
 * @constructor
 */
var YoutubeTracker = window.YoutubeTracker = function(opt_bucket,callback,debug) {
  if (opt_bucket) {
    YoutubeTrackerGlobal.bucket_ = opt_bucket.sort(YoutubeTrackerGlobal.sortNumber); 
  } else {
    YoutubeTrackerGlobal.bucket_ = YoutubeTracker.DEFAULT_BUCKET;
  }
  if (callback){
	YoutubeTrackerGlobal.callbackTracker = callback;
  } else {
	try{
  		YoutubeTrackerGlobal.callbackTracker = _gat._getTrackerByName()._trackEvent;
	}catch(e){
  		YoutubeTrackerGlobal.callbackTracker = pageTracker._trackEvent;
	}
  }
  if (debug){
	YoutubeTrackerGlobal.callbackTracker_ = YoutubeTrackerGlobal.callbackTracker;
	YoutubeTrackerGlobal.callbackTracker = function(video_code,action,bucket,time_seconds){
		YoutubeTrackerGlobal.callbackTracker_(video_code,action,bucket,time_seconds);
		if (console&&console.log){
			console.log(video_code + ', ' + action + ', ' + bucket + ', ' + time_seconds);//DEBUG
		}		
	};
  }
};

/**
 * Helper function to sort an Array of numbers
 * @public
 * @param {Number} arg1 The first number
 * @param {Number} arg2 The second number
 * @return The difference used to sort
 * @type Number
 */
YoutubeTrackerGlobal.sortNumber = function(a, b) {
  return (a - b);
};

/**
 * Sets the bucket for histogram generation in GA
 * @public
 * @param {Number[]} The bucket array
 */
YoutubeTrackerGlobal._setHistogramBuckets = function(buckets_array) {
  YoutubeTrackerGlobal.bucket_ = buckets_array.sort(this.sortNumber);
};


/**
 * @constant 
 * */
YoutubeTracker.DEFAULT_BUCKET = [10, 30, 60, 180, 600];

/**
 * Get the current bucket for a given time in seconds
 * @public
 * @param {Number[]} The bucket array
 */
YoutubeTrackerGlobal.getBucket = function(time){
	var i;
	var bucketString;
	//if (time==0) return "0";
	for(i = 0; i < YoutubeTrackerGlobal.bucket_.length; i++) {
		if (time < YoutubeTrackerGlobal.bucket_[i]) {
			if (i === 0) {
				bucketString = "0-" + (YoutubeTrackerGlobal.bucket_[0]);
				break;
			} else {
				bucketString = YoutubeTrackerGlobal.bucket_[i - 1] + "-" + (YoutubeTrackerGlobal.bucket_[i] - 1);
				break;
			}
		}
	}
	if (!bucketString) {
		bucketString = YoutubeTrackerGlobal.bucket_[i - 1] + "+";
	}
	return bucketString;
};

/**
 * Sends a event with the maximum time viewed for each video on the page
 * @public
 */
YoutubeTrackerGlobal.trackMaxTime = function(){
	var bucketString, cat_name, action_name, ytplayer;
	for (var i in YoutubeTrackerGlobal.objects){
		if (YoutubeTrackerGlobal.objects[i]){
			bucketString = YoutubeTrackerGlobal.getBucket(YoutubeTrackerGlobal.objects[i].maxTime);
			ytplayer = document.getElementById(YoutubeTrackerGlobal.objects[i].id);
			if (ytplayer){
				cat_name = ytplayer._YoutubeTracker_cod_video;			
				action_name = "max-time";
				YoutubeTrackerGlobal.callbackTracker(cat_name,action_name,bucketString,YoutubeTrackerGlobal.objects[i].maxTime);
			}
		}
	}
};

/**
 * Update all the current status and time values for all the video objects
 * @public
 */
YoutubeTrackerGlobal.updatetimer = function(){
	var currTime, ytplayer, cat_name, action_name, actualBucket;
	for (var i in YoutubeTrackerGlobal.objects){
		if (YoutubeTrackerGlobal.objects[i]){
			ytplayer = document.getElementById(YoutubeTrackerGlobal.objects[i].id);
			if (ytplayer&&ytplayer.getCurrentTime){
				currTime = parseInt(ytplayer.getCurrentTime(),10);
				ytplayer._YoutubeTracker_last_posicao = currTime;
				if (currTime>YoutubeTrackerGlobal.objects[i].maxTime) {YoutubeTrackerGlobal.objects[i].maxTime = currTime;}
				//check if viewing time changes the bucket while playing
				if (ytplayer.getPlayerState()==1){
					actualBucket = YoutubeTrackerGlobal.getBucket(currTime);
					if (actualBucket!=ytplayer._YoutubeTracker_lastBucket){
						cat_name = ytplayer._YoutubeTracker_cod_video;
						action_name = "view-range";
						YoutubeTrackerGlobal.callbackTracker(cat_name,action_name,actualBucket,currTime);
						ytplayer._YoutubeTracker_lastBucket = actualBucket;
					}
				}
			}
		}
	}
};

/**
 * Captures Youtube JS API Event
 * @public
 * @playerId {String[]}  Object ID passed in &playerapiid
 */
window.onYouTubePlayerReady = function(playerId) {
	//identificação do vídeo
	var ytplayer = document.getElementById(playerId);		
	//cria método de envio de ações no vídeo
	if (ytplayer){
		var re = /(v=|v\/|p\/)([^&?]+)/.exec(ytplayer.getVideoUrl());
		var cod_video=((re&&re[2])?re[2]:ytplayer.getVideoUrl())||playerId;
		ytplayer._YoutubeTracker_cod_video = "youtube-video:" + cod_video;
		YoutubeTrackerGlobal.objects.push({id:playerId,maxTime:0,cod:cod_video});
		ytplayer._YoutubeTracker_sendaction = function(newState){
			var cat_name = this._YoutubeTracker_cod_video;					
			posicao = parseInt(this.getCurrentTime(),10);
			var action_name = newState;
			switch (newState){
				case -1: action_name="nunstarted"; break;
				case 0: action_name="ended"; break;
				case 1: action_name="playing";break;
				case 2: action_name="paused";break;
				case 3: action_name="buffering"; break;
				case 5: action_name="cued"; break;
			}
			//detect rewind and forward
			if (posicao<(ytplayer._YoutubeTracker_last_posicao-1)){
				action_name="rewind";				
			}else if(posicao>(ytplayer._YoutubeTracker_last_posicao+1)){
				action_name="fast-forward";
			}
			//detect rewind and forward after paused
			var seekAfterPause = false;
			if (action_name=="playing"){
				if (posicao<(ytplayer._YoutubeTracker_last_posicao_paused-1)){
					action_name="rewind";
					seekAfterPause = true;
				}else if(posicao>(ytplayer._YoutubeTracker_last_posicao_paused+1)){
					action_name="fast-forward";
					seekAfterPause = true;
				}
			}
			//don't track buffering state (3) or repeated events
			if ((action_name!="buffering")&&(action_name!=ytplayer._YoutubeTracker_last_action)){
				ytplayer._YoutubeTracker_last_action = action_name;
				var last_posicao_ = ytplayer._YoutubeTracker_last_posicao;
				if (seekAfterPause){ last_posicao_ = ytplayer._YoutubeTracker_last_posicao_paused;}
				ytplayer._YoutubeTracker_last_posicao = posicao;
				var bucketString;
				//avoid track paused if its just used to track seeking events
				if (action_name=="paused"){
					ytplayer._YoutubeTracker_last_posicao_paused = posicao;
					bucketString = YoutubeTrackerGlobal.getBucket(posicao);
					YoutubeTrackerGlobal.seekTimeout = setTimeout("YoutubeTrackerGlobal.callbackTracker('"+cat_name+"','"+action_name+"','"+bucketString+"',0"+posicao+");",300);
				} else {
					//seeking events
					if ((action_name=="rewind")||(action_name=="fast-forward")){
						clearTimeout(YoutubeTrackerGlobal.seekTimeout); //cancel previou paused events
						//track both from and to positions for seeking events
						bucketString = YoutubeTrackerGlobal.getBucket(last_posicao_);
						YoutubeTrackerGlobal.callbackTracker(cat_name,action_name+':from',bucketString,last_posicao_);
						bucketString = YoutubeTrackerGlobal.getBucket(posicao);
						YoutubeTrackerGlobal.callbackTracker(cat_name,action_name+":to",bucketString,posicao);
					} else {
						// other events
						bucketString = YoutubeTrackerGlobal.getBucket(posicao);
						YoutubeTrackerGlobal.callbackTracker(cat_name,action_name,bucketString,posicao);
					}					
				}
			}
		};
		ytplayer.addEventListener("onStateChange", "document.getElementById('"+playerId+"')._YoutubeTracker_sendaction");
		//tratamento de erros no vídeo
		ytplayer._YoutubeTracker_senderror = function(errCode){
			var cat_name = this._YoutubeTracker_cod_video;
			YoutubeTrackerGlobal.callbackTracker(cat_name,"error",errCode);
		};
		ytplayer.addEventListener("onError", "document.getElementById('"+playerId+"')._YoutubeTracker_senderror");
	}
	// atualiza posição a cada segundo
	YoutubeTrackerGlobal.timeout = setInterval(YoutubeTrackerGlobal.updatetimer,500);
};
;
var Slider=function(e){this.id=e;this.speed=500;this.slides=[];this.timeout=0;var t=this;jQuery(this.id+" .slide-inner-wrapper").after('<div class="slider-bubbles"><ul></ul></div>');jQuery(this.id+" .slide-content").each(function(){var e=jQuery(this).attr("class");var n=/slide\d+/;var r=n.exec(e);t.slides.push(r)});for(var n=0;n<this.slides.length;n++){jQuery(this.id+" .slider-bubbles ul").append('<li class="slider-bubble" onclick="javascript:'+this.id.substring(1)+".resetTimeout();"+this.id.substring(1)+".change("+this.id.substring(1)+".current, "+n+');"></li>')}this.current=0;this.last=this.current;jQuery(this.id+" .slider-bubbles ul li").first().addClass("selected")};Slider.prototype.next=function(e){this.last=this.current;this.current=this.current===this.slides.length-1?0:this.current+1;this.change(this.last,this.current,e)};Slider.prototype.previous=function(e){this.last=this.current;this.current=this.current===0?this.slides.length-1:this.current-1;this.change(this.last,this.current,e)};Slider.prototype.animate=function(e,t,n){function o(n,s){jQuery(e).animate({left:n},r.speed,function(){jQuery(e).addClass("hidden")});jQuery(t).css({left:s}).addClass("active").removeClass("hidden").animate({left:i},r.speed,function(){jQuery(t).removeClass("active")})}var r=this;var i="0px";var s=jQuery(window).width()*2+"px";if(e==="previous"||e==="next"){n=e;e=this.last;t=this.current}e=this.id+" .slide-content."+this.slides[e];t=this.id+" .slide-content."+this.slides[t];if(n==="next"){previous="-"+s,next=s}else if(n==="previous"){previous=s,next="-"+s}o(previous,next)};Slider.prototype.animation=function(e){this.animate=e};Slider.prototype.change=function(e,t,n){if(typeof n==="undefined"){n="next"}if(typeof e!=="undefined"&&typeof t!=="undefined"){if(e===t)return;this.last=e;this.current=t;n=t>e?"next":"previous"}else{e=this.last;t=this.current}this.animate(e,t,n);jQuery(this.id+" .slider-bubble:nth-child("+(e+1)+")").removeClass("selected");jQuery(this.id+" .slider-bubble:nth-child("+(t+1)+")").addClass("selected")};Slider.prototype.setInt=function(e){this.timeout=e};Slider.prototype.resetTimeout=function(){var e=this;var t=null;window.clearInterval(this.timer);if(this.timeout>0){t=setInterval(function(){e.next("next")},this.timeout)}this.timer=t};Slider.prototype.start=function(){function i(t){t.preventDefault();e.resetTimeout();jQuery(e.id+" .carousel-nav").each(function(e){s(this)})}function s(t){jQuery(t).addClass("active");window.setTimeout(function(){jQuery(t).removeClass("active")},e.speed)}var e=this;var t=0;var n;if(jQuery(this.id+" .carousel-nav").length!==0){jQuery(this.id+" .carousel-nav").removeClass("hidden");jQuery(this.id+" .carousel-nav.right").bind("click",function(t){if(!jQuery(this).hasClass("active")){i(t);e.next("next")}});jQuery(this.id+" .carousel-nav.left").bind("click",function(t){if(!jQuery(this).hasClass("active")){i(t);e.previous("previous")}})}for(var r in this.slides){n=jQuery(this.id+" .slide"+r).height();t=n>t?n:t}jQuery(this.id+" .slide-content").each(function(){jQuery(this).css({height:t})});this.resetTimeout()};
(function(e){e(window).load(function(){var t=true;e("#search-dropdown").parent().bind("click",function(n){n.preventDefault();if(t){e("#nav-search input").css({width:"0px",display:"block"}).animate({width:"180px"},300).select();t=false}else{e("#nav-search input").css({width:"180px"}).animate({width:"0px"},300,function(){e(this).css({display:"none"})});t=true}})})})(jQuery);
(function(e){e(window).load(function(){header_slider=new Slider("#header_slider");header_slider.animation(function(t,n,r){e(this.id+" .slide-content."+this.slides[t]).addClass("hidden").hide();e(this.id+" .background."+this.slides[t]).animate({opacity:"0"},this.speed,function(){e(this).addClass("hidden")});e(this.id+" .foreground."+this.slides[t]).removeClass("active");e(this.id+" .slide-content."+this.slides[n]).css({opacity:"0",left:"-10px"}).animate({opacity:"1",left:"0px"},this.speed).removeClass("hidden").show();e(this.id+" .background."+this.slides[n]).css({opacity:"0"}).removeClass("hidden").animate({opacity:"1"},this.speed);e(this.id+" .foreground."+this.slides[n]).addClass("active")});header_slider.setInt(6e3);header_slider.start();content_slider=new Slider("#content_slider");content_slider.change=function(e,t,n){if(typeof n==="undefined"){n="next"}if(typeof e!=="undefined"&&typeof t!=="undefined"){if(e===t)return;this.last=e;this.current=t;n=t>e?"next":"previous"}else{e=this.last;t=this.current}this.animate(e,t,n);jQuery(this.id+" .slider-bubble:nth-child("+(e+1)+")").removeClass("selected");jQuery(this.id+" .slider-bubble:nth-child("+(t+1)+")").addClass("selected");jQuery(".slider-tabs li:nth-child("+(e+1)+")").removeClass("selected");jQuery(".slider-tabs li:nth-child("+(t+1)+")").addClass("selected")};content_slider.start();e(".slider-tabs li").bind("click",function(t){var n=e(this).attr("class").split(/\s/);var r=n[0];var i=r.substring(3,r.length)-1;if(n.indexOf("selected")<0){content_slider.change(content_slider.current,i)}})})})(jQuery);
