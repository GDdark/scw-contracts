import hre, { ethers } from "hardhat";

async function main() {
  const provider = ethers.provider;
  const from = await provider.getSigner().getAddress();

  const ret = await hre.deployments.deploy("SmartAccount", {
    from,
    args: ["0x5ff137d4b0fdcd49dca30c7cf57e578a026d2789"],
    deterministicDeployment: true,
  });

  console.log("SmartAccountFactory Address", ret.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
