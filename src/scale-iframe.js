const iframes = document.querySelectorAll('iframe');

function scaleIframes() {
    iframes.forEach(iframe => {
        const originalWitdh = iframe.offsetWidth;
        const scaleRatio = originalWitdh / 1200;

        iframe.style.width = "1200px";
        iframe.style.transform = `scale(${scaleRatio})`;
        iframe.style.transformOrigin = "top left";

        try {
            const contentHeight = iframe.contentWindow.document.body.scrollHeight;
            iframe.style.height = contentHeight + "px";
            const wrapper = iframe.parentElement;
            wrapper.style.height = (contentHeight * scaleRatio) + "px";
        } catch(e) {
            console.warn('Cannot read iframe content (likely cross-origin):', e);
        }
    })
}

function loadAndScale() {
    window.addEventListener('load', scaleIframes);
}

export {loadAndScale};