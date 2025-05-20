type Props = {
  results: string[];
  onSelect: (value: string) => void;
  loading: boolean;
};

export default function SearchList({ results, onSelect, loading }: Props) {
  return (
    <ul className="absolute w-full bg-white border rounded mt-1 shadow-lg z-50 max-h-60 overflow-y-auto">
      {loading ? (
        <li className="p-2 text-gray-500">Loading...</li>
      ) : results.length === 0 ? (
        <li className="p-2 text-gray-500">No results found.</li>
      ) : (
        results.map((item) => (
          <li
            key={item}
            onClick={() => onSelect(item)}
            className="p-2 hover:bg-gray-100 cursor-pointer"
          >
            {item}
          </li>
        ))
      )}
    </ul>
  );
}
