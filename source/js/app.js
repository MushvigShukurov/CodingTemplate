
var navLinks = document.querySelectorAll("nav>a")

navLinks.forEach(link=>{
    link.addEventListener("click",function(e){
        e.preventDefault()
        clearClassList(navLinks)
        link.className = "active"
    })
})


function clearClassList(links){
    links.forEach(link=>{
        link.className = ""
    })
}