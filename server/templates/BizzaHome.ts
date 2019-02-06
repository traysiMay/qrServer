
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
            path: "${process.env.static_host}/static/bizza.json"
        })

        const url = '${process.env.static_host}/fetchDog'

        fetch(url)
                .then(function(response){ return response.json() } )
                .then(function(data){
            console.log(data)
        })
        data = {cum: true}
        let fetchData = { 
            method: 'POST', 
            body: data,
            headers: new Headers()
        }
        fetch(url+'b', fetchData)
        .then(function(data) {
            return data.json()
        })
        .then(function(dog){
            console.log(dog)
        })
        window.onload = () => document.getElementsByTagName('svg')[0].setAttribute("viewBox", "500 300 1000 1000 ")
    </script>
    `)

}

