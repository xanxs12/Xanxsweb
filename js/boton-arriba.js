function irArriba(pxPantalla)
    {window.addEventListener('scroll', () => {
        var scroll = document.documentElement.scrollTop;
        var botonArriba = document.getElementById('scroll-arriba')
        // Si el scroll > 350, entonces muestro el boton 'scroll-arriba'
        if(scroll > pxPantalla) {
            botonArriba.style.opacity=0.8;
            botonArriba.style.transform='scale(1)';
        }
        // De l ocontratio oculto el boton 'scroll-arriba'
        else {
        botonArriba.style.opacity=0;
        botonArriba.style.transform='scale(0)';
        }
    })
}   
irArriba(250);