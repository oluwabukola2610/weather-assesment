type Props = {
  role: "user" | "bot";
  content: string | JSX.Element;
  timestamp: Date;
};

  const MessageBubble = ({ role, content, timestamp }: Props) => (
  <div
    className={`p-2 rounded ${
      role === "user" ? "bg-blue-100 text-right" : "bg-gray-100 text-left"
    }`}
  >
    <p> {content}</p>
    <p className="text-xs text-gray-500 mt-1">
      {timestamp.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })}
    </p>
  </div>
);

export default MessageBubble;