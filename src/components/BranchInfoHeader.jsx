import IconWithText from "./IconWithText";
import SearchBar from "./SearchBar";

export default function BranchInfoHeader() {
    return (
        <>
            <div className="flex justify-between pb-[15px]">
                <div className="flex">
                    <select className="bg-gray-200 text-black rounded-lg p-[5px] items-center" name="branches">
                        <option value="main">main</option>
                        <option value="cool-feature">cool-feature</option>
                        <option value="cool-feature">cool-feature</option>
                    </select>
                    <p className="ml-[7px] mt-[5px] hidden lg:block">
                        <span className="font-bold">3</span> Branch
                    </p>
                    <p className="ml-[7px] mt-[5px] hidden lg:block">
                        <span className="font-bold">0</span> Tags
                    </p>
                </div>
                <div className="flex justify-between">
                    <div className="hidden lg:flex">
                        <SearchBar placeHolder={'Go to File'} />
                        <IconWithText svgUrl={'/down.svg'} text={'Add File'} addBorder={true} />
                    </div>
                    <IconWithText svgUrl={'/code.svg'} text={'Code'} addBorder={true} />
                </div>
            </div>
        </>
    );
}