function fetchGitHubInformation(event){

    var username = $("#gh-username").val();
    if(!username){
        $("#gh-user-data").html(`<h2>Please enter a GitHub Username</h2>`);
        return;
    }

    $("#gh-user-data").html(
        `<div id="loader">
            <img src="assets/css/Infinity-1s-200px.gif" alt="loading"/>
        </div>`
    );

}

