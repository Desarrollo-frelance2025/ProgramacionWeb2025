//Usuarios
const userMedicoGuardia = "medicoGuardia1";
const pswMedicoGuardia = "1234";
const emailMedicoGuardia = "medicoGuardia@healthway.com";

var inputUser = "";
var inputPass = "";

function prevenirSubmit(event){
    event.preventDefault(); // Previene la accion por defecto del evento
    event.stopPropagation(); // Impide que el evento se propague (avance) a las capas superiores en el DOM.
}

function goApp(link, element){
    let elementHref = document.getElementById(element);
    
    elementHref.href = link;
    elementHref.click();
}

function showPassword(){
    let inputPass = document.getElementById("inputPass");

    if(inputPass.type === "password"){
        inputPass.type = "text"
    }else{
        inputPass.type = "password"
    }
}

function validateLoginForm(event){
    inputUser = document.getElementById("inputUser").value;
    inputPass = document.getElementById("inputPass").value;
    let loginForm = document.getElementById("loginForm");
    let invalidUser = document.getElementById("invalidUser");

    if(!loginForm.checkValidity()){
        prevenirSubmit(event);
        loginForm.classList.add('was-validated');// Agrega la clase "was-validated" de BS que da los estilos a los objetos (bordes, colores, iconos) sean validados o no
                                                // teniendo en cuenta el required, pattern, type
    };

    //Usuario Medico de Guardia
    if(inputUser === userMedicoGuardia && inputPass === pswMedicoGuardia){
        goApp("./GestionInternaciones.html", "loginBtn");
        loginForm.reset();
    }else{
        prevenirSubmit(event);
        invalidUser.classList.add("visibility-show");
        invalidUser.classList.remove("visibility-remove");
    }
}

function validateRecoveryForm(event){
    let pswRecoveryForm = document.getElementById("pswRecoveryForm");
    let invalidEmail = document.getElementById("invalidEmail");
    let inputEmail = document.getElementById("inputEmail").value;

    if(!pswRecoveryForm.checkValidity()){
        prevenirSubmit(event);
        pswRecoveryForm.classList.add('was-validated');
    };

    if(inputEmail === emailMedicoGuardia){
        prevenirSubmit(event);
        validEmail.classList.add("visibility-show");
        validEmail.classList.remove("visibility-remove");

        //enviarEmail();
        pswRecoveryForm.reset();
    }else{
        prevenirSubmit(event);
        invalidEmail.classList.add("visibility-show");
        invalidEmail.classList.remove("visibility-remove");
    }
}

window.onload = function() {
    document.getElementById("loginForm").addEventListener("submit", validateLoginForm);
    document.getElementById("pswRecoveryForm").addEventListener("submit", validateRecoveryForm);
    document.getElementById("btnShowPsw").addEventListener("click", showPassword);

    //Harcodie los datos estos datos podrian venir de una api externa luego veremos
    /*const kpiData = {
        totalCamas: 150,
        camasOcupadas: 125,
        medicosGuardia: 3,
        enfermerosGuardia: 8,
        alertasActivas: 3
    };

    const tasa = ((kpiData.camasOcupadas / kpiData.totalCamas) * 100).toFixed(1);


    document.getElementById('ocupadasValue').textContent = `${kpiData.camasOcupadas} / ${kpiData.totalCamas}`;
    document.getElementById('tasaOcupacionValue').textContent = `${tasa}%`;
    document.getElementById('personalGuardiaValue').textContent = `${kpiData.medicosGuardia} Médicos, ${kpiData.enfermerosGuardia} Enfermeros`;
    document.getElementById('alertasActivasValue').textContent = kpiData.alertasActivas;


    // Grafico ocupacion chartjs 
    const ctx = document.getElementById('ocupacionChart').getContext('2d');

    const ocupacionChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
            datasets: [{
                label: 'Camas Ocupadas',
                data: [110, 115, 120, 125, 128, 125, 130], // Estos datos los cargue al azar
                backgroundColor: 'rgba(13, 110, 253, 0.2)',
                borderColor: 'rgba(13, 110, 253, 1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: false,
                    title: {
                        display: true,
                        text: 'Nº de Camas'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });*/


};