(function ( $ ) {
 
    $.fn.accordionMaker = function( options ) {
 
        var defaults = {

		"isDebug" : false,
		"cssDesignOverride" : false,
		"borderSize" : "1px",
		"borderRadius" : "5px",
		"borderColor" : "#000000",
		"bgColor" : "#ffffff",
		"borderStyle" : "#000000",
		"linkColor" : "#00ff00",
		"hoverBgColor" : "#ff00ff",
		"hoverLinkColor" : "#00ff00",
		"contentBorderSize" : "1px",
		"contentBorderStyle" : "1px",
		"contentBgColor" : "#ffffff",
		"contentTextColor" : "#000000",
		"contentLinkColor" : "#2222CF",
		"contentHoverLinkColor" : "#000000",
        "containerSize" : "100%"
		
        };

        var settings = $.extend({}, defaults, options);
		var i = 0;
		var prop = null;
        var pluginVersion = "0.1 Beta r1";
        var toString = function(){
    
        return "[Accordion Object " + pluginVersion + " ]";   
        
        };
 
        // Uh oh, something went wrong, so if we're in debug mode
		// so lets output to the console all the values and attributes of the accordion
        // object so we can see what is happening behind the scenes
        
		if(settings.isDebug){
		
        console.log("__START_STAT_DEBUG__");
		for(prop in settings){
			
			console.log("settings[" + prop + "] ==> " + settings[prop]);
            
		}
        console.log(toString());
        console.log("__END_STAT_DEBUG__");

		}
		
        $(this).css("width", settings.containerSize);
        
		$(".accordion-link").each(function(){
			
			var accObj = "accordion-elem-" + i;
			var accObjID = "#" + accObj;
			var elemNum = 0;
			
			$(this).attr("id", accObj);
			$(this).attr("accordion-data-ref", i); // assign each accordion content object a unique ID
		
			i++;

            // assign each anchor a click event
            // use jQuery's toggle the method
		
			$(accObjID).click(function(argv){
			
			elemNum = $(this).attr("accordion-data-ref");
            
			$("ul.accordion-object li div.accordion-item").eq(elemNum).slideToggle();
            
            if(settings.isDebug){
                
            console.log("CLICK EVENT: Object Clicked >> " + accObj);

            }

            // lets also prevent the default anchor tag action

			argv.preventDefault();
				
			});
			
		});
        
        // Apply options
		
		this.initialize = function(){
			
        // apply css to accordion labels boxes
            
        $(".accordion-anchor").css("border-width", settings.borderSize);
        $(".accordion-anchor").css("border-radius", settings.borderRadius);
        $(".accordion-anchor").css("border-color", settings.borderColor);
        $(".accordion-anchor").css("background-color", settings.bgColor);
        $(".accordion-anchor").css("border-style", settings.borderStyle);

        // apply css to accordion label boxes on hover action
        	
        $(".accordion-anchor").hover(
                                     
        function(){ // lets apply our css to our accordion label blocks
            
            $(this).css("background-color", settings.hoverBgColor);
            
            if(settings.isDebug){
                
                console.log(".accordion-anchor:hover ON color >> " + settings.hoverBgColor);
                
            }
            
        },

        function(){ // lets reset back to original settings
            
            $(this).css("background-color", settings.bgColor);
            
            if(settings.isDebug){
                
                console.log(".accordion-anchor:hover OFF color >> " + settings.bgColor);
                
            }
        });

        $(".accordion-link").hover(
        
        function(){ // apply css to anchor tag collection on hover
            
        $(this).css("color", settings.hoverLinkColor);

            if(settings.isDebug){
                
                console.log(".accordion-link:hover ON color >> " + settings.hoverLinkColor);
                
            }

        },
        
        function(){ // reset css to anchor tag collection not hovered
            
        $(this).css("color", settings.linkColor);
            
            if(settings.isDebug){
                
                console.log(".accordion-link:hover OFF color >> " + settings.linkColor);
                
            }

        }
                                   
        );
        
        // apply css to accordion content boxes
                
        $(".accordion-item").css("border-width", settings.contentBorderSize);
        $(".accordion-item").css("background-color", settings.contentBgColor);
        $(".accordion-item").css("color", settings.contentTextColor);
                
        // apply CSS to anchor tags
            
        $(".accordion-item a").css("color", settings.contentLinkColor);
                
        $(".accordion-item a").hover(
                                     
        function(){ // apply CSS to anchor tags when hovered over
            
            $(this).css("color", settings.contentHoverLinkColor);

            if(settings.isDebug){
                
                console.log(".accordion-item a:hover ON color >> " + settings.contentHoverLinkColor);
                
            }

        },
        
        function(){ // lets reset back to original color
            
            $(this).css("color", settings.contentLinkColor);
            
            if(settings.isDebug){
                
                console.log(".accordion-item a:hover OFF color >> " + settings.contentLinkColor);
                
            }

        });
        
        // let's get out of here
            
        return ;
            
		};
    
    // fire off initialize() when the plugin loads 
 
	return this.initialize();
 
    };
 
}( jQuery ));