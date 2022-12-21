const student = "Марупов Ромиз Алимухаммадович";
document.getElementById("student").innerHTML = student;
setInterval(function() {
    let results = document.querySelector('#results');
    results.innerHTML = '';
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
    let usersWithoutSurname = [];
    for (let i = 0; i < users.length; i++) {
      let newName;
      newName = users[i].name.split(' ')[1] + ' ' + users[i].name.split(' ')[2];
      usersWithoutSurname.push({
        name: newName,
        gender: users[i].gender,
        type: users[i].type
      });
    }
    let men = usersWithoutSurname.filter(user => user.gender === 'мужчина');
    let women = usersWithoutSurname.filter(user => user.gender === 'женщина'); 
    results.innerHTML += `Пользователей в базе: ${users.length}, из них ${men.length} мужчин и ${women.length} женщин. <br><br>`;
    let hours = new Date().getHours();
    let hello;
    if (hours >= 0 && hours < 4) {
      hello = 'Доброй ночи';
    } else if (hours >= 4 && hours < 12) {
       hello = 'Доброе утро';
    } else if (hours >= 12 && hours < 16) {
       hello = 'Добрый день';
    } else if (hours >= 16 && hours < 24) {
       hello = 'Добрый вечер';
    }
    for (let i = 0; i < women.length; i++) {
      if ((women[i].type === 'мужчина' && hello === 'Доброй ночи') || 
          (women[i].type === 'женщина' && hello === 'Доброе утро')) {
      } else {
        results.innerHTML += `${hello}, уважаемая ${women[i].name} <br>`;
      }
    }
    results.innerHTML += `<br>`;
    for (let i = 0; i < men.length; i++) {
      if ((men[i].type === 'мужчина' && hello === 'Доброй ночи') || 
          (men[i].type === 'женщина' && hello === 'Доброе утро')) {
      } else {
         results.innerHTML += `${hello}, уважаемый ${men[i].name} <br>`;
      }
    }        
    console.log('повтор');
  }, 2000);