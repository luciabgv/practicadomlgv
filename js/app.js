//agregar manejador de eventos
let btnVerMas = document.getElementById('btnVerMas');
console.log(btnVerMas);
btnVerMas.addEventListener('click', verMas)

// si agrego los parametros en la funcion, el evento se realiza antes del click
//cuando una funcionListener('click', ()=>{verMas(parametro)}) tiene parametros debo agregar funcion anonima 
//btnVerMas.addEvent
function cambiarTitulo(){
    console.log('desde la funcion cambiar titulo');
//traer elemento del html
let titulo = document.querySelector('h1')
//let titulo = document.getElementById('titulo') id sin el # retorna un objeto
//let titulo = document.getElementsByClassName('container') clase sin el puntito retorna un arreglo de objetos
//let titulo = document.getElementsByTagName('container'); //retorna un arreglo de objetos 

console.log(titulo);
titulo.innerHTML = 'Nuevo titulo de prueba'
titulo.className = 'display-4 tituloPrincipal'

}

function verMas(){
    console.log('desde la funcion ver mas')
//traer el elemento padre(section)
let sectionPadre = document.getElementById('noticia');
//crear el elemento nuevo html(nodo/objeto)
let parrafoNuevo = document.createElement('p'); //<p></p>
//preparar el elemento
parrafoNuevo.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut a suscipit, enim, molestiae sunt inventore tenetur laboriosam explicabo optio, nobis dicta ab eveniet? Rem delectus voluptatum saepe inventore commodi deleniti quaerat, non quisquam? Modi ullam tenetur at, facere quo explicabo officia nihil quod, laudantium sapiente corrupti similique repellendus illum beatae fugiat eligendi! Repudiandae rem expedita at voluptate consequuntur accusamus laboriosam mollitia beatae porro excepturi ea id sit, magnam perspiciatis tempora libero provident a ab voluptatibus itaque. Non asperiores quod voluptate recusandae fuga eligendi, nostrum qui doloremque reiciendis, id omnis accusantium. Doloremque animi atque fugit voluptate saepe harum natus sint a velit, dolorem numquam corrupti eaque corporis assumenda. Suscipit ullam delectus velit dolore et ex eligendi magnam, quibusdam eos placeat pariatur illum ad eum atque, voluptatem nostrum saepe nemo ipsam odio nesciunt, harum fugit aut. Incidunt, minima pariatur tenetur consequatur cum facere quia soluta quisquam omnis adipisci earum harum aliquid, obcaecati iure corporis error ut rem. Obcaecati cupiditate et unde ab nihil doloremque necessitatibus est repellat pariatur quo! Magnam tempore sunt labore sapiente dolorum iusto eveniet exercitationem? Eum at ab facere quam vero voluptatem totam ipsum corrupti qui neque veniam obcaecati quo, perferendis consequatur recusandae facilis, aperiam sit, nihil reprehenderit sint.'
parrafoNuevo.className = 'lead';
//insertar el nuevo elemento en el DOM
sectionPadre.appendChild(parrafoNuevo); //agrega el nodo hijo al final
sectionPadre.prepend(parrafoNuevo); //agrega el nodo hijo al principio
sectionPadre.insertBefore(parrafoNuevo, btnVerMas);
//cambiar el boton
btnVerMas.innerHTML = 'Ocultar';
btnVerMas.className = 'btn btn-outline-danger' 
//nota para acceder al texto de un input
document.getElementById('buscador').value

}


