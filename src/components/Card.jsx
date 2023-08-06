export default function Card({src,alt, text}) {
  return (
    <div className="w-2/5 flex flex-col items-center m-5">
      <img src={src} alt={alt} className="w-[308px] h-[200px] rounded-[10px]" />
      <p className="text-[#1c1c1c] font-semibold leading-[31.92px] text-[20px]">{text}</p>
    </div>
  )
}
