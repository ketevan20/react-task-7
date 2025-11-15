import avatarImg from '/images/Bitmap.png'

const Card = () => {
    return (
        <div className="w-full h-full rounded-[15px] bg-[rgb(28,32,75)] row-span-2 col-span-1 max-sm:h-[203px]">
            <div className="w-full h-[354px] p-8 rounded-[15px] bg-[rgba(87,71,234,1)] max-sm:flex max-sm:items-center max-sm:gap-5 max-sm:h-[133px]">
                <div className="w-[78px] h-[78px] rounded-full overflow-hidden border-2 border-amber-50 max-sm:w-16 max-sm:h-16">
                    <img src={avatarImg} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="mt-[42px] max-sm:mt-0">
                    <p className="text-[15px] text-[rgba(187,192,255,1)]">Report For</p>
                    <p className="text-[40px] text-[rgba(255,255,255,1)] font-normal max-sm:text-[24px]">Jeremy Robson</p>
                </div>
            </div>

            <div className="mt-[26px] ml-8 flex flex-col gap-4 max-sm:flex-row max-sm:justify-around max-sm:ml-0 max-sm:mt-6">
                <p className="text-[18px] text-[rgba(112,120,201,1)] hover:text-[rgba(255,255,255,1)]">Daily</p>
                <p className="text-[18px] text-[rgba(255,255,255,1)]">Weekly</p>
                <p className="text-[18px] text-[rgba(112,120,201,1)] hover:text-[rgba(255,255,255,1)]">Monthly</p>
            </div>

        </div>

    )
}

export default Card