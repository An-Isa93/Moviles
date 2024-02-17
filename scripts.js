const searchInput = document.getElementById('search-input');//obtiene las referencias
const suggestionsContainer = document.getElementById('sugContainer');
let timeoutId;

// evento de entrada para la barra de búsqueda
searchInput.addEventListener('input', () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(handleInput, 200);//el evento se activa despues de que el usuario termine de escribir a los 200 milisegundos
});

function handleInput() {
    //contiene el termino de busqueda ingresado
    const searchTerm = searchInput.value.trim();
    //contendra los primeros 100 caracteres del termino e  busqueda
    const suggestions = searchTerm.substring(0, 100);

    // Mostrar u ocultar el contenedor según si hay sugerencias o no
    suggestionsContainer.style.display = suggestions ? 'block' : 'none';
    suggestionsContainer.innerHTML = suggestions 
            ? /*si hay sugerencias se muestra*/ `<div class="suggestion"><h2>Recomendaciones</h2>
            ${suggestions}
      <div class="box">
           
            <div class="movie-box"></div>
  
           <div class="movie-box"></div>
   
           <div class="movie-box"></div>
     
       </div>
    </div>
    </div>`
            : /*cadena vacia si es falso*/'';
}