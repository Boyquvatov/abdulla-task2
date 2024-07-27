const fetchUsers = async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products")
        const users = response.json()
        return users
    } catch (eror) {
        console.log(eror);
    }
}
const createTable = (users) => {
    const tableContainer = document.getElementById("table-container");
    const table = document.createElement("table");
    const headers = ["T/R", "title", "price", "description", "category" , "image" , "rating" ]
    const headerRow = table.insertRow()
    headers.forEach(headerText => {
        const header = document.createElement("th")
        header.textContent = headerText
        headerRow.appendChild(header)
    })
    users.forEach(item => {
        const row = table.insertRow()
        row.insertCell().textContent = item.id
        row.insertCell().textContent = item.title
        row.insertCell().textContent = item.price
        row.insertCell().textContent = item.description
        row.insertCell().textContent = item.category
        row.insertCell().textContent = item.image
        row.insertCell().textContent = item.rating
      
    })
    tableContainer.appendChild(table)
    table.classList.add("table")
}
const finish = async () => {
    const users = await fetchUsers()
    if (users) {
        createTable(users)
    }
}
finish()
