import { List, X } from "phosphor-react";
import { Logo } from "./Logo";

export function Header ({setIsVisible, isVisible}:any) {
  return (
    <header className="fixed top-0 z-index-12 relative w-full px-10 py-5 flex items-center justify-between sm:justify-center bg-gray-700 border-b border-gray-600">
      <Logo/>
      <div onClick={()=>setIsVisible(!isVisible)} 
        className=" right-0 fixed px-10 sm:px-20 z-index-10"
      >
        {!isVisible ? (
          <button >
            <X  size={24} />
          </button>
        ) : (
          <button >
            <List size={24} />
          </button>
        )}
      </div>
    </header>
  )
}