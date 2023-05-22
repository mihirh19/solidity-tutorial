// SPDX-License-Identifier: MIT
pragma solidity >=0.4.0  < 0.9.0;

contract EmpNames {
   string Empn;
   uint age;
   
   constructor(string memory _empn, uint _age) public{
      Empn = _empn;
      age  = _age;
   }
   
   function getEmp() public view returns (string memory, uint){
      return (Empn, age);
   }
   
   function setEmp(string memory _empn, uint _age) public{
      Empn = _empn;
      age = _age;
   }
}