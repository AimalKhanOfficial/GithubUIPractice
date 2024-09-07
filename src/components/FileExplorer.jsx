import File from "./File";
import Folder from "./Folder";

export default function FileExplorer() {
    return (
        <div className="border pt-[5px] rounded-lg">
            <Folder folderName={'public'} commitMsg={'add branch details'} timeAgo={'11 minutes ago'} />
            <Folder folderName={'src'} commitMsg={'add branch details'} timeAgo={'11 minutes ago'} />
            <File fileName={'.gitignore'} commitMsg={'boilerplate code and setting up tailwind'} timeAgo={'11 minutes ago'} />
            <File fileName={'README.md'} commitMsg={'boilerplate code and setting up tailwind'} timeAgo={'11 minutes ago'} />
            <File fileName={'README.md'} commitMsg={'boilerplate code and setting up tailwind'} timeAgo={'11 minutes ago'} />
            <File fileName={'eslint.config.js'} commitMsg={'boilerplate code and setting up tailwind'} timeAgo={'11 minutes ago'} />
            <File fileName={'index.html'} commitMsg={'boilerplate code and setting up tailwind'} timeAgo={'11 minutes ago'} />
            <File fileName={'package-lock.json'} commitMsg={'boilerplate code and setting up tailwind'} timeAgo={'11 minutes ago'} />
            <File fileName={'package.json'} commitMsg={'boilerplate code and setting up tailwind'} timeAgo={'11 minutes ago'} />
            <File fileName={'postcss.config.js'} commitMsg={'boilerplate code and setting up tailwind'} timeAgo={'11 minutes ago'} />
            <File fileName={'tailwind.config.js'} commitMsg={'boilerplate code and setting up tailwind'} timeAgo={'11 minutes ago'} />
            <File fileName={'vite.config.js'} commitMsg={'boilerplate code and setting up tailwind'} timeAgo={'11 minutes ago'} />
        </div>
    );
}