let params = new URLSearchParams(window.location.search); 
let articleID = params.get('id')

if(!articleID){
    window.location.replace('../')
}


let database = firebase.database().ref("articles");


database.once("value").then((snapshot) =>{
    let data = snapshot.val();
    if(!data.posts[articleID]){
        console.log('error out')
    }
    else{
        console.log(data.posts[articleID].content);
        console.log($('#article-title'))
        $('#article-title').text(data.posts[articleID].content);
    }
});
