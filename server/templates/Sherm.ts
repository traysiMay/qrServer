export const Sherm = () => {
  var shermField = require("./shermField");
  const shorm = shermField.shermField();
  return /*html*/ `
    <DOCTYPE html>
        <html>
        <head>
        </head>
        <body>
        ${shorm}
        <script>
         var shrimp1 = document.getElementById('shimp1')
         shrimp1.addEventListener('click', pulse)
         shrimp1.children[0].setAttribute('stroke', 'red')         
         shrimp1.children[0].setAttribute('stroke-width', '.1px')

         function pulse() {
             function animate() {
                 var sw = parseFloat(shrimp1.children[0].getAttribute('stroke-width'))
                 //console.log(sw)
                 shrimp1.children[0].setAttribute('stroke-width', .1 + sw + 'px')
                requestAnimationFrame(animate)
             }
             animate()
         }
        </script>
        </body>
        </html>
  `;
};

// const shermField = () => `<svg version="1.2" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
// 	 x="0px" y="0px" viewBox="0 0 4000 2000" xml:space="preserve">
// <g id="shrimp5">
// 	<rect x="920.5" y="564.5" stroke="#FFFFFF" stroke-miterlimit="10" width="100" height="100"/>
// 	<rect x="832.5" y="464.5" stroke="#FFFFFF" stroke-miterlimit="10" width="284" height="96"/>
// </g>
// <g id="shrimp4">
// 	<rect x="2004.5" y="592.5" stroke="#FFFFFF" stroke-miterlimit="10" width="100" height="100"/>
// 	<rect x="1916.5" y="492.5" stroke="#FFFFFF" stroke-miterlimit="10" width="284" height="96"/>
// </g>
// <g id="shrimp3">
// 	<rect x="1380.5" y="1328.5" stroke="#FFFFFF" stroke-miterlimit="10" width="100" height="100"/>
// 	<rect x="1292.5" y="1228.5" stroke="#FFFFFF" stroke-miterlimit="10" width="284" height="96"/>
// </g>
// <g id="shrimp2">
// 	<rect x="2367.5" y="1320.5" stroke="#FFFFFF" stroke-miterlimit="10" width="100" height="100"/>
// 	<rect x="2279.5" y="1220.5" stroke="#FFFFFF" stroke-miterlimit="10" width="284" height="96"/>
// </g>
// <g id="shimp1">
// 	<rect x="536.5" y="1392.5" stroke="#FFFFFF" stroke-miterlimit="10" width="100" height="100"/>
// 	<rect x="448.5" y="1292.5" stroke="#FFFFFF" stroke-miterlimit="10" width="284" height="96"/>
// </g>
// </svg>`;
