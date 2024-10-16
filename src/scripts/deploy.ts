async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contract with the account:", deployer.address);
  
    const Messaging = await ethers.getContractFactory("Messaging");
    const messaging = await Messaging.deploy();
  
    console.log("Messaging contract deployed to:", messaging.address);
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  