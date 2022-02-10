class person{
    constructor(FirstName, LastName, Age,Dob,FatherName,MotherName,Email,Mobile,MaritalStatus) {
        this.firstName = FirstName || "unknown";
        this.lastName = LastName || "unknown";
        this.age = Age || "unknown";
        this.dob=Dob||"unknown";
        this.fatherName=FatherName||"unknown";
        this.motherName=MotherName||"unknown";
        this.mail=Email||"unknown";
        this.mobile=Mobile||"unknown";
        this.maritalStatus=MaritalStatus||"unknown";


        this.getDetail =()=>{
            return this.firstName + " " + this.lastName+"\n"+this.age+"\n"+Dob+"\n"+FatherName+"\n"+MotherName+"\n"+Email+"\n"+Mobile+"\n"+MaritalStatus;
        }
    }
}
var Person = new person("James","Bond",24,"12/04/1998","smith bond","rose bond","jamesbond001@gmail.com","7092285003","single");
console.log(Person.getDetail());