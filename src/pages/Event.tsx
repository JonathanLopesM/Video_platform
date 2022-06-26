import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

// interface Params {
//   slug: string;
// }

export function Event() {
  const { slug } = useParams<{slug : string;}>()

  const [isVisible, setIsVisible] = useState(true)

  return (
    <>
    <div className="flex flex-col min-h-screen">
      <Header setIsVisible={()=>setIsVisible(!isVisible)} isVisible={isVisible} />
      <main className="flex flex-1">
        {slug 
          ? <Video lessonSlug={slug}/> 
          : <div className="flex-1" 
        />}

        {!isVisible 
          ? (<Sidebar/>) 
          : ('')}
        
      </main>
      
    </div>
    <Footer />
    </>
  )
}