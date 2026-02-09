
export const Hero = ()=>{

    return <>
        <div className="flex items-center flex-col h-screen bg-zinc-950 bg-[linear-gradient(135deg,rgba(211, 211, 232, 0.45)_0%,rgba(28, 9, 134, 0)_50%)]">
           <div className="text-8xl font-medium flex flex-col w-full pt-20 text-center  ">
                 <span className="tracking-tight text-zinc-100">Meet your AI assistant </span> 
                 <span className=" text-zinc-100">for effortless scheduling</span> 
           </div>

           <div className="text-zinc-100 text-2xl w-[80%] flex flex-col text-center pt-10">
                <span>Vela is your AI scheduling assistant that gives you back your most valuable resource: time. </span>
                <span>  She books meetings, coordinates across teams & stakeholders, </span>
                <span> 
                and handles the back-and-forth so you don't have to.</span>
           </div>
       </div>
    </>
}