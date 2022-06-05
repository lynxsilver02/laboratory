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
    new Employee("Авдеев Леонид Андреевич", "07.11.1982", "Главный технолог"),
    new Employee("Евстифеев Владислав Иванович", "13.03.1989", "Инженер-лаборант"),
    new Employee("Сорокин Михаил Дмитриевич", "22.09.1989", "Техник-лаборант"),
    new Employee("Маркидонова Юлия Михайловна", "17.04.1997", "Лаборант"),
    new Employee("Сидоров Иван Юрьевич", "01.02.1998", "Лаборант"),
    new Employee("Киселёва Людмила Ивановна", "03.03.1988", "Старший научный сотрудник"),
    new Employee("Орлов Степан Иванович", "31.07.1999", "Стажёр-исследователь"),
    new Employee("Крылова Екатерина Игоревна", "11.04.1990", "Биолог"),
    new Employee("Сергеев Владимир Глебович", "21.08.1985", "Ведущий найчный сотрудник"),
    new Employee("Тюрина Людмила Александровна", "09.05.1988", "Старший научный сотрудник"),
    new Employee("Алексеева Анна Андеевна", "04.04.1986", "Научный сотрудник"),
    new Employee("Ященко Юрий Дмитриевич", "14.12.1990", "Научный сотрудник"),
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