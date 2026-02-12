import "@/index.css"
import { HeroButton } from "./dustcanvas"
export const Hero = ()=>{

    return <>
        <div className=" flex items-center flex-col h-screen bg-zinc-950 min-h-screen ">
           <div className="text-8xl font-medium flex flex-col w-full pt-20 text-center items-center">
                 <span className="tracking-tight text-zinc-100">Meet your AI assistant </span> 
            <div className="flex gap-5 p-4">
            <span className="text-zinc-100">for effortless</span>
                <HeroButton/>
            </div>
           


           </div>

           <div className="text-zinc-100 text-xl w-[80%] flex flex-col text-center pt-10">
                <span>Vela is your AI scheduling assistant that gives you back your most valuable resource: time. She books meetings,</span>
                <span> and handles the back-and-forth so you don't have to.  coordinates across teams & stakeholders, </span>
                <span> 
                </span>
           </div>
       </div>
    </>
}