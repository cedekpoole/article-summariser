import Title from './assets/title.png'

const App = () => {
  return (
    <div className="font-space w-5/6 mx-auto">
        <div className="flex flex-col">
            <img className="mx-auto" src={Title} alt="" />
            <p className="gradient text-center italic text-sm sm:text-lg font-bold">SUMMARISE ANY ARTICLE IN AN INSTANT</p>
        </div>
    </div>
  )
}

export default App