var miniTimer = 600;
var largeTimer = 400;
var leftNavOffset = 50;
var topNavOffset = 300;
janetFade = "slow";
var shadowOP = 0.15;
shadeoff=false;
    var transitionEnd = "webkitTransitionEnd mozTransitionEnd oTransitionEnd transitionend";

    function enterpriseLoop(num, type){
        if (num < 3) {
            $('.conn').width(0).height(0);
                var padding = $('.conn-1').css('padding');
                var line_anim = 700;
                $(type +' .conn-1').delay(2000).width('100%').animate({'height':'100%'},line_anim,
                    function () {
                        $(type +' .conn-2').height('100%').animate({'width':'100%'}, line_anim,
                            function () {
                                $(type +' .conn-3').css({width:'100%'}).animate({'height':'100%'}, line_anim,
                                    function(){
                                    if(num < 3){enterpriseLoop(++num, type);}
                                    else{ replay();}
                                    })
                            }
                        );
                    }
                );
        }else{
            replay();
            return;
        }
    }
    
function getSize() {
    return $(window).width() >= 1080 ? '.desktop ' : '.tablet-mobile ';
}
$(document).ready(function(){
$('.replay').hide();
    var canvas = $("#solutions-canvas");
    $('body').on('mouseenter','.hexagon-trig',function(){
        var id = $(this).hasClass('.hexagon') ? $(this) : $('#main-'+$(this).attr('id').split('-')[1]);
        id.siblings('.hexagon').each(function(){
            $(this).stop().animate({'opacity':0},500);
            if (!shadeoff) {
                hexagon_collection['shadow-'+$(this).attr('id').split("-")[1]].animate({opacity:0}, 500);
            }
        });
        hexagon_collection["main-"+$(this).attr('id').split("-")[1]].animate({transform: "s"+pulse_scale}, pulsetime);
    });
    $('body').on('mouseout','.hexagon-trig',function(){
        $(this).siblings('.hexagon').each(function(){
            if (!shadeoff) {
                hexagon_collection['shadow-'+$(this).attr('id').split("-")[1]].animate({opacity:shadowOP},500);
            }
            $(this).stop().animate({'opacity':1},500);
            });
         hexagon_collection["main-"+$(this).attr('id').split("-")[1]].animate({transform: "s100"}, pulsetime);
    });
    
    $('body').on('click','.hexagon-trig',function(){
        $('.blending-hex')/*.css('opacity',0)*/.hide();
        $('.solution-copy').fadeOut('slow');
        for (var q = 0; q<6;q++) {
             hexagon_collection['shadow-'+q].attr({opacity:0})/*animate({opacity:0},10)*/;
        }
        shadeoff = true;
        var dataTrack = $(this).hasClass('hexagon') ? $(this).data('track') : $('#main-'+$(this).attr('id').split('-')[1]).data('track');
        var dataTrackInfo = $(this).hasClass('hexagon') ? $(this).data('id') : $('#main-'+$(this).attr('id').split('-')[1]).data('id');
        $('#solution-pop-text').html($('#solution-'+(dataTrackInfo) +' .solution-pad').html());
        $('.popped').show().animate({'opacity':1},janetFade);
       aClone = hexagon_collection["blend-"+dataTrack].clone();
       aClone.attr('fill',hexagon_collection["main-"+dataTrack].attr('fill'));
       bb = aClone.getBBox();
       miniSet = paper.set();
       var grow_scale = 0.15;
       for(var it = 0; it < $('.blending-hex').length; it++){
            var miniClone = hexagon_collection["blend-"+it].clone().toBack();
            if (it == dataTrack) {
                miniClone.attr({'fill':hexagon_collection["main-"+it].attr('fill')});
            }
            miniSet.push(miniClone);
       }
       var grow_string = "S"+grow_scale+","+grow_scale+","+(bb.x2+(h.cx-bb.x2)-Math.floor((background_hex.getBBox().cx+border_offset/2-bb.x2)/(100*grow_scale-1)))+","+
                      (bb.cy+(h.cy-bb.cy)-Math.floor((background_hex.getBBox().cy)-bb.cy)/(100*grow_scale-1));
       growSet= miniSet.clone();
       $('.hexagon,.hex-text').hide();
        var trans_string = "t-"+hexagon_collection["blend-4"].getBBox().x+",0";
       growSet.animate({transform:grow_string},largeTimer);
       miniSet.transform(grow_string);
       minibb2 = miniSet.getBBox();
       miniSet.transform(grow_string +"t"+
            (canvas.width()-leftNavOffset-minibb2.x2)/grow_scale+","+ (topNavOffset-minibb2.y/grow_scale));
        newSet = paper.set();
       for(var ni = 0; ni < miniSet.length; ni++){
        var newBB = miniSet[ni].getBBox();
        var color = ni == dataTrack ?
        hexagon_collection["main-"+dataTrack].attr('fill') :
        default_hex;
       
        newSet.push(
            hexagon(newBB.x,newBB.y,newBB.width-default_hex_angle*grow_scale*2,newBB.height,default_hex_angle*grow_scale)
            .attr({'fill':color,'stroke':'white',
                  "transform": trans_string})
        );
        newSet[ni].data("trans",trans_string);
        newSet[ni].node.setAttribute("class","pointer");
       }
       newSet.toBack();
       miniSet.remove();
       newSet.animate({transform:""},miniTimer);
       newSet.click(function(){closeHexagon()});
       grow_scale = 7;
       aClone.toFront();
       aClone.animate({transform:"s"+grow_scale+","+grow_scale+","+(bb.x2-Math.floor(($('#solutions-canvas').width()+border_offset/2-bb.x2)/(grow_scale-1)))+","+
                      (bb.cy-Math.floor((background_hex.getBBox().cy)-bb.cy)/(grow_scale-1))},largeTimer,
                      function () {
                        $('.solution-pop').show().animate({"opacity":1},largeTimer);
                        animx(dataTrackInfo)
                      }
                      );
    });
});
$('body').on('click','.close-arrow', function(){
    closeHexagon();
});
function closeHexagon() {
    //$('.blending-hex').show();
    $('#solution-pop-text').html('');
    $('.popped').hide().animate({'opacity':0},janetFade);
    $('.solution-copy').fadeIn(janetFade);//animate({'opacity':1},janetFade);
    $('.solution-pop').animate({"opacity":0},miniTimer,function(){$(this).hide()});
    $('#solution-pop-animation').animate({"opacity":0},miniTimer,function(){
        $(this).css('z-index','');
        $('.animation-box').html('');
    });
    growSet.animate({transform:""},largeTimer,function(){
        this.remove();
        $('.hexagon,.blending-hex,.hex-text').show();
            shadeoff = false;
       for(var it = 0; it < $('.blending-hex').length; it++){
        hexagon_collection['shadow-'+it].animate({opacity:shadowOP}, 500);
       }
    });
    newSet.animate({transform:"t-300,0"},200,function(){this.remove()});
    
    setTimeout(function(){aClone.animate({transform:""},largeTimer,function(){this.remove()});},0);
}
$('.close-hexagon').on('click',function(){
    closeHexagon();
});
function replay() {
    $('.replay').fadeIn(2000);
}

