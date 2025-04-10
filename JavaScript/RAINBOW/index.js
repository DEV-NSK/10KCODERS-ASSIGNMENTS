let child = document.getElementsByClassName("btn")

for (let i=0;i<child.length;i++){
    child[i].addEventListener("click", () => {
        document.body.style.backgroundColor = child[i].innerText;
    });
}