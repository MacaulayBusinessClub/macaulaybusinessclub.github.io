let database = firebase.database().ref("articles");


database.once("value").then(function(snapshot){
    console.log(snapshot.val())
});