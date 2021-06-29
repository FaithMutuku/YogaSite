const inputs = document.querySelectorAll(".Input");

function focusFunc() {
   let prent = this.parentNode
   parent.classList.add("focus");
}

function blurFunc() {
    let prent = this.parentNode
    if (this.value == ""){
        parent.classList.remove("focus");
    }
 }

inputs.forEach((Input) => {
    Input.addEventListener("focus", focusFunc);
    Input.addEventListener("blur", blurFunc);
});
