 // Función de encriptación
function encrypt(text) {
    return text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

// Función de desencriptación
function decrypt(text) {
    return text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

// Captura de elementos
const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text');
const encryptBtn = document.getElementById('encrypt-btn');
const decryptBtn = document.getElementById('decrypt-btn');
const copyBtn = document.getElementById('copy-btn');

// Evento para encriptar
encryptBtn.addEventListener('click', () => {
    const encryptedText = encrypt(inputText.value);
    outputText.value = encryptedText;
});

// Evento para desencriptar
decryptBtn.addEventListener('click', () => {
    const decryptedText = decrypt(inputText.value);
    outputText.value = decryptedText;
});

// Evento para copiar el texto al portapapeles
copyBtn.addEventListener('click', () => {
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
});

