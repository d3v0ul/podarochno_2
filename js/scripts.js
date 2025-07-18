$(document).ready(function() { 


//header scrolling
let scrollPos = 0
$(window).scroll(function(){    
  if ($(this).scrollTop()>50){  
    let st = $(this).scrollTop()  
    $("header").addClass("fixed")
    $("header").removeClass('light')
    if (st > scrollPos){
      $('header').removeClass('fixed_long')
      $('header').addClass('fixed')     
    } else {
      $('header').addClass('fixed_long')
      $('header').removeClass('fixed')     
    }
    scrollPos = st
  } else{
    $("header").removeClass("fixed")
    $('header').removeClass('fixed_long')
    $('header.cat_l').addClass('light')
    if($('.swiper-slide-active').hasClass('light')){
      $('header').addClass('light')
    } else{}
    
  }
});


//top info
$('.ti_close').click(function(){
  $('.top_info').slideUp()
})


//h_side_blocks
$('.burger, .hs_close').click(function(){
  $('.h_side_block').toggleClass('opened')
  $('.burger').toggleClass('opened')
  $('.h_side_block_2, .h_side_block_3, .q_popup').removeClass('opened')
  // $('body').toggleClass('no_scroll')
  $('.search_btn').removeClass('opened')
  $('.s_popup_wrap').slideUp()
  $('header').toggleClass('dark')
})
$('.hs_callback, .hs_back_2').click(function(e){
  $('.h_side_block_2').toggleClass('opened')
  e.preventDefault()
})
$('.h_city>span, .hs_back_3, .address_mobile').click(function(e){
  $('.h_side_block_3').toggleClass('opened')
  e.preventDefault()
  $('.address_mobile').hide()
})
$('.hcp_yes, .hcp_close').click(function(){
  $('.hc_popup').hide()
})
$('.hcp_no').click(function(){
  $('.hc_popup').hide()
  $('.h_side_block_3').toggleClass('opened')  
})

$('.city_list >li > a').click(function(e){
  $('.h_side_block_3').toggleClass('opened')
  $('.city_list >li > a').removeClass('current')
  $(this).addClass('current')
  let city = $(this).text()
  $('.h_city>span').text(city)
  e.preventDefault()
})

$('.h_menu_mob li.pop > a').click(function(e){
  $(this).siblings('ul').slideToggle()
  $(this).toggleClass('opened')
  e.preventDefault()
})



//search popup
$('.search_btn').click(function(){
  $('.s_popup_wrap').slideToggle()
  $('body').toggleClass('dark_w')
  $('.burger').removeClass('opened')
  $('.h_side_block, .h_side_block_2, .h_side_block_3, .filter_popup, .q_popup').removeClass('opened')
  $(this).toggleClass('opened')
  // $('body').toggleClass('no_scroll_desk')
})


//cart popup
$('.h_cart, .cp_close').click(function(e){
  $('.cart_popup').toggleClass('opened')
  $('header').toggleClass('dark')
  setTimeout(() => {
    $('.cp_content').show()
    $('.cp_content_2').removeClass('opened')    
    $('.cp_content_3').hide()
  }, 500);  
  e.preventDefault()
})

//cart empty
if ($('.cp_goods div').length === 0) {
  $('.cart_popup').addClass('empty')
}

//cart buy
$('.cp_buy').click(function(){
  $('.cp_content_2').addClass('opened')
  $('.cp_content').hide()
})

//login popup
$('.cp_login_btn').click(function(e){
  $('.cp_content_3').show()
  $('.cp_content_2').removeClass('opened')
  e.preventDefault()
})


//q_popup
$('.ask_q, .ask_q_2, .qp_close').click(function(){
  $('.q_popup').toggleClass('opened')
})


//card_item_del
$('.ci_del').click(function(e){
  $(this).parent('.card_item').hide()
  e.preventDefault()
})

//search all results
$('.ci_all').click(function(){
  // $('.sp_left .card_items').addClass('all')
  $('.sp_left .card_item:nth-child(n + 3)').slideDown(500)
  $(this).hide()
})


//show all items in cats
$('.ci_all').click(function(){
  // $(this).siblings('.card_items').addClass('show_all')
  $(this).siblings('.card_items').children('.card_item:nth-child(n + 8)').slideDown(500)
  $(this).hide()
})

$('.mci_all').click(function(){
  // $(this).siblings('.mc_items').addClass('show_all')
  $(this).siblings('.card_items').children('.card_item:nth-child(n + 8)').slideDown(500)
  $(this).hide()
})


//show all in blogs
$('.bi_show_all').click(function(){
  $('.blog_content').addClass('show_all')
  $(this).hide()
  setTimeout(() => {
    $('.bc_item').css({opacity: 1})
  }, 100);
})


//cookies block hide
$('.cb_btn').click(function(e){
  $('.cookies_block').slideUp()
  e.preventDefault()
})


//good delete
$('.g_del').click(function(){
  $(this).closest('.cp_good').hide()
})

//good counter
$('.counter_btn').click(function(){
  $(this).parent('.counter').toggleClass('opened')
})

//docs popups
$('.di_cat').click(function(){
  $(this).toggleClass('opened')
  $(this).siblings('.di_popup').slideToggle()
})


//faq
$('.fi_question').click(function(){
  $(this).toggleClass('opened')
  $(this).siblings('.fi_answer').slideToggle()
})


//filter popup
$(".fl_btn, .fp_close").click(function() {
  $(".filter_popup").toggleClass('opened')
});


//filter items popup
$(".fi_head").click(function() {
  $(this).siblings(".fi_popup").slideToggle()
  $(this).toggleClass('opened')
});


//courier_popup
$(".r7, .cour_p_close, .cf_btn, .bpsc_address_btn").click(function() {
  $(".courier_popup").toggleClass('opened')
});


//pickup_point_popup
$(".ppp_pop_open, .ppp_btn").click(function() {
  $(".pickup_point_popup").toggleClass('opened')
  // $('body').toggleClass('no_scroll')
});


//city_popup
$(".bpsc_city_btn, .adr_city, .city_p_close").click(function() {
  $(".city_popup").toggleClass('opened')
  // $('body').toggleClass('no_scroll')
});


//map_popup
$(".fl_map_btn, .r8, .mp_close, .bpsc_address_btn_2, .mp_back").click(function(e) {
  $(".map_popup").toggleClass('opened')
  // $('body').toggleClass('no_scroll')
  e.preventDefault()
});


//map_popup serach mobile
$(".mps_mob_btn").click(function() {
  $(this).toggleClass('hidden')
  $(".mp_search_block").slideToggle(200)
});


//delivery_type_popup
$(".gdi_delivery, .dtp_close").click(function() {
  $(".delivery_type_popup").toggleClass('opened')
});


//address_popup
$(".dtp_city, .gs_city, .adr_close").click(function() {
  $(".address_popup").toggleClass('opened')
});


//issuing services popup
$(".is_head").click(function() {
  $(".is_list").slideToggle(200)
  $(this).toggleClass('opened')
});

//pickup points extra
$(".ppi_more").click(function() {
  $('.ppi_extra').slideUp(200)
  $(this).parent('.ppi_main').siblings('.ppi_extra').slideDown(200)
  $('.ppi_more').show()
  $(this).hide()
});

//mobile map switch
$(".mpm_btn.map").click(function() {
  $(".mp_map").show()
  $(".mp_content").hide()
  $(".mpm_btn.list").removeClass('current')
  $(this).addClass('current')
});
$(".mpm_btn.list").click(function() {
  $(".mp_content").show()
  $(".mp_map").hide()
  $(".mpm_btn.map").removeClass('current')
  $(this).addClass('current')
});


//gs_info
$(".gsi_item").click(function() {  
  $(".gsi_item").toggleClass("visible");
  $(".gsi_item.visible").click(function() {
      $(".gsi_item").removeClass("first"); 
      $(this).addClass("first");
  });
});

//gs_info sigle item
$('.gs_info').each(function() {
  if ($(this).children('div').length === 1) {
    $(this).addClass('single');
  }
});


//gp_address sigle item
$('.gs_select').each(function() {
  if ($(this).find('option').length === 1) {
    $(this).addClass('single');
  }
});





//cart add
$(".gs_btn").click(function() {
  $(this).children('i').text('Товар в корзине')
  $('.gs_btns').addClass('added')
  $('.cart_add').addClass('visible')
  setTimeout(() => {
    $('.cart_add').removeClass('visible')
  }, 6000);
});

//fav add
$(".gs_like").click(function() {
  $('.fav_add').addClass('visible')
  setTimeout(() => {
    $('.fav_add').removeClass('visible')
  }, 6000);
});

//stars percent
/* $('.l1').css({'width' : $('.p1').text() + '%'})
$('.l2').css({'width' : $('.p2').text() + '%'})
$('.l3').css({'width' : $('.p3').text() + '%'})
$('.l4').css({'width' : $('.p4').text() + '%'})
$('.l5').css({'width' : $('.p5').text() + '%'})
$('.l11').css({'width' : $('.p11').text() + '%'})
$('.l22').css({'width' : $('.p22').text() + '%'})
$('.l33').css({'width' : $('.p33').text() + '%'})
$('.l44').css({'width' : $('.p44').text() + '%'})
$('.l55').css({'width' : $('.p55').text() + '%'}) */
for(let i = 1; i <= 5; i++) {
  $(`.l${i}`).css('width', $(`.p${i}`).text() + '%');
  $(`.l${i}${i}`).css('width', $(`.p${i}${i}`).text() + '%');
}


//stars choose
$('.rf_stars > div').addClass('gray')
$(".rf_stars > div").mouseenter(function() {
  $(this).removeClass('gray')
  $(this).prevAll('div').removeClass('gray')
  $(this).nextAll('div').addClass('gray')
});


//imp filter
$('.gi_item.add').click(function(e){
  $('.imp_filter').slideDown({
    complete: function() {
      $('body').addClass('no_scroll');
      //scroll filter to top
      $('.f_btn, .turbo2').on('click', function() {
        $('.imp_filter').animate({
          scrollTop: 0
        }, 500);
      });
    }
  });
  $('.if_left').removeClass('opened');
  e.preventDefault();
});
$('.impf_close').click(function(e){
  $('.imp_filter').slideUp()
  $('body').removeClass('no_scroll')
  $('.if_left').removeClass('opened')
  e.preventDefault()
})





//turbo
$('.turbo').click(function(){
    $('html, body').animate({scrollTop:0}, 'slow');
    return false;
});
$(window).scroll(function() {
  var top = $(document).scrollTop();
  if (top > 1600) $('.turbo').css({'display':'block'});	 
  else $('.turbo').css({'display':'none'});
});

 //imp_filter_turbo
 $('.imp_filter').on('scroll', function() {
    if ($(this).scrollTop() > 1400) {
        $('.turbo2').css({'display':'block'});
    } else {
        $('.turbo2').css({'display':'none'});
    }
});

//imp mob left filter
$('.impf_left_filter_btn, .f_close').click(function(){
  $('.if_left').toggleClass('opened')
})

//imp add
$('.ci_add').click(function(){
  $(this).siblings('.ci_terms').addClass('opened')
})
$('.cit_close').click(function(){
  $(this).parent('.ci_terms').removeClass('opened')
})
$('.cit_line').click(function(){
  $(this).parent('.cit_list').parent('.ci_terms').siblings('.ci_terms_added').addClass('opened')
})
$('.cit_close_2').click(function(){
  $(this).parent('.ci_terms_added').removeClass('opened')
})


//imp del
$('.gi_close').click(function(e){
  $(this).siblings('.del_popup').addClass('opened')
  e.preventDefault()
})
$('.dpb_no').click(function(e){
  $(this).parent('.dp_btns').parent('.del_popup').removeClass('opened')
  e.preventDefault()
})
$('.dpb_yes').click(function(e){
  $(this).parent('.dp_btns').parent('.del_popup').parent('.gi_item').hide()
  e.preventDefault()
})


//rev stars filter
$('.rsf_item').click(function(e){
  $('.rsf_item').removeClass('selected')
  $(this).addClass('selected')
})








//cert name add
$('.default .card_item .ci_top').click(function(){
  $('.card_item').removeClass('selected')
  $(this).parent('.card_item').addClass('selected')
  let cef_name = $(this).children('.ci_name').text()
  $('.cef_name').text(cef_name)
})

//group cert names add
$('.group .card_item .ci_top').click(function(){
  $('.group .card_item').removeClass('selected')
  $(this).parent('.card_item').addClass('selected')
  let cef_name_group = $(this).children('.ci_name').text()
  $('.cef_name_group').text(cef_name_group)
})
$('.part .card_item .ci_top').click(function(){
  $('.part .card_item').removeClass('selected')
  $(this).parent('.card_item').addClass('selected')
  let cef_name_item = $(this).children('.ci_name').text()
  $('.cef_name_item').text(cef_name_item)
})


//card items group
var groupToParts = {
  // тут можно назначать для групы g* несколько p* по соответствующим дата-атрибутам, указанным в html:
  'g1': ['p1', 'p2'],
  'g2': ['p4', 'p5', 'p3'],
  'g3': ['p7', 'p8'],
};
$('.card_items.group .card_item').on('click', function() {
  $('.card_items.group .card_item').removeClass('selected');
  $(this).addClass('selected');
  var group = $(this).data('imp');
  $('.card_items.part .card_item').removeClass('selected');
  if (groupToParts[group]) {
    groupToParts[group].forEach(function(part) {
      $('.card_items.part .card_item[data-imp="' + part + '"]').addClass('selected');
    });
  }
});
$('.card_items.group .card_item.selected').trigger('click');


//buy scripts

//fixed right part
let fr = window.matchMedia('all and (min-width: 768px)');
if (fr.matches) {
  $(window).scroll(function(){  
    if ($(this).scrollTop()>100)
    {    
      $(".bp_right").addClass("fixed");    
    }else{
      $(".bp_right").removeClass("fixed");  
    }
  });
} else {}


//buy stages
$('.bps1').addClass('opened')
$('.bps1').children('.bps_popup').slideDown()
$('.bps_head').click(function(){  
  $(this).parent('.bp_stage').toggleClass('opened')
  $(this).siblings('.bps_popup').slideToggle()
})

$('.r1').click(function(){
  $('.r2').removeClass('selected')
  $(this).addClass('selected')
  $('.rp_1').show()
  setTimeout(() => {
    $('.certs_slider').addClass('visible')
  }, 500);
  $('.rp_2').hide()
  $('.bps2, .bps3, .bps4, .bps5').removeClass('disabled')
  $('.bps2, .bps3, .bps4, .bps5').addClass('opened')
  $('.bps2, .bps3, .bps4, .bps5').children('.bps_popup').slideDown()
  // $('.bps4').hide()
  $('.bps_digital').show()
  $('.bps_box').hide()
})

$('.r2').click(function(){
  $('.r1').removeClass('selected')
  $(this).addClass('selected')
  $('.rp_2').show()
  $('.rp_1').hide()
  $('.bps2, .bps3').removeClass('disabled')
  $('.bps2, .bps3').addClass('opened')
  $('.bps2, .bps3').children('.bps_popup').slideDown()
  // $('.bps4').show()
  $('.bps_digital').hide()
  $('.bps_box').show()
})

$('.r3').click(function(){
  $('.r4').removeClass('selected')
  $(this).addClass('selected')
  $('.bps_email_block').hide()
})
$('.r4').click(function(){
  $('.r3').removeClass('selected')
  $(this).addClass('selected')
  $('.bps_email_block').show()
})

$('.r5').click(function(){
  $('.r6').removeClass('selected')
  $(this).addClass('selected')
  $('.bps_departure').removeClass('opened')
})
$('.r6').click(function(){
  $('.r5').removeClass('selected')
  $(this).addClass('selected')
  $('.bps_departure').addClass('opened')
})

$('.r7').click(function(){
  $('.r8').removeClass('selected')
  $(this).addClass('selected')
  $('.bps_courier_info').show()
  $('.bps_address_2_selected').hide()
  $('.bps4, .bps5').removeClass('disabled')
  $('.bps4, .bps5').addClass('opened')
  $('.bps4, .bps5').children('.bps_popup').slideDown()
})
$('.r8').click(function(){
  $('.r7').removeClass('selected')
  $(this).addClass('selected')
  $('.bps_courier_info').hide()
  $('.bps_address_selected').hide()
  $('.bps4, .bps5').removeClass('disabled')
  $('.bps4, .bps5').addClass('opened')
  $('.bps4, .bps5').children('.bps_popup').slideDown()
})

$('.bps_pay_line').click(function(){
  $('.bps_pay_line').children('.bps_radio').removeClass('selected')
  $(this).children('.bps_radio').addClass('selected')
})


//textarea counter
$('.bps_area').on("input", function() {
  const maxlength = $(this).attr("maxlength");
  const currentLength = $(this).val().length;  
  $('.chars_current').html(currentLength);
  $('.chars_total').html(maxlength);    
});


//certs selection
$('.csi_img').click(function(){
  $('.csi_img').removeClass('selected')
  $(this).addClass('selected')
})


//delivery days/time
$('.bps_day').click(function(){
  $('.bps_day').removeClass('selected')
  $(this).addClass('selected')
})
$('.bps_period').click(function(){
  $('.bps_period').removeClass('selected')
  $(this).addClass('selected')
})

//express switch
$('.bpse_switch').click(function(){
  $(this).toggleClass('on')
})

//i popup
let ip = window.matchMedia('all and (max-width: 1024px)');
if (ip.matches) {
  $('.i_i, .ip_close, .i_box').click(function(){
    $(this).siblings('.i_pop').toggleClass('opened')
    $(this).parents('.i_pop').toggleClass('opened')
    // $('body').toggleClass('no_scroll')
  })
} else {}

//bps_address_selected
$('.cf_btn').click(function(e){
  $('.bps_address_selected').show()
  $('.map_popup').removeClass('opened')
  // $('body').removeClass('no_scroll')
  e.preventDefault()
})

//bps_address_2_selected
$('.pe_btn').click(function(e){
  $('.bps_address_2_selected').show()
  $('.map_popup').removeClass('opened')
  // $('body').removeClass('no_scroll')
  e.preventDefault()
})


//bdt_del
$('.bdt_del').click(function(){
  $(this).parent('.bd_top').parent('.bd_item').hide()
})


//delivery date options
$('.bdti_1').click(function(){
  $(this).addClass('selected')
  $('.bdti_2').removeClass('selected')
  $('.bdt_single').fadeIn()
  $('.bdt_all').hide()
})
$('.bdti_2').click(function(){
  $(this).addClass('selected')
  $('.bdti_1').removeClass('selected')
  $('.bdt_single').hide()
  $('.bdt_all').fadeIn()
})


//custome file change filename
$('#file-upload').change(function() {
  if (this.files.length > 0) {
      $('#file-upload-text').text(this.files[0].name);
  } else {
      $('#file-upload-text').text('Прикрепить файл');
  }
});


//rev empty mob popup
$('.new_rev_btn_mob').click(function(){
  $('.rev_empty').slideDown()
  $(this).hide()
})


//revs popup
$('.gcl_show_all').click(function(e){
  $('.revs_popup').addClass('opened')
  e.preventDefault()
})
$('.rp_close').click(function(e){
  $('.revs_popup').removeClass('opened')
  e.preventDefault()
})


//map selecton
$('.boxes').each(function() {
  const $box = $(this)
  const $mapSelector = $box.find('.map_selector')
  const $msList = $mapSelector.find('.ms_list')
  const $msHead = $mapSelector.find('.ms_head')
  const $cMap = $box.find('.c_map')
  
  if ($msList.find('li').length === 1) {
    $msHead.addClass('single')
  }
  
  $msList.hide()
  $cMap.find('> div').hide()
  $cMap.find('> div:first').show()
  
  $msHead.click(function() {
    if (!$msHead.hasClass('single')) {
      $msList.fadeToggle()
    }
  })
  
  $msList.find('li').click(function() {
    const mapClass = $(this).data('map')
    
    $msHead.text($(this).text())
    $(this).addClass('selected').siblings().removeClass('selected')
    $msList.fadeOut()
    
    $cMap.find('> div').hide()
    $cMap.find('> .' + mapClass).show()
  })
})





//custom scrollbar
// $('.imp_filter').mCustomScrollbar({
//   mouseWheel:{
//       scrollAmount:'300%' /* <<< speed percent */
//   }
// });


//counter
$('.minus').click(function() {
  var $input = $(this).parent().find('input');
  var count = parseInt($input.val()) - 1;
  count = count < 1 ? 1 : count;
  $input.val(count);
  $input.change();
  return false;
});
$('.plus').click(function() {
  var $input = $(this).parent().find('input');
  $input.val(parseInt($input.val()) + 1);
  $input.change();
  return false;
});


//phone mask
$(function($){
  $(".phone").mask("+7 (999) 999-9999");
  // $(".time").mask("1234");
  $(".time").mask("99:99");
});


//tel auth
$('.get_auth').click(function(e){
  $('.cf_auth').show()
  $('.code_form, .cp_text').hide()
  $(this).hide()
  e.preventDefault()
  var $countdownSpan = $('.cfa_timeline span');
  var secondsLeft = 60;
  $countdownSpan.text(secondsLeft);
  var countdownTimer = setInterval(function() {
    secondsLeft--;
    $countdownSpan.text(secondsLeft);
    if (secondsLeft <= 0) {
      clearInterval(countdownTimer);
    }
  }, 1000);
})


//pincode
$('.get_pincode').click(function(e){
  $('.cf_pincode').show()
  $('.cf_loc').hide()
  $(this).hide()
  e.preventDefault()
})

$('input').keyup(function(e){
	var $wrap = $(this).closest('.pincode');
	var $inputs = $wrap.find('input[type="number"]');	
	var val = $(this).val();
	// Ввод только цифр
	if(val == val.replace(/[0-9]/, '')) {
		$(this).val('');
		return false;
	}
	// Передача фокуса следующему innput
	$inputs.eq($inputs.index(this) + 1).focus();
	// Заполнение input hidden
	var fullval = '';
	$inputs.each(function(){
		fullval = fullval + (parseInt($(this).val()) || '0');
	});
	$wrap.find('input[type="hidden"]').val(fullval);
});


//tabs
$(".tab_item").not(":first").hide();
$(".tabs_block .tab").click(function() {
    $(".tabs_block .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

$(".tab_item2").not(":first").hide();
$(".tabs_block .tab2").click(function() {
    $(".tabs_block .tab2").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab_item2").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");


//modal
$('[data-modal=modal]').click(function(e) {
  e.preventDefault();
  var id = $(this).attr('data-pop');
  var maskHeight = $(document).height();
  var maskWidth = $(window).width();
  $('.mask').css({'width':maskWidth,'height':maskHeight});
  $('.mask').fadeIn(0);
  var winH = $(window).height();
  var winW = $(window).width();
  $(id).css('top',  winH/2-$(id).height()/2);
  $(id).css('left', winW/2-$(id).width()/2);
  $(id).fadeIn(200);
  $('.w_slide_up').addClass('visible')
  // $("body").css({"overflow":"hidden"});
});
$('.window .close, .mask').click(function (e) {
  e.preventDefault();
  $('.mask, .window').hide();
  $('.w_slide_up').removeClass('visible')
  // $("body").css({"overflow":"auto"});
});
  

//datepicker
$('.datepicker').datepicker({
	dateFormat : "yy-mm-dd",
	minDate: new Date($('#hiddendelivdate').val()),
	monthNames : ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
	dayNamesMin : ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
});


//slider_2x_rollers
var inputs,
slider = $('.i2_slider').slider({
  range: true,
  min: 0,
  max: 420000,
  values: [0, 420000],
  slide: function(event, ui) {
    inputs.eq(ui.handleIndex).val(ui.value);
  }
});
inputs = $('.i2s_input').on('.i2s_input', function(){
  var values = inputs.map(function(i, el){
    var v = +$(el).val();
    return isNaN(v) ? 0 : v;
  }).get();
  slider.slider('values', values);
});


//slider_2x_rollers
var inputs,
slider = $('.i2_slider').slider({
  range: true,
  min: 0,
  max: 420000,
  values: [0, 420000],
  slide: function(event, ui) {
    inputs.eq(ui.handleIndex).val(ui.value);
  }
});
inputs = $('.i2s_input').on('.i2s_input', function(){
  var values = inputs.map(function(i, el){
    var v = +$(el).val();
    return isNaN(v) ? 0 : v;
  }).get();
  slider.slider('values', values);
});



//sliders
const swiperConfig = {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 4000,
    pauseOnMouseEnter: true,
  },
  speed: 400,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-20%", 0, -1],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
  on: {
    init: function() {
      const videos = this.el.querySelectorAll('video');
      videos.forEach(video => {
        video.muted = true;
        video.setAttribute('playsinline', '');
        video.setAttribute('webkit-playsinline', '');
      });
      this.slides[this.activeIndex].querySelector('video')?.play().catch(e => console.log('Autoplay blocked'));
      this.updateHeaderClasses();
    },
    slideChangeTransitionStart: function() {
      const currentVideo = this.slides[this.activeIndex].querySelector('video');
      if (currentVideo) {
        currentVideo.pause();
        currentVideo.currentTime = 0;
      }
    },
    slideChangeTransitionEnd: function() {
      const nextVideo = this.slides[this.activeIndex].querySelector('video');
      if (nextVideo) {
        nextVideo.play().catch(e => console.log('Autoplay blocked'));
      }
      this.updateHeaderClasses();
    }
  }
};

Swiper.prototype.updateHeaderClasses = function() {
  const $header = $('header');
  const $mainSlider = $('.main_slider');
  const isLight = $('.swiper-slide-active').hasClass('light');
  
  $mainSlider.toggleClass('light', isLight);
  if (!$header.hasClass('fixed')) {
    $header.toggleClass('light', isLight);
  }
};

const swiper = new Swiper('.main_slider', swiperConfig);

// Обход ограничения autoplay в Firefox
document.addEventListener('click', function initVideos() {
  document.querySelectorAll('.main_slider video').forEach(video => {
    video.play().catch(e => console.log('Video play error:', e));
  });
}, { once: true });


let gs2 = window.matchMedia('all and (max-width: 768px)');
if (gs2.matches) {
  const swiper2 = new Swiper('.g_swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },  
  });
}


//rev slider
const rev_slider = new Swiper('.rev_slider', {
  direction: 'horizontal',
  spaceBetween: 5,
  breakpoints: {
    320: {
      slidesPerView: 3,
    },
    400: {
      slidesPerView: 4,
    },
    500: {
      slidesPerView: 5,
    },
    700: {
      slidesPerView: 7,
    },
    800: {
      slidesPerView: 8,
    },
    1024: {
      slidesPerView: 5,
    },
    1150: {
      slidesPerView: 7,
    },
    1300: {
      slidesPerView: 8,
    },
  },
});


//fancybox back focus
/* $('.fancybox').fancybox({
  backFocus: false,
  hash: false,
}) */


//certs slider
// $('.certs_slider').addClass('owl-carousel');
// $('.certs_slider').owlCarousel({
//     center: false,
//     loop: false,
//     margin: 10,
//     autoWidth: false,
//     responsive: {
//         0: {
//             items: 2,
//         },
//         480: {
//             items: 3,
//         },
//         1000: {
//             items: 3,
//         },
//         1200: {
//             items: 3,
//         }
//     }
// });


//good slider (synced)
var sync1 = $("#sync1");
var sync2 = $("#sync2");
var gs = window.matchMedia('all and (max-width: 550px)');
if (gs.matches) {
    var slidesPerPage = 3;
} else {
    var slidesPerPage = 4;
}
var syncedSecondary = true;

sync1.owlCarousel({
    items: 1,
    slideSpeed: 2000,
    nav: false,
    autoplay: false,
    dots: true,
    loop: false,
    responsiveRefreshRate: 200,
    navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
}).on('changed.owl.carousel', syncPosition);

sync2
    .on('initialized.owl.carousel', function() {
        sync2.find(".owl-item").eq(0).addClass("current");
    })
    .owlCarousel({
        items: slidesPerPage,
        dots: false,
        nav: true,
        smartSpeed: 100,
        slideSpeed: 100,
        mouseDrag: false,
        touchDrag: false,
        margin: 5,
        slideBy: slidesPerPage,
        responsiveRefreshRate: 100
    }).on('changed.owl.carousel', syncPosition2);

function syncPosition(el) {
    var current = el.item.index;
    sync2
        .find(".owl-item")
        .removeClass("current")
        .eq(current)
        .addClass("current");
    var onscreen = sync2.find('.owl-item.active').length - 1;
    var start = sync2.find('.owl-item.active').first().index();
    var end = sync2.find('.owl-item.active').last().index();

    if (current > end) {
        sync2.data('owl.carousel').to(current, 100, true);
    }
    if (current < start) {
        sync2.data('owl.carousel').to(current - onscreen, 100, true);
    }
}

function syncPosition2(el) {
    if (syncedSecondary) {
        var number = el.item.index;
        sync1.data('owl.carousel').to(number, 100, true);
    }
}

sync2.on("click", ".owl-item", function(e) {
    e.preventDefault();
    var number = $(this).index();
    sync1.data('owl.carousel').to(number, 100, true);
});


//less than 5 elements in good_slider fix
$('#sync2').find('.owl-stage').children().length < 5 && $('#sync2').addClass('no_controls');

//less than 2 elements in #sync2 then hide it
if ($('#sync2 .item').length < 2) {
    $('#sync2, .owl-dots').hide();
}

//fancybox back focus
$('.fancybox').fancybox({
  backFocus: false,
  hash: false,
})

//Fancybox > Owl Carousel sync
$(document).on('afterShow.fb', function(e, instance) {
    var current = instance.current;
    if (current) {
        var index = current.index;
        var sync1 = $("#sync1").data('owl.carousel');
        var sync2 = $("#sync2").data('owl.carousel');        
        if (sync1) sync1.to(index, 0); 
        if (sync2) sync1.to(index, 0);
    }
});

$(document).on('click', '[data-fancybox-next], [data-fancybox-prev]', function() {
    var instance = $.fancybox.getInstance();
    if (instance) {
        var index = instance.current.index;
        var sync1 = $("#sync1").data('owl.carousel');
        var sync2 = $("#sync2").data('owl.carousel');
        if (sync1) sync1.to(index, 0);
        if (sync2) sync2.to(index, 0);
    }
});

$("#sync1").on('changed.owl.carousel', function(event) {
    var index = event.item.index;
    $("#sync2").data('owl.carousel').to(index, 0);
});



//co_rev_slider
$('.co_rev_slider').addClass('owl-carousel');
$('.co_rev_slider').owlCarousel({
    center: false,
    loop: false, 
    margin: 15,      
    autoWidth: false,
    responsive: {
        0: {
            items: 1,
        },
        390: {
            items: 2,
        },
        650: {
            items: 3,
        },
        1000: {
           items: 4,
           margin: 30,
        }
    }
});







});