export default function Folder({folderName, commitMsg, timeAgo}) {
    return (
        <>
            <div className="flex justify-between p-[10px] border-b-[1px]">
                <div className="flex">
                    <img src="/folder.svg" alt="Folder" className="h-[25px] w-[25px]" />
                    <p className="ml-[5px]">{folderName}</p>
                </div>
                <p className="text-gray-500 hidden lg:block">{commitMsg}</p>
                <p className="text-gray-500">{timeAgo}</p>
            </div>
        </>
    );
}