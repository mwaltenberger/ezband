// JavaScript for label effects only
$(window).load(function(){


    $(".form-group input").focusout(function(){
        if($(this).val() != ""){
            $(this).addClass("has-content");
        }else{
            $(this).removeClass("has-content");
        }
    })
    $(".submit-login").on("click", function (event) {
        event.preventDefault();
        let pw = $("#pw").val();
        let email = $("#email").val();
        if(email === "lala@ok.at" && pw === "123456"){
            window.location.href = "masterdata.html";
        }else {
            alert("Wrong login");
        }

    })
});
