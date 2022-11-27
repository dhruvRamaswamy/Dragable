console.log("hello")
document.querySelectorAll(".draggable").forEach(item => {
    // When the dragging starts on the item you call this
    item.addEventListener("dragstart", event => {
        event.dataTransfer.setData('text/plain', getComputedStyle(item).backgroundColor)
    })
    // console.log("helo")
})

document.querySelectorAll(".droptarget").forEach(item => {
    // When the target is hovered over
    item.addEventListener("dragover", event => {
        event.preventDefault();
    })
    // When the droptarget is left
    item.addEventListener("dragleave", event => {
        item.classList.remove("hover")
    })
    
    item.addEventListener("dragenter", event => {
        item.classList.add("hover")
    })
    item.addEventListener("drop", event => {
        item.style.backgroundColor = event.dataTransfer.getData("text/plain")
    })
})