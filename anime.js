// 1-example
 let user = {
  name:"Zhansaya",
  age:"18y"
};
Object.freeze(user);
user.name = "Ayazhan";
user.age = "20y";
console.log(user);

 
 //2-example

function freezeObj() {
  const num ={
    v_1 = 25

  };
  try {
    num.v_1 = 28;
  } 
  catch(ex) {
    console.log(ex);
  }
  return num.v_1;
}
const v_1 = freezeObj();



//3-example

const student = { name: 'Zhansaya', group: 'cco-2113' };
const freezedObj = Object.freeze(student);
freezedObj.name = 'Anara';
console.log(freezedObj);

