type MiniCardProps = {
    bgImg: string;
    category: string;
    time: string;
    text: string;
}

const MiniCard = ({ bgImg, category, time, text }: MiniCardProps) => {
    return (
        <div className="w-full h-full relative rounded-[15px] overflow-hidden font-['Rubik',sans-serif] max-sm:h-40">

            <img className="w-full rounded-2xl" src={bgImg} alt="" />

            <div className="absolute top-[45px] w-full h-full rounded-[15px] bg-[rgba(28,32,75,1)] p-[30px] flex flex-col gap-3 hover:bg-[rgba(51,57,122,1)] hover:cursor-pointer max-sm:gap-0 max-sm:p-7 max-sm:top-[38px]">
                <div className="flex justify-between items-center">
                    <p className="text-[rgba(255,255,255,1)] text-[18px] font-normal">{category}</p>
                    <svg className="text-[rgba(187,192,255,1)] hover:text-[rgba(255,255,255,1)]" width="16" height="5" viewBox="0 0 16 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="Combined Shape" d="M4 2.5C4 3.88071 3.10457 5 2 5C0.895431 5 0 3.88071 0 2.5C0 1.11929 0.895431 0 2 0C3.10457 0 4 1.11929 4 2.5ZM10 2.5C10 3.88071 9.10457 5 8 5C6.89543 5 6 3.88071 6 2.5C6 1.11929 6.89543 0 8 0C9.10457 0 10 1.11929 10 2.5ZM14 5C15.1046 5 16 3.88071 16 2.5C16 1.11929 15.1046 0 14 0C12.8954 0 12 1.11929 12 2.5C12 3.88071 12.8954 5 14 5Z" fill="currentColor" />
                    </svg>
                </div>
                <div className="m-0 p-0 max-sm:flex max-sm:justify-between max-sm:items-center">
                    <h1 className="text-[rgba(255,255,255,1)] text-[56px] m-0 p-0 font-thin max-sm:text-[32px]">{time}</h1>
                    <p className="text-[15px] text-[rgba(187,192,255,1)] font-normal">{text}</p>
                </div>
            </div>

        </div>
    )
}

export default MiniCard