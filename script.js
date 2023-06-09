function reset(){
    location.reload();
}

const sortableList1 = document.querySelector(".list1");
const items1 = sortableList1.querySelectorAll(".item1");

items1.forEach(item => {
    item.addEventListener("dragstart", () => {
        setTimeout(() => item.classList.add("dragging"), 0);
        document.getElementById("msg").remove();
    });
    item.addEventListener("dragend", () => item.classList.remove("dragging"));
});

const initSortableList1 = (e) => {
    e.preventDefault();
    const draggingItem = document.querySelector(".dragging");
    let siblings = [...sortableList1.querySelectorAll(".item1:not(.dragging)")];

    let nextSibling = siblings.find(sibling => {
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
    });

    sortableList1.insertBefore(draggingItem, nextSibling);
}

sortableList1.addEventListener("dragover", initSortableList1);
sortableList1.addEventListener("dragenter", e => e.preventDefault());

const sortableList2 = document.querySelector(".list2");
const items2 = sortableList2.querySelectorAll(".item2");

items2.forEach(item => {
    item.addEventListener("dragstart", () => {
        setTimeout(() => item.classList.add("dragging"), 0);
    });
    item.addEventListener("dragend", () => item.classList.remove("dragging"));
});

const initSortableList2 = (e) => {
    e.preventDefault();
    const draggingItem = document.querySelector(".dragging");
    let siblings = [...sortableList2.querySelectorAll(".item2:not(.dragging)")];

    let nextSibling = siblings.find(sibling => {
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
    });

    sortableList2.insertBefore(draggingItem, nextSibling);
}

sortableList2.addEventListener("dragover", initSortableList2);
sortableList2.addEventListener("dragenter", e => e.preventDefault());