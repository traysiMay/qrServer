export const Form = (topic: string, formEndPoint: string) => {
  let bg = `url('./static/imgs/brizza.JPG') -8rem -6rem;`;
  if (topic === "raptorhole") {
    bg = `url('./static/imgs/mushroom.png') -8rem -6rem;`;
  }

  let formTitle = "pizza?";
  if (topic === "raptorhole") {
    formTitle = "rsvp ~ valencia room nov 2nd";
  }

  return /*html*/ `
        <head>
        <link href="https://fonts.googleapis.com/css?family=Crimson+Text" rel="stylesheet">
        <style>
        body{
    
    background: ${bg};
    background-size: 30%;
        }
         div#container {
            margin: 0 auto;
            margin-top: 12%;
            font-size: 5em;
         }
         div.header {
            margin-bottom: -4%;
            font-family:'Crimson Text', serif;
         }
         form{
             text-align:center;
         }
         input{
            height: 3em;
            width: 15em;
            border: 3px black solid;
         }
         input[type='text'] {
            font-size: .5em;
            text-align: center;
         }
         input[type='submit'] {
            font-size: 1em;
            width: 5em;
            height: 2em;
            background: red;
         }
         h1 {
             text-align: center;
             background:white;
             opacity:.7;
         }
        </style>
        </head>
        <div id="container">
        <h1>${formTitle}?</h1>
            <form id="form" action="/${formEndPoint}" method="post">
            <p><input type="text" placeholder="name" name="name"></input></p>
            <p><input type="text" placeholder="email" name="email"></input></p>
            <input id="code" name="code" type="hidden"></input>
            <input id="topic" name="topic" type="hidden"></input>
            <p><input type="submit"/></p>
            </form>
        </div>
        <script>
            var form = document.getElementById('form')
            form.addEventListener('submit', function(event){
                event.preventDefault()
                var name = event.target[0].value
                var email = event.target[1].value
                const urlParams = new URLSearchParams(window.location.search);
                const code = urlParams.get('code');
                document.getElementById('code').value = code
                document.getElementById('topic').value = '${topic}'
                if (name.length === 0 || email.length === 0) {
                    return alert('either your name or email appears to be blank')
                }
                function validateEmail(e) {
                        var re = /\\S+@\\S+\\.\\S+/;
                        return re.test(e);
                }
                var validEmail = validateEmail(email)
                if (!validEmail) {
                    return alert('your email is not valid')
                }
                form.submit()
            })
        </script>
        `;
};
