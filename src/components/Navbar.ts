import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useEnsName } from 'wagmi';

export default function Navbar() {
  const { data: ensName } = useEnsName({ address: 'your_wallet_address_here' });

  return (
    <nav>
      <h1>Decentralized Messaging</h1>
      <ConnectButton />
      <div>ENS Name: {ensName || 'Not connected'}</div>
    </nav>
  );
}
