function renderLogin() {

    const login = document.createElement('div');
    login.className = "div-banner";
    login.appendChild(bannerElemento());
    login.appendChild(formularioElemento());

    return login;
}

function bannerElemento() {
    const divImg = document.createElement('div');
    divImg.className = "div-img";
    divImg.innerHTML = `<img src="https://github.com/ROCKEMMA/img/blob/main/imgTareas.jpg?raw=true" alt="img banner">`;
    return divImg;
}

function formularioElemento(){
    const loginForm = document.createElement('div');
    loginForm.className = 'login-form';

    // Sección de texto
    const formContainer = document.createElement('div');
    formContainer.className = 'form-container';

    const greeting = document.createElement('span');
    greeting.className = 'greeting';
    greeting.textContent = 'Hola';

    const p = document.createElement('p');
    p.textContent = 'Bienbenido a multitasking';

    // Sección del formulario
    const form = document.createElement('form');

    const formTitle = document.createElement('span');
    formTitle.textContent = 'Iniciar Sesión';

    // Crear campo de correo electrónico
    const emailLabel = document.createElement('label');
    emailLabel.htmlFor = 'email';
    const emailInput = document.createElement('input');
    emailInput.placeholder = 'Correo electrónico';
    emailInput.type = 'email';
    emailInput.id = 'email';
    emailInput.required = true;
    emailLabel.appendChild(emailInput);

    // Crear campo de contraseña
    const passwordLabel = document.createElement('label');
    passwordLabel.htmlFor = 'password';
    const passwordInput = document.createElement('input');
    passwordInput.placeholder = 'Contraseña';
    passwordInput.type = 'password';
    passwordInput.id = 'password';
    passwordInput.required = true;
    passwordLabel.appendChild(passwordInput);

    // Crear botón de prueba beta
    const betaButton = document.createElement('button');
    betaButton.type = 'button';
    betaButton.textContent = 'Probar beta';
    betaButton.addEventListener('click', () => {
         window.location.href = 'components/worckPanel/worckPanel.html';
    });

    // Crear botón de ingresar
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Ingresar';

    // Crear texto de "Crear Cuenta"
    const createAccountSpan = document.createElement('span');
    createAccountSpan.className = "text-crear-cuenta"
    createAccountSpan.textContent = 'Crear Cuenta';

    // Agregar elementos al formulario
    form.appendChild(formTitle);
    form.appendChild(emailLabel);
    form.appendChild(passwordLabel);
    form.appendChild(betaButton);
    form.appendChild(submitButton);
    form.appendChild(createAccountSpan);

    // Agregar elementos al contenedor del formulario
    formContainer.appendChild(greeting);
    formContainer.appendChild(p);
    formContainer.appendChild(form);

    // Agregar elementos al contenedor del formulario de inicio de sesión
    loginForm.appendChild(formContainer);

    return loginForm;
}


export { renderLogin }