const openModal =
 document.getElementById("open-modal")

 const modal =
 document.getElementById("modal")

 const closeModal =
 document.getElementById("close-modal")

 openModal.addEventListener("click", function(){
    modal.style.display = "flex"
 })

 closeModal.addEventListener("click", function(){
    modal.style.display = "none"
 })