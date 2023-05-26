export async function consultarReservas(){

//1.URL de servicio
const URL="http://pruegaapi20231.vercel.app/buscarReservas"

//2. Configurar la peticion del envio
const PETICION={
method:"GET",//GET, POST PUT U DELETE
//headers:{},// DATOS DE CONTROL
//body:""//POST PUT

}
//3. Siempre debo Comunicarme con el back
//FETCH
let respuestaDelservidor=await fetch(URL,PETICION)
let datosConsultados=respuestaDelservidor=await respuestaDelservidor.json()
return datosConsultados
}