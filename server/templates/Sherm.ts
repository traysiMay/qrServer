export const Sherm = () => {
  var shermField = require("./shermField");
  const shorm = shermField.shermField();
  return /*html*/ `
    <!DOCTYPE html>
        <html>
        <head>
        </head>
        <body>
        ${shorm}
        <script>
         var shromz = document.getElementById('shromz').children
         function clickJR(j) {
          console.log(j)
         }
         for (var i = 0; i < shromz.length; i++) {
           console.log(shromz[i])
       shromz[i].setAttribute('onclick', 'pulse()')
       shromz[i].style.cursor = 'pointer'
         }
         function pulse() {
           let counter = 0
             function animate() {   
               counter += 1                
               const sinFunc =.7*  Math.sin(counter * Math.PI * 2 * .1) + 1
                const sinFunc2 = 15 * Math.sin(counter * 10000000)
               
                //console.log(sinFunc2)
                for (var i = 0; i < shromz.length; i++) {
                 if (counter < 100) shromz[i].setAttribute('transform', 'translate('+sinFunc2+')')

                  if (counter > 100) {
                                      var p = shromz[i].getElementsByTagName('path')
                  for (var m = 0; m < p.length; m ++) {
                    p[m].style.strokeWidth = sinFunc
                   if (counter % 5) p[m].style.stroke = "#"+((1<<24)*Math.random()|0).toString(16)
                  
                  }
                  }

                 // shromz[i].setAttribute('stroke-width', sinFunc+'px')
                 }
                requestAnimationFrame(animate)
             }
             animate()
         }
        </script>
        </body>
        </html>
  `;
};
