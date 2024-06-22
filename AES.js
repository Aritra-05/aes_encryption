// Function to convert a string to a padded hexadecimal string of 128 bits (16 bytes)
function stringToHex128Bit(str) {
    let hex = '';
    for (let i = 0; i < str.length; i++) {
        hex += str.charCodeAt(i).toString(16).padStart(2, '0');
    }
    return hex.padStart(32, '0').toUpperCase(); // Pad to 32 hex chars (16 bytes)
}


// Example decryption using CryptoJS
function decryptAES(ciphertextHex, key) {
    // Convert key and ciphertext to WordArray
    var keyWordArray = CryptoJS.enc.Hex.parse(key);
    var ciphertextWordArray = CryptoJS.enc.Hex.parse(ciphertextHex);

    // Decrypt ciphertext using AES in ECB mode without padding
    var decrypted = CryptoJS.AES.decrypt(
        { ciphertext: ciphertextWordArray },
        keyWordArray,
        {
            mode: CryptoJS.mode.ECB, // Electronic Codebook (ECB) mode
            padding: CryptoJS.pad.NoPadding // No padding
        }
    );

    return decrypted;
}

// -----------------------------------------------------------------------------
// Selecting the elements
var messageInput = document.getElementById("inp1");
var keyInput = document.getElementById("inp2");
var outputElement = document.getElementById("output");
var outputElement1 = document.getElementById("output1");
var outputElement2 = document.getElementById("output2");
var outputElement3 = document.getElementById("output3");
var button = document.getElementById("btn2");

// Adding click event listener to the button
button.addEventListener("click", function () {
    // Getting the values from input fields
    var message = messageInput.value;
    var key = keyInput.value;
    var hexPattern = /^[0-9A-Fa-f]+$/;


    if (!hexPattern.test(message)) {
        alert('Please enter a valid hexadecimal value in Cipher Text.');
        messageInput.value = '';
        keyInput.value = '';
        outputElement.innerText = '';
        outputElement1.innerText = '';
        outputElement2.innerText = '';
        outputElement3.innerText = '';
    }
    else {
        // Convert strings to padded hex strings of 128 bits (16 bytes)
        var keyHex = stringToHex128Bit(key);

        // Convert decrypted message from hex to string
        var decryptedMessage = decryptAES(message, keyHex);

        // Update the innerHTML of the output paragraphs
        outputElement.innerHTML = decryptedMessage; // Assuming decrypted message is plain text
        outputElement1.innerHTML = message;
        outputElement2.innerHTML = keyHex;
        outputElement3.innerHTML = decryptedMessage.toString(CryptoJS.enc.Utf8);
    }

});

// ------------------------------------------------------------------------------------------------


var messageInput1 = document.getElementById("inp11");
var keyInput1 = document.getElementById("inp12");
var outputElement11 = document.getElementById("output11");
var outputElement22 = document.getElementById("output22");
var outputElement33 = document.getElementById("output33");
var button1 = document.getElementById("btn1");


// Adding click event listener to the button
button1.addEventListener("click", function () {
    // Getting the values from input fields
    var message1 = messageInput1.value;
    var key1 = keyInput1.value;

    // Convert strings to padded hex strings of 16 bytes
    var messageHex1 = stringToHex128Bit(message1);
    var keyHex1 = stringToHex128Bit(key1);

    // Convert hexadecimal strings to WordArray
    var messageWordArray1 = CryptoJS.enc.Hex.parse(messageHex1);
    var keyWordArray1 = CryptoJS.enc.Hex.parse(keyHex1);

    // Encrypt the message using AES without padding
    var encrypted1 = CryptoJS.AES.encrypt(messageWordArray1, keyWordArray1, {
        mode: CryptoJS.mode.ECB, // Electronic Codebook (ECB) mode
        padding: CryptoJS.pad.NoPadding // No padding
    });

    // Update the innerHTML of the output paragraphs
    outputElement33.innerHTML = encrypted1.ciphertext.toString().toUpperCase();
    outputElement11.innerHTML = messageHex1;
    outputElement22.innerHTML = keyHex1;
});

