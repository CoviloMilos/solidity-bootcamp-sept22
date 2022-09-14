import { ethers } from "hardhat";

async function main() {
  const factory = await ethers.getContractFactory("MVPWAirlines");
  const contract = await factory.deploy(
    "0x71bDd3e52B3E4C154cF14f380719152fd00362E7"
  );

  await contract.deployed();

  console.log("MVPWAirlines deployed to: ", contract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
