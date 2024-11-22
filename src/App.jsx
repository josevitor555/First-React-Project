import { Icons } from "./components/icons"

function App() {

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-slate-100">
        <div className="w-container_width p-6 bg-white rounded">
          <h1 className="text-gray-600 font-bold text-center"> Sim, isto pode ser um componente! </h1>
          <Icons></Icons>
        </div>
      </div>
    </>
  )
}

export default App
