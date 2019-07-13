export const Sherm = () => {
  // var shermField = require("./shermField");
  // const shorm = shermField.shermField();
  return /*html*/ `
    <!DOCTYPE html>
        <html>
        <head>
        <style>
          #overlay {
            position: sticky;
            font-size: 100px;
            color: red;
            top: 31rem;
            margin-left: 38rem;
            margin-bottom:10rem;
            width:100%;
            opacity:0;
            pointer-events:none;
            top:100px;
          }
          #coyote {
              position: absolute;
              top: 1661px;
              left: 5408px;
              width: 1000px;
          }
        </style>
        </head>
        <body>        
          <div id="overlay">YOU TRIPPIN DOG</div>
          <div id="coyote"></div>
          <div id="container">
          <canvas style="display:none;pointer-events:none;opacity:1.0;position:absolute;top:0px;left:0px;z-index:-3" id="c" width="8000" height="4000"> </canvas>
          </div>


<script id="vs" type="notjs">
    attribute vec4 position;

    void main() {
      gl_Position = position;
    }
</script>
<script id="fs" type="notjs">
            
    precision mediump float;

    uniform vec2 resolution;
    uniform float time;

    void main() {
      vec2 uv = gl_FragCoord.xy / resolution;
      float color = 0.0;
      // lifted from glslsandbox.com
      color += sin( uv.x * cos( time / 3.0 ) * 60.0 ) + cos( uv.y * cos( time / 2.80 ) * 10.0 );
      color += sin( uv.y * sin( time / 2.0 ) * 40.0 ) + cos( uv.x * sin( time / 1.70 ) * 40.0 );
      color += sin( uv.x * sin( time / 1.0 ) * 10.0 ) + sin( uv.y * sin( time / 3.50 ) * 80.0 );
      color *= sin( time / 10.0 ) * 0.5;

      gl_FragColor = vec4( vec3( color * 0.5, sin( color + time / 2.5 ) * 0.75, color ), 1.0 );
    }
</script>
<script id="shader-test" type="notjs">
</script>
<script src="./static/js/libs/twgl-full.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.5.5/lottie.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.5.5/lottie.js"></script>
<script>
    "use strict";
    const shaderTest = document.getElementById('shader-test')
    var width,height;
    window.onresize = window.onload = function() {
        document.body.offsetWidth = 1443
        document.body.offsetHeight = 4233
    }

    var animation = lottie.loadAnimation({
      container: document.getElementById('coyote'),
      path:"./static/coyote.json",
      renderer: 'svg',
      loop: true,
      autoplay:false,
      name:'beebe',
    })
    const canvas = document.querySelector('#c')

    var coyote;
    animation.addEventListener('DOMLoaded', () => {
        coyote = document.getElementById('coyote').getElementsByTagName('svg')[0]
        coyote.style.transform = 'scale(2)'
    })
     document.getElementById('coyote').addEventListener('click', () => {
     animation.play()
    })

    window.onload = () =>      console.log(document.getElementsByTagName('svg')[1])
        fetch('./static/imgs/ssss.svg').then(function(response) {
        return response.text();
      })
      .then(svg => {document.getElementById('container').insertAdjacentHTML("afterbegin", svg);main();});

    function main() {
        const overlay = document.querySelector('#overlay')
        const gl = document.querySelector("#c").getContext("webgl");
        const programInfo = twgl.createProgramInfo(gl, ["vs", "fs"]);

        const arrays = {
          position: [-1, -1, 0, 1, -1, 0, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0],
        };
        const bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays);

        function render(time) {
          twgl.resizeCanvasToDisplaySize(gl.canvas);
          gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

          const uniforms = {
          time: time * 0.001,
          resolution: [gl.canvas.width, gl.canvas.height],
        };

        gl.useProgram(programInfo.program);
        twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo);
        twgl.setUniforms(programInfo, uniforms);
        twgl.drawBufferInfo(gl, bufferInfo);

        requestAnimationFrame(render);
        }

      requestAnimationFrame(render);
      
      var shromz = document.getElementById('shromz').children
      var ghosts = document.getElementById('ghosts').children
      var amanita = document.getElementById('poison')
      amanita.style.transformOrigin="50% 50%"
      amanita.addEventListener('click', () => {
          let skew = 0;
          overlay.innerHTML = 'OH GOD YOU ARE FUCKED'
          overlay.style.color = 'red'
          overlay.style['margin-left'] = window.scrollX + 300 + 'px'
          overlay.style.opacity = 1
          function poisonLoop(){
               overlay.style.opacity = Math.sin(skew)
               document.body.style.background = 'black'

              const newSkew = 'skewX('+Math.sin(skew)/skew+'deg) skewY('+skew*Math.cos(skew)+'deg)'
              amanita.style.transform = newSkew
              console.log(newSkew)
              skew+=.1
              requestAnimationFrame(poisonLoop)
          }
          poisonLoop()
      })

      function pulse() {
          for (var i=0; i< ghosts.length; i++ ) {
              const currentI = i
              setTimeout(() => ghosts[currentI].style.display='block', 2000)
          }

          let counter = 0


          function animate() {                
              counter += 1        

              if (counter > 100 && counter < 200) overlay.style.opacity = Math.sin(counter)        
              if (counter === 101) {canvas.style.display='block';canvas.setAttribute('width', "8400px");canvas.setAttribute('height',"4400px")}
              const sinFunc =.7*  Math.sin(counter * Math.PI * 2 * .1) + 1
              const sinFunc2 = 15 * Math.sin(counter * 10000000)

              for (var i = 0; i < shromz.length; i++) {
                if (counter < 100) shromz[i].setAttribute('transform', 'translate('+sinFunc2+')')

                if (counter > 100) {
                  var p = shromz[i].getElementsByTagName('path')
                  for (var m = 0; m < p.length; m ++) {
                    p[m].style.strokeWidth = sinFunc
                    if (counter % 5) p[m].style.stroke = "#"+((1<<24)*Math.random()|0).toString(16)
                  }
                }
              }
              requestAnimationFrame(animate)
          }
          animate()
      } 

      for (var i = 0; i < shromz.length; i++) {
          shromz[i].addEventListener('click', () => pulse())
          shromz[i].style.cursor = 'pointer'
      }
      function ghostVanish(index) {
          let gRequest;
          overlay.innerHTML = 'IM A GHOST'
          overlay.style.color = 'lightblue'
          overlay.style['margin-left'] = window.scrollX + 300 + 'px'
          function animateGhost() {
              if (ghosts[index].style.opacity > 0){
                  gRequest = requestAnimationFrame(animateGhost)
              } else {
                  overlay.style.opacity = 0
                  cancelAnimationFrame(gRequest)
              }
                  const cO = ghosts[index].style.opacity
                  overlay.style.opacity = Math.sin(cO)
                  ghosts[index].style.opacity = cO - .1
              }
          animateGhost()
      }
      for (var i=0; i< ghosts.length; i++ ) {
          const currentValue = i
          ghosts[i].style.display='none'
          ghosts[i].addEventListener('click', () => ghostVanish(currentValue))
          ghosts[i].style.cursor = 'pointer'
          ghosts[i].style.opacity = 1
      }
    }
</script>
</body>
</html>
`;
};
