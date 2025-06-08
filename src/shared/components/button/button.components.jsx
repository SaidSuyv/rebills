export default function ButtonIcon({
  icon,
  disabled,
  onClick
})
{
  return (
    <button className="flex items-center p-2 border-rounded-full hover:bg-gray-300/20" onClick={onClick} disabled={disabled} >
      <div className={`i-tabler-${icon}`} />
    </button>
  );
}