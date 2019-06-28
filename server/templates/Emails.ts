export const Emails = (emailList) => {
        return (/*html*/`
        <!DOCTYPE html>
        <html>
        <body>
        <div id="email-list">${emailList}</div>
        <input type="text" id="cipho" /><button id="buttt" onClick="decrypt()">decrypt</button>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js"></script>
            <script>
                function decrypt(){
                    var bytes = CryptoJS.AES.decrypt('${emailList}', document.getElementById('cipho').value)
                    var plainText = bytes.toString(CryptoJS.enc.Utf8)
                    if (plainText) {
                        document.getElementById("email-list").innerHTML = plainText
                    } else {
                        alert("na ah ah ~ that isn't the magic word ~:)")
                    }
                }
            </script>
            </body>
            </html>
            `)
}