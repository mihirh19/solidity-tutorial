// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

contract Vartypes {
   int public statevar1;
   string public statevar2;
   
   function f1() public{
      int _var1 =2;
      string memory _var2 = "mihir";
      statevar1  = _var1;
      statevar2 = _var2;
   }
}