document.addEventListener('click', (event) => {
    // Elimina la clase 'active' de todos los inputs
    document.querySelectorAll('.form-cv-left input').forEach(input => {
        input.classList.remove('active');
    });

    // Si el click es en un input, añade la clase 'active' a ese input
    if (event.target.matches('.form-cv-left input')) {
        event.target.classList.add('active');
    }
});

document.addEventListener('click', (event) => {
    // Elimina la clase 'active' de todos los inputs
    document.querySelectorAll('.form-cv-right textarea').forEach(input => {
        input.classList.remove('active');
    });

    // Si el click es en un input, añade la clase 'active' a ese input
    if (event.target.matches('.form-cv-right textarea')) {
        event.target.classList.add('active');
    }
});

document.addEventListener('click', (event) => {
    // Elimina la clase 'active' de todos los inputs
    document.querySelectorAll('.formulario-derecha textarea').forEach(input => {
        input.classList.remove('active');
    });

    // Si el click es en un input, añade la clase 'active' a ese input
    if (event.target.matches('.formulario-derecha textarea')) {
        event.target.classList.add('active');
    }
});

document.addEventListener('click', (event) => {
    // Elimina la clase 'active' de todos los inputs
    document.querySelectorAll('.formulario-izquierda input').forEach(input => {
        input.classList.remove('active');
    });

    // Si el click es en un input, añade la clase 'active' a ese input
    if (event.target.matches('.formulario-izquierda input')) {
        event.target.classList.add('active');
    }
});


