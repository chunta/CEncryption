// EncrypTest.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include "pch.h"
#include <iostream>
#include <stdio.h>
#include <string>
using namespace std;

string encryptDecrypt(string toEncrypt) {
	char key[3] = { 'K', 'C', 'Q' }; //Any chars will work
	string output = toEncrypt;

	for (int i = 0; i < toEncrypt.size(); i++)
		output[i] = toEncrypt[i] ^ key[i % (sizeof(key) / sizeof(char))];

	return output;
}

int main(int argc, const char * argv[])
{
	string encrypted = encryptDecrypt("kylewbanks.com");
	cout << "Encrypted:" << encrypted << "\n" << encrypted.length() << "\n";

	string decrypted = encryptDecrypt(encrypted);
	cout << "Decrypted:" << decrypted << "\n" << decrypted.length() << "\n";

	return 0;
}
