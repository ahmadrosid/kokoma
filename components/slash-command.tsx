export default function SlashCommand() {
  const menus = ["Heading 1", "Heading 2", "Heading 3", "Paragraph"];
  return (
    <div className="absolute w-[250px] border shadow-lg bg-white rounded">
      <p className="text-xs text-slate-600 p-2">Basic blocks</p>
      <ul>
        {menus.map((item) => (
          <li
            className="px-4 py-2 cursor-pointer hover:bg-slate-100"
            key={item}
          >
            <span className="text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
