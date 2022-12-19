const student = "Марупов Ромиз Алимухаммадович"; // Очевидно, что здесь ваши личные Фамилия, Имя и Отчество
document.getElementById("student").innerHTML = student;
// Функция обёрнута в интервал, вызывается каждые 2 секунды
setInterval(function() {
    // Обращаемся к элементу с id results, постепенно
    // заполняем его при помощи innerHTML
    let results = document.querySelector('#results');
    results.innerHTML = '';
    
    // Массив с объектами-пользователями
    let users = [
      {name: 'Пономарев Андрей Алексеевич',
      gender: 'мужчина',
      type: '11.12.1980'},
      {name: 'Рыбакова Алина Семёновна',
      gender: 'женщина',
      type: '16.04.1974'},
      {name: 'Молчанов Даниил Ильич',
      gender: 'мужчина',
      type: '21.03.1984'},
      {name: 'Смирнова София Львовна',
      gender: 'женщина',
      type: '02.01.1987'},
      {name: 'Владимиров Артём Григорьевич',
      gender: 'мужчина',
      type: '07.12.1990'},
      {name: 'Маслова Елизавета Егоровна',
      gender: 'женщина',
      type: '10.10.1997'},
      {name: 'Назарова Вера Романовна',
      gender: 'женщина',
      type: '01.05.1983'},
      {name: 'Иванов Иван Фёдорович',
      gender: 'мужчина',
      type: '05.05.1999'},
      {name: 'Дмитриев Алексей Григорьевич',
      gender: 'мужчина',
      type: '12.11.1998'},
      {name: 'Овчинников Платон Александрович',
      gender: 'мужчина',
      type: '26.05.1999'},
      {name: 'Мартынова Софья Тимуровна',
      gender: 'женщина',
      type: '07.06.1995'},
      {name: 'Соколов Михаил Адамович',
      gender: 'мужчина',
      type: '11.03.1979'},
    ]
  
    // Пустой массив для заполнения пользователями с удалением фамилии
    let usersWithoutSurname = [];
  
    // Проход через всех пользователей в цикле
    for (let i = 0; i < users.length; i++) {
      // Локальная переменная с новым значением имени
      let newName;
  
      // Заполнение нового имени с исключением фамилии
      // При помощи метода split (разделение на массив элементов указанным символом)
      newName = users[i].name.split(' ')[1] + ' ' + users[i].name.split(' ')[2];
  
      // Заполнение нового массива с изменением значения имени
      usersWithoutSurname.push({
        name: newName,
        gender: users[i].gender,
        type: users[i].type
      });
    }
  
    // Заполнение массива мужчин и женщин при помощи метода filter:
    // Если пол - мужчина, объект попадает в men. Если женщина - в women.
    let men = usersWithoutSurname.filter(user => user.gender === 'мужчина');
    let women = usersWithoutSurname.filter(user => user.gender === 'женщина');
  
    results.innerHTML += `Пользователей в базе: ${users.length}, из них ${men.length} мужчин и ${women.length} женщин. <br><br>`;
  
    // Достаём кол-во часов из данных о дате-времени
    let hours = new Date().getHours();
    let hello;
  
    // Проверка времени, присвоение актуального приветствия
    if (hours >= 0 && hours < 4) {
      hello = 'Доброй ночи';
    } else if (hours >= 4 && hours < 12) {
       hello = 'Доброе утро';
    } else if (hours >= 12 && hours < 16) {
       hello = 'Добрый день';
    } else if (hours >= 16 && hours < 24) {
       hello = 'Добрый вечер';
    }
  
    // Проход через всех женщин в цикле
    for (let i = 0; i < women.length; i++) {
      // НЕ выводить приветствие, если:
      // пользователь жаворонок И ночь ИЛИ пользователь сова И утро
      if ((women[i].type === 'жаворонок' && hello === 'Доброй ночи') || 
          (women[i].type === 'сова' && hello === 'Доброе утро')) {
      } else {
        results.innerHTML += `${hello}, уважаемая ${women[i].name} <br>`;
      }
    }
  
    results.innerHTML += `<br>`;
  
    // Проход через всех мужчин в цикле
    for (let i = 0; i < men.length; i++) {
      // НЕ выводить приветствие, если:
      // пользователь жаворонок И ночь ИЛИ пользователь сова И утро
      if ((men[i].type === 'жаворонок' && hello === 'Доброй ночи') || 
          (men[i].type === 'сова' && hello === 'Доброе утро')) {
      } else {
         results.innerHTML += `${hello}, уважаемый ${men[i].name} <br>`;
      }
    }        
    
    console.log('повтор');
  }, 2000);