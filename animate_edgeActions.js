/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // sym.$("name") resolves an Edge Animate element name to a DOM
         // Making the background image to scale along the horizontal axis
         var sky = new Array();
         sky[0] = "blue_strip";
         
         //var randomNum = Math.floor(Math.random()*1);
         
         sym.$("sky").css({
         "background-image":"url('img/"+sky[0]+".png')",
         "background-repeat":"repeat-x"
         });
         
         sym.$("cities2").css({
         "background-image": "url('img/cities.png')",
         "background-repeat": "repeat-x"
         });
         
         // generating particles by calling the Symbols - star_shine_animation , star_particle
         for(var i=0; i<7; i++){
         sym.createChildSymbol("star_shine_animation","starfield");
         }
         
         for(var i=0; i<10; i++){
         sym.createChildSymbol("star_particle","starfield");
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // generating particles by calling the Symbols - star_shine_animation , star_particle
         for(var i=0; i<7; i++){
         sym.createChildSymbol("star_shine_animation","starfield");
         }
         
         for(var i=0; i<240; i++){
         sym.createChildSymbol("star_particle","starfield");
         }
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2315, function(sym, e) {
         // Lookup the Edge Animate Symbol Javascript Object from an element that is
         // an instance of a symbol. The symbol object can be used to invoke
         // symbol functions like play, stop etc.
         sym.getSymbol("logo").play("start");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2577, function(sym, e) {
         // Lookup the Edge Animate Symbol Javascript Object from an element that is
         // an instance of a symbol. The symbol object can be used to invoke
         // symbol functions like play, stop etc.
         sym.getSymbol("right_cloud2").play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2827, function(sym, e) {
         sym.getSymbol("middle_cloud2").play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2661, function(sym, e) {
         sym.getSymbol("left_cloud2").play();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'star_shine_animation'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         //1. randomizing the time to 5 secs
         var randomFrame = Math.floor(Math.random()*5000);
         
         //2. Now get the width of the container
         var maxWidth = $('#Stage').width();
         var randomX = Math.floor(Math.random()*maxWidth);
         var randomY = Math.floor(Math.random()*400);
         
         
         //1. play the random time frame to each instance.
         sym.play(randomFrame);
         //2. Getting the value of a symbol element
         // Get the jQuery handle for the element an Edge Animate Symbol Javascript Object.
         var symbolElement = sym.getSymbolElement();
         
         //2.
         $(symbolElement).css({'position':'absolute','top':randomY+'px','left':randomX+'px'});
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("star_shine_animation");
   //Edge symbol end:'star_shine_animation'

   //=========================================================
   
   //Edge symbol: 'star_particle'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         //1. randomizing the time to 5 secs
         var randomFrame = Math.floor(Math.random()*5000);
         
         //2. Now get the width of the container
         var maxWidth = $('#Stage').width();
         var randomX = Math.floor(Math.random()*maxWidth);
         var randomY = Math.floor(Math.random()*400);
         
         
         //1. play the random time frame to each instance.
         sym.play(randomFrame);
         //2. Getting the value of a symbol element
         // Get the jQuery handle for the element an Edge Animate Symbol Javascript Object.
         var symbolElement = sym.getSymbolElement();
         
         //2.
         $(symbolElement).css({'position':'absolute','top':randomY+'px','left':randomX+'px'});
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("star_particle");
   //Edge symbol end:'star_particle'

   //=========================================================
   
   //Edge symbol: 'starfield'
   (function(symbolName) {   
   
   })("starfield");
   //Edge symbol end:'starfield'

   //=========================================================
   
   //Edge symbol: 'birdfly_sym'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         //1. randomizing the time to 5 secs
         var randomFrame = Math.floor(Math.random()*9000);
         
         sym.play(randomFrame);

      });
      //Edge binding end

   })("birdfly_sym");
   //Edge symbol end:'birdfly_sym'

   //=========================================================
   
   //Edge symbol: 'birdsprite_sym'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 236, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("birdsprite_sym");
   //Edge symbol end:'birdsprite_sym'

   //=========================================================
   
   //Edge symbol: 'right_cloud'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.play("loop");

      });
      //Edge binding end

   })("right_cloud");
   //Edge symbol end:'right_cloud'

   //=========================================================
   
   //Edge symbol: 'middle_cloud'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         sym.play("loop");

      });
      //Edge binding end

   })("middle_cloud");
   //Edge symbol end:'middle_cloud'

   //=========================================================
   
   //Edge symbol: 'left_cloud'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         sym.play("loop");

      });
      //Edge binding end

   })("left_cloud");
   //Edge symbol end:'left_cloud'

   //=========================================================
   
   //Edge symbol: 'logo'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9941, function(sym, e) {
         sym.play("loop");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("logo");
   //Edge symbol end:'logo'

   //=========================================================
   
   //Edge symbol: 'Preloader'
   (function(symbolName) {   
   

   })("Preloader");
   //Edge symbol end:'Preloader'

   //=========================================================
   
   //Edge symbol: 'satellite_animation'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("satellite_animation");
   //Edge symbol end:'satellite_animation'

   //=========================================================
   
   //Edge symbol: 'satellite_anim'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 120000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("satellite_anim");
   //Edge symbol end:'satellite_anim'

   //=========================================================
   
   //Edge symbol: 'balloon_animation'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 60000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("balloon_animation");
   //Edge symbol end:'balloon_animation'

   //=========================================================
   
   //Edge symbol: 'balloon_swing'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.playReverse();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("balloon_swing");
   //Edge symbol end:'balloon_swing'

})(jQuery, AdobeEdge, "EDGE-3100054");