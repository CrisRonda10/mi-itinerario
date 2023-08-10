export default function Card({src,alt, text}) {
  return (
    <div className="lg:w-2/5 flex flex-col items-center m-4">
      <img src={src} alt={alt} className="w-[308px] h-[200px] rounded-[10px] border-2 border-black" />
      <p className="text-white font-semibold leading-[31.92px] text-[20px]">{text}</p>
    </div>
  )
}
