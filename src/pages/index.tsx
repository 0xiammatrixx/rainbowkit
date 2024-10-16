import { ConnectButton } from '@rainbow-me/rainbowkit';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <h1>Welcome to Decentralized Messaging App</h1>
        <ConnectButton />
      </div>
    </>
  );
}
