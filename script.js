//Funktion för att hämta och returnera data från API.

let getData = async (url) => {
    let response = await fetch(url);
    let json = await response.json();
    return json
}

// Rendera samtliga todos till DOM:en vid sidladdning
let renderPage = async () => {
    let todos = await getData("https://jsonplaceholder.typicode.com/todos")
    let ul = document.querySelector("ul");
    todos.forEach(todo => {
        let li = document.createElement("li");
        li.innerHTML = `
        <p><strong>User ID:</strong>${todo.userId}</p>
        <p><strong>ID:</strong>${todo.id}</p>
        <p><strong>Title:</strong>${todo.title}</p>
        <p><strong>Completed:</strong>${todo.completed}</p>
        `;
        ul.append(li);
    })
}

let getTodos = async () => {
    
    //Gör om dessa värden till URL params
    let userId = document.querySelector("#userID").value;
    let status = document.querySelector("#status").value;

    let params = new URLSearchParams();

    if(userId !== "all") {
        params.append("userId", userId)
    }

    if(status !== "all"){
        params.append("completed", status)
    }

    //Gör ett anrop till URL + params
    let todos = await getData("https://jsonplaceholder.typicode.com/todos?" + params)

    //Skriv ut todos i DOM:en
    let ul = document.querySelector("ul");
    ul.innerHTML = "";

    todos.forEach(todo => {
        let li = document.createElement("li");
        li.innerHTML = `
        <p><strong>User ID:</strong>${todo.userId}</p>
        <p><strong>ID:</strong>${todo.id}</p>
        <p><strong>Title:</strong>${todo.title}</p>
        <p><strong>Completed:</strong>${todo.completed}</p>
        `;
        ul.append(li);
    })

}

//Gör anrop vid knapptryck
document.querySelector("button").addEventListener("click", getTodos);

renderPage();