// ------------------------------------------------------------------------------------------


var text1 = document.getElementById("txt1");
var text_btn_1 = document.getElementById("btn3");
var out_1 = document.getElementById("out1");

text_btn_1.addEventListener("click", function () {
    // Getting the values from input fields
    var text11 = text1.value;


    // Convert strings to padded hex strings of 16 bytes
    var texthex1 = stringToHex128Bit(text11);

    // Update the innerHTML of the output paragraphs
    out_1.innerHTML = texthex1;
});

// ------------------------------------------------------------------------------------------

function hexToString(hex) {
    var str = '';
    for (var i = 0; i < hex.length; i += 2) {
        var charCode = parseInt(hex.substr(i, 2), 16);
        str += String.fromCharCode(charCode);
    }
    return str;
}

var text2 = document.getElementById("txt2");
var text_btn_2 = document.getElementById("btn4");
var out_2 = document.getElementById("out2");

text_btn_2.addEventListener("click", function () {
    // Getting the values from input fields
    var text22 = text2.value;
    var hexPattern = /^[0-9A-Fa-f]+$/;

    if (!hexPattern.test(text22)) {
        alert('Please enter a valid hexadecimal value.');
        text2.value = '';
        out_2.innerText = '';
    }
    else {
        var texthex2 = hexToString(text22);
        out_2.innerHTML = texthex2;
    }
    // Update the innerHTML of the output paragraphs

});

// ------------------------------------------------------------------------------------------

var text3 = document.getElementById("inp31");
var text4 = document.getElementById("inp32");
var text_btn_3 = document.getElementById("btn5");
var out_3 = document.getElementById("out3");


text_btn_3.addEventListener("click", function () {
    // Getting the values from input fields
    var text33 = text3.value;
    var text44 = text4.value;

    if (text33 == text44) {
        out_3.style.background = "#17c604";
        out_3.innerHTML = "Matched";
    }
    else {
        out_3.style.background = "#e80303";
        out_3.innerHTML = "Not Matched";
    }

    // Update the innerHTML of the output paragraphs

});

// ------------------------------------------------------------------------------------------

var button11 = document.getElementById("btn11");
var button12 = document.getElementById("btn12");
var button13 = document.getElementById("btn13");
var button14 = document.getElementById("btn14");
var button15 = document.getElementById("btn15");
var button16 = document.getElementById("btn16");
var button17 = document.getElementById("btn17");



var container = document.getElementsByClassName("container")[0];
var container1 = document.getElementsByClassName("container1")[0];
var container2 = document.getElementsByClassName("container2")[0];
var container3 = document.getElementsByClassName("container3")[0];
var container4 = document.getElementsByClassName("container4")[0];
var container5 = document.getElementsByClassName("container5")[0];
var container6 = document.getElementsByClassName("container6")[0];
var container7 = document.getElementsByClassName("container7")[0];



button11.addEventListener('click', function () {

    container.style.display = 'none';
    container1.style.display = 'block';
    container2.style.display = 'none';
    container3.style.display = 'none';
    container4.style.display = 'none';
    container5.style.display = 'none';
    container6.style.display='none';
    container7.style.display='none';

});

button12.addEventListener('click', function () {

    container.style.display = 'none';
    container1.style.display = 'none';
    container2.style.display = 'block';
    container3.style.display = 'none';
    container4.style.display = 'none';
    container5.style.display = 'none';
    container6.style.display='none';
    container7.style.display='none';

});

button13.addEventListener('click', function () {

    container.style.display = 'none';
    container1.style.display = 'none';
    container2.style.display = 'none';
    container3.style.display = 'block';
    container4.style.display = 'none';
    container5.style.display = 'none';
    container6.style.display='none';
    container7.style.display='none';

});

