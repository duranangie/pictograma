function cargarPintograma(){
    fetch("pictograma.json")
        .then(respuesta => respuesta.json())
        .then(datos=>{
            console.log(datos)
        })
}




document.addEventListener("DOMContentLoaded",()=>{
    fetch("pictograma.json")
    .then(respuesta => respuesta.json())
    .then(data=>{
        const container = document.querySelector('.container');
        data.forEach(picto=>{
            const card = document.createElement('div');
            card.className = "card";

            const img = document.createElement('img');
            img.src = picto.imagen;
            img.alt = picto.frase;

            const p = document.createElement("p");
            p.textContent = picto.frase;

            card.addEventListener('click',() =>{
                const speech = new SpeechSynthesisUtterance(picto.frase);
                speech.lang = 'es-Es';
                window.speechSynthesis.speak(speech);
            });

            card.appendChild(img);
            card.appendChild(p)
            container.appendChild(card)
        });
    })
    .catch(error => console.error("Error en el json:",error));

});


cargarPintograma()