const html= document.getElementById('html');
const css= document.getElementById('css');
const js= document.getElementById('js');

html.addEventListener('click',()=>{
    const valorhtml= 'html'
    localStorage.setItem("prueba_html_final", valorhtml);

});

css.addEventListener('click',()=>{
    const valorhtml= 'css'
    localStorage.setItem("prueba_html_final", valorhtml);

}),
js.addEventListener('click',()=>{
    const valorhtml= 'js'
    localStorage.setItem("prueba_html_final", valorhtml);

})

