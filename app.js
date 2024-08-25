document.addEventListener("DOMContentLoaded", () => {
    var botonEncriptar = document.querySelector(".btn-encriptar");
    var botonDesencriptar = document.querySelector(".btn-desencriptar");
    var salida = document.querySelector(".contenedorsalida");
    var contenedor = document.querySelector(".contenedor-parrafo");
    var resultado = document.querySelector(".texto-resultado");
    const botonCopiar = document.querySelector(".btn-copiar"); 

    botonEncriptar.onclick = encriptar;
    botonDesencriptar.onclick = desencriptar;
    botonCopiar.addEventListener("click", copiar);

    function encriptar() {
        ocultarAdelante();
        var cajatexto = recuperarTexto();
        resultado.textContent = encriptarTexto(cajatexto);
    }

    function desencriptar() {
        ocultarAdelante();
        var cajatexto = recuperarTexto();
        resultado.textContent = desencriptarTexto(cajatexto);
    }

    function recuperarTexto() {
        var cajatexto = document.querySelector(".cajatexto");
        return cajatexto.value;
    }

    function ocultarAdelante() {
        salida.classList.add("ocultar");
        contenedor.classList.add("ocultar");
    }

    function encriptarTexto(mensaje) {
        var texto = mensaje;
        var textoFinal = "";

        for (var i = 0; i < texto.length; i++) {
            if (texto[i] == "a") {
                textoFinal += "ai";
            } else if (texto[i] == "e") {
                textoFinal += "enter";
            } else if (texto[i] == "i") {
                textoFinal += "imes";
            } else if (texto[i] == "o") {
                textoFinal += "ober";
            } else if (texto[i] == "u") {
                textoFinal += "ufat";
            } else {
                textoFinal += texto[i];
            }
        }
        return textoFinal;
    }

    function desencriptarTexto(mensaje) {
        var texto = mensaje;
        var textoFinal = "";

        for (var i = 0; i < texto.length; i++) {
            if (texto[i] == "a" && texto.substring(i, i + 2) == "ai") {
                textoFinal += "a";
                i += 1; // Salta el siguiente carácter
            } else if (texto[i] == "e" && texto.substring(i, i + 5) == "enter") {
                textoFinal += "e";
                i += 4; // Salta los siguientes caracteres
            } else if (texto[i] == "i" && texto.substring(i, i + 4) == "imes") {
                textoFinal += "i";
                i += 3; // Salta los siguientes caracteres
            } else if (texto[i] == "o" && texto.substring(i, i + 4) == "ober") {
                textoFinal += "o";
                i += 3; // Salta los siguientes caracteres
            } else if (texto[i] == "u" && texto.substring(i, i + 4) == "ufat") {
                textoFinal += "u";
                i += 3; // Salta los siguientes caracteres
            } else {
                textoFinal += texto[i];
            }
        }
        return textoFinal;
    }

    function copiar() {
        var contenido = document.querySelector(".texto-resultado").textContent;
        navigator.clipboard.writeText(contenido);
        console.log("Texto copiado: " + contenido); 
    }
});
