console.log("hello")
document.querySelectorAll(".draggable").forEach(item => {
    // When the dragging starts on the item you call this
    item.addEventListener("dragstart", event => {
        // event.dataTransfer
    })
})