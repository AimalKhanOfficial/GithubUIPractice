import IconWithBorder from "./IconWithBorder";
import IconWithText from "./IconWithText";
import SearchBar from "./SearchBar";

export default function Header({ ownerName, repoName }) {
    return (
        <div className="px-[10px] pt-[5px] border-b-[1px]">
            <div className="flex justify-between">
                <div className="flex items-center">
                    <div className="rounded-md border p-[5px]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
                    <div className="ml-[10px] mt-[5px]">
                        <svg height="32" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="32" data-view-component="true" className="octicon octicon-mark-github v-align-middle color-fg-default">
                            <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
                        </svg>
                    </div>
                    <div className="ml-[10px] mt-[5px]">
                        {ownerName} / <span className="font-bold">{repoName}</span>
                    </div>
                </div>
                <div className="ml-auto mt-[5px]">
                    <div className="flex justify-between">
                        <SearchBar placeHolder={'Type / to search'} />
                        <div className="hidden lg:flex">
                            <IconWithBorder svgUrl={'/plus.svg'} />
                            <IconWithBorder svgUrl={'/issue.svg'} />
                            <IconWithBorder svgUrl={'/merge.svg'} />
                        </div>
                        <IconWithBorder svgUrl={'/mailbox.svg'} />
                        <IconWithBorder svgUrl={'/profilePhoto.jpeg'} />
                    </div>
                </div>
            </div>
            <div className="flex mt-[10px]">
                <IconWithText svgUrl={'/code.svg'} text={'Code'} isActive={true} isHidden={false} />
                <IconWithText svgUrl={'/issue.svg'} text={'Issues'} isHidden={false} />
                <IconWithText svgUrl={'/merge.svg'} text={'Pull Requests'} isHidden={false} />
                <div className="hidden lg:flex">
                    <IconWithText svgUrl={'/play.svg'} text={'Actions'} isHidden={false} />
                    <IconWithText svgUrl={'/folder.svg'} text={'Projects'} isHidden={false} />
                    <IconWithText svgUrl={'/book.svg'} text={'Wiki'} isHidden={false} />
                    <IconWithText svgUrl={'/security.svg'} text={'Security'} isHidden={false} />
                    <IconWithText svgUrl={'/insights.svg'} text={'Insights'} isHidden={false} />
                    <IconWithText svgUrl={'/settings.svg'} text={'Settings'} isHidden={false} />
                </div>
            </div>
        </div>
    );
}