$('body').on('click','.replay',function(){
    animx($(this).data('replay'));
});
function animx(data) {
    z=1;
    $('.animation-box').html(''); 
    $('.replay').hide();
    var url_x = link+'animations/request';
       $.ajax({
            url:url_x,
            //dataType:"json",
            data: {anim: data},
            method:'post',
            success: function(response){
               $('#solution-'+data+' .solution-animation').html(response);
                var type = getSize();

               if ($(window).width() >= 1080) {
                $('.animation-box').html(response);
                $('#solution-pop-animation').css('z-index',1).animate({opacity:1},'slow',function(){
                    $(type+'.animation-box .tesxt').append('<section class="replay autoMargin pointer" data-replay="'+data+'"></section><!--replay-->');
                        setTimeout(function(){animationKey(parseInt(data))},500);
                    });
               }else{
                    $(type+' .tesxt').append('<section class="replay autoMargin pointer" data-replay="'+data+'"></section><!--replay-->');
                                       setTimeout(function(){animationKey(parseInt(data))},500);

               }
            }
        });
}
    $('.solutions-hold .title').on('click', function(){
        if ($(this).siblings('.solution-content').height()) {
            $(this).removeClass('expanded');
            $(this).siblings('.solution-content').stop().animate({'height':0},animateSpeed,
                                                                 function(){
                                                                    $(this).children().children('.solution-content-hold')
                                                                    .css({'left':0}).children('.solution-animation').parent()
                                                                    .siblings('.left-arrow, .right-arrow').css({'opacity':'',color:''});
                                                                     $('.solution-animation').html('');
                                                    });
            return;
        } 
        $(this).parent().siblings().children('.expanded').siblings('.solution-content').height(0).children()
        .children('.solution-content-hold').css({'left':0}).children('.solution-animation').parent().siblings('.left-arrow, .right-arrow').css({'opacity':'',color:''});
        $(this).addClass('expanded').siblings('.solution-content').height('auto').parent().siblings().children('.solution-content').stop().siblings('.expand').removeClass('expanded');
        var height = $(this).siblings('.solution-content').height();
        $(window).scrollTop($(this).offset().top);
        $(this).siblings('.solution-content').height(0).stop().animate({'height':height},animateSpeed,function(){
            if ($(this).hasClass('consolidated') ) { $(this).height('auto'); }
        }); 
    });
    function animateSolution(dir) {
       dir.css('opacity', 0.5)
       .siblings('.arrow').css('opacity'
                               ,1).siblings('.solution-content-hold').animate({'left': dir.hasClass('right-arrow') ? '-100%' : 0 },
                   function(){
                    if (dir.hasClass('right-arrow')) {
                        setTimeout(function(){
                            animx(parseInt(dir.closest('.solutions-wrap').attr('id').split('-')[1]))
                        },10);
                    }else{
                        $('.tesxt').html('');
                    }
                                                                        });
       dir.parent().children('.arrow').css('color', dir.hasClass('right-arrow') ?
                                               dir.siblings().children('.solution-text').css('background-color') :
                                               '');
    }
    $('.arrow').on('click', function(){
        animateSolution($(this));
    });
    var animationEnd = "msAnimationEnd animationend webkitAnimationEnd onanimationend  ";
 
    $('body').on(transitionEnd, '.vna', function(){
       // $(this).removeClass('moves').addClass('completed');
        $('.vna-pic').hide();
        $('.fade-1').fadeOut();
        $('.bunched').css('opacity',1).addClass('final-move');
    });
    $('body').on(animationEnd, '.casc-3 .pic-count-10',function(){
        $('.vna-pic').hide();
                var fadeSpeed = 'slow';
        $(this).removeClass('moves').css('')
        $('.fade-1').fadeOut(fadeSpeed);
        $('.tesxt .server-box').fadeOut("slow");
        $('.gown').delay(700).fadeIn(500);
        $('.janet').delay(1000).fadeIn(500);
        $('.vna').addClass('moves');
        $('.init-anim').removeClass('moves init-state init-anim').addClass('bunched');
        //setTimeout(function(){$('.gown').fadeOut()},10000);
        //$('.replay').show();
    });
    $('body').on(animationEnd, '.scale-anim', function(){
        $(this).addClass('final-scale');
    });
    
    $('body').on(animationEnd, '.final-move', function(){
        $(this).removeClass('final-move').addClass('final');
    });
    $('body').on(animationEnd, '.r-foot', function(){
        replay()
    });
    function animationKey(key) {
        switch (key) {
            case 1:
                departmental();
                break;
            case 2:
                enterprise();
                break;
            case 3:
                universal_view();
                break;
            case 4:
                vna();
                break;
            case 5:
                exchange();
                break;
            case 6:
                regional();
                break;
        }
    } 
