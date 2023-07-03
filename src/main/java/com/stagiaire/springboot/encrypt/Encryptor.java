package com.stagiaire.springboot.encrypt;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class Encryptor {

	public String encryptString(String input) throws NoSuchAlgorithmException
	{
		MessageDigest md = MessageDigest.getInstance("MD5");
		
		byte[] messageDigest = md.digest(input.getBytes());
		
		BigInteger bigInt = new BigInteger(1,messageDigest);
		
		return bigInt.toString(16);
	}

	
	
public static void  main(String[] args)throws NoSuchAlgorithmException
{
	Encryptor encryptor = new Encryptor();
	
	String password ="stage123";
	
	System.out.println(encryptor.encryptString(password));
}
}