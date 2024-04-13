export default function Header(){
    return (
      <header className=" border-b shadow-8xl bg-red-300 py-2 px-3 flex justify-between items-center">
        {/* Logo para version mobile */}
        <img src="/LogoBanco.jpeg" alt="BancoDeFi-mobile-logo" className="sm:hidden" width={40}/>
        {/* Logo para version desktop*/}
        <img src="/LogoLargo.JPG" alt="BancoDeFi-desktop-logo" className="hidden sm:block" width={150} />
        <button className="bg-blue-300 rounded-2xl px-5 text-justify h-fit">Connect Wallet</button>
    
    
    </header>
    )
}