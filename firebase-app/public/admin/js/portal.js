

var user;
firebase.auth().onAuthStateChanged( (user) => {
    if(user){
        loadData(user);
    }
})

loadData = (user) => {
    console.log(user.email)
}

$("#signout").click(function(e){
    firebase.auth().signOut()
    .catch( (error) => {
        console.log(error);
    })

});