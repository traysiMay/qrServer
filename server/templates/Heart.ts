let code = ''
export const Heart = (found:boolean, queryCode:string) => {
    let overlayCode = ''
    code = queryCode
    if (!found) {
        overlayCode = overlay()
    }
    return (/*html*/`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
      <script src="static/js/libs/three/three.js"></script>
      <script src="static/js/libs/vendor/jsartoolkit5/build/artoolkit.min.js"></script>
      <script src="static/js/libs/vendor/jsartoolkit5/js/artoolkit.api.js"></script>
      <script src="static/js/libs/src/threex/threex-artoolkitsource.js"></script>
      <script src="static/js/libs/src/threex/threex-artoolkitcontext.js"></script>
      <script src="static/js/libs/src/threex/threex-arbasecontrols.js"></script>
      <script src="static/js/libs/src/threex/threex-armarkercontrols.js"></script>
      <script>THREEx.ArToolkitContext.baseURL = ""</script>
      <style>
      @keyframes glowing {
        0% { fill: blue;stroke-width:15; }
        40% { fill: red;stroke-width:10; }
        60% { fill: blue;stroke-width:15; }
        100% { fill: red;stroke-width:10; }
      }
      @keyframes blinky {
          0% {fill: #0CEAFF}
          40% {fill:#66FF99}
          60% {fill: #0CEAFF}
          100% {fill:#66FF99}
      }
      @keyframes button-glow {
        0% { fill: blue;}
        40% { fill: red; }
        60% { fill: blue; }
        100% { fill: black; }
      }

      @keyframes fadeout {
          0% { opacity: 1; }
          100% { opacity: 0; }

      }
      .blinker * {
          animation: blinky 1000ms infinite;
      }
      .fade-out {
          animation: fadeout 5000ms;
      }
      .button-glow {
        animation: glowing 5000ms infinite;
      }
      .button-glow2 {
        animation: glowing 3000ms infinite;
      }
      .button-glow3 {
        animation: glowing 2000ms infinite;
      }
    
      .button-click {
          animation: button-glow 2000ms;
      }
    
      </style>
    </head>
    <body style="background:black;">
    <!--<div id="loading" style="position:absolute;left:20%;top:30%;font-size:50px;"> LOADING...</div>-->
      <div style="z-index:-5" id="ARContainer"></div>
      <div id="AEContainer"><svg viewBox="0 0 411 731">
      <g>
         <circle class="button-glow" id="ELLIP_1" fill="#64D7FF" cx="203" cy="323" r="115.5"/>
          <circle class="button-glow2"  id="ELLIP_2" fill="#71FFB3" cx="208" cy="328" r="115.5"/>
          <circle class="button-glow3" id="ELLIP_3" fill="#FF4A19" cx="208" cy="328" r="107.7"/>
          <g id="begin" class="blinker">
              <path class="blinker" fill="#8AFFCA" d="M172.3,323.3v16.4h-22.7v-27h19.4v10.6H172.3z M156.1,323.3h6.4V319h-6.4V323.3z M156.1,333.5h9.6v-4.6
                  h-9.6V333.5z"/>
              <path fill="#8AFFCA" d="M183.8,319v4H195v6.2h-11.1v4.2h12v6.2h-18.6v-27h18.6v6.2H183.8z"/>
              <path fill="#8AFFCA" d="M227.4,324.9c0.1,0.3,0.2,0.9,0.2,1.3c0,8-6.1,14-14.1,14c-8,0-14.1-6-14.1-14c0-7.9,6.1-14,14.1-14
                  c6.9,0,12.3,4.5,13.6,10.8l-6.9,0c-1-2.8-3.6-4.5-6.8-4.5c-4.3,0-7.5,3.2-7.5,7.8c0,4.5,3.2,7.8,7.5,7.8c3,0,5.3-1.4,6.5-3.7h-8.1
                  v-5.4H227.4z"/>
              <path fill="#8AFFCA" d="M231.4,339.7v-27h6.6v27H231.4z"/>
              <path fill="#8AFFCA" d="M260,324v-11.3h6.6v27h-7.4l-9.9-16.7l0.5,5.4v11.3h-6.6v-27h7.4l9.9,16.7L260,324z"/>
          </g>
          <circle onClick="AR();" class="button-glow3" id="ELLIP_2_" fill="#FF4A19" opacity="0.0" cx="208" cy="328" r="107.7"/>
      </g>
      </svg></div>
    <script src="/static/ar_stuff/models/OBJLoader.js"> </script>
    <script src="/static/ar_stuff/models/MTLLoader.js"> </script>
    <script src="https://sole.github.io/tween.js/build/tween.min.js"></script>
    <script>
        //////////////////////////////////////////////////////////////////////////////////
        //		Init
        //////////////////////////////////////////////////////////////////////////////////
        // init renderer
        AR();
        function AR(){
            setTimeout(()=>AEContainer.remove(), 4900)
            document.getElementById('begin').innerHTML= '<path fill="#0CEAFF" d="M38.9,251.7v2.6h8.7v11.6H34.4v-4.3h8.7v-3h-8.7v-11.2h13.2v4.3H38.9z"/><path fill="#0CEAFF" d="M69.6,254.5l-4.7,0c-0.7-1.9-2.4-3.1-4.6-3.1c-3,0-5.1,2.2-5.1,5.3c0,3.1,2.2,5.3,5.1,5.3c2.2,0,3.9-1.2,4.6-3.1l4.7,0c-0.9,4.3-4.7,7.4-9.4,7.4c-5.5,0-9.7-4.1-9.7-9.6c0-5.5,4.2-9.6,9.7-9.6C64.9,247.1,68.7,250.1,69.6,254.5z"/><path fill="#0CEAFF" d="M83.1,265.9v-5.5h-6.4v5.5h-4.5v-18.5h15.4v18.5H83.1z M76.7,256.1h6.4v-4.4h-6.4V256.1z"/><path fill="#0CEAFF" d="M102.7,255.2v-7.8h4.5v18.5l-5.1,0l-6.8-11.5l0.3,3.7v7.8h-4.5v-18.5h5.1l6.8,11.4L102.7,255.2z"/><path fill="#0CEAFF" d="M127.1,251.7v14.2h-4.5v-14.2h-5v-4.3h14.6v4.3H127.1z"/><path fill="#0CEAFF" d="M146.2,265.9v-7.3h-7.1v7.3h-4.5v-18.5h4.5v6.9h7.1v-6.9h4.5v18.5H146.2z"/><path fill="#0CEAFF" d="M158.9,251.7v2.8h7.6v4.3h-7.6v2.9h8.2v4.3h-12.7v-18.5h12.7v4.3H158.9z"/><path fill="#0CEAFF" d="M196.8,256.7c0,2.6-0.9,4.8-2.5,6.5l2.5,3.3l-3.4,2.6l-2.6-3.4c-1.1,0.4-2.4,0.7-3.7,0.7c-5.5,0-9.7-4.1-9.7-9.6c0-5.5,4.2-9.6,9.7-9.6C192.6,247.1,196.8,251.2,196.8,256.7z M182,256.7c0,3.1,2.2,5.3,5.1,5.3c3,0,5.1-2.2,5.1-5.3c0-3.1-2.2-5.3-5.1-5.3C184.2,251.4,182,253.6,182,256.7z"/><path fill="#0CEAFF" d="M211.9,259.3l2.7,6.6h-4.8l-2.7-6.6h-2.8v6.6h-4.5v-18.5h14.1v11.9H211.9z M204.2,255.5h5.5v-3.8h-5.5V255.5z"/><path fill="#0CEAFF" d="M243.7,254.5l-4.7,0c-0.7-1.9-2.4-3.1-4.6-3.1c-3,0-5.1,2.2-5.1,5.3c0,3.1,2.2,5.3,5.1,5.3c2.2,0,3.9-1.2,4.6-3.1l4.7,0c-0.9,4.3-4.7,7.4-9.4,7.4c-5.5,0-9.7-4.1-9.7-9.6c0-5.5,4.2-9.6,9.7-9.6C239,247.1,242.8,250.1,243.7,254.5z"/><path fill="#0CEAFF" d="M264.9,256.7c0,5.5-4.2,9.6-9.7,9.6s-9.7-4.1-9.7-9.6c0-5.5,4.2-9.6,9.7-9.6S264.9,251.2,264.9,256.7z M250.1,256.7c0,3.1,2.2,5.3,5.1,5.3c3,0,5.1-2.2,5.1-5.3c0-3.1-2.2-5.3-5.1-5.3C252.2,251.4,250.1,253.6,250.1,256.7z"/><path fill="#0CEAFF" d="M274.7,247.4c5.4,0,9.5,4,9.5,9.3c0,5.3-4.1,9.3-9.5,9.3h-6.9v-18.5H274.7z M272.3,261.6h2.4c2.9,0,5-2,5-5c0-2.9-2-5-5-5h-2.4V261.6z"/><path fill="#0CEAFF" d="M291.5,251.7v2.8h7.6v4.3h-7.6v2.9h8.2v4.3h-12.7v-18.5h12.7v4.3H291.5z"/><path fill="#0CEAFF" d="M322.5,265.9v-7.3h-7.1v7.3h-4.5v-18.5h4.5v6.9h7.1v-6.9h4.5v18.5H322.5z"/><path fill="#0CEAFF" d="M335.2,251.7v2.8h7.6v4.3h-7.6v2.9h8.2v4.3h-12.7v-18.5h12.7v4.3H335.2z"/><path fill="#0CEAFF" d="M358.8,259.3l2.7,6.6h-4.8l-2.7-6.6h-2.8v6.6h-4.5v-18.5h14.1v11.9H358.8z M351.1,255.5h5.5v-3.8h-5.5V255.5z"/><path fill="#0CEAFF" d="M368.9,251.7v2.8h7.6v4.3h-7.6v2.9h8.2v4.3h-12.7v-18.5h12.7v4.3H368.9z"/><path fill="#0CEAFF" d="M201.8,283.4v2.5H215v4.3h-2.7v7.4h-15v-18.5h10.5v4.3H201.8z M201.8,293.4h6.1v-3.1h-6.1V293.4z"/><path fill="#0CEAFF" d="M46.7,329.4v-18.5h4.5v14.2h6.3v-14.2h4.5v18.5H46.7z"/><path fill="#0CEAFF" d="M77.2,318.6v-7.8h4.5v18.5l-5.1,0l-6.8-11.5l0.3,3.7v7.8h-4.5v-18.5h5.1l6.8,11.4L77.2,318.6z"/><path fill="#0CEAFF" d="M103.5,317.9l-4.7,0c-0.7-1.9-2.4-3.1-4.6-3.1c-3,0-5.1,2.2-5.1,5.3c0,3.1,2.2,5.3,5.1,5.3c2.2,0,3.9-1.2,4.6-3.1l4.7,0c-0.9,4.3-4.7,7.4-9.4,7.4c-5.5,0-9.7-4.1-9.7-9.6c0-5.5,4.2-9.6,9.7-9.6C98.9,310.5,102.6,313.6,103.5,317.9z"/><path fill="#0CEAFF" d="M124.7,320.1c0,5.5-4.2,9.6-9.7,9.6c-5.5,0-9.7-4.1-9.7-9.6c0-5.5,4.2-9.6,9.7-9.6C120.5,310.5,124.7,314.7,124.7,320.1z M109.9,320.1c0,3.1,2.2,5.3,5.1,5.3c3,0,5.1-2.2,5.1-5.3c0-3.1-2.2-5.3-5.1-5.3C112.1,314.8,109.9,317,109.9,320.1z"/><path fill="#0CEAFF" d="M131.5,329.4l-5.8-18.5h4.8l3.9,12.7l3.9-12.7h4.8l-5.9,18.5H131.5z"/><path fill="#0CEAFF" d="M150,315.2v2.8h7.6v4.3H150v2.9h8.2v4.3h-12.7v-18.5h12.7v4.3H150z"/><path fill="#0CEAFF" d="M173.6,322.7l2.7,6.6h-4.8l-2.7-6.6h-2.8v6.6h-4.5v-18.5h14.1v11.9H173.6z M165.9,318.9h5.5v-3.8h-5.5V318.9z"/><path fill="#0CEAFF" d="M195.4,315.2v14.2h-4.5v-14.2h-5v-4.3h14.6v4.3H195.4z"/><path fill="#0CEAFF" d="M214.6,329.4v-7.3h-7.1v7.3h-4.5v-18.5h4.5v6.9h7.1v-6.9h4.5v18.5H214.6z"/><path fill="#0CEAFF" d="M227.2,315.2v2.8h7.6v4.3h-7.6v2.9h8.2v4.3h-12.7v-18.5h12.7v4.3H227.2z"/><path fill="#0CEAFF" d="M251.1,315.2v2.6h8.7v11.6h-13.2v-4.3h8.7v-3h-8.7v-11.2h13.2v4.3H251.1z"/><path fill="#0CEAFF" d="M268,315.2v2.8h7.6v4.3H268v2.9h8.2v4.3h-12.7v-18.5h12.7v4.3H268z"/><path fill="#0CEAFF" d="M297.7,317.9l-4.7,0c-0.7-1.9-2.4-3.1-4.6-3.1c-3,0-5.1,2.2-5.1,5.3c0,3.1,2.2,5.3,5.1,5.3c2.2,0,3.9-1.2,4.6-3.1l4.7,0c-0.9,4.3-4.7,7.4-9.4,7.4c-5.5,0-9.7-4.1-9.7-9.6c0-5.5,4.2-9.6,9.7-9.6C293,310.5,296.7,313.6,297.7,317.9z"/><path fill="#0CEAFF" d="M312.5,322.7l2.7,6.6h-4.8l-2.7-6.6h-2.8v6.6h-4.5v-18.5h14.1v11.9H312.5z M304.8,318.9h5.5v-3.8h-5.5V318.9z"/><path fill="#0CEAFF" d="M322.5,315.2v2.8h7.6v4.3h-7.6v2.9h8.2v4.3H318v-18.5h12.7v4.3H322.5z"/><path fill="#0CEAFF" d="M342.3,315.2v14.2h-4.5v-14.2h-5v-4.3h14.6v4.3H342.3z"/><path fill="#0CEAFF" d="M354.4,315.2v2.6h8.7v11.6h-13.2v-4.3h8.7v-3h-8.7v-11.2h13.2v4.3H354.4z"/><path fill="#0CEAFF" d="M372.2,327.1c0,1.5-1.2,2.6-2.7,2.6c-1.6,0-2.7-1.1-2.7-2.6s1.2-2.6,2.7-2.6C371,324.5,372.2,325.6,372.2,327.1z M367.2,322.5v-11.6h4.5v11.6H367.2z"/><path fill="#0CEAFF" d="M198.6,349.7c0,1.5-1.2,2.6-2.7,2.6s-2.7-1.1-2.7-2.6s1.2-2.6,2.7-2.6S198.6,348.2,198.6,349.7z M198.6,358.9c0,1.5-1.2,2.6-2.7,2.6s-2.7-1.1-2.7-2.6s1.2-2.6,2.7-2.6S198.6,357.4,198.6,358.9z"/><path fill="#0CEAFF" d="M209.2,342.6c5.4,0,9.5,4,9.5,9.3c0,5.3-4.1,9.3-9.5,9.3h-6.9v-18.5H209.2z M206.8,356.8h2.4c2.9,0,5-2,5-5c0-2.9-2-5-5-5h-2.4V356.8z"/>'
            var ellip_3 = document.getElementById('ELLIP_3')
            var ellip_2 = document.getElementById('ELLIP_2')
            var ellip_1 = document.getElementById('ELLIP_1')
            ellip_3.classList.toggle("button-glow3")
            ellip_2.classList.toggle("button-glow2")
            ellip_1.classList.toggle("button-glow")

            ellip_3.classList.toggle("fade-out")
            ellip_2.classList.toggle("fade-out")
            ellip_1.classList.toggle("fade-out")


            var meepo = document.createElement('div');
            meepo.style='color: red;position: absolute;width: 80%;left: 11%;top: 20%;'
            meepo.innerHTML = '<svg viewBox="0 0 369.8 220.2"><g id="OVERLAY"><path id="BG_1_" fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" d="M350.9,212H22.4c-6.6,0-12-5.4-12-12V18.5c0-6.6,5.4-12,12-12h328.5c6.6,0,12,5.4,12,12V200C362.9,206.6,357.5,212,350.9,212z"/><g id="YES"><rect x="50" y="121.9" stroke="#FFFFFF" stroke-miterlimit="10" width="119.3" height="65.3"/><rect id="YES_BUTTON" x="50" y="121.9" stroke="#FFFFFF" stroke-miterlimit="10" width="119.3" height="65.3"/><g><path fill="#FFFFFF" d="M95.1,161.3v-5.6l-5.7-9.9h2.1l4.6,7.8l4.6-7.8h2.1l-5.7,9.9v5.6H95.1z"/><path fill="#FFFFFF" d="M107.2,147.6v4.9h7.5v1.8h-7.5v5.3h8v1.8h-9.9v-15.5h9.9v1.8h-8V147.6z"/><path fill="#FFFFFF" d="M120.2,147.6v4.9h8.6v8.9h-10.5v-1.8h8.6v-5.4h-8.6v-8.4h10.5v1.8H120.2z"/></g></g><g id="NO"><rect x="203.1" y="122.2" stroke="#FFFFFF" stroke-miterlimit="10" width="119.3" height="65.3"/><rect id="NO_BUTTON" x="203.1" y="122.2" stroke="#FFFFFF" stroke-miterlimit="10" width="119.3" height="65.3"/><g><path fill="#FFFFFF" d="M258,152.6v-6.5h1.9v15.5h-2.3l-8.7-12.9l0.1,6.4v6.5h-1.9v-15.5h2.3l8.7,12.9L258,152.6z"/><path fill="#FFFFFF" d="M279,153.9c0,4.6-3.5,8-8,8s-8-3.4-8-8s3.5-8,8-8C275.5,145.8,279,149.3,279,153.9z M264.9,153.9c0,3.6,2.7,6.3,6.1,6.2c3.5,0,6.1-2.7,6.1-6.2c0-3.6-2.7-6.3-6.1-6.2C267.6,147.6,264.9,150.3,264.9,153.9z"/></g></g></g><g id="TEXT"><path d="M52.3,65.6l-1.1-4l-1.4-5.4h-0.1l-1.4,5.4l-1.1,4h-1.7l-3.1-11h1.3l1.5,5.2l1.1,4.2l1.1-4.2l1.5-5.2h1.7l1.5,5.2l1.1,4.2l1.1-4.2l1.5-5.2H57l-3.1,11H52.3z"/><path d="M69.5,60.1c0,3.2-2.5,5.7-5.7,5.7c-3.2,0-5.7-2.4-5.7-5.7c0-3.2,2.5-5.7,5.7-5.7C67.1,54.4,69.5,56.8,69.5,60.1z M63.9,55.7c-2.5,0-4.3,1.9-4.3,4.4c0,2.5,1.9,4.4,4.3,4.4c2.4,0,4.3-1.9,4.3-4.4C68.2,57.5,66.3,55.7,63.9,55.7L63.9,55.7z"/><path d="M71.8,65.6v-11h1.3v9.7h5.8v-9.7h1.3v11H71.8z"/><path d="M89.6,64.3v1.2H83v-11h1.3v9.7H89.6z"/><path d="M95.3,54.6c3.2,0,5.6,2.3,5.6,5.5c0,3.2-2.4,5.5-5.6,5.5h-3.7v-11H95.3z M92.8,64.3h2.4c2.4,0,4.3-1.8,4.3-4.2c0-2.5-1.9-4.2-4.3-4.2h-2.4V64.3z"/><path d="M111.1,65.6v-4l-4.1-7h1.5l3.2,5.5l3.2-5.5h1.5l-4.1,7v4H111.1z"/><path d="M128.4,60.1c0,3.2-2.5,5.7-5.7,5.7c-3.2,0-5.7-2.4-5.7-5.7c0-3.2,2.5-5.7,5.7-5.7C126,54.4,128.4,56.8,128.4,60.1z M122.8,55.7c-2.5,0-4.3,1.9-4.3,4.4c0,2.5,1.9,4.4,4.3,4.4c2.4,0,4.3-1.9,4.3-4.4C127.1,57.5,125.2,55.7,122.8,55.7L122.8,55.7z"/><path d="M130.7,65.6v-11h1.3v9.7h5.8v-9.7h1.3v11H130.7z"/><path d="M153.2,64.3v1.2h-6.6v-11h1.3v9.7H153.2z"/><path d="M155.1,65.6v-11h1.3v11H155.1z"/><path d="M167.1,65.6h-1.7l-4.9-5.2v5.2h-1.3v-11h1.3v5l4.7-5h1.6l-5,5.4L167.1,65.6z"/><path d="M170.2,55.8v3.5h5.3v1.2h-5.3v3.8h5.7v1.2h-7v-11h7v1.2H170.2z"/><path d="M186.5,55.8v9.7h-1.3v-9.7h-3.4v-1.2h8.1v1.2H186.5z"/><path d="M202.1,60.1c0,3.2-2.5,5.7-5.7,5.7c-3.2,0-5.7-2.4-5.7-5.7c0-3.2,2.5-5.7,5.7-5.7C199.6,54.4,202.1,56.8,202.1,60.1z M196.4,55.7c-2.5,0-4.3,1.9-4.3,4.4c0,2.5,1.9,4.4,4.3,4.4c2.4,0,4.3-1.9,4.3-4.4C200.8,57.5,198.9,55.7,196.4,55.7L196.4,55.7z"/><path d="M210.4,55.8v3.4h6.1v6.3h-7.4v-1.2h6.1v-3.8h-6.1v-5.9h7.4v1.2H210.4z"/><path d="M220.5,55.8v3.5h5.3v1.2h-5.3v3.8h5.7v1.2h-7v-11h7v1.2H220.5z"/><path d="M229.7,55.8v3.5h5.3v1.2h-5.3v3.8h5.7v1.2h-7v-11h7v1.2H229.7z"/><path d="M243.5,55.8v3.5h5.3v1.2h-5.3v4.9h-1.3v-11h7v1.2H243.5z"/><path d="M262.2,60.1c0,3.2-2.5,5.7-5.7,5.7c-3.2,0-5.7-2.4-5.7-5.7c0-3.2,2.5-5.7,5.7-5.7C259.7,54.4,262.2,56.8,262.2,60.1z M256.5,55.7c-2.5,0-4.3,1.9-4.3,4.4c0,2.5,1.9,4.4,4.3,4.4c2.4,0,4.3-1.9,4.3-4.4C260.8,57.5,259,55.7,256.5,55.7L256.5,55.7z"/><path d="M264.4,65.6v-11h1.3v9.7h5.8v-9.7h1.3v11H264.4z"/><path d="M281.8,61.4l2.1,4.2h-1.4l-2.1-4.2h-3.4v4.2h-1.3v-11h7.8v6.8H281.8z M276.9,60.2h5.3v-4.4h-5.3V60.2z"/><path d="M294.7,55.8v9.7h-1.3v-9.7H290v-1.2h8.1v1.2H294.7z"/><path d="M301.3,55.8v3.5h5.3v1.2h-5.3v3.8h5.7v1.2h-7v-11h7v1.2H301.3z"/><path d="M313,55.8v9.7h-1.3v-9.7h-3.4v-1.2h8.1v1.2H313z"/><path d="M326.5,60.5h-3.4v2h-1.3v-2h-3.5v-1.2h7v-3.4h-7v-1.2h8.3V60.5z M323.4,64.9c0,0.5-0.4,0.9-0.9,0.9s-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9S323.4,64.3,323.4,64.9z"/></g></svg>'
            meepo.id = 'meepo';
            var ARContainer = document.getElementById('ARContainer');
    
            var renderer	= new THREE.WebGLRenderer({
                antialias	: true,
                alpha: true
            });
            renderer.setClearColor(new THREE.Color('lightgrey'), 0)
            renderer.setSize( 640*2, 280*2 );
            renderer.domElement.style.position = 'absolute'
            renderer.domElement.style.top = '0px'
            renderer.domElement.style.left = '0px'
            ARContainer.appendChild( renderer.domElement );
    
    
            // array of functions for the rendering loop
            var onRenderFcts= [];
    
            var video,
                mesh,
                sphere,
                object;

            var firstClick = false;
            // init scene and camera
            var scene	= new THREE.Scene();

            var raycaster = new THREE.Raycaster();
            var mouse = new THREE.Vector2(100,100);

            function onClick( event ) {

                // calculate mouse position in normalized device coordinates
                // (-1 to +1) for both components
                firstClick = true;
                if (event.type === "touchstart"){
                    mouse.x = ( event.changedTouches[0].clientX / window.innerWidth ) * 2 - 1;
                    mouse.y = - ( event.changedTouches[0].clientY / window.innerHeight ) * 2 + 1;
                } else {
                    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
                    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
                }


            }
            window.addEventListener( 'mousedown', onClick, false );
            window.addEventListener( 'touchstart', onClick, false );

    
            //////////////////////////////////////////////////////////////////////////////////
            //		Initialize a basic camera
            //////////////////////////////////////////////////////////////////////////////////
    
            // Create a camera
            //var camera = new THREE.Camera();
            var camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 10000 );
            scene.add(camera);
    
            ////////////////////////////////////////////////////////////////////////////////
            //          handle arToolkitSource
            ////////////////////////////////////////////////////////////////////////////////
    
            var arToolkitSource = new THREEx.ArToolkitSource({
                // to read from the webcam 
                 sourceType : 'webcam',
                
                // to read from an image
                // sourceType : 'image',
                // sourceUrl : THREEx.ArToolkitContext.baseURL + '/devstatic/afterparty-pizza-emoji-kanji-marker.png',		
    
                // to read from a video
                // sourceType : 'video',
                // sourceUrl : THREEx.ArToolkitContext.baseURL + '../data/videos/headtracking.mp4',		
            })
    
            arToolkitSource.init(function onReady(){
                onResize()
            })
            
            // handle resize
            window.addEventListener('resize', function(){
                onResize()
            })
            
    
            function onResize(){
                arToolkitSource.onResize()	
                arToolkitSource.copySizeTo(renderer.domElement)	
                if( arToolkitContext.arController !== null ){
                    arToolkitSource.copySizeTo(arToolkitContext.arController.canvas)	
                }	
            }
            ////////////////////////////////////////////////////////////////////////////////
            //          initialize arToolkitContext
            ////////////////////////////////////////////////////////////////////////////////	
    
            // create atToolkitContext
            var arToolkitContext = new THREEx.ArToolkitContext({
                cameraParametersUrl: THREEx.ArToolkitContext.baseURL + 'static/ar_stuff/patterns/camera_para.dat',
                detectionMode: 'mono',
                // whatttt
                canvasWidth: 640*2,
                canvasHeight: 480*2,
                patternRatio: .77,
            })
            // initialize it
            arToolkitContext.init(function onCompleted(){
                // copy projection matrix to camera
                camera.projectionMatrix.copy( arToolkitContext.getProjectionMatrix() );
            })
    
            // update artoolkit on every frame
            onRenderFcts.push(function(){
                if( arToolkitSource.ready === false )	return
    
                arToolkitContext.update( arToolkitSource.domElement )
            })
            
        ;(function(){
            //////////////////////////////////////////////////////////////////////////////
            //		markerRoot1
            //////////////////////////////////////////////////////////////////////////////
    
            // build markerControls
            var markerRoot1 = new THREE.Group
            markerRoot1.name = 'marker1'
            scene.add(markerRoot1)
            var markerControls = new THREEx.ArMarkerControls(arToolkitContext, markerRoot1, {
                type : 'pattern',
                patternUrl : THREEx.ArToolkitContext.baseURL + 'static/ar_stuff/patterns/afterparty-pizza-emoji-kanji.patt',
            })
            
            var light = new THREE.DirectionalLight( 0xffffff );
            light.position.set( 0, 1, 1 ).normalize();
            scene.add(light);


            var loader = new THREE.OBJLoader();
            new THREE.MTLLoader()
                .setPath('static/ar_stuff/models/')            
                .load('Love.mtl', function ( materials ) {
                    materials.preload();
                    new THREE.OBJLoader()
                        .setMaterials( materials )
                        .setPath('static/ar_stuff/models/')
                        .load('Love.obj', function ( group ) {
                            object = group.children[0];
                            object.material.side = THREE.DoubleSide;
                            var scalar = 0;
                            object.scale.set(scalar, scalar, scalar);
                            object.rotation.x = 4.3;
                            object.rotation.y = 3.6;
                            //object.rotation.z = .1;

                            object.position.z += .3
                            object.position.x += .08
                            object.material.color.set(1,0,0);

                            markerRoot1.add(object);
                        })
                })
    
        })()
    
        ;(function(){
            var markerFound = false;
            var markerRoot1 = scene.getObjectByName('marker1')
            
            var container = new THREE.Group
            scene.add(container)
            
            var scaleScalar = 0;
            var tween = null;
            // update container.visible and scanningSpinner visibility
            onRenderFcts.push(function(m,t){
                if( markerRoot1.visible === true ) {
                    if (scaleScalar < .01) {
                        scaleScalar += .0001
                        object.scale.set(scaleScalar, scaleScalar, scaleScalar);
                    }
                    raycaster.setFromCamera( mouse, camera );
                    if (tween){
                        TWEEN.update()
                    } 

                    var intersects = raycaster.intersectObjects( markerRoot1.children );
                    if (firstClick) {
                        for ( var i = 0; i < intersects.length; i++ ) {
                            var hColor = object.material.color; 
                            tween = new TWEEN.Tween(hColor) 
                                .to({r: 1, g: 0, b: 0 }, 5000) 
                                .easing(TWEEN.Easing.Quadratic.Out) 
                                .onUpdate(function() { 
                                    object.material.color = hColor;
                                })
                                .start(); 
                        mouse.x = 100;
                        mouse.y = 100;
                        setTimeout(() => window.location='${process.env.static_host}'+'/heartForm', 7000);
                    }
                    }


                   object.rotation.y += .03;
    
                    // CHECKER AREA
                    ${overlayCode}
                    //geometry.verticesNeedUpdate = true;
                }
    
            })
            
            
        })()
            //////////////////////////////////////////////////////////////////////////////////
            //		render the whole thing on the page
            //////////////////////////////////////////////////////////////////////////////////
    
            // render the scene
            onRenderFcts.push(function(){
                renderer.render( scene, camera );
            })
    
            // run the rendering loop
            var lastTimeMsec= null
            requestAnimationFrame(function animate(nowMsec){
                // keep looping
                requestAnimationFrame( animate );
                // measure time
                lastTimeMsec	= lastTimeMsec || nowMsec-1000/60
                var deltaMsec	= Math.min(200, nowMsec - lastTimeMsec)
                lastTimeMsec	= nowMsec
                // call each update function
                onRenderFcts.forEach(function(onRenderFct){
                    onRenderFct(deltaMsec/1000, nowMsec/1000)
                })
            })
        }
    </script>
    </body>
    </html>
    `)
}

