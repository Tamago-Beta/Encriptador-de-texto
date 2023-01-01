btnEncriptar = document.getElementById('btnEncriptar');
btnDesencriptar = document.getElementById('btnDesencriptar');

contentTemplate = document.getElementById('content-Template');
contenidoVacio = document.querySelector('.contenido-vacio');
colDesencriptación = document.querySelector('.col-Desencriptación');

texto = document.getElementById('texto');


function templateHTML() {
    contenidoVacio.classList.add('esconder-vacio');
    contentTemplate.innerHTML = `
        <textarea id="textoEncriptado" readonly class="autoheight"></textarea>
        <input type="button" class="btn btn-copiar" id="btnCopiar" value="Copiar" />
    `
}

function encriptar() {
    if (texto.value) {
        let cadena = texto.value;
        if ((/[A-Z]/g.test(cadena)) || !(/^[a-zA-Z\s]+$/.test(cadena))) {
            animaciónMensaje('.advertencia', 'shakeX');
        } else{
            templateHTML();
            cadena = cadena.replace(/e/mg, "enter");
            cadena = cadena.replace(/o/mg, "ober");
            cadena = cadena.replace(/i/mg, "imes");
            cadena = cadena.replace(/a/mg, "ai");
            cadena = cadena.replace(/u/mg, "ufat");
            document.getElementById('textoEncriptado').textContent = cadena;
            copiarEncriptado();
            heightAutomatico();
            
        }
    } else{
        animaciónMensaje('.contenido-vacio', 'tada');
    }
}

function desencriptar() {
    if (texto.value) {
        let cadena = texto.value;
        if ((/[A-Z]/g.test(cadena)) || !(/^[a-zA-Z\s]+$/.test(cadena))) {
            animaciónMensaje('.advertencia', 'shakeX');
        } else{
            templateHTML();
            cadena = cadena.replace(/enter/img, "e");
            cadena = cadena.replace(/ober/img, "o");
            cadena = cadena.replace(/imes/img, "i");
            cadena = cadena.replace(/ai/img, "a");
            cadena = cadena.replace(/ufat/img, "u");
            document.getElementById('textoEncriptado').textContent = cadena;
            copiarEncriptado();
            heightAutomatico();
        }
    } else{
        animaciónMensaje('.contenido-vacio', 'tada');
    }
}

function copiarEncriptado() {
    let textoEncriptado = document.getElementById('textoEncriptado');
    btnCopiar = document.getElementById('btnCopiar');

    btnCopiar.addEventListener('click', () =>{
        textoEncriptado.select();
        document.execCommand('copy');
        texto.value = "";
    })
    
}

// ========SCRIPTS SECUNDARIOS========
const animaciónMensaje = (element, animation, prefix = 'animate__') =>
  // Creamos una promesa y la retornamos
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    // Cuando la animación finaliza, borramos la clase.
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
  });
const heightAutomatico = () =>{
    let area = document.querySelector('.autoheight');
    area.style.height = `${area.scrollHeight}px`
}

// ========BOTONES========
btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
