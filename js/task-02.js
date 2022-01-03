const countProps = function(obj) {
  const keys = Object.keys(obj);
    return keys.length;
};

console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3


//2 вариант
{
  const countProps = function (obj) {

    let counter = 0;

    for (const value in obj) {
      counter++;
    }
    return counter;
  };

  console.log(countProps({})); // 0

  console.log(countProps({ name: "Mango", age: 2 })); // 2

  console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3
}






