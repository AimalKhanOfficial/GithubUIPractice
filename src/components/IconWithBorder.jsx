export default function IconWithBorder({svgUrl}) {
    return (
        <div className="p-[5px] border text-gray-400 rounded-lg">
            <img src={svgUrl} alt='mySvgImage' height={25} width={25} />
        </div>
    );
}