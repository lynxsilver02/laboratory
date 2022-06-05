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
    // Создание пустой строки и 3-х ячеек
    let row = document.createElement("tr")
    let name = document.createElement("td")
    let birth = document.createElement("td")
    let position = document.createElement("td")

    row.setAttribute("onclick", "showCardEmployee")

    // Добавление в каждую ячейку данные
    name.textContent = employees[i].name
    birth.textContent = employees[i].birthday
    position.textContent = employees[i].position

    // Добавление ячеек в строку
    row.appendChild(name)
    row.appendChild(birth)
    row.appendChild(position)

    // Добавление строки в таблицу
    table.appendChild(row)
}


// Функция возвращает возраст работника.
// Стандартное определение возраста не работает, потому что минимально возможный год
// в JS – 1980
function getOld(employee) {
    let arr = employee.birthday.split(".")
    let today = new Date()

    let years = Number(today.getFullYear()) - Number(arr[2])

    if (Number(arr[1]) > Number(today.getMonth()) + 1) {
        return years - 1
    } else if (Number(arr[1]) == Number(today.getMonth()) + 1) {
        if (Number(arr[0]) > Number(today.getDay() + 1)) {
            return years - 1
        } else {
            return years
        }
    } else {
        return years
    }
}

function sort(sex, children, old) {
    let sorted_empl = []

    for (let i = 0; i < employees.length; i++ ){
        let employee_old = getOld(employees[i].birthday)
        
        if (employees[i].sex == sex && employees[i].children == children && employee_old == old) {
            sorted_empl.push(employee_old[i])
        }

    }

    return sorted_empl
}

function sortedList() {
    console.log("click")
}