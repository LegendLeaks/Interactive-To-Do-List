


function addList() {
    var list = document.getElementById("list1")
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode("heyo"));

    var aTag = document.createElement('a');
    aTag.setAttribute('href', "youtube.com");
    aTag.innerText = "LINK!!";

    entry.appendChild(aTag)
    list.appendChild(entry);
}

function addItem() {
    var list = document.getElementById("list2")
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode("heyo"));
    list.appendChild(entry);
}

function search(element) {
    if (event.key == 'Enter') {
        // should check if input text is like not empty n shi

        addItem();
    }
}