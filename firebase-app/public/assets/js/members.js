$(document).ready(function() {
    var requestURL = 'https://macaulaybusinessclub.github.io/pcmembers.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        loadmembers(request.response);
    }
});

function loadmembers(json){
    var members = json["Roster"];
    for(var i = 0; i < members.length;i++){
        var card = "";
        /*if(i % 4 == 0){ 
         $("#memberdisplay").append("<div class='row portrait-row'>");
        }*/
        
        var member = members[i];
        var name = member["name"];
        var image = member.imageurl;
        var linkedin = member.linkedin;
        var position = member.position;
        var positiontext = "<p class='card-text'>" + position + "</p>";
        
        if(position.length >= 27){
            positiontext = "<p class='card-text long-position'>" + position + "</p>";
        }
        
        card = "<div class='col-md-3 col-sm-4 col-xs-6 member'>" + 
                    "<div class='portrait'>" + 
                        "<div class = 'card'>" +
                            "<img class='card-img-top member-image' src='images/members/" + image + "' alt='" + name + "' width='100%' height='100%'>" + 
                           "<div class='card-block'>" + 
                                "<h4 class='card-title'>" + name + "</h4>" +
                                positiontext + 
                                "<a class='card-social' href='" + linkedin + "'><img src='assets/icons/LinkedIn_48x48.png' width='36' height='36'></a>" + 
                           "</div>" + 
                        "</div>" +
                    "</div>" + 
                "</div>";

          $("#memberdisplay").append(card);
        /* if(i % 4 == 3){    
        $("#memberdisplay").append("</div");
        }
        */
    }
}