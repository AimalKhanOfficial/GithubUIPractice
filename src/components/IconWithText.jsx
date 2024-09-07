export default function IconWithText({ svgUrl, text, isActive, isHidden }) {
    return (
        <div className={`flex p-[7px] ml-[5px] items-center  ${isActive ? 'border-b-orange-500 border-b-4' : ''} ${isHidden ? 'hidden' : ''}`}>
            <img src={svgUrl} alt='mySvgImage' className="h-[20px] w-[20px]" />
            <p className={`ml-[5px] ${isActive ? 'font-bold' : ''}`}>{text}</p>
        </div>
    );
}