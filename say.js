function User(name, age) {
	this.name = name;
	this.age = age;
	this.say = function(){
		return "my name  " + this.name + " and age is " + this.age;
	}
  }
  
  let user = new User("Alex", "25");
  
  console.log(user.name); 
  console.log(user.age); 
  console.log(user.say());