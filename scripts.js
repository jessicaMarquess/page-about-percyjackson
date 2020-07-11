const liElements = document.querySelectorAll(".wrapper_left ul li");
const itemElements = document.querySelectorAll('.item');

for (let i = 0; i < liElements.length; i++){
    liElements[i].addEventListener("click", function(){
        liElements.forEach(function(li){
            li.classList.remove("active");
        })
        this.classList.add("active");
        var liValue = this.getAttribute("data-li");
        itemElements.forEach(function(item){
           item.style.display = "none";
        })
        if (liValue == "first_book"){
            document.querySelector("." + liValue).style.display = "block";
        }else if (liValue == "second_book"){
            document.querySelector("." + liValue).style.display = "block";
        }else if (liValue == "third_book"){
            document.querySelector("." + liValue).style.display = "block";
        }else if (liValue == "fourth_book"){
            document.querySelector("." + liValue).style.display = "block";
        }else if (liValue == "fifth_book"){
            document.querySelector("." + liValue).style.display = "block";
        }else{
            console.log("");
        }
    });
}