button14.addEventListener('click', function () {

    container.style.display = 'none';
    container1.style.display = 'none';
    container2.style.display = 'none';
    container3.style.display = 'none';
    container4.style.display = 'block';
    container5.style.display = 'none';
    container6.style.display='none';
    container7.style.display='none';

});

button15.addEventListener('click', function () {

    container.style.display = 'none';
    container1.style.display = 'none';
    container2.style.display = 'none';
    container3.style.display = 'none';
    container4.style.display = 'none';
    container5.style.display = 'block';
    container6.style.display='none';
    container7.style.display='none';
});

button16.addEventListener('click', function () {

    container.style.display = 'none';
    container1.style.display = 'none';
    container2.style.display = 'none';
    container3.style.display = 'none';
    container4.style.display = 'none';
    container5.style.display = 'none';
    container6.style.display='block';
    container7.style.display='none';
});

button17.addEventListener('click', function () {

    container.style.display = 'none';
    container1.style.display = 'none';
    container2.style.display = 'none';
    container3.style.display = 'none';
    container4.style.display = 'none';
    container5.style.display = 'none';
    container6.style.display='none';
    container7.style.display='block';
});


var back1 = document.getElementById("btn_back_1");
var back2 = document.getElementById("btn_back_2");
var back3 = document.getElementById("btn_back_3");
var back4 = document.getElementById("btn_back_4");
var back5 = document.getElementById("btn_back_5");
var back6 = document.getElementById("btn_back_6");
var back7 = document.getElementById("btn_back_7");



back1.addEventListener('click', function () {

    container.style.display = 'block';
    container1.style.display = 'none';
    container2.style.display = 'none';
    container3.style.display = 'none';
    container4.style.display = 'none';
    container5.style.display = 'none';
    container6.style.display='none';
    container7.style.display='none';

});

back2.addEventListener('click', function () {

    container.style.display = 'block';
    container1.style.display = 'none';
    container2.style.display = 'none';
    container3.style.display = 'none';
    container4.style.display = 'none';
    container5.style.display = 'none';
    container6.style.display='none';
    container7.style.display='none';

});

back3.addEventListener('click', function () {

    container.style.display = 'block';
    container1.style.display = 'none';
    container2.style.display = 'none';
    container3.style.display = 'none';
    container4.style.display = 'none';
    container5.style.display = 'none';
    container6.style.display='none';
    container7.style.display='none';

});

back4.addEventListener('click', function () {

    container.style.display = 'block';
    container1.style.display = 'none';
    container2.style.display = 'none';
    container3.style.display = 'none';
    container4.style.display = 'none';
    container5.style.display = 'none';
    container6.style.display='none';
    container7.style.display='none';

});

back5.addEventListener('click', function () {

    container.style.display = 'block';
    container1.style.display = 'none';
    container2.style.display = 'none';
    container3.style.display = 'none';
    container4.style.display = 'none';
    container5.style.display = 'none';
    container6.style.display='none';
    container7.style.display='none';

});

back6.addEventListener('click', function () {

    container.style.display = 'block';
    container1.style.display = 'none';
    container2.style.display = 'none';
    container3.style.display = 'none';
    container4.style.display = 'none';
    container5.style.display = 'none';
    container6.style.display='none';
    container7.style.display='none';

});

back7.addEventListener('click', function () {

    container.style.display = 'block';
    container1.style.display = 'none';
    container2.style.display = 'none';
    container3.style.display = 'none';
    container4.style.display = 'none';
    container5.style.display = 'none';
    container6.style.display='none';
    container7.style.display='none';

});


var clr1 = document.getElementById("btn_clr_1");
var clr2 = document.getElementById("btn_clr_2");
var clr3 = document.getElementById("btn_clr_3");
var clr4 = document.getElementById("btn_clr_4");
var clr5 = document.getElementById("btn_clr_5");
var clr6 = document.getElementById("btn_clr_6");
var clr7 = document.getElementById("btn_clr_7");



