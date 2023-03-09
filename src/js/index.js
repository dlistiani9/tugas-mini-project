/*image-slider*/
var slideIndex=1;
    showDivs(slideIndex);
    function plusDivs(n){
        showDivs((slideIndex+=n));
    }
    function showDivs(n){
        var i;
        var imgList = document.getElementsByClassName("about-img");     
        if (n > imgList.length) slideIndex = 1;
        else if (n<1) slideIndex=imgList.length;
        for (i = 0; i < imgList.length; i++){
            imgList[i].style.display="none";
        }
        imgList[slideIndex - 1].style.display = "block";
    }
    setInterval(() => {
        plusDivs(1);
    }, 3000);

/*validasi form*/
function validateForm(){
    var name = document.forms["message-form"]["name"].value;
    var email = document.forms["message-form"]["email"].value;
    var interest = document.forms["message-form"]["interest"].value;
    if(name =="" || email =="" || interest == ""){
        alert("Input tidak boleh kosong!");
        return false
    }
}