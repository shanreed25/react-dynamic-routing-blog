export default function NavBar(){
    return (
        <header className='w-full bg-[#0f0e17]'>
            <div className='h-18 mx-auto px-6 border-b border-b-emerald-500'>
            <Logo />
            </div>
        </header>
    )
}


function Logo() {
  return (
    <svg
      viewBox="0 0 340 36"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Build With Shannon"
      className="h-6 w-auto"
    >
      <text x="0" y="28" className="fill-teal-500 text-[28px] font-bold tracking-tight">
        Build
      </text>
      <text x="62" y="28" className="fill-gray-500 text-[28px] font-bold italic tracking-tight">
        with
      </text>
      <text x="117" y="28" className="fill-violet-500 text-[28px] font-bold tracking-tight">
        Shannon
      </text>
    </svg>
  );
}