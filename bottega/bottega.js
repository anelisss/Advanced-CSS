document.querySelector("#enter").addEventListener("click", showLastPage)
document.querySelector("#back").addEventListener("click", showHomePage)


function showLastPage() {
    document.querySelector("#lastpage").classList.add("slide-in")
    document.querySelector("#lastpage").classList.remove("slide-out")
}
function showHomePage() {
    document.querySelector("#lastpage").classList.add("slide-out") // add clasa cu animatia .
    document.querySelector("#lastpage").classList.remove("slide-in") // remove class cu prima animatie.
}