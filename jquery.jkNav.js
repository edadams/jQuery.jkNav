jQuery.jkNav=function(options) {
 if($.isPlainObject(options)) {
  if(!options['up']) {
   options.up=75;
  }
  if(!options['down']) {
   options.down=74;
  }
  if(!options['padding']) {
   options.padding=0;
  }
  if(!options['duration']) {
   options.duration=100;
  }
  if(!options['complete']) {
   options.complete=function(){return null;};
  }
  options.down=parseFloat(options.down);
  options.up=parseFloat(options.up);
  jQuery('body').data('jkNav', options);
 } else {
  jQuery('body').data('jkNav', {selector:options, down:74, up:75, padding:0, duration:100, complete:function(){return null;}});
 }
 /* options={
             selector: '#blogdesc, #blogtitle, .post.text',
       up: 75,
       down: 74,
       padding: 0,
      }
 */
 jQuery(document).keydown(function(e) {
  if(jQuery(document.activeElement).not('body').length==0 && jQuery('body').data('jkNavtf')==true) {
   jQuery('body').data('jkNavtf', true);
  } else if(jQuery(document.activeElement).not('body').length!=0 && jQuery('body').data('jkNavtf')==true){
   jQuery('body').data('jkNavtf', false);
   jQuery('body').data('jkNavre', "input");
  } else if(jQuery('body').data('jkNavtf')==false && jQuery(document.activeElement).not('body').length==0) {
   if(jQuery('body').data('jkNavre')=="input") {
    jQuery('body').data('jkNavtf', true);
  jQuery('body').data('jkNavre', "");
   }
  }
  if(jQuery('body').data('jkNavtf')==true) {
   if(e.which==jQuery('body').data('jkNav').up || e.which==jQuery('body').data('jkNav').down) {
    jQuery('body').data('inPort', {aLength:jQuery(jQuery('body').data('jkNav').selector).length});
    jQuery(jQuery('body').data('jkNav').selector).each(function(i) {
     if((jQuery(document).scrollTop()-Math.round(jQuery(this).offset().top))<(0-jQuery('body').data('jkNav').padding)) {
    jQuery('body').data('inPort', {exact:false, element:jQuery(this), index:i, aLength:jQuery('body').data('inPort').aLength});
    return false;
   } else if((jQuery(document).scrollTop()-Math.round(jQuery(this).offset().top))==(0-jQuery('body').data('jkNav').padding)) {
    jQuery('body').data('inPort', {exact:true, element:jQuery(this), index:i, aLength:jQuery('body').data('inPort').aLength});
    return false;
   }
    });
    switch(e.which) {
     case jQuery('body').data('jkNav').up:
    if(jQuery('body').data('inPort').index!=0) {
     jQuery('body').data('jkNavtf', false);
     jQuery('body, html').animate({scrollTop:(Math.round(jQuery(jQuery('body').data('jkNav').selector).eq(jQuery('body').data('inPort').index-1).offset().top)-jQuery('body').data('jkNav').padding)}, {'duration': jQuery('body').data('jkNav').duration, 'easing':'swing', 'complete':function(){jQuery('body').data('jkNavtf', true); jQuery('body').data('jkNav').complete();}});
    }
   break;
   case jQuery('body').data('jkNav').down:
    if((jQuery('body').data('inPort').aLength-1)!=jQuery('body').data('inPort').index && jQuery('body').data('inPort').exact==true) {
     jQuery('body').data('jkNavtf', false);
     jQuery('body, html').animate({scrollTop:(Math.round(jQuery(jQuery('body').data('jkNav').selector).eq(jQuery('body').data('inPort').index+1).offset().top)-jQuery('body').data('jkNav').padding)}, {'duration': jQuery('body').data('jkNav').duration, 'easing':'swing', 'complete':function(){jQuery('body').data('jkNavtf', true); jQuery('body').data('jkNav').complete();}});
    } else if((jQuery('body').data('inPort').aLength-1)!=jQuery('body').data('inPort').index && jQuery('body').data('inPort').exact==false) {
     jQuery('body').data('jkNavtf', false);
     jQuery('body, html').animate({scrollTop:(Math.round(jQuery(jQuery('body').data('jkNav').selector).eq(jQuery('body').data('inPort').index).offset().top)-jQuery('body').data('jkNav').padding)}, {'duration':  jQuery('body').data('jkNav').duration, 'easing':'swing', 'complete':function(){jQuery('body').data('jkNavtf', true); jQuery('body').data('jkNav').complete();}});
    }
   break;
    }
   }
  }
 });
 jQuery('body').data('jkNavtf', true);
}