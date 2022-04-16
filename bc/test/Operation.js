const Operation = artifacts.require("./Operation.sol");

contract("Operation", accounts => {
  it("should display 5", async () => {
    const addition = await Operation.deployed();
    await addition.add(3, 2, { from: accounts[0] });
    const storedSum = await addition.result.call();
    assert.equal(storedSum, 5);
  });
});