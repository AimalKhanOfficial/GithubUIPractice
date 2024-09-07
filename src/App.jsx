import BranchInfoHeader from "./components/BranchInfoHeader"
import Header from "./components/Header"
import RepoActions from "./components/RepoActions"

function App() {
  return (
    <>
      <Header ownerName={'AimalKhanOfficial'} repoName={'GithubUIPractice'} />
      <div className="lg:w-[70%] lg:m-auto lg:mt-[20px] p-[10px]">
        <RepoActions repoName={'GithubUIPractice'} />
        <div className="flex justify-between lg:mt-[20px]">
          <div className="w-full lg:w-[70%]">
            <BranchInfoHeader />
          </div>
          <div className="hidden lg:block lg:w-[30%] border ml-[5px] p-[5px]">
            <p>SideBar</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
