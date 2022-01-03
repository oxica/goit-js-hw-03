const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

user.mood = "happy";
user.hobby = 'skydiving';
user.premium = false;
const keys = Object.keys(user);
for (key of keys) {
    console.log(`${ key }: ${user[key]}`);
    //const cValue = key;
    //console.log(cValue, user[cValue])
}

//2 вариант
{
  const user = {
    name: "Mango",
    age: 20,
    hobby: "html",
    premium: true,

    addMood(newMood) {
      this.mood = newMood;
    },
    changeHobby(newHobby) {
      this.hobby = newHobby;
    },
    changePremium(closePremium) {
      this.premium = closePremium;
    },
  };

  user.addMood("happy");
  user.changeHobby("skydiving");
  user.changePremium(false);

  const keys = Object.keys(user);
  for (key of keys) {
    console.log(`${key}: ${user[key]}`);
  }
}




