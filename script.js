let search = document.getElementById('search')
search.addEventListener('click', () => {
    search.style.backgroundColor = "white"
})

let ham = document.getElementById('hamburger')
const respNav = document.getElementById('respNav')
ham.onclick = ()=>{
    if(respNav.style.display === "block"){
        respNav.style.display = "none"
    }
    else{
        respNav.style.display = "block"
    }
}