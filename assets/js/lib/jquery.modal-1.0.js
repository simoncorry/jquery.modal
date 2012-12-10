/*
 *
 * NAME         : Moomba Modal
 * INSTRUCTIONS : http://labs.simoncorry.com/plugins/modal
 * GITHUB REPO  : https://github.com/simoncorry/jquery.modal
 * AUTHORED BY  : Simon Corry, http://simoncorry.com
 * VERSION      : 1.0
 * UPDATED      : December 10th, 2012
 *
 * Moomba Modal is an animated modal box. Please feel free to email
 * questions or use case examples to labs@simoncorry.com.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 * 
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
*/

(function($){

  // Plugin Methods
  var methods = {
    
    // Settings Method
    settings : function() {      
      var settings = {                 
        modal_color   : 'rgb(246,246,246)', /* Outer shell color  - CSS color value */
        header_color  : 'rgb(252,252,252)', /* Inner header color - CSS color value */
        modal_width   : '480px',            /* Outer shell width  - CSS unit value  */
        border_radius : '3px',              /* Rounded corners    - CSS unit value  */
        mobile_resize : 'yes',              /* Resize modal to 300px on mobile devices - yes/no */
      };
    },
  
    // Initialise Method
    init : function(options) {  
      var o            = options;
      var head         = $('head');
      var body         = $('body');
      var mobile_width = parseInt(o.modal_width);
      var mobile       = parseInt(o.modal_width) + 40 + 'px';
      
      // Plugin
      return this.each(function() {
        
        // Media Query on/off
        if (o.mobile_resize == 'yes') {
          if (mobile_width > 639) {
            head.append('<style type="text/css"> \ @media only screen \ and (max-width : ' + mobile + ') { \ .modal { \ width:560px !important; \ margin-left:-280px !important; \ } \ } \ @media only screen \ and (max-width : 639px) { \ .modal { \ width:300px !important; \ margin-left:-150px !important; \ } .modal_header h3 { \ font-size:20px; \ text-align:left; \ width:200px; \ margin:0 0 0 20px; \ } \ } \</style>');
          };
          if (mobile_width < 639) {
            head.append('<style type="text/css"> \ @media only screen \ and (max-width : ' + mobile + ') { \ .modal { \ width:300px !important; \ margin-left:-150px !important; \ } .modal_header h3 { \ /* font-size:20px; */ \ text-align:left; \ width:200px; \ margin:0 0 0 20px; \ } \ } \</style>');
          };
        };
        
        // Modal
        $('.modal_show').click(function() {
          
          // Modal Vars
          var modal = 
            $('.modal')
              .css('background-color', o.modal_color)
              .css('width', o.modal_width)
              .css('border-radius', o.border_radius);
              
          var modal_header = 
            $('.modal_header')
              .css('background-color', o.header_color)
              .css('border-top-left-radius', o.border_radius)
              .css('border-top-right-radius', o.border_radius);
              
          var modal_name    = $(this).data('modal');
          var modal_id      = $('#'+modal_name);
          var modal_bg	    = $('.modal_bg');
          var modal_bg_hide	= $('.modal_hide, .modal_bg, .modal_extra_hide');
          
          // Adjust Centering
          var modal_width  = modal_id.outerWidth() / 2;
          var modal_height = modal_id.outerHeight();
          var modal_margin = modal_id.css('margin-left','-' + modal_width + 'px');
          
          // Adjust Offset
          var window_height  = $(window).height();
          var offset_percent = 0.2;
          var height_percent = window_height * offset_percent;          
          
          // Adjust body height
          body.css('height', (modal_height + window_height) + 'px');
          
          // Add Active Class
          $(this).addClass('modal_active');
          
          // Show Modal
          modal_bg.addClass('visible'),
          modal_id.addClass('visible')
            .css('top', $(window).scrollTop() + height_percent);

          // Hide Modal
          modal_bg_hide.bind('click',function() {
            modal_bg_hide.unbind('click'),            
            modal.removeClass('visible'),
            setTimeout(function() {
              modal_bg.removeClass('visible'),
              body.css('height','auto'),
              $('.modal_show').removeClass('modal_active');  	
            }, 700);			
          });
        });   
    
      });  
    }
  }; 
  
  // Call Plugin Methods 
  $.fn.moombaModal = function(method) {       
    if (methods[method]) {
      return methods[method].apply(this,Array.prototype.slice.call(arguments,1));        
    } else if (typeof method === 'object' || ! method) {
      return methods.init.apply(this,arguments);
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.Modal');
    } 
  }
  
})(jQuery);