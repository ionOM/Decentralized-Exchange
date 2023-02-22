const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), "ether");
};

async function main() {
  // Fetch accounts from wallet - these are unslocked
  const accounts = await ethers.getSigners();

  // Fetch deployed tokens
  const DApp = await ethers.getContractAt(
    "Token",
    "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"
  );
  console.log(`Dapp Token fetched: ${DApp.address}\n`);

  const mETH = await ethers.getContractAt(
    "Token",
    "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9"
  );
  console.log(`mETH fetched: ${mETH.address}\n`);

  const mDAI = await ethers.getContractAt(
    "Token",
    "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707"
  );
  console.log(`mDAI fetched: ${mDAI.address}\n`);

  // Fetch the deployed exchange
  const exchange = await ethers.getContractAt(
    "Exchange",
    "0x0165878A594ca255338adfa4d48449f69242Eb8F"
  );
  console.log(`Exchange fetched: ${exchange.address}\n`);

  // Give tokens to account[1]
  const sender = accounts[0];
  const receiver = accounts[1];
  let amount = tokens(10000);

  // use1 transfers 10000 mETH
  let transaction, result;
  transaction = await mETH.connect(sender).transfer(receiver.address, amount);

  // Distribute tokens

  // Deposit tokens to exchange

  // MAke orders
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
