

let newsbase = firebase.database().ref("articles");


newsbase.on("value", (snapshot) => {
    let data = snapshot.val();

    console.log(data.posts)
    for(var post in data.posts){
        post = data.posts[post]

        card = `<div class="card article-card">
                        <a href = "articles/?id=${post.slug}">
                             <img class = "article-cardimg" src="../images/articles/${post.img}" class="card-img-top" alt="${post.title}">
                        </a>
                        <div class="card-body">
                            <a href="articles/?id=${post.slug}"> <h5 class="card-title">${post.title}</h5></a>
                            <div class ="row">
                                <div class = "col">
                                    <h6 id = "article-author" class="card-text">${post.author}</h6>
                                </div>
                                <div class = "col">
                                    <p id = "article-date" class="card-text"><em>${post.formattedDate}</em></p>
                                </div>
                            </div>
                            
                            <p class="card-text">${post.snippet}</p>
                            
                            
                        </div>
                    </div>
                `;

        $("#newshome").append(card);
    }

    $("#footer").load("footer.html");
});


//Testing adding new articles
// var test = false;

// let article = `Amongst all of the socioeconomic issues and political turmoil, Germany narrowly dodged a catastrophic bullet this past quarter.  Germany’s Federal Statistical Office released its economic data on February 14th for the fourth quarter of 2018 and posted zero growth for the October-to-December period.  This bittersweet news saved the German economy from slipping into a technical recession of two consecutive quarters of negative growth after the country experienced a contraction of 0.2% during the third quarter of 2018.  After posting growth of 0.4% and 0.5% for the first and second quarters, respectively, Germany saw a dip in growth due to various economic and political pressures affecting the country’s production, consumption, and foreign investments levels.<br/>
// With political tension and far-right populism dramatically increasing during 2018, foreign businesses and investors have been hesitant to invest funds and expand operations in Germany because of fears of weakening consumer spending and declines in manufacturing output.  The most significant factors have been the ruinous trade dispute between the United States and China, and new vehicle emission tests implemented following the Volkswagen emissions scandal.  The combination of a decrease in car sales in China due to tariffs and European factory disruption attributed to confusion over the new emission standards has resulted in a dramatic negative impact on Germany’s car manufacturing industry.  Additionally, a decline in exports and low water levels impeding the movement of some goods also hurt GDP growth.<br/>
// Despite these unfavorable developments, there were some reassuring figures and news for the German economy.  Positive contributions to the GDP primarily came from domestic demands in construction and machinery, as well as from increases in government spending to boost the economy to avoid a recession.  The unemployment rate has been healthy hovering a little above 3%, which is one of the lowest unemployment rates currently in the world.  Furthermore, technological and job growth in the public sector has helped maintained a suitable status quo in western Germany but has done little to assist the less economically developed eastern Germany.<br/>
// In my perspective, aside from the debate about the effects of rising nationalist sentiment and the influx of immigrants in Germany, one of the main elements weakening economic growth and foreign investments in Germany is the policymakers of both the country and the European Union.  German politicians have been investing heavily into renewable energy resources, particularly natural gas, to combat climate change in accordance with the Paris Climate Accords.  Unfortunately, Germany has been spending millions of dollars constructing a natural gas pipeline from Russia through Poland to Germany, effectively allowing Russia to exert control over Germany’s energy industry.  Several prominent figures, including U.S. President Donald Trump, have raised concerns over Germany’s natural gas decision with Russia.  These concerns have scared away some foreign investors in fears of retaliatory economic actions from President Trump impacting trade or the NATO alliance between the United States and other European countries.  Furthermore, the cost of this natural gas project has increased energy costs for Germans, particularly in the east, and has caused the poverty rate to partially rise as a result.<br/>
// Even though many countries throughout the world are experiencing a slowdown in growth, it is scary to see Germany go from over 1% GDP growth in the first quarter of 2017 to almost a recession at the end of 2018.  Germany should reduce the costs of multinational projects, like the natural gas pipeline, and focus more on social initiatives to diminish poverty and incentivize consumer spending.  It will be intriguing to witness how the changing political dynamic in Europe will affect both the outlook of Germany’s economy and the eurozone.
// `;
// let snippet = "Amongst all of the socioeconomic issues and political turmoil, Germany narrowly dodged a catastrophic bullet this past quarter.  Germany’s Federal Statistical Office released its economic data on February 14th for the fourth quarter of 2018 and posted zero growth for the October-to-December period.";
// let title = `A Near Miss For Germany`;
// let slug = "near-miss-for-germany";
// let author = "Patrick Perrigo";
// let img = "near-miss-for-germany.png";

// let postnew = (test) => {
//     if(test){
//         let newpost = {
//             stuff:'шеллы',
//             author:author,
//             posted: 1550494800,
//             img:img,
//             snippet: snippet,
//             title: title,
//             slug:slug,
//             content: article,
//             sources:{
//                 //0: "https://www.businessinsider.com/apex-legends-player-count-2019-2",
//                 //1: "https://www.wsj.com/articles/not-just-nimbyism-amazons-hq2-opponents-dig-in-for-long-fight-11546174808?mod=article_inline&mod=article_inline&mod=article_inline"
//             },
//             html:`<h1> bad practice </h1> <p>`
//         }

//         let postid = newsbase.child('posts').push().key;

//         let updates = {
//             ['posts/' + postid]: newpost,
//             ['slugs/' + newpost.slug]: postid
//         }

//         newsbase.update(updates);
//     }
// }

// postnew(test);