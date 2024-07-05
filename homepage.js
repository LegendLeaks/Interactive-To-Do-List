function addList() {
    var title = document.getElementById("newListName");
    var list = document.getElementById("list1");
    var entry = document.createElement('li');

    //entry.appendChild(document.createTextNode(""));

    var aTag = document.createElement('a');
    aTag.setAttribute('href', "#");
    aTag.innerText = title.value;

    entry.appendChild(aTag)
    list.appendChild(entry);

    title.value = ''; // clear input box
}

function addItem() {
    var input = document.getElementById("newItemName");
    var list = document.getElementById("list2")
    var entry = document.createElement('li');

    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    entry.appendChild(checkbox);
    entry.appendChild(document.createTextNode(input.value));
    list.appendChild(entry);


    input.value = '';
}

function search(element) {

    if (event.key == 'Enter') {
        // should check if input text is like not empty n shi

        addItem();
    }
}