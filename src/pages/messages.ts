import { useState } from 'react';
import { useContract, useSigner } from 'wagmi';
import { ethers } from 'ethers';
import contractABI from '../contracts/Messaging.json'; // ABI for your contract

const contractAddress = 'your_contract_address_here';

export default function Messages() {
  const { data: signer } = useSigner();
  const contract = useContract({
    address: contractAddress,
    abi: contractABI,
    signerOrProvider: signer,
  });

  const [message, setMessage] = useState('');
  const [recipient, setRecipient] = useState('');

  const sendMessage = async () => {
    const encryptedMessage = ethers.utils.toUtf8Bytes(message); // Encrypt on front-end
    const tx = await contract.sendMessage(recipient, encryptedMessage);
    await tx.wait();
    console.log('Message sent!');
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Recipient address" 
        value={recipient} 
        onChange={(e) => setRecipient(e.target.value)} 
      />
      <textarea
        placeholder="Your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
}