function vna() {
    $('.vna-pic').addClass('moves');
}// end VNA
    
    var icon_timer;
    var icon_num = 1;
    function caro_icon(args) {
        clearInterval(icon_timer);
        icon_num = 1;
        icon_timer = setInterval(function(){
            if (icon_num++ < 8) {
                $('.medical-center .icon-'+icon_num).addClass('caro-anim');
            }else{
                clearInterval(icon_timer);
                setTimeout(function(){
                    var scale_time =1000;
                    $('.medical-center').addClass('scale-anim').animate({margin: '-26% 0px -32%'}, scale_time,function(){$(this).hide().show()}).siblings('.ferris').delay(scale_time/2).animate({opacity:1},scale_time/2,function(){
                        $('.connect-lines').animate({opacity:1},scale_time/2);
                    });
                     
                },1000);
            }
        },1250);
    }
    function x(i, type){
        setTimeout(function(){
    $(type+'.medical-center .icon-'+(i)).css('opacity',1);
    }, (5000/8)*(8-i))
}
    function enterprise() {
        var type = getSize();
        
        for(var i =8; i > 0; i--){
            //$(type+'.medical-center .icon-'+(i+1)).css('opacity','0 !important');
            x(i, type);
        }
       //$(type+'.medical-center .icon-1').addClass('caro-anim');
       //caro_icon();
       $(type + '.conn').height(0).width(0);
        setTimeout(function(){
            medical_array.length = 0;
            uni_array.length = 0;
            children_array.length = 0;
                    var scale_time =2000; 
                    $('.replay').hide(); 
                    $(type +'.medical-text').addClass('scale-anim');
                    $(type+'.medical-center').addClass('scale-anim').animate({margin: '-18% 0px -34%'}, scale_time,
                            function(){
                                if (detectIE()) {
                                    $(this).removeClass('scale-anim').css({
                                        'transform':'scale(0.5)'
                                        }).children('.wheel').css({
                                        'background-image':'url('+link+'assets/images/medical_wheel.png)'
                                        }).siblings('.icon').remove();
                                }
                                
                            }).siblings('.ferris').delay(scale_time/2).animate({opacity:1},scale_time/2,
                                function (){
                                  if($(this).hasClass('university-hospital')){
                                    setTimeout(function(){
                                        pushArray(medical_array, '.medical-center');
                                        pushArray(uni_array,'.university-hospital');
                                        pushArray(children_array,'.childrens-hospital');
                                     }, scale_time);
                                    enterpriseLoop(0,type);
                                    }
                                 });
                           },5000); 
                       }

