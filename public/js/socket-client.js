//Referencias del HTML
const lblOnline = document.querySelector("#lblOnline");
const lblOffline = document.querySelector("#lblOffline");
const txtMensaje = document.getElementById("txtMensaje")
const btnEnviar = document.getElementById("btnEnviar")

const socket = io(); 

socket.on("connect", () => {
    // console.log("Conectado");

    lblOffline.style.display = "none";
    lblOnline.style.display = "";

});

socket.on("disconnect", () => {
    // console.log("Desconectado del servidor");

    lblOffline.style.display = "";
    lblOnline.style.display = "none";

});

socket.on("enviar-mensaje", (payload) => {
    console.log(payload);
});

btnEnviar.addEventListener("click", ()=>{
    const mensaje = txtMensaje.value;
    const payload = {
        mensaje, 
        id: "123asd34",
        fecha: new Date().getTime()
    }
    socket.emit("enviar-mensaje", payload, (id) => {

        console.log("desde el server", id);

    });
});