// Dynamic loading configuration
Modernizr.load([
    {
        load: 'http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js',
        complete: function () {
            if (!window.jQuery) {
                Modernizr.load('sites/all/themes/gsma-nc/js/jquery-1.7.1.min.js');
            }
            
            Modernizr.load([
            	//'sites/all/themes/gsma-nc/js/webfontloader.js',
            	'http://cactus.agence-interactive.nc/www.gsma-nc.com/site/sites/all/themes/gsma-nc/js/jquery.orbit-1.2.3.min.js',
            	'http://cactus.agence-interactive.nc/www.gsma-nc.com/site/sites/all/themes/gsma-nc/js/jquery.validate.min.js',
            	'http://cactus.agence-interactive.nc/www.gsma-nc.com/site/sites/all/themes/gsma-nc/js/jquery.reveal.js',
            	'http://cactus.agence-interactive.nc/www.gsma-nc.com/site/sites/all/themes/gsma-nc/js/custom.js'
            ]);
            
        }
    }/*,{
        load : 'ielt7!/js/DD_belatedPNG_0.0.8a-min.js',
        callback: function() {
            $(function() {
                DD_belatedPNG.fix('img, .png_bg');
            }); 
        }
    }*/
]);