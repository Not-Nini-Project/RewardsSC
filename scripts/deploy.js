const hre = require("hardhat");

async function main() {
    const RewardsNFT = await hre.ethers.getContractFactory("Rewards");
    const rewardsNFT = await RewardsNFT.deploy("Rewards","NNR");

    await rewardsNFT.deployed();

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});