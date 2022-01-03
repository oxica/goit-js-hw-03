

const countTotalSalary = function (employees) {
  let totalSalary = 0;
  const values = Object.values(employees);
  for (let value of values) {
    totalSalary += value;
  }
  return totalSalary;
};

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
); // 400


//2 вариант
{
const countTotalSalary = function (employees) {

  let totalSalary = 0;
  const keys = Object.keys(employees);
  
  for (let key of keys) {
    totalSalary += employees[key];
  }
  return totalSalary;
};

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
); // 400
}

// 3 вариант
{
  const countTotalSalary = function (employees) {
    let sum = 0;

    for (let key in employees) {
      sum += employees[key];
    }
    return sum;
  };

  console.log(countTotalSalary({})); // 0

  console.log(
    countTotalSalary({
      mango: 100,
      poly: 150,
      alfred: 80,
    })
  ); // 330

  console.log(
    countTotalSalary({
      kiwi: 200,
      lux: 50,
      chelsy: 150,
    })
  ); // 400
}