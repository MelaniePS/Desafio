document.getElementById('encryptBtn').addEventListener('click', function() {
    let inputText = document.getElementById('inputText').value;
    let encryptedText = encryptText(inputText);
    showResult(encryptedText);
});

document.getElementById('decryptBtn').addEventListener('click', function() {
    let inputText = document.getElementById('inputText').value;
    let decryptedText = decryptText(inputText);
    showResult(decryptedText);
});

document.getElementById('copyBtn').addEventListener('click', function() {
    let outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
});

function encryptText(text) {
    let encryptionRules = {
        "a": "ai",
        "e": "enter",
        "i": "imes",
        "o": "ober",
        "u": "ufat"
    };

    return text.replace(/[aeiou]/g, function(match) {
        return encryptionRules[match];
    });
}

function decryptText(text) {
    let decryptionRules = {
        "ai": "a",
        "enter": "e",
        "imes": "i",
        "ober": "o",
        "ufat": "u"
    };

    return text.replace(/ai|enter|imes|ober|ufat/g, function(match) {
        return decryptionRules[match];
    });
}

function showResult(resultText) {
    const outputText = document.getElementById('outputText');
    const placeholderImg = document.getElementById('placeholderImg');
    const placeholderText = document.getElementById('placeholderText');

    if (resultText.trim() !== "") {
        placeholderImg.style.display = 'none';
        placeholderText.style.display = 'none';
        outputText.style.display = 'block';
        outputText.value = resultText;
    } else {
        placeholderImg.style.display = 'block';
        placeholderText.style.display = 'block';
        outputText.style.display = 'none';
        outputText.value = "";
    }
}
