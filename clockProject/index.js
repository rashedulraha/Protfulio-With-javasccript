let personInfo = {
  age: 18,
  name: "Rashed",
  village: " gaganpur",
  height: 60,
};

let personAge = personInfo.age;
let personHeight = personInfo.height;
if (personAge >= 18 && personHeight >= 60) {
  alert(`you can drive a car`);
} else {
  alert(`you can not drive a car besuce you are a younger`);
}
