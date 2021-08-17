const usuario = document.getElementById('u1')
const email = document.getElementById('e1')
const password = document.getElementById('p1') 
const boton1 = document.getElementById('r1')

Form.addEventListener('sumbit',e=>{
    e.preventDefault()
    let warnings =''
    if(usuario.value.length <6){
        warnings +='El Usuario es muy corto'
    }
})
