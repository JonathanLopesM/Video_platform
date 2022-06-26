import { LogoRock } from "./LogoRock";

export function Footer () {
  return (
    <div className="realtive sm:max-w-[1100px] mx-auto">
      <div className=" sm:flex justify-center sm:justify-between text-center items-center">
      <div className="sm:flex p-2">
        <a className="flex items-center text-center justify-center sm:justify-left sm:px-6" href="https://www.linkedin.com/in/jonathan-lopes-machado-70a109219/">
          <LogoRock />
        </a>
      
        <a href="https://www.linkedin.com/in/jonathan-lopes-machado-70a109219/">
          <p className="sm:flex">
            Rocketseat - Todos os direitos reservados
          </p>
        </a>

      </div>
      
      <a href="https://www.linkedin.com/in/jonathan-lopes-machado-70a109219/">
        <p>
            Políticas de privacidade
        </p>
      </a>
      </div>
    </div>
  )
}