var caroIt = 0;
var medical_array = new Array();
var children_array = new Array();
var uni_array = new Array();
function pushArray(array, id) {
    id = getSize()+id;
    for(var i = 1; i <= $(id +' .icon').length; i++){
        array.push({
            left: ( $(id + ' .icon-'+i).offset().left - $(id + ' .icon-'+i).parent().offset().left )/$(id + ' .icon-'+i).parent().width()*100,
            top: ($(id + ' .icon-'+i).offset().top - $(id + ' .icon-'+i).parent().offset().top + $(id + ' .icon-'+i).innerHeight()/2)/$(id + ' .icon-'+i).parent().height()*100
        });
    }

    if (array == medical_array) {
        var sk  = 2.4;
        for(var i = 0; i < array.length; i++){
            $(id+' .icon-'+(i+1)).removeClass('caro-anim').css({
                'margin-left':array[i].left*sk +'%',
                'margin-top':(array[i].top*(sk-.0) -10)+'%',
                'opacity':1
                });
        }
    }else{
        var sk  = 1.1;
        for(var i = 0; i < array.length; i++){
            $(id+' .icon-'+(i+1)).removeClass('caro-anim').css({
                'margin-left':array[i].left*sk+'%',
                'margin-top':(array[i].top*(sk+.2)-4)+'%',
                'opacity':1
                });
        }
    }
}
//
var fade = 0;

    var z = 1;
    var depart_time = 1000;
    $('.shutter').removeClass('closed-shutter open-move opened-shutter close-move');
    
    function writeText(args) {

        var dates =["09/27/2014","12/19/2013","01/13/2015",""];
        var departments = ["Radiology","Ophthalmology","Neurology",""];
        var writespeed = 400;
        $('.department_name').html(departments[z-1]);
        $('.date_name').html(dates[z-1]);
        z++;
        
        $('.write-text').each(function(){
            $(this).width('auto');
            var w = $(this).width();
            $(this).width(0).animate({width:w+'px'}, writespeed, function(){
                if ($(this).hasClass('patient_name')) {
                    $(this).removeClass('write-text');
                } 
            });
        }); 
    }
    function changeDSlide(args) {
        var type = getSize();
        $(type+'.shutter').addClass('close-move');
        $(type +'.depart-'+(fade)).addClass('changedslide');
        $(type+'.depart-'+(fade+1)).fadeIn(depart_time);
    }
    
    function shutterworkIE() {
        var type = getSize();
        var shutter_time = 1700;
        var closed_size = '90%';
        var opened_size = '280%';
        var direc = parseFloat($(type+'.shutter').css('background-size')) < $(type+'.shutter').width() ? opened_size : closed_size;
        if (direc != opened_size) {
                $(type + '.shutter').animate({'background-size': direc}, shutter_time, function(){shutterworkIE();});
                $('.depart-'+(fade)).addClass('changedslide');
                $('.depart-'+(fade+1)).fadeIn(depart_time);
            
        }else{
            writeText();
            if (fade < 3) {
                fade++;
                $(type + '.shutter').animate({'background-size': direc}, shutter_time, function(){shutterworkIE();});

            }else{
                $(type+'.departmental_text,'+type+' .lens.shutter').fadeOut(depart_time);
                $(type+'.lens.rel').delay(250).fadeOut(depart_time,function(){
                    $(type+'.depart_tablet').fadeIn(depart_time,function(){
                        $(type+'.changedslide').addClass('mdown');
                        setTimeout(function(){
                            $(type+'.tablet-slide').animate({opacity:1},700,function(){
                                replay();
                            });    
                        },700);
                    });
                });
            }
        }
    }
    $('body').on(transitionEnd,'.shutter',function(){
        var type = getSize();
        var added = $(type+'.shutter').hasClass('open-move') ? 'opened-shutter' : 'closed-shutter';
        $(type + '.shutter').removeClass('closed-shutter open-move opened-shutter close-move').addClass(added);
        if (added == 'opened-shutter') {
        $(type + '.shutter').addClass('close-move');
                $('.depart-'+(fade)).addClass('changedslide');
                $('.depart-'+(fade+1)).fadeIn(depart_time);
        }else{
            writeText();
            if (fade < 3) {
                fade++;
                $(type + '.shutter').addClass('open-move');
            }else{
                $(type+'.departmental_text,'+type+' .lens.shutter').fadeOut(depart_time);
                $(type+'.lens.rel').delay(250).fadeOut(depart_time,function(){
                    $(type+'.depart_tablet').fadeIn(depart_time,function(){
                        $(type+'.changedslide').addClass('mdown');
                        setTimeout(function(){
                            $(type+'.tablet-slide').animate({opacity:1},700,function(){
                                replay();
                            });    
                        },700);
                    });
                });
            }
        }   
    });
