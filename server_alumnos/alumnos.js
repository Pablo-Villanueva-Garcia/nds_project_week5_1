const faker=require('faker');

function  generateStudents(){
    const students = [];
    for (let i = 0 ; i<15 ; i++){
        let name = faker.name.firstName ();
        let lastname = faker.name.lastName();
        let age = Math.round(Math.random(18,40)*100);
        let gender = faker.name.gender();


        students.push({
                "id":i,
                "name":name,
                "lastname":lastname,
                "age":age,
                "gender":gender,  
        });
    }
    return{"students":students}
}

module.exports = generateStudents;