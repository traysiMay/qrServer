export const Emails = emailList => {
  return /*html*/ `
        <!DOCTYPE html>
        <html>
        <body>
        <div id="email-list">${emailList}</div>
        <table><tr><th>emailz</th><th>name</th></td></table>
        <input type="text" id="cipho" /><button id="buttt" onClick="decrypt()">decrypt</button>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js"></script>
            <script>
                function decrypt(){
                    var bytes = CryptoJS.AES.decrypt('${emailList}', document.getElementById('cipho').value)
                    var plainText = bytes.toString(CryptoJS.enc.Utf8)
                    if (plainText) {
                        document.getElementById("email-list").innerHTML = plainText
                        var parsedList = JSON.parse(plainText)
                        parsedList.forEach(l => {
                            var td = document.createElement('tr')
                            var email = document.createElement('td')
                            email.innerHTML = l[0]
                            var name = document.createElement('td')
                            name.innerHTML = l[1]
                            td.appendChild(email)
                            td.appendChild(name)
                            document.querySelector('table').appendChild(td)
                        })
                    } else {
                        alert("na ah ah ~ that isn't the magic word ~:)")
                    }
                }
            </script>
            </body>
            </html>
            `;
};