const overlay = () => (/*javascript*/`
if (!markerFound){
	markerFound=true;
	setTimeout(show_yesno, 10000);

	function show_yesno(){
		ARContainer.appendChild(meepo);
		document.getElementById('YES_BUTTON').addEventListener('click', yes);
		document.getElementById('NO_BUTTON').addEventListener('click', no);
	};

	function yes(){
        document.getElementById('TEXT').innerHTML='<path d="M67,63.2v-3.6h-4.9v3.6H61v-9.1h7.1v9.1H67z M62.1,58.5H67v-3.4h-4.9V58.5z"/><path d="M75.5,59.7l1.8,3.5h-1.2l-1.8-3.5h-2.9v3.5h-1.1v-9.1h6.5v5.6H75.5z M71.5,58.8h4.4v-3.7h-4.4V58.8z"/><path d="M80.2,55.1V58h4.4v1h-4.4v3.1h4.7v1h-5.8v-9.1h5.8v1H80.2z"/><path d="M93.3,63.2v-3.3l-3.4-5.8h1.2l2.7,4.6l2.7-4.6h1.2l-3.4,5.8v3.3H93.3z"/><path d="M107.7,58.6c0,2.7-2,4.7-4.7,4.7c-2.6,0-4.7-2-4.7-4.7c0-2.7,2.1-4.7,4.7-4.7C105.6,53.9,107.7,56,107.7,58.6z M99.4,58.6c0,2.1,1.6,3.7,3.6,3.7c2,0,3.6-1.6,3.6-3.7c0-2.1-1.6-3.7-3.6-3.7C100.9,55,99.4,56.5,99.4,58.6z"/><path d="M109.6,63.2v-9.1h1.1v8.1h4.8v-8.1h1.1v9.1H109.6z"/><path d="M123.8,55.1v2.9h4.4v1h-4.4v4.1h-1.1v-9.1h5.8v1H123.8z"/><path d="M135.5,59.7l1.8,3.5H136l-1.8-3.5h-2.9v3.5h-1.1v-9.1h6.5v5.6H135.5z M131.4,58.8h4.4v-3.7h-4.4V58.8z"/><path d="M140.1,55.1V58h4.4v1h-4.4v3.1h4.7v1h-5.8v-9.1h5.8v1H140.1z"/><path d="M147.7,55.1V58h4.4v1h-4.4v3.1h4.7v1h-5.8v-9.1h5.8v1H147.7z"/><path d="M159.2,55.1V58h5.1v5.2h-6.1v-1h5.1V59h-5.1v-4.9h6.1v1H159.2z"/><path d="M172.6,63.2v-3.6h-4.9v3.6h-1.1v-9.1h7.1v9.1H172.6z M167.6,58.5h4.9v-3.4h-4.9V58.5z"/><path d="M179.1,55.1v8.1H178v-8.1h-2.8v-1h6.7v1H179.1z"/><path d="M183.5,63.2v-9.1h1.1v8.1h4.8v-8.1h1.1v9.1H183.5z"/><path d="M197.9,59.7l1.8,3.5h-1.2l-1.8-3.5h-2.9v3.5h-1.1v-9.1h6.5v5.6H197.9z M193.9,58.8h4.4v-3.7h-4.4V58.8z"/><path d="M204.6,54.1c2.6,0,4.7,1.9,4.7,4.6c0,2.6-2,4.6-4.7,4.6h-3.1v-9.1H204.6z M202.6,62.2h2c2,0,3.6-1.5,3.6-3.5c0-2.1-1.5-3.5-3.6-3.5h-2V62.2z"/><path d="M217.2,63.2v-3.6h-4.9v3.6h-1.1v-9.1h7.1v9.1H217.2z M212.3,58.5h4.9v-3.4h-4.9V58.5z"/><path d="M223.2,63.2v-3.3l-3.4-5.8h1.2l2.7,4.6l2.7-4.6h1.2l-3.4,5.8v3.3H223.2z"/><path d="M242.2,58.6c0,2.7-2,4.7-4.7,4.7c-2.6,0-4.7-2-4.7-4.7c0-2.7,2.1-4.7,4.7-4.7C240.1,53.9,242.2,56,242.2,58.6z M233.9,58.6c0,2.1,1.6,3.7,3.6,3.7c2,0,3.6-1.6,3.6-3.7c0-2.1-1.6-3.7-3.6-3.7C235.4,55,233.9,56.5,233.9,58.6z"/><path d="M249.2,59.7l1.8,3.5h-1.2l-1.8-3.5h-2.9v3.5H244v-9.1h6.5v5.6H249.2z M245.1,58.8h4.4v-3.7h-4.4V58.8z"/><path d="M257.8,55.1V58h5.1v5.2h-6.1v-1h5.1V59h-5.1v-4.9h6.1v1H257.8z"/><path d="M265.1,63.2v-9.1h1.1v8.1h4.8v-8.1h1.1v9.1H265.1z"/><path d="M280.7,57.9v-3.8h1.1v9.1h-1.3l-5.1-7.6l0.1,3.7v3.8h-1.1v-9.1h1.3l5.1,7.5L280.7,57.9z"/><path d="M287.1,54.1c2.6,0,4.7,1.9,4.7,4.6c0,2.6-2,4.6-4.7,4.6H284v-9.1H287.1z M285.1,62.2h2c2,0,3.6-1.5,3.6-3.5c0-2.1-1.5-3.5-3.6-3.5h-2V62.2z"/><path d="M299.7,63.2v-3.6h-4.9v3.6h-1.1v-9.1h7.1v9.1H299.7z M294.8,58.5h4.9v-3.4h-4.9V58.5z"/><path d="M305.7,63.2v-3.3l-3.4-5.8h1.2l2.7,4.6l2.7-4.6h1.2l-3.4,5.8v3.3H305.7z"/><path d="M35.3,70.7v8.1h-1.1v-8.1h-2.8v-1h6.7v1H35.3z"/><path d="M48.2,74.2c0,2.7-2,4.7-4.7,4.7c-2.6,0-4.7-2-4.7-4.7c0-2.7,2.1-4.7,4.7-4.7C46.1,69.5,48.2,71.6,48.2,74.2z M39.9,74.2c0,2.1,1.6,3.7,3.6,3.7c2,0,3.6-1.6,3.6-3.7c0-2.1-1.6-3.7-3.6-3.7C41.4,70.6,39.9,72.1,39.9,74.2z"/><path d="M55.1,70.7v2.9h5.1v5.2H54v-1H59v-3.1H54v-4.9h6.1v1H55.1z"/><path d="M63.5,70.7v2.9h4.4v1h-4.4v3.1h4.7v1h-5.8v-9.1h5.8v1H63.5z"/><path d="M71,70.7v2.9h4.4v1H71v3.1h4.7v1H70v-9.1h5.8v1H71z"/><path d="M87.8,78.8v-4.2h-5.3v4.2h-1.1v-9.1h1.1v3.9h5.3v-3.9h1.1v9.1H87.8z"/><path d="M91.2,78.8v-9.1h1.1v9.1H91.2z"/><path d="M102.4,78.8v-7.6L99,75.7h-0.1l-3.3-4.6v7.6h-1.1v-9.1h1.3L99,74l3.2-4.3h1.3v9.1H102.4z"/><path d="M115.7,78.8v-3.6h-4.9v3.6h-1.1v-9.1h7.1v9.1H115.7z M110.7,74.1h4.9v-3.4h-4.9V74.1z"/><path d="M122.2,70.7v8.1h-1.1v-8.1h-2.8v-1h6.7v1H122.2z"/><path d="M139.5,74.1c0,0.1,0,0.2,0,0.3c-0.1,2.6-2.1,4.5-4.7,4.5c-2.6,0-4.7-2-4.7-4.7c0-2.7,2-4.7,4.7-4.7c2.2,0,3.9,1.4,4.5,3.4h-1.1c-0.5-1.4-1.8-2.4-3.4-2.4c-2,0-3.6,1.6-3.6,3.7c0,2.1,1.6,3.7,3.6,3.7c1.8,0,3.2-1.2,3.5-2.9h-4v-0.9H139.5z"/><path d="M146.5,75.3l1.8,3.5h-1.2l-1.8-3.5h-2.9v3.5h-1.1v-9.1h6.5v5.6H146.5z M142.4,74.4h4.4v-3.7h-4.4V74.4z"/><path d="M151.2,70.7v2.9h4.4v1h-4.4v3.1h4.7v1h-5.8v-9.1h5.8v1H151.2z"/><path d="M163.7,78.8v-3.6h-4.9v3.6h-1.1v-9.1h7.1v9.1H163.7z M158.7,74.1h4.9v-3.4h-4.9V74.1z"/><path d="M170.2,70.7v8.1h-1.1v-8.1h-2.8v-1h6.7v1H170.2z"/><path d="M184.5,78.8v-3.6h-4.9v3.6h-1.1v-9.1h7.1v9.1H184.5z M179.6,74.1h4.9v-3.4h-4.9V74.1z"/><path d="M195.8,78.8v-7.6l-3.3,4.6h-0.1l-3.3-4.6v7.6h-1.1v-9.1h1.3l3.2,4.3l3.2-4.3h1.3v9.1H195.8z"/><path d="M200.2,70.7v2.9h4.4v1h-4.4v3.1h4.7v1h-5.8v-9.1h5.8v1H200.2z"/><path d="M211.8,75.3l1.8,3.5h-1.2l-1.8-3.5h-2.9v3.5h-1.1v-9.1h6.5v5.6H211.8z M207.8,74.4h4.4v-3.7h-4.4V74.4z"/><path d="M215.4,78.8v-9.1h1.1v9.1H215.4z"/><path d="M227.6,73h-1.1c-0.5-1.4-1.8-2.4-3.4-2.4c-2,0-3.6,1.6-3.6,3.7c0,2.1,1.6,3.7,3.6,3.7c1.6,0,2.9-1,3.4-2.4h1.1c-0.5,2.1-2.3,3.4-4.5,3.4c-2.6,0-4.7-2-4.7-4.7c0-2.7,2-4.7,4.7-4.7C225.3,69.5,227.1,70.9,227.6,73z"/><path d="M235.4,78.8v-3.6h-4.9v3.6h-1.1v-9.1h7.1v9.1H235.4z M230.5,74.1h4.9v-3.4h-4.9V74.1z"/><path d="M245.1,73.5v-3.8h1.1v9.1h-1.3l-5.1-7.6l0.1,3.7v3.8h-1.1v-9.1h1.3l5.1,7.5L245.1,73.5z"/><path d="M260.2,78.8v-7.6l-3.3,4.6h-0.1l-3.3-4.6v7.6h-1.1v-9.1h1.3l3.2,4.3l3.2-4.3h1.3v9.1H260.2z"/><path d="M263.6,78.8v-9.1h1.1v8.1h4.8v-8.1h1.1v9.1H263.6z"/><path d="M272.9,78.8v-9.1h1.1v9.1H272.9z"/><path d="M277.3,70.7v2.9h5.1v5.2h-6.1v-1h5.1v-3.1h-5.1v-4.9h6.1v1H277.3z"/><path d="M293.5,73h-1.1c-0.5-1.4-1.8-2.4-3.4-2.4c-2,0-3.6,1.6-3.6,3.7c0,2.1,1.6,3.7,3.6,3.7c1.6,0,2.9-1,3.4-2.4h1.1c-0.5,2.1-2.3,3.4-4.5,3.4c-2.7,0-4.7-2-4.7-4.7c0-2.7,2-4.7,4.7-4.7C291.2,69.5,292.9,70.9,293.5,73z"/><path d="M305.6,78.8v-4.2h-5.3v4.2h-1.1v-9.1h1.1v3.9h5.3v-3.9h1.1v9.1H305.6z"/><path d="M315,78.8v-3.6H310v3.6h-1.1v-9.1h7.1v9.1H315z M310,74.1h4.9v-3.4H310V74.1z"/><path d="M323.8,77.8v1h-5.5v-9.1h1.1v8.1H323.8z"/><path d="M330.9,77.8v1h-5.5v-9.1h1.1v8.1H330.9z"/><path d="M338.4,74.6h-2.9v1.6h-1.1v-1.6h-2.9v-1h5.8v-2.8h-5.8v-1h6.9V74.6z M335.8,78.2c0,0.4-0.3,0.7-0.8,0.7c-0.4,0-0.8-0.3-0.8-0.7c0-0.4,0.3-0.7,0.8-0.7C335.5,77.5,335.8,77.8,335.8,78.2z"/>'
		document.getElementById('TEXT').setAttribute('fill', 'red');
		document.getElementById('YES').setAttribute('class', 'button-glow');
		setTimeout(()=>{document.getElementById('YES').setAttribute('class', '');},2000);
		document.getElementById('YES_BUTTON').addEventListener('click', sendIt);
	}

	function no(){
		document.getElementById('NO').setAttribute('class', 'button-click');
		setTimeout(()=>{meepo.remove();},2000);
	}
	function sendIt(){
	url = '${process.env.static_host}' + '/claimQR'
    data = {code: '${code}'}
    let fetchData = { 
        method: 'POST', 
        body: JSON.stringify(data),
        headers: {'Accept': 'application/json, text/plain, */*','Content-Type': 'application/json'},
    }
    fetch(url, fetchData)
    .then(function(response) {
        return response.json()
    })
    .then(function(dog){
        if (!dog.found) {
            document.getElementById('YES').remove();
            document.getElementById('NO').remove();
            document.getElementById('TEXT').innerHTML='<path fill="#FB4500" d="M64.4,51.4c0.1,0.4,0.2,1.2,0.2,1.7c0,10.6-8.2,18.6-18.8,18.6c-10.6,0-18.8-8-18.8-18.6c0-10.6,8.2-18.6,18.8-18.6c9.1,0,16.4,6,18.2,14.3l-9.2,0c-1.4-3.7-4.7-6-9-6c-5.7,0-9.9,4.3-9.9,10.3c0,6,4.2,10.3,9.9,10.3c3.9,0,7.1-1.9,8.7-4.9H43.8v-7.1H64.4z"/><path fill="#FB4500" d="M93.3,58.2l5.2,12.9h-9.4l-5.2-12.9h-5.5v12.9h-8.7V35.2h27.4v23H93.3z M78.4,50.9h10.7v-7.3H78.4V50.9z"/><path fill="#FB4500" d="M112.8,43.5v5.3h14.8v8.3h-14.8v5.6h16v8.3h-24.7V35.2h24.7v8.3H112.8z"/><path fill="#FB4500" d="M156.1,71.1V60.4h-12.4v10.7H135V35.2h29.9v35.9H156.1z M143.7,52.1h12.4v-8.6h-12.4V52.1z"/><path fill="#FB4500" d="M188.2,43.5v27.6h-8.7V43.5h-9.8v-8.3H198v8.3H188.2z"/><path fill="#FB4500" d="M213.4,66.7c0,2.9-2.3,5-5.3,5c-3,0-5.3-2.1-5.3-5s2.3-5,5.3-5C211.2,61.7,213.4,63.8,213.4,66.7z M203.8,57.8V35.2h8.7v22.6H203.8z"/></g><g><path fill="#5176FF" d="M102.9,103v3.6h-2.8V95.1h8.8v7.9H102.9z M102.9,100.3h3.2v-2.6h-3.2V100.3z"/><path fill="#5176FF" d="M113.8,100.2v6.4H111v-9h5.9v2.7H113.8z"/><path fill="#5176FF" d="M127.3,102.1c0,2.7-2.1,4.7-4.7,4.7c-2.6,0-4.7-2-4.7-4.7c0-2.7,2.1-4.7,4.7-4.7C125.2,97.4,127.3,99.4,127.3,102.1z M120.7,102.1c0,1.3,0.8,2.1,1.9,2.1c1.1,0,1.9-0.8,1.9-2.1c0-1.2-0.8-2.1-1.9-2.1C121.5,100,120.7,100.8,120.7,102.1z"/><path fill="#5176FF" d="M131.1,106.6l-2.9-9h2.9l1.7,5.7l1.7-5.7h2.9l-2.9,9H131.1z"/><path fill="#5176FF" d="M141.7,94.8c0,1-0.7,1.6-1.7,1.6s-1.7-0.6-1.7-1.6c0-1,0.7-1.6,1.7-1.6S141.7,93.8,141.7,94.8z M138.6,106.6v-9h2.8v9H138.6z"/><path fill="#5176FF" d="M149.7,106.6v-1c-0.6,0.7-1.4,1.2-2.6,1.2c-2.3,0-4.1-1.9-4.1-4.7c0-2.8,1.8-4.7,4.1-4.7c1.2,0,2,0.5,2.6,1.2V94h2.8v12.7H149.7z M145.8,102.1c0,1.3,0.8,2.1,1.9,2.1c1.1,0,1.9-0.8,1.9-2.1c0-1.2-0.8-2.1-1.9-2.1C146.7,100,145.8,100.8,145.8,102.1z"/><path fill="#5176FF" d="M158.8,97.4c2.3,0,4.3,1.5,4.6,4c0.1,0.5,0,1,0,1.3h-6.4c0.1,1.2,0.9,1.8,1.9,1.8c0.8,0,1.5-0.4,1.7-1.2l2.9,0c-0.3,2.2-2.4,3.5-4.6,3.5c-2.8,0-4.7-2.1-4.7-4.7C154.1,99.4,156.1,97.4,158.8,97.4L158.8,97.4z M157.1,100.8h3.3c-0.2-0.8-1-1.1-1.6-1.1C158,99.6,157.4,100.1,157.1,100.8z"/><path fill="#5176FF" d="M170.5,110.4l2.2-5l-3.4-7.8h3l1.9,4.7l1.9-4.7h3l-5.6,12.8H170.5z"/><path fill="#5176FF" d="M188.9,102.1c0,2.7-2.1,4.7-4.7,4.7c-2.6,0-4.7-2-4.7-4.7c0-2.7,2.1-4.7,4.7-4.7C186.8,97.4,188.9,99.4,188.9,102.1z M182.3,102.1c0,1.3,0.8,2.1,1.9,2.1c1.1,0,1.9-0.8,1.9-2.1c0-1.2-0.8-2.1-1.9-2.1C183.1,100,182.3,100.8,182.3,102.1z"/><path fill="#5176FF" d="M190.6,106.6v-9h2.8v6.4h2.8v-6.4h2.8v9H190.6z"/><path fill="#5176FF" d="M203.8,100.2v6.4H201v-9h5.9v2.7H203.8z"/><path fill="#5176FF" d="M218.7,106.6v-6.4h-2.9v6.4h-2.8v-9h8.4v9H218.7z"/><path fill="#5176FF" d="M229.8,98.6v-1h2.8v9h-2.8v-1c-0.6,0.7-1.4,1.2-2.6,1.2c-2.3,0-4.1-1.9-4.1-4.7c0-2.8,1.8-4.7,4.1-4.7C228.4,97.4,229.2,97.9,229.8,98.6z M226,102.1c0,1.3,0.8,2.1,1.9,2.1c1.1,0,1.9-0.8,1.9-2.1c0-1.2-0.8-2.1-1.9-2.1C226.8,100,226,100.8,226,102.1z"/><path fill="#5176FF" d="M245.2,106.6v-6.4h-2.5v6.4h-2.8v-6.4h-2.5v6.4h-2.8v-9H248v9H245.2z"/><path fill="#5176FF" d="M258.9,101.4c0.1,0.5,0,1,0,1.3h-6.4c0.1,1.2,0.9,1.8,1.9,1.8c0.8,0,1.5-0.4,1.7-1.2l2.9,0c-0.4,2.2-2.4,3.5-4.6,3.5c-2.8,0-4.7-2.1-4.7-4.7c0-2.7,2-4.7,4.7-4.7C256.6,97.4,258.6,98.9,258.9,101.4z M252.7,100.8h3.3c-0.2-0.8-1-1.1-1.6-1.1C253.5,99.6,253,100.1,252.7,100.8z"/><path fill="#5176FF" d="M268.4,97.8v1.6h8.2v2.7h-1.7v4.6h-9.3V95.1h6.6v2.7H268.4z M268.4,103.9h3.8V102h-3.8V103.9z"/><path fill="#5176FF" d="M291.8,101.4c0.1,0.5,0,1,0,1.3h-6.4c0.1,1.2,0.9,1.8,1.9,1.8c0.8,0,1.5-0.4,1.7-1.2l2.9,0c-0.4,2.2-2.4,3.5-4.6,3.5c-2.8,0-4.7-2.1-4.7-4.7c0-2.7,2-4.7,4.7-4.7C289.5,97.4,291.5,98.9,291.8,101.4z M285.6,100.8h3.3c-0.2-0.8-1-1.1-1.6-1.1C286.5,99.6,285.9,100.1,285.6,100.8z"/><path fill="#5176FF" d="M304,106.6v-6.4h-2.5v6.4h-2.8v-6.4h-2.5v6.4h-2.8v-9h13.4v9H304z"/><path fill="#5176FF" d="M315.1,98.6v-1h2.8v9h-2.8v-1c-0.6,0.7-1.4,1.2-2.6,1.2c-2.3,0-4.1-1.9-4.1-4.7c0-2.8,1.8-4.7,4.1-4.7C313.7,97.4,314.5,97.9,315.1,98.6z M311.3,102.1c0,1.3,0.8,2.1,1.9,2.1c1.1,0,1.9-0.8,1.9-2.1c0-1.2-0.8-2.1-1.9-2.1C312.1,100,311.3,100.8,311.3,102.1z"/><path fill="#5176FF" d="M323,94.8c0,1-0.7,1.6-1.7,1.6s-1.7-0.6-1.7-1.6c0-1,0.7-1.6,1.7-1.6S323,93.8,323,94.8z M319.9,106.6v-9h2.8v9H319.9z"/><path fill="#5176FF" d="M325.1,106.6V94h2.8v12.7H325.1z"/><path fill="#5176FF" d="M109.1,121.8c0,2.7-2.1,4.7-4.7,4.7c-2.6,0-4.7-2-4.7-4.7c0-2.7,2.1-4.7,4.7-4.7C107,117.1,109.1,119.1,109.1,121.8z M102.5,121.8c0,1.3,0.8,2.1,1.9,2.1c1.1,0,1.9-0.8,1.9-2.1c0-1.2-0.8-2.1-1.9-2.1C103.3,119.7,102.5,120.6,102.5,121.8z"/><path fill="#5176FF" d="M116.4,126.3V120h-2.9v6.4h-2.8v-9h8.4v9H116.4z"/><path fill="#5176FF" d="M132.5,117.3v2.6h-2.7v3.8h2.7v2.6H127v-6.4h-1.5v-2.6h1.5v-2h2.8v2H132.5z"/><path fill="#5176FF" d="M142.7,117.3v9h-2.8V120H137v6.4h-2.8v-12.7h2.8v3.6H142.7z"/><path fill="#5176FF" d="M149,117.1c2.3,0,4.3,1.5,4.6,4c0.1,0.5,0,1,0,1.3h-6.4c0.1,1.2,0.9,1.8,1.9,1.8c0.8,0,1.5-0.4,1.7-1.2h2.9c-0.3,2.2-2.4,3.5-4.6,3.5c-2.8,0-4.7-2.1-4.7-4.7C144.3,119.1,146.3,117.1,149,117.1L149,117.1z M147.4,120.5h3.3c-0.2-0.8-1-1.1-1.6-1.1C148.2,119.4,147.7,119.8,147.4,120.5z"/><path fill="#5176FF" d="M165.8,126.3V120h-2.9v6.4h-2.8v-9h8.4v9H165.8z"/><path fill="#5176FF" d="M174.9,117.1c2.3,0,4.3,1.5,4.6,4c0.1,0.5,0,1,0,1.3h-6.4c0.1,1.2,0.9,1.8,1.9,1.8c0.8,0,1.5-0.4,1.7-1.2h2.9c-0.3,2.2-2.4,3.5-4.6,3.5c-2.8,0-4.7-2.1-4.7-4.7C170.2,119.1,172.2,117.1,174.9,117.1L174.9,117.1z M173.3,120.5h3.3c-0.2-0.8-1-1.1-1.6-1.1C174.2,119.4,173.6,119.8,173.3,120.5z"/><path fill="#5176FF" d="M189.8,126.3h-3.3l-1.6-2.5l-1.4,2.5h-3.4l3.1-4.7l-3-4.4h3.3l1.4,2.3l1.3-2.3h3.4l-3,4.4L189.8,126.3z"/><path fill="#5176FF" d="M197.5,117.3v2.6h-2.7v3.8h2.7v2.6H192v-6.4h-1.5v-2.6h1.5v-2h2.8v2H197.5z"/><path fill="#5176FF" d="M213.5,121.8c0,2.8-1.8,4.7-4.1,4.7c-1.1,0-2-0.5-2.6-1.2v4.8h-2.8v-12.8h2.8v1c0.6-0.7,1.4-1.2,2.6-1.2C211.7,117.1,213.5,119,213.5,121.8z M206.9,121.8c0,1.3,0.8,2.1,1.9,2.1c1.1,0,1.9-0.8,1.9-2.1c0-1.2-0.8-2.1-1.9-2.1C207.7,119.7,206.9,120.6,206.9,121.8z"/><path fill="#5176FF" d="M221.5,118.3v-1h2.8v9h-2.8v-1c-0.6,0.7-1.4,1.2-2.6,1.2c-2.3,0-4.1-1.9-4.1-4.7c0-2.8,1.8-4.7,4.1-4.7C220.1,117.1,220.9,117.6,221.5,118.3z M217.7,121.8c0,1.3,0.8,2.1,1.9,2.1c1.1,0,1.9-0.8,1.9-2.1c0-1.2-0.8-2.1-1.9-2.1C218.5,119.7,217.7,120.6,217.7,121.8z"/><path fill="#5176FF" d="M232.6,118.3v-1h2.8v12.8l-8.3,0v-2.6h5.5v-2.2c-0.6,0.7-1.4,1.2-2.6,1.2c-2.3,0-4.1-1.9-4.1-4.7c0-2.8,1.8-4.7,4.1-4.7C231.1,117.1,232,117.6,232.6,118.3z M228.8,121.8c0,1.2,0.8,2,1.9,2c1.1,0,1.9-0.8,1.9-2c0-1.2-0.8-2-1.9-2C229.6,119.7,228.8,120.6,228.8,121.8z"/><path fill="#5176FF" d="M246.3,121.1c0.1,0.5,0,1,0,1.3h-6.4c0.1,1.2,0.9,1.8,1.9,1.8c0.8,0,1.5-0.4,1.7-1.2h2.9c-0.4,2.2-2.4,3.5-4.6,3.5c-2.8,0-4.7-2.1-4.7-4.7c0-2.7,2-4.7,4.7-4.7C244,117.1,246,118.6,246.3,121.1z M240.1,120.5h3.3c-0.2-0.8-1-1.1-1.6-1.1C240.9,119.4,240.3,119.8,240.1,120.5z"/></g><g><path fill="#FF7B67" d="M33,156.2v1.6h8.4v2.7h-1.7v4.7h-9.6v-11.8h6.7v2.7H33z M33,162.5h3.9v-2H33V162.5z"/><path fill="#FF7B67" d="M51.4,165.3v-3.8l-4.1-8h3.2l2.3,4.6l2.3-4.6h3.2l-4.1,8v3.8H51.4z"/><path fill="#FF7B67" d="M70.8,159.4c0,3.5-2.7,6.1-6.2,6.1c-3.5,0-6.2-2.6-6.2-6.1c0-3.5,2.7-6.1,6.2-6.1C68.1,153.3,70.8,155.9,70.8,159.4z M61.3,159.4c0,2,1.4,3.4,3.3,3.4c1.9,0,3.3-1.4,3.3-3.4s-1.4-3.4-3.3-3.4C62.7,156,61.3,157.4,61.3,159.4z"/><path fill="#FF7B67" d="M72.6,165.3v-11.8h2.9v9.1h4v-9.1h2.9v11.8H72.6z"/><path fill="#FF7B67" d="M98.9,165.3l-1-4.3l-0.6-4.2h-0.2l-0.6,4.2l-1,4.3h-3.6L89,153.5H92l1.4,5.6l0.3,2.7l0.3-2.7l1.4-5.6H99l1.4,5.6l0.3,2.7l0.3-2.7l1.4-5.6h2.9l-2.9,11.8H98.9z"/><path fill="#FF7B67" d="M106.9,165.3v-11.8h2.9v11.8H106.9z"/><path fill="#FF7B67" d="M119.9,162.5v2.7h-7.7v-11.8h2.9v9.1H119.9z"/><path fill="#FF7B67" d="M129.2,162.5v2.7h-7.7v-11.8h2.9v9.1H129.2z"/><path fill="#FF7B67" d="M145.8,158.1v7.2h-9.9v-11.8h8.5v4.6H145.8z M138.8,158.1h2.8v-1.9h-2.8V158.1z M138.8,162.5h4.2v-2h-4.2V162.5z"/><path fill="#FF7B67" d="M150.9,156.2v1.8h4.9v2.7h-4.9v1.9h5.3v2.7H148v-11.8h8.1v2.7H150.9z"/><path fill="#FF7B67" d="M174.8,158l-3,0c-0.5-1.2-1.6-2-3-2c-1.9,0-3.3,1.4-3.3,3.4c0,2,1.4,3.4,3.3,3.4c1.4,0,2.5-0.8,3-2l3,0c-0.6,2.8-3,4.7-6,4.7c-3.5,0-6.2-2.6-6.2-6.1c0-3.5,2.7-6.1,6.2-6.1C171.9,153.3,174.3,155.2,174.8,158z"/><path fill="#FF7B67" d="M188.4,159.4c0,3.5-2.7,6.1-6.2,6.1c-3.5,0-6.2-2.6-6.2-6.1c0-3.5,2.7-6.1,6.2-6.1C185.7,153.3,188.4,155.9,188.4,159.4z M178.9,159.4c0,2,1.4,3.4,3.3,3.4s3.3-1.4,3.3-3.4s-1.4-3.4-3.3-3.4S178.9,157.4,178.9,159.4z"/><path fill="#FF7B67" d="M197.5,158.4v-4.9h2.9v11.8h-3.2l-4.3-7.3l0.2,2.4v4.9h-2.9v-11.8h3.2l4.3,7.3L197.5,158.4z"/><path fill="#FF7B67" d="M208,156.2v9.1h-2.9v-9.1h-3.2v-2.7h9.3v2.7H208z"/><path fill="#FF7B67" d="M219.7,165.3v-3.5h-4.1v3.5h-2.9v-11.8h9.8v11.8H219.7z M215.6,159h4.1v-2.8h-4.1V159z"/><path fill="#FF7B67" d="M236.6,158l-3,0c-0.5-1.2-1.6-2-3-2c-1.9,0-3.3,1.4-3.3,3.4c0,2,1.4,3.4,3.3,3.4c1.4,0,2.5-0.8,3-2l3,0c-0.6,2.8-3,4.7-6,4.7c-3.5,0-6.2-2.6-6.2-6.1c0-3.5,2.7-6.1,6.2-6.1C233.6,153.3,236,155.2,236.6,158z"/><path fill="#FF7B67" d="M243.2,156.2v9.1h-2.9v-9.1h-3.2v-2.7h9.3v2.7H243.2z"/><path fill="#FF7B67" d="M250.9,156.2v1.8h4.9v2.7h-4.9v1.9h5.3v2.7h-8.1v-11.8h8.1v2.7H250.9z"/><path fill="#FF7B67" d="M262.6,153.5c3.4,0,6,2.5,6,5.9s-2.6,5.9-6,5.9h-4.4v-11.8H262.6z M261.1,162.5h1.5c1.9,0,3.2-1.3,3.2-3.2s-1.3-3.2-3.2-3.2h-1.5V162.5z"/><path fill="#FF7B67" d="M278.4,156.2v1.7h5.5v7.4h-8.4v-2.7h5.5v-1.9h-5.5v-7.1h8.4v2.7H278.4z"/><path fill="#FF7B67" d="M298.1,159.4c0,3.5-2.7,6.1-6.2,6.1c-3.5,0-6.2-2.6-6.2-6.1c0-3.5,2.7-6.1,6.2-6.1C295.5,153.3,298.1,155.9,298.1,159.4z M288.7,159.4c0,2,1.4,3.4,3.3,3.4s3.3-1.4,3.3-3.4s-1.4-3.4-3.3-3.4S288.7,157.4,288.7,159.4z"/><path fill="#FF7B67" d="M311.8,159.4c0,3.5-2.7,6.1-6.2,6.1c-3.5,0-6.2-2.6-6.2-6.1c0-3.5,2.7-6.1,6.2-6.1C309.2,153.3,311.8,155.9,311.8,159.4z M302.4,159.4c0,2,1.4,3.4,3.3,3.4s3.3-1.4,3.3-3.4s-1.4-3.4-3.3-3.4S302.4,157.4,302.4,159.4z"/><path fill="#FF7B67" d="M321,158.4v-4.9h2.9v11.8h-3.2l-4.3-7.3l0.2,2.4v4.9h-2.9v-11.8h3.2l4.3,7.3L321,158.4z"/><path fill="#FF7B67" d="M128.5,176.4v9.1h-2.9v-9.1h-3.2v-2.7h9.3v2.7H128.5z"/><path fill="#FF7B67" d="M144.8,179.6c0,3.5-2.7,6.1-6.2,6.1c-3.5,0-6.2-2.6-6.2-6.1c0-3.5,2.7-6.1,6.2-6.1C142.1,173.5,144.8,176.1,144.8,179.6z M135.4,179.6c0,2,1.4,3.4,3.3,3.4c1.9,0,3.3-1.4,3.3-3.4s-1.4-3.4-3.3-3.4C136.7,176.2,135.4,177.6,135.4,179.6z"/><path fill="#FF7B67" d="M163.3,178.2l-3,0c-0.5-1.2-1.6-2-3-2c-1.9,0-3.3,1.4-3.3,3.4c0,2,1.4,3.4,3.3,3.4c1.4,0,2.5-0.8,3-2l3,0c-0.6,2.8-3,4.7-6,4.7c-3.5,0-6.2-2.6-6.2-6.1c0-3.5,2.7-6.1,6.2-6.1C160.4,173.5,162.8,175.4,163.3,178.2z"/><path fill="#FF7B67" d="M176.9,179.6c0,3.5-2.7,6.1-6.2,6.1c-3.5,0-6.2-2.6-6.2-6.1c0-3.5,2.7-6.1,6.2-6.1C174.2,173.5,176.9,176.1,176.9,179.6z M167.4,179.6c0,2,1.4,3.4,3.3,3.4c1.9,0,3.3-1.4,3.3-3.4s-1.4-3.4-3.3-3.4C168.8,176.2,167.4,177.6,167.4,179.6z"/><path fill="#FF7B67" d="M186,178.6v-4.9h2.9v11.8h-3.2l-4.3-7.3l0.2,2.4v4.9h-2.9v-11.8h3.2l4.3,7.3L186,178.6z"/><path fill="#FF7B67" d="M194,176.4v1.9h4.9v2.7H194v4.5h-2.9v-11.8h8.1v2.7H194z"/><path fill="#FF7B67" d="M201.3,185.5v-11.8h2.9v11.8H201.3z"/><path fill="#FF7B67" d="M214.3,181.3l1.7,4.2h-3.1l-1.7-4.2h-1.8v4.2h-2.9v-11.8h9v7.6H214.3z M209.4,178.8h3.5v-2.4h-3.5V178.8z"/><path fill="#FF7B67" d="M227.1,185.5v-7.6l-3.1,4.3h-0.3l-3.1-4.3v7.6h-2.9v-11.8h3.2l2.9,3.9l2.9-3.9h3.2v11.8H227.1z"/><path fill="#FF7B67" d="M235.8,184.1c0,1-0.7,1.7-1.7,1.7s-1.7-0.7-1.7-1.7c0-1,0.7-1.7,1.7-1.7S235.8,183.1,235.8,184.1z M232.7,181.1v-7.4h2.9v7.4H232.7z"/>'
            setTimeout(()=>window.location='${process.env.static_host}'+'/QRForm?code=' +'${code}', 4000)
        } else {
            alert('hm it appears the ticket has already been claimed sorry!')
            meepo.remove()
        }
    })
}
}
`)

