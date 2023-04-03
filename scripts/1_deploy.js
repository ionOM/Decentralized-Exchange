async function main() {
  console.log(`Preparing deployment...\n`);

  // Fetch contract to deploy
  const Token = await ethers.getContractFactory("Token");
  const Exchange = await ethers.getContractFactory("Exchange");

  // Fetch accounts
  const accounts = await ethers.getSigners();

  console.log(
    `Accounts fetched:\n${accounts[0].address}\n${accounts[1].address}\n`
  );

  // Deploy contracts
  const tusdt = await Token.deploy("Test Tether", "tUSDT", "1000000");
  await tusdt.deployed();
  console.log(`tUSDT Deployed to: ${tusdt.address}`);

  const teth = await Token.deploy("Test Ethereum", "tETH", "1000000");
  await teth.deployed();
  console.log(`tETH Deployed to: ${teth.address}`);

  const tbtc = await Token.deploy("Test Bitcoin", "tBTC", "1000000");
  await tbtc.deployed();
  console.log(`tBTC Deployed to: ${tbtc.address}`);

  const exchange = await Exchange.deploy(accounts[1].address, 1);
  await exchange.deployed();
  console.log(`Exchange Deployed to: ${exchange.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
