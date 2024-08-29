function ShowList1(element) {
    var paragraphId = element.getAttribute("data-paragraph");

    // Toggle the visibility of the child list
    var childList = document.getElementById(paragraphId);
    childList.style.display = childList.style.display === "none" ? "block" : "none";
}