function departmental() {
    fade = 1;
    writeText();
    $('.depart-1').fadeIn(depart_time);
    detectIE() ?
    $(getSize() + '.shutter').animate({'background-size': '280%'}, 2000, function(){shutterworkIE();})
    : $('.shutter').addClass('open-move'); 
}
function exchange() {
    var exchange_speed = 1500;
    var trans_speed = 500;
    var x; 
        $('body').on(transitionEnd, '.exchange-tablet', function(){
            // $('replay').hide();
            if ($(this).hasClass('complete') && $(this).hasClass('brain')) {
                 $('.exchange_text').css("color", "#000").html('Image Received!').fadeIn(); 
            }

            if (!$('.exchange-tablet').hasClass('complete')) {
                if (!$(this).hasClass('flyOff')) {
                 $('.exchange_text').css("color", "#000").html('Image Received!').fadeIn();
                    setTimeout(function(){
                        $('.exchange-tablet').removeClass('transTime')/*.hide()*/;
                        $('.exchange_text,.ny,.exchange-tablet').fadeOut();    
                        setTimeout(function(){
                            $('.exchange_text').css('color','#5e89bf').html('Sending Image');
                            $('.exchange_text,.ny,.exchange-tablet').fadeIn();
                            $('.exchange-tablet').addClass('brain').show();
                                setTimeout(function(){
                                    $('.exchange-tablet').addClass('transTime flyOff');
                                    $('.exchange_text').fadeOut();
                                }, 1000);
                                $('.ny').delay(1000).animate({'left':'100%'}, trans_speed, function(){
                            
                                    $('.san-fran').animate({'left':'0'}, trans_speed);
                                    setTimeout(function(){
                                        $('.exchange-tablet').removeClass('flyOff').addClass('flyOffr');
                                        
                                        $('.exchange-tablet').removeClass('flyOffr').addClass('transTime complete');
                                        //$('.exchange_text').css("color", "#000").html('Image Received!').fadeIn();
                                        
                                    },1000);
                                    
                                    
                                });
                        },1500); 
                    }, 1500);
                }else{
                    if (!$('.exchange-tablet').hasClass('positionLeft')) {
                        $(this).addClass('positionLeft');
                        if (!$(this).hasClass('brain')) {
                            $('.exchange_text').delay(500).fadeOut();
                            $('.san-fran').animate({'right':'-100%'}, trans_speed, function(){
                                $('.exchange-tablet').removeClass('flyOff positionLeft');
                                //$('.exchange-tablet').removeClass('flyOffr');
                                 $('.ny').animate({'left':0}, trans_speed,
                                    function(){ 
                                        // replay();
                                        $('.replay').hide();
                                        $('.replay').delay(8400).fadeIn();
                                    });
                            });                
                        }
                    }
                }
            }

        });
    setTimeout(function(){
        $('.exchange-tablet').addClass('flyOff');
        $('.replay').hide();
    }, trans_speed);
}
    function regional() {
        var type = getSize();
        $(type + '.regional-2').animate({'opacity':1},2000,function(){
            var region_t = 1000;
            $(type + '.region-lines-1').animate({height:'100%'}, region_t,function(){
                $(type + '.region-lines-2').animate({height:'100%'}, region_t,function(){
                    $(type + '.region-lines-3').animate({height:'100%'}, region_t,function(){
                        setTimeout(function(){
                            $(type + '.regional-2').animate({opacity: 0.5},700,function(){replay();});
                            $(type + '.region-lines').fadeOut('fast');
                            $(type + '.region .janet_full').addClass('final-move');
                        }, 3000);
                    });
                });
            });
            //$(this).siblings('.janet_full').addClass('final-move');
            //$('.regional').delay(500).animate({'opacity':0},1000);
        });
    }
    function universal_view() {
        $('.universal .tablet-hands').animate({opacity:1},500).addClass('final-move').siblings('.janet_full').addClass('final-move');
    }
 $('body').on(animationEnd, '.universal .janet_full', function(){
    var slideSpeed = 500;
        $(this).animate({left:'-100%'}, slideSpeed).siblings('.tablet-hands').animate({left:'-100%'}, slideSpeed,function(){
            $(this).siblings('.phone-hand').animate({left:'0%'}, slideSpeed).delay(slideSpeed*2).animate({left:'-100%'}, slideSpeed,
                function(){
                    $(this).siblings('.comp-hands').animate({left:'0%'}, slideSpeed).delay(slideSpeed*2).animate({left:'-100%'}, slideSpeed,function(){
                    $(this).siblings('.universal-group').animate({left:'0%'}, slideSpeed, function(){
                        replay();
                      });
                    });
                });
        });
    });