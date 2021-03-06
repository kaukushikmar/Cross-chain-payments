# CROSS-CHAIN PAYMENTS 

### Inspiration
Blockchain is still lacking mass adoption. It is not easy for merchants to accept payments in crypto which is volatile. Also, because of fragmented liquidity on several chains like Bitcoin, Ethereum, Avalanche, polygon, Solana, etc., it becomes even harder to manage payments as sometimes the user has funds on one network and the merchant only supports payments in another network. This creates a disconnect because of which it is not really easy for payments to take place.

### What it does
We provide a solution for this through our application, where we used Axelar SDK to perform cross-chain transfer of assets. Through the Axelar’s gateway API we can easily unlock access to other chain data of the user. Using our interface a user with assets on one chain can easily perform cross-chain payments, without the necessity of owning assets on other-chains. We also deployed it on skynet so that a merchant doesn't have to worry about the payment infra going down if centralized services like AWS go down.

### How we built it
We built it using Axelar network for cross-chain payments, chain-link oracle for price fees to get the correct conversion prices, and Skynet for deployment.

### Challenges we ran into
Integrating with Axelar network was a bit difficult at the start. but we managed to work directly with the contracts.

### Accomplishments that we're proud of
Integrating multiple services like Chainlink, axelar, skynet, writing contracts was very challenging and interesting to work on.

### What's next for Cross-chain payments
support all network and all tokens along with auto conversion.

![Screenshot from 2022-05-08 09-20-26](https://user-images.githubusercontent.com/76250660/167281368-198986b4-07aa-4f4b-ac43-2d55d9dd1ee1.png)
![Screenshot from 2022-05-08 09-21-28](https://user-images.githubusercontent.com/76250660/167281386-8c1a69f0-a639-449f-af30-abeaee1252dd.png)

