const iframes = document.querySelectorAll('iframe');

function scaleIframes() {
    iframes.forEach(iframe => {
        const originlWitdh = iframe.offsetWidth;
        const originlHeight = iframe.offsetHeight;
        const scaleRatio = originlWitdh / 1200;

        iframe.style.width = "1200px";
        iframe.style.height = originlHeight / scaleRatio;
        iframe.style.transform = `scale(${scaleRatio})`;
        iframe.style.transformOrigin = "top left";
    })
}

function loadAndScale() {
    window.addEventListener('load', scaleIframes);
}

export {loadAndScale};