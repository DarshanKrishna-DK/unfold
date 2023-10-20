// Import restapi for function calls
import { PushAPI } from '@pushprotocol/restapi'

// Ethers v5 or Viem, both are supported
import { ethers } from 'ethers'

// Creating a random signer from a wallet, ideally this is the wallet you will connect
const signer = ethers.Wallet.createRandom()

// Initialize wallet user, pass 'prod' instead of 'staging' for mainnet apps
const userAlice = await PushAPI.initialize(signer, { env: 'staging' })

// Requires user to have a channel, see Create Channel section for more info
// ['*'] sends to all wallets who have opted in to your channel
const response = await userAlice.channel.send(['*'], {
    notification: { 
      title: 'You awesome notification', 
      body: 'from your amazing protocol' 
    }
  }) 

// To listen to real time notifications
userAlice.stream.on('STREAM.NOTIF', (data) => {
    console.log(data)
  })