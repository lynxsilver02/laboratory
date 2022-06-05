class Employee {
    constructor(name, birthday, position) {
        this.name = name;
        this.birthday = birthday;
        this.position = position;
    }
}

let employees = [
    new Employee("Иванов Иван Иванович", "24.06.1987", "Технолог"),
    new Employee("Сергеев Алекстандр Степанович", "13.04.1967", "Заведующий лабораторией"),
    new Employee("Авдеев Леонид Андреевич", "07.11.1982", "Технолог"),
];

let table = document.getElementsByClassName("employee-list")[0]

for (let i = 0; i < employees.length; i++ ){
    let row = document.createElement("tr")
    let name = document.createElement("td")
    let birth = document.createElement("td")
    let position = document.createElement("td")

    name.textContent = employees[i].name
    birth.textContent = employees[i].birthday
    position.textContent = employees[i].position

    row.appendChild(name)
    row.appendChild(birth)
    row.appendChild(position)

    table.appendChild(row)
}