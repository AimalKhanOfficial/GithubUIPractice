export default function IconWithBorder({svgUrl}) {
    return (
        <div className="p-[5px] border text-gray-400 rounded-lg ml-[5px]">
            <img src={svgUrl} alt='mySvgImage' className="h-[30px] w-[30px] lg:h-[25px] lg:w-[25px]" />
        </div>
    );
}