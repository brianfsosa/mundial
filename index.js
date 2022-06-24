const days = document.getElementById('days')

restaFechas = function(f1,f2)
 {
 let aFecha1 = f1.split('/');
 let aFecha2 = f2.split('/');
 let fFecha1 = Date.UTC(aFecha1[2],aFecha1[1]-1,aFecha1[0]);
 let fFecha2 = Date.UTC(aFecha2[2],aFecha2[1]-1,aFecha2[0]);
 let dif = fFecha2 - fFecha1;
 let dias = Math.floor(dif / (1000 * 60 * 60 * 24));
 return dias;
 }

let date = new Date();
let today = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();

let f1 = today
let f2 = '21/11/2022';



days.innerText = restaFechas(f1,f2)