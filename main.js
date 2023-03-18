let button = document.getElementById("notification");

button.addEventListener("click", function() {
    notify();
});


function notify() {
    if (!("Notification" in window)) {

        alert("Tu navegador no acepta notificaciones");

    }
    else if (Notification.permission === "granted") {

        let notification = new Notification("No hay notificaciones disponibles");


    }
    else if (Notification.permission !== "denied") {

        Notification.requestPermission(function(){

            if (Notification.permission === "granted") {
                let notificacion = new Notification("No hay notificaciones disponibles");
            }

        });

    }
}