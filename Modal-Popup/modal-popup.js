const openModal =
 document.getElementById("open-modal");

 const modal =
 document.getElementById("modal");

 const closeModal =
 document.getElementById("close-modal");

 const cancelBtn = 
 document.getElementById("cancel-btn");


 openModal.addEventListener("click", function(){
    modal.style.display = "flex"
 });

closeModal.addEventListener("click", fecharModal)

cancelBtn.addEventListener("click", fecharModal)

function fecharModal(){
   modal.style.display = "none "
}

window.addEventListener("click", function(event){
   if(event.target === modal){
      fecharModal()
   }
})

