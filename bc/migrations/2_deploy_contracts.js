const Greeter = artifacts.require("Greeter");
const Operation = artifacts.require("Operation");

module.exports = function (deployer) {
  deployer.deploy(Greeter);
  deployer.deploy(Operation);
};
