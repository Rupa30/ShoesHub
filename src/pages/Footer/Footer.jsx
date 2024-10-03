
const Footer = () => {
  return (
    <div className="h-48 m-0 p-0 flex flex-col justify-around">
        <div className="h-1 w-full bg-slate-200 rounded-xl"></div>
        <div className="flex flex-col justify-center items-center gap-4">
            <p>@ 2024 | All Rights Reserved</p>
            <p>Made by <span className="italic">Rupa✨</span></p>
            <p className="font-bold text-2xl md:text-3xl"><a href="#navbar">ShoesHub.</a></p>      
        </div>  
    </div>
  )
}

export default Footer