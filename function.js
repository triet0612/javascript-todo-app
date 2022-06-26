//loading todo_list data
function GetTODOlist(){
    let todo_list = JSON.parse(localStorage.getItem("TODO_LIST"));
    return todo_list
}
//write todo_list data
function writeTODO(todo_list){
    localStorage.setItem("TODO_LIST", JSON.stringify(todo_list));
}

function RenderTODOList(){
    let HTML_string = "";
    let TODO_LIST = GetTODOlist();
    if (TODO_LIST == null || TODO_LIST.length == 0){
        HTML_string = HTML_string+ `Chưa có tác vụ nào ở đây`;
    }
    else {
        for (let i = 0; i < TODO_LIST.length; i++){
            HTML_string = HTML_string+
            `<ul class="item" id='${i}'>
                <li>${TODO_LIST[i].Task_name}</li>
                <li>Hạn chót: ${TODO_LIST[i].Task_deadline}</li>
                <button onclick="DeleteTask(${i})">Delete</button>
            </ul>`
        }
    }
    var tag = document.getElementById('Todo_items');
    tag.innerHTML = HTML_string;
}

function InsertTODOlist(){
    let name = document.querySelector('#Task_name');
    let deadline = document.querySelector('#Task_deadline');
    if (name.value == "" || deadline.value == ""){
        alert("Xin hãy nhập đầy đủ tên tác vụ và thời hạn")
        return;
    }
    let data = GetTODOlist();
    if (data == null){
        data = [];
    }
    data.push({"Task_name": name.value, "Task_deadline": deadline.value.replace('T', ' ')});
    writeTODO(data);
    location.reload()
}

function DeleteTask(index){
    let data = GetTODOlist();
    if (data == null){
        return;
    }
    data.splice(index, 1)
    writeTODO(data)
    location.reload()
}

RenderTODOList();
