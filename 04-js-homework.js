const value = 5;

const double = (value) => {
  return new Promise((resolve) => {
    resolve(value * 2);
  })
}

const addTen = (value) => {
  return new Promise((resolve) => {
    resolve(value + 10);
  })
}

double(5).then((doubled) => addTen(doubled)).then((result) => console.log(result))