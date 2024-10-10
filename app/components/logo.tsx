export default function Logo() {
    return (
        <div className="flex items-center">
       <div className="w-fit hidden lg:block">
       <h1 className="logo_text_lg">ChronoStation</h1>
       </div>
       <h1 className="font-bold text-md sm:hidden">ChronoStation</h1>
       <h1 className="logo_text_sm hidden sm:block md:hidden">ChronoStation</h1>
       <h1 className="logo_text_md hidden md:block lg:hidden">ChronoStation</h1>
     
        </div>
    )
}