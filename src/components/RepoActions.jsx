export default function RepoActions({ repoName }) {
    return (
        <>
            <div className="lg:flex justify-between border-b-[1px] pb-[15px] hidden">
                <div className="flex">
                    <img src="/profilePhoto.jpeg" alt="profilePhoto" className="h-[25px] w-[25px] rounded-lg" />
                    <p className="font-bold text-2xl ml-[5px]">{repoName}</p>
                    <div className="rounded-xl p-[3px] h-[26px] text-center items-center border mt-[5px] ml-[5px]">
                        <p className="text-xs">Public</p>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="border p-[5px] ml-[5px] text-center rounded-lg">Pin</div>
                    <div className="border p-[5px] ml-[5px] text-center rounded-lg">Unwatch</div>
                    <div className="border p-[5px] ml-[5px] text-center rounded-lg">Fork</div>
                    <div className="border p-[5px] ml-[5px] text-center rounded-lg">Star</div>
                </div>
            </div>
        </>
    );
}