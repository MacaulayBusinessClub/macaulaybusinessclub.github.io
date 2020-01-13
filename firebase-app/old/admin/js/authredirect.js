
firebase.auth().onAuthStateChanged( (user) => {
    if(!user){
        window.location.replace("./login.html")
    }
    else{
        if(window.location.pathname == "/admin/"){
            window.location.replace("./portal.html")
        }
    }
})