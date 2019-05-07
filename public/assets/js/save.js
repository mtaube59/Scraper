$(document).ready(function(){
    $(document).on("click",".save",function(){
        var p = $(this).attr("data-id")
        console.log(p);
        // console.log("You clicked me!");
        $.ajax({
            url: "/saved/" + p,
            method: "POST"
        }).then(function(response) {
            console.log(response);
            // console.log("Redirecting after scrape!");
            // window.location.href = "/saved"
        });
    });
})