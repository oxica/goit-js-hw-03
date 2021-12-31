// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false
console.log(user);

const keys = Object.keys(user);

for (const key of keys) {
  const cValue = key;
  console.log(cValue, user[cValue])
  // console.log(`${key}: ${user[key]}`);
}


