/**
 * Hello world
 */

import {
  establishConnection,
  establishPayer,
  getProgramPublicKey,
  reportGreetings,
} from './hello_world';

async function main() {
  console.log("Let's say hello to a Solana account...");

  // Establish connection to the cluster
  await establishConnection();

  // Determine who pays for the fees
  await establishPayer();

  await getProgramPublicKey();

  // Find out how many times that account has been greeted
  await reportGreetings();

  console.log('Success');
}

main().then(
  () => process.exit(),
  err => {
    console.error(err);
    process.exit(-1);
  },
);
