console.log("HELLO");

function test(input)
{
	var myClass = Java.type("com.stagiaire.springboot.encrypt.Encryptor.java");
	
	console.log(myClass.encryptString(input));
}

test("hello")