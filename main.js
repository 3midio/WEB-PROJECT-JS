function addNewTask() {
    var list = document.getElementById("list");
    var text = document.getElementById("taskname").value;
    var listItem = document.createElement("li");
    listItem.className = "list-item";

    if(text.lenght === 0) {
        alert('Tarefa precisa ter mais de 1 caracter');
        return;
    }

    const textElement = document.createTextNode(text);
    listItem.appendChild(textElement);
    list.appendChild(listItem);

}