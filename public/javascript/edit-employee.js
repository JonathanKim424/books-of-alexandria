 

let employees = []

const addEmployee = (event) => {
    event.preventDefault()

    let employee = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim()
    }
    employees.push(employee)
    document.querySelector('addEmp-form').reset()

    console.log(employees)
}

document.getElementById('addEmp-form').addEventListener('click', addEmployee)