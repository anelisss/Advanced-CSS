document.querySelector("#icon")
    .addEventListener("click", changeTheme)

//am luat tema din local storage si am pus-o intr-o variabila
var theme = localStorage.getItem("theme")
setTheme(theme) //aplica tema pe care ai luat-o din local storage ca sa se aplice cand dam refresh/inchid-deschid

function setTheme(theme) {
    let css = document.querySelector("#darkcss")
    css.disabled = theme == "light" ? true : false

    // let symbol = css.disabled ? "&#9789;" : "&#9788;" //codurile pt luna si soare
    // document.querySelector("#icon").innerHTML = symbol //schimba textul din elem icon cu id-urile respective in functie de tema: light/dark

    //e un loc de memorie ca sa salvam setarile de preferinta. de ex, daca site-ul ramane pe dark mode, cand intram pe site din nou, sa ramana tot dark mode.
    localStorage.setItem("theme", theme)
}

function changeTheme() {
    theme = theme == "light" ? "dark" : "light" 
    setTheme(theme)

    /* 
    css.disabled = !css.disabled

    sau

    if (css.disabled) {
        css.disabled = false;
    } else {
        css.disabled = true;
    }

    sau

    css.disabled = css.disabled ? false : true  ~solutie alternativa cu operator ternar

    sau
    
    switch(css.disabled) {
        case true:
            css.disabled = false;
            break
        default:
            css.disabled = true;
    }

    */
}