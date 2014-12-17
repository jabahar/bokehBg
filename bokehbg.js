;(function($)
{
	var canvas = document.createElement('canvas');	

	$.fn.bokehBg=function(options)
	{
		var opts = $.extend({}, $.fn.bokehBg.defaults, options),
			context = canvas.getContext('2d'),
			$this = $(this);

			canvas.width = parseInt($this.width());
			canvas.height = parseInt($this.height());
			var circles = (undefined === options.total_light_particles)?Math.round((canvas.width*canvas.height)/10000):options.total_light_particles;	

		
		context.fillStyle = opts.background_color;
		context.fillRect(0,0,canvas.width,canvas.height);

		if(opts.log_number_of_particles)
			console.log(circles);

		for(var i = 0; i < circles; i++){

		    context.beginPath();
		    var xCord = getRandomXCoordinate(),
		        yCord = getRandomYCoordinate(),
		        bubleRadius = getRandomBubleRadius(opts),
		        opacity = Math.random(),
		        fillColor = 'hsla(' + (Math.random() * 360) + ', 30%, 50%, '+Math.random()+')';
		    
		    //draw for color blur
		    context.arc(xCord, yCord, bubleRadius, 0, Math.PI * 2, true);		    
		    context.shadowBlur = 220; 
		    context.shadowColor = fillColor;		    
		    context.fillStyle = fillColor;
		    context.fill();
		    
		    //draw for the circle
		    context.arc(xCord, yCord, bubleRadius, 0, Math.PI * 2, true);		    
		    context.shadowBlur = 30; 
		    context.shadowColor = fillColor;		    
		    context.fillStyle = fillColor;
		    context.fill();		    
		    
		}

		$this.css('background-image','url('+canvas.toDataURL()+')');		
		
	}

	function getRandomBubleRadius(opts){ 

    	 return Math.floor(Math.random() * (opts.max_particle_radius - opts.min_particle_radius)) + opts.min_particle_radius;
            
	}

	function getRandomXCoordinate(){	    
	    
	    return Math.floor(Math.random() * (canvas.width - 0)) + 0;
	    
	}

	function getRandomYCoordinate(){

	    return Math.floor(Math.random() * (canvas.height - 0)) + 0;
	    
	}

	$.fn.bokehBg.defaults = {
		total_light_particles: 150,
		background_color:'#444',
		max_particle_radius:70,
		min_particle_radius:20,
		log_number_of_particles:false
	}
	
})(jQuery);