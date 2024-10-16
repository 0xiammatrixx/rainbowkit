export default function MessageItem({ message }) {
    return (
      <div>
        <p><strong>Sender:</strong> {message.sender}</p>
        <p><strong>Message:</strong> {message.encryptedMessage}</p>
        <p><strong>Time:</strong> {new Date(message.timestamp * 1000).toLocaleString()}</p>
      </div>
    );
  }
  