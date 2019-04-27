let params = new URLSearchParams(window.location.search); 
let articleID = params.get('id')

if(!articleID){
    window.location.replace('../')
}


let database = firebase.database().ref("articles");

let monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

database.on("value", (snapshot) =>{
    let data = snapshot.val();
    console.log(data.slugs[articleID])
    if(!data.slugs[articleID]){
        window.location.replace("./notfound.html")
    }
    else{
        let article = data.posts[data.slugs[articleID]]

        let contentdiv = ""
        let content = article.content.split("<br/>");
        for(par of content){
            contentdiv += `<h5 class ="article-paragraph"> ${par} </h5><br/>`
        }
        $("#article-content").append(contentdiv);
        $('#article-title').text(article.title);
        
        $('#article-mainphoto').attr('src','../../images/articles/' + article.img)
        $('#article-author').text(`${article.author}`);
        var date = new Date(article.posted)
        console.log(article.posted)
        var dateString = monthNames[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
        $('#article-date').text(`${dateString}`); 
        

        
        if(article.sources){
            // let getTitles = firebase.functions().httpsCallable('getTitlesFromUrls');
            // getTitles({sources: article.sources}).then( (result) => {
            //     console.log(result.data.titles)
            // })

            let sourcediv = "";
            for(source of article.sources){ 
                // fetch(source).then((response) => {
                //     console.log(response)
                // })
                var site = source.split("/")[2]
                sourcediv += `<p class="source"><a href="${source}"> Source: <span class="sourcelink"> ${source}</span> </a></p>`
            }
            $("#article-sources").append(sourcediv);
        }
        
    }
    $("#footer").load("footer.html");
});

