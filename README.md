bokehBg
=======

jQuery plugin to create and apply random bokeh backgrounds to webpage elements like `body`, `div`, etc.

To use it include the plugin and just add the following code:

  ```javascript
  $(document).ready(function(){
       $('#bgDiv').bokehBg(); 
       //bgDiv is the id of the element to which the bokeh background will be applied
  });
  ```
  
  ![bokeh example][bokehbg]
  
  [bokehbg]:http://hbmdev.net/uplds/bokehbg.png "Bokeh Background"
  
  *Note: The generated image is just a lookalike of a bokeh effect. It still needs improvemnts to emulate an exact bokeh effect*

###Options

| Option        | Description                                   |
| ------------- |-------------                                  | 
| total_light_particles | Total number of light particles       |
| background_color | Background color of the generated image    |
| max_particle_radius | Maximum radius of a light particle |
| min_particle_radius | Minimum radius of a light particle |
| log_number_of_particles | Logs number of particles in the console |
