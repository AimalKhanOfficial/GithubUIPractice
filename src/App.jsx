import BranchInfoHeader from "./components/BranchInfoHeader"
import Header from "./components/Header"
import RepoActions from "./components/RepoActions"

function App() {
  return (
    <>
      <Header ownerName={'AimalKhanOfficial'} repoName={'GithubUIPractice'} />
      <div className="w-[70%] m-auto mt-[20px]">
        <RepoActions repoName={'GithubUIPractice'} />
        <BranchInfoHeader />
      </div>
    </>
  )
}

export default App
