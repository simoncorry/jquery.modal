<!DOCTYPE html>
<!--[if lt IE 7]><html lang="en" class="ie6 ie" xmlns="http://www.w3.org/1999/xhtml"><![endif]-->
<!--[if IE 7]>   <html lang="en" class="ie7 ie" xmlns="http://www.w3.org/1999/xhtml"><![endif]-->
<!--[if IE 8]>   <html lang="en" class="ie8 ie" xmlns="http://www.w3.org/1999/xhtml"><![endif]-->
<!--[if IE 9]>   <html lang="en" class="ie9 ie" xmlns="http://www.w3.org/1999/xhtml"><![endif]-->
<!--[if LT IE 9]>
    <script src="//ajax.googleapis.com/ajax/libs/chrome-frame/1.0.3/CFInstall.min.js"></script>
    <script>window.attachEvent('onload',function(){CFInstall.check({mode:'overlay'})})</script>
<![endif]-->
<html lang="en">
    <!--
    
    =====================
    .....................
    ... .................
    .. + ................
    ... ...... ..........
    ......... ^ .........
    .......... ..........
    ......... ^ .........          
    ........ ^^^ ........
    ....... ^^^^^ .......
    ...... ^^^^^^^ ......
    ..... ^^^^^^^^^ .....     
    =====================
    WITH  <3  SIMON CORRY
    =====================
    
    http://simoncorry.com
              
    -->
    <head>
        <title>Moomba Modal | jQuery Plugin</title>
        <meta charset="utf-8" />
        <meta name="robots" content="all">
        <meta name="description" content="Moomba Modal is an animated modal box."/>
        <meta name="keywords" content="moomba modal, jquery modal, jquery plugin, javascript modal, css modal, css3 modal, html5 modal, content modal, modal page, moomba plugins, simon corry"/>
                
        <!-- /// VIEWPORT /// -->
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"> 
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black">
        
        <!-- /// ICONS /// -->
        <link rel="icon" type="image/x-icon" href="assets/images/lib/icons/favicon.ico" />
        <link rel="shortcut icon" type="image/x-icon" href="assets/images/lib/icons/favicon.ico" />
        <link rel="apple-touch-icon-precomposed" href="assets/images/lib/icons/lib/icons/apple-touch-icon-precomposed.png">
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href="assets/images/lib/icons/apple-touch-icon-72x72-precomposed.png">
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="assets/images/lib/icons/apple-touch-icon-114x114-precomposed.png">
        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="assets/images/lib/icons/apple-touch-icon-144x144-precomposed.png">
        
        <!-- /// EXAMPLE PAGE STYLES /// -->
        <style type="text/css">
            html,
            body {
                background:rgb(246,246,246); /* Recommended default */
                margin:0;
                width:100%;
                height:100%;
            }
            .example {
                position:absolute;
                left:50%;
                top:50%;
                background:rgb(225,225,225); 
                background-size:cover !important; 
                width:100px;
                height:50px;
                margin:-25px 0 0 -50px;
                border-radius:3px;
                cursor:pointer;
                font-family:Helvetica, Arial, sans-serif;
                font-size:14px;
                line-height:50px;
                text-align:center; 
            }
        </style>    
        
        <!-- /// MOOMBA MODAL /// -->
        <link type="text/css" rel="stylesheet" href="assets/css/lib/jquery.modal-1.0.css" />
        <script type="text/javascript" src="assets/js/lib/jquery-1.8.2.min.js"></script>
        <script type="text/javascript" src="assets/js/lib/jquery.modal-1.0.js"></script>                     
        <script>
          $(function() {
            $('#your_modal').moombaModal({
              modal_color   : 'rgb(246,246,246)', /* Outer shell color  - CSS color value */
              header_color  : 'rgb(252,252,252)', /* Inner header color - CSS color value */
              modal_width   : '480px',            /* Outer shell width  - CSS unit value  */
              border_radius : '3px',              /* Rounded corners    - CSS unit value  */
              mobile_resize : 'yes',              /* Resizes modal when browser window is < (modal_width + 40px) - yes/no */
            });
          }); 
        </script>
    </head>
    <body>
        
        <!-- /// MODAL BG/NAME /// -->
        <div class="modal_bg" id="your_modal"></div>
        
        <!-- /// EXAMPLE MODAL /// -->
        <div class="modal" id="example_modal">
            <div class="modal_header">
                <h3>Header Title Here</h3>
                <button class="modal_hide"></button>
            </div>
        </div>
        
        <!-- /// EXAMPLE BUTTON /// -->
        <div class="modal_show example" data-modal="example_modal">Show Modal</div>
        
    </body>
</html>