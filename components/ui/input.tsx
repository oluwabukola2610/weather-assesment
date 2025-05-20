type Props = React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ ...props }: Props) {
  return (
    <input
      className="w-full p-3 border rounded shadow"
      {...props}
    />
  );
}
