// Dataset
const serviciosData = {
    aprendizaje: {
        img: "https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", 
        title: "Aprendizaje Personalizado para el Éxito Académico",
        text: "Descubre un enfoque único en tutorías diseñado para adaptarse a tus necesidades y ritmo de aprendizaje. Potencia tus habilidades con estrategias personalizadas que te ayudarán a alcanzar tus objetivos académicos y profesionales."
    },
    gestion: {
        img: "https://images.pexels.com/photos/4012966/pexels-photo-4012966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
        title: "Gestión Sencilla y Eficiente",
        text: "Simplifica la administración de tus tutorías con herramientas intuitivas. Organiza tu tiempo, perfiles y sesiones fácilmente, asegurando una experiencia fluida y sin complicaciones."
    },
    calidad: {
        img: "https://images.pexels.com/photos/3885731/pexels-photo-3885731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
        title: "Calidad Garantizada en Cada Tutoría",
        text: "Confía en una plataforma que prioriza la excelencia. Nuestros tutores son evaluados y calificados para garantizarte una experiencia educativa de primer nivel que cumpla con tus expectativas."
    },
    acceso: {
        img: "https://images.pexels.com/photos/1766604/pexels-photo-1766604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
        title: "Acceso Seguro y Confiable",
        text: "Protege tu información con nuestra plataforma diseñada con altos estándares de seguridad. Disfruta de una experiencia confiable gracias a sistemas de autenticación robustos y encriptación de datos."
    },
};

// Función para actualizar el contenido del artículo
function updateServicio(selectedId) {
    const data = serviciosData[selectedId];
    document.getElementById('servicios-img').src = data.img;
    document.getElementById('servicios-title').textContent = data.title;
    document.getElementById('servicios-text').textContent = data.text;
}

// Añadir manejadores de eventos a los botones de radio
document.querySelectorAll('input[name="texto"]').forEach(radio => {
    radio.addEventListener('change', function() {
        if (this.checked) {
            updateServicio(this.id);
        }
    });
});

// Actualizar el contenido del servicio al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    updateServicio(document.querySelector('input[name="texto"]:checked').id);
});