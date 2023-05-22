// var demo = artifacts.require("demo");
// var EmpNames = artifacts.require("EmpNames");
// var Vartypes = artifacts.require('Vartypes');
// var ActQualifier = artifacts.require('ActQualifier');
// var addressDataType = artifacts.require('addressDataType');
// var byteExample = artifacts.require('byteExample');
// var enumsExample =artifacts.require('enumsExample');
// var Functions = artifacts.require('Functions');
// var IntBoolExample = artifacts.require('IntBoolExample')
// var A = artifacts.require('A');
// var B = artifacts.require('B');
// var C = artifacts.require('C');
// var FixedArrays = artifacts.require('FixedArrays');
// var structTrading = artifacts.require('structTrading');
// var MappingExample =artifacts.require('MappingExample');
// var Global = artifacts.require('Global');
var Errorhandling = artifacts.require('Errorhandling');
module.exports = function(deployer) {
  // Deploy the SolidityContract contract as our only task
  // deployer.deploy(demo);
  // deployer.deploy(EmpNames, "mihir", 19);
  // deployer.deploy(Vartypes);
  // deployer.deploy(ActQualifier);
  // deployer.deploy(addressDataType);
  // deployer.deploy(byteExample);
  // deployer.deploy(enumsExample);
  // deployer.deploy(Functions);
  // deployer.deploy(IntBoolExample);
  // deployer.deploy(A);
  // deployer.deploy(B);
  // deployer.deploy(C);
  // deployer.deploy(FixedArrays);
  // deployer.deploy(structTrading);
  // deployer.deploy(MappingExample);
  // deployer.deploy(Global);
  deployer.deploy(Errorhandling);
};