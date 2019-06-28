
export const BizzaHome = () => {
    return(/*html*/`
    <div id="animationContainer"></div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.4.3/lottie.min.js" ></script>
    <script>
        var animation = bodymovin.loadAnimation({
            container: document.getElementById('animationContainer'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '${process.env.static_host}/static/bizza.json'
        })

    
        window.onload = () => document.getElementsByTagName('svg')[0].setAttribute("viewBox", "500 300 1000 1000 ")
    </script>
    `)

}

