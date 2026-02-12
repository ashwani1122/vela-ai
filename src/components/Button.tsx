

export const MyButton = ({placeholder ,onclick}:{placeholder:string , onclick?:()=>void}) => {

    return <>
        <div className="bg-zinc-400 rounded ">
            <button onClick={onclick} className="bg-white text-black text-md font-medium rounded p-2 m-[2px] border-1 border-white hover:border-gray-400 hover:inset-shadow-xs cursor-pointer">
                {placeholder}
            </button>
        </div>
    </>
}