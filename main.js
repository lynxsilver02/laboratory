window.onload = function() {
    showAllEmployees()
    sorted_empl = sort(gender, kids, startYears, endYears)
    showSortedEmployees(sorted_empl)
}


class Employee {
    constructor(
        name,
        gender,
        birthday,
        marital_status,
        kids,
        position,
        scientific_degree
    ) {
        this.name = name;
        this.gender = gender;
        this.birthday = birthday;
        this.marital_status = marital_status;
        this.kids = kids;
        this.position = position;
        this.scientific_degree = scientific_degree;
    }
}
//Кандидат наук, Доктор наук
let employees = [
    new Employee(
        "Иванов Иван Иванович",
        "Мужчина",
        "24.06.1987",
        "В браке",
        "1",
        "Технолог",
        "Кандидат наук"
    ),
    new Employee(
        "Сергеев Алекстандр Степанович",
        "Мужчина",
        "13.04.1967",
        "В браке",
        "2",
        "Заведующий лабораторией",
        "Доктор наук"
    ),
    new Employee(
        "Авдеев Леонид Андреевич",
        "Мужчина",
        "07.11.1982",
        "Не в браке",
        "1",
        "Главный технолог",
        "Доктор наук"
    ),
    new Employee(
        "Евстифеев Владислав Иванович",
        "Мужчина",
        "13.03.1989",
        "В браке",
        "0",
        "Инженер-лаборант",
        "Кандидат наук"
    ),
    new Employee(
        "Сорокин Михаил Дмитриевич",
        "Мужчина",
        "22.09.1989",
        "В браке",
        "1",
        "Техник-лаборант",
        "Кандидат наук"
    ),
    new Employee(
        "Маркидонова Юлия Михайловна",
        "Женщина",
        "17.04.1997",
        "Не в браке",
        "0",
        "Лаборант",
        "-"
    ),
    new Employee(
        "Сидоров Иван Юрьевич",
        "Мужчина",
        "01.02.1998",
        "В браке",
        "0",
        "Лаборант",
        "-"
    ),
    new Employee(
        "Киселёва Людмила Ивановна",
        "Женщина",
        "03.03.1988",
        "В браке",
        "1",
        "Старший научный сотрудник",
        "Кандидат наук"
    ),
    new Employee(
        "Орлов Степан Иванович",
        "Мужчина",
        "31.07.1999",
        "Не в браке",
        "0",
        "Стажёр-исследователь",
        "-"
    ),
    new Employee(
        "Крылова Екатерина Игоревна",
        "Женщина",
        "11.04.1990",
        "Не в браке",
        "1",
        "Биолог",
        "Кандидат наук"
    ),
    new Employee(
        "Сергеев Владимир Глебович",
        "Мужчина",
        "21.08.1985",
        "В браке",
        "2",
        "Ведущий найчный сотрудник",
        "Кандидат наук"
    ),
    new Employee(
        "Тюрина Людмила Александровна",
        "Женщина",
        "09.05.1988",
        "В браке",
        "0",
        "Старший научный сотрудник",
        "-"
    ),
    new Employee(
        "Алексеева Анна Андеевна",
        "Женщина",
        "04.04.1986",
        "В браке",
        "1",
        "Научный сотрудник",
        "Кандидат наук"
    ),
    new Employee(
        "Ященко Юрий Дмитриевич",
        "Мужчина",
        "14.12.1990",
        "Не в браке",
        "0",
        "Научный сотрудник",
        "-"
    ),
];

let sorted_empl = []

function showAllEmployees() {
    let table = document.getElementsByClassName("employee-list")[0];

    while (table.children.length != 1) {
        table.removeChild(table.lastChild)
    }

    for (let i = 0; i < employees.length; i++) {
        // Создание пустой строки и 3-х ячеек
        let row = document.createElement("tr");
        let name = document.createElement("td");
        let birth = document.createElement("td");
        let position = document.createElement("td");

        row.setAttribute("onclick", "showCardEmployee(this)");

        // Добавление в каждую ячейку данные
        name.textContent = employees[i].name;
        birth.textContent = employees[i].birthday;
        position.textContent = employees[i].position;

        // Добавление ячеек в строку
        row.appendChild(name);
        row.appendChild(birth);
        row.appendChild(position);

        // Добавление строки в таблицу
        table.appendChild(row);
    }
}


// Функция поиска работника в массиве работников
function search(name) {
    let employee = null

    for (let i = 0; i < employees.length; i++) {
        if (employees[i].name == name) {
            employee = employees[i]
            break
        }
    }

    return employee
}

function clearModal(div) {
    while (div.children.length != 1) {
        div.removeChild(div.lastChild)
    }
}

function deleteEmployee(name) {
    // Карточка удаляемого сотрудника
    let del_employee = search(name)
    
    let new_array = []

    // Обновление списка сотрудников
    for (let i = 0; i < employees.length; i++ ){
        if (employees[i] == del_employee) continue
        new_array.push(employees[i])
    }

    employees = new_array

    let new_sorted_array = []

    // Обновление отсортированного списка сотрудников
    for (let i= 0; i < sorted_empl.length; i++ ){
        if (sorted_empl[i] == del_employee) continue
        new_sorted_array.push(sorted_empl[i])
    }

    sorted_empl = new_sorted_array

    alert("Карточка сотрудника удалена")
    showAllEmployees()
    showSortedEmployees(sorted_empl)
}

function showCardEmployee(event) {
    let modal = document.getElementById("modal");
    let span = document.getElementsByClassName("close_modal_window")[0];
    
    modal.style.display = "block";
    span.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    let employee = search(event.getElementsByTagName("td")[0].textContent)

    //Добавиление информации о сотруднике в модальное окно
    let div = document.getElementsByClassName("employee_card")[0];

    // Очистка всех полей модального окна
    clearModal(div)

    let img = document.createElement("img");
    if (employee.gender == "Мужчина") {
        img.setAttribute("src", "./man.jpg");
        img.setAttribute("height", "200");
    } else if (employee.gender == "Женщина") {
        img.setAttribute("src", "./woman.jpg");
        img.setAttribute("height", "200");
    }

    // Настройка всех полей и кнопки модального окна
    let pname = document.createElement("p");
    pname.textContent = 'ФИО: ' + employee.name;
    
    let pgender = document.createElement("p");
    pgender.textContent = "Пол: " + employee.gender

    let pbirthday = document.createElement("p")
    pbirthday.textContent = "Дата рождения: " + employee.birthday

    let pmaterial_status = document.createElement("p")
    pmaterial_status.textContent = "Семейное положение: " + employee.marital_status

    let pkids = document.createElement("p")
    pkids.textContent = "Дети: " + employee.kids

    let pposition = document.createElement("p")
    pposition.textContent = "Должность: " + employee.position

    let pscientific_degree = document.createElement("p")
    pscientific_degree.textContent = "Учёная степень: " + employee.scientific_degree

    let del_button = document.createElement("button")
    del_button.textContent = "Удалить карточку сотрудника"
    del_button.onclick = function() {
        if (confirm("Вы уверены, что хотите удалить карточку этого сотрудника?")){
            deleteEmployee(employee.name)
            modal.style.display = "none"
        }
    }

    // Добавление всех полей и кнопки в модальное окно 
    div.appendChild(img);
    div.appendChild(pname);
    div.appendChild(pgender);
    div.appendChild(pbirthday);
    div.appendChild(pmaterial_status);
    div.appendChild(pkids);
    div.appendChild(pposition);
    div.appendChild(pscientific_degree);
    div.appendChild(del_button)
}



// ============================================================
//
//              Здесь всё, что касается сортировки
//
// ============================================================


let gender = "Мужчина"
let kids   = "Нет"
let startYears = "18"
let endYears   = "30"


// Функция возвращает возраст работника.
// Стандартное определение возраста не работает, потому что минимально возможный год
// в JS – 1980
function getOld(employee) {
    let arr = employee.birthday.split(".");
    let today = new Date();

    let years = Number(today.getFullYear()) - Number(arr[2]);

    if (Number(arr[1]) > Number(today.getMonth()) + 1) {
        return years - 1;
    } else if (Number(arr[1]) == Number(today.getMonth()) + 1) {
        if (Number(arr[0]) > Number(today.getDay() + 1)) {
            return years - 1;
        } else {
            return years;
        }
    } else {
        return years;
    }
}

// Функция фильтрации работников по заданным параметрам
function sort(gender, kids, start_old, end_old) {
    let sorted_empl = []

    for (let i = 0; i < employees.length; i++ ){
        let employee_old = getOld(employees[i])
        
        if (employees[i].gender == gender && employee_old >= start_old && employee_old <= end_old) {
            if ((kids == "Нет" && employees[i].kids == 0) || (kids == "Есть" && employees[i].kids > 0)) {
                sorted_empl.push(employees[i])
            }
        }
    }

    return sorted_empl;
}

function showSortedEmployees(list) {
    let table = document.getElementById("sorting").getElementsByClassName("employee-list")[0]

    // Очистка таблицы от старых данных
    while (table.children.length != 1) {
        table.removeChild(table.lastChild)
    }

    // Заполнение таблины новыми данными
    if (list.length > 0) {
        for (let i = 0; i < list.length; i++ ){
            let row  = document.createElement("tr")
            let name = document.createElement("td")
            let birth = document.createElement("td")
            let position = document.createElement("td")
            
            row.setAttribute("onclick", "showCardEmployee(this)")

            name.textContent = list[i].name
            birth.textContent = list[i].birthday
            position.textContent = list[i].position

            row.appendChild(name)
            row.appendChild(birth)
            row.appendChild(position)

            table.appendChild(row)
        }
    } else {
        let row = document.createElement("tr")
        let data = document.createElement("td")

        data.setAttribute("colspan", "3")

        data.textContent = "Подходящих работников нет"
        row.appendChild(data)

        table.appendChild(row)
    }

}

function sortedList() {
    let flag = false

    if (document.querySelector('input[name="gender"]:checked').value != gender) flag = true
    if (document.querySelector('input[name="kids"]:checked').value != kids)     flag = true
    if (document.querySelector('input[name="start-old"]').value != startYears)  flag = true
    if (document.querySelector('input[name="end-old"]').value != endYears)      flag = true

    if (flag) {
        gender     = document.querySelector('input[name="gender"]:checked').value
        kids       = document.querySelector('input[name="kids"]:checked').value
        startYears = document.querySelector('input[name="start-old"]').value
        endYears   = document.querySelector('input[name="end-old"]').value

        if ( Number(startYears) > Number(endYears) || Number(startYears) < 18 ) {
            alert("Некорректный возрастной диапазон")
            return
        }

        sorted_empl = sort(gender, kids, startYears, endYears)
        showSortedEmployees(sorted_empl)
    }

}