clr1.addEventListener("click", function () {
    messageInput1.value = '';
    keyInput1.value = '';
    outputElement11.innerText = '';
    outputElement22.innerText = '';
    outputElement33.innerText = '';
});

clr2.addEventListener("click", function () {
    messageInput.value = '';
    keyInput.value = '';
    outputElement.innerText = '';
    outputElement1.innerText = '';
    outputElement2.innerText = '';
    outputElement3.innerText = '';
});

clr3.addEventListener("click", function () {
    text1.value = '';
    out_1.innerText = '';
});

clr4.addEventListener("click", function () {
    text2.value = '';
    out_2.innerText = '';
});

clr5.addEventListener("click", function () {
    text3.value = '';
    text4.value = '';
    out_3.innerText = '';
    out_3.style.background = "#ffffff";
});

var enc_key_img = document.getElementById("encryptionKey");
var enc_img = document.getElementById("encryptedImage");
var img_inp = document.getElementById("imageInput");

clr6.addEventListener("click", function (){
    img_inp.value='';
    enc_key_img.value = '';
    enc_img.innerText='';
});

var dec_key_img = document.getElementById("decryptionKey");
var enc_data = document.getElementById("encryptedData");
var img_out = document.getElementById("decryptedImage");
var dwn_key = document.getElementById("download");
clr7.addEventListener("click", function (){
    img_out.innerText='';
    dec_key_img.value = '';
    enc_data.value='';
    dwn_key.style.background = "#4b0218";
});

// -----------------------------------------------------------------------------------------------------------

let imageData = '';

document.getElementById('imageInput').addEventListener('change', handleImageUpload);

function handleImageUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        imageData = e.target.result;
    };

    reader.readAsDataURL(file);
}

function encryptImage() {
    const key = document.getElementById('encryptionKey').value;
    if (!key) {
        alert("Please enter an encryption key.");
        return;
    }

    if (!imageData) {
        alert("Please upload an image.");
        return;
    }

    const encrypted = CryptoJS.AES.encrypt(imageData, key).toString();
    document.getElementById('encryptedImage').innerText = encrypted;
}


function copyText() {
    const encryptedText = document.getElementById('encryptedImage').innerText;
    if (!encryptedText) {
        alert("No text to copy.");
        return;
    }

    navigator.clipboard.writeText(encryptedText)
        .then(() => {
            alert("Text copied to clipboard.");
        })
        .catch(err => {
            console.error('Could not copy text: ', err);
        });
}

// -----------------------------------------------------------------------------------------------------------



function decryptImage() {
    const encryptedData = document.getElementById('encryptedData').value;
    const key = document.getElementById('decryptionKey').value;
    if (!key) {
        alert("Please enter a decryption key.");
        img_out.innerText='';
        return;
    }

    try {
        const decrypted = CryptoJS.AES.decrypt(encryptedData, key).toString(CryptoJS.enc.Utf8);
        if (!decrypted) {
            throw new Error("Decryption failed");
        }

        const img = document.createElement('img');
        img.src = decrypted;
        img.height = 200; // Set the desired height
        img.width = 200;
        document.getElementById('decryptedImage').innerHTML = '';
        document.getElementById('decryptedImage').appendChild(img);
        dwn_key.style.background = "#17c604";
    } catch (e) {
        dwn_key.style.background = "#e80303";
        img_out.innerText='';
        alert("Decryption failed. Please check the encrypted data and key.");
    }
}

function downloadDecrypted() {
    const decryptedImage = document.querySelector('#decryptedImage img');
    if (!decryptedImage) {
        alert("No decrypted image available.");
        return;
    }

    const downloadLink = document.createElement('a');
    downloadLink.href = decryptedImage.src;
    downloadLink.download = 'decrypted_image.png';
    downloadLink.click();
}

