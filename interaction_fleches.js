const slide = ["ImageActu1.jpg", "image_actu_2.jpg", "Image actu 3.jpg"];
let numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];

document.getElementById("slide").src = slide[numero];

const legendes = document.querySelectorAll('.legende');
legendes.forEach(legende => {
    legende.classList.remove('active');
});

legendes[numero].classList.add('active');
}
setInterval("ChangeSlide(1)", 4000);
