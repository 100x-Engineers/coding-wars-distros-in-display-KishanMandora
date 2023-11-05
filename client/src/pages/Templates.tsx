import { useNavigate } from "react-router-dom"
import Button from "../components/Button"
import Navbar from "../components/Navbar"
import { LINKS } from "../utils/routeConsts"
import { useForm } from "../hooks/useForm"

function Templates() {
  const { state, dispatch } = useForm()
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(LINKS)
  }

  const handleTemplateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_TEMPLATE', payload: e.target.value })
  }

  return (
    <>
      <Navbar />
      <section className="h-9/10 w-full flex flex-col px-8 py-4 items-center">
        <h2 className="text-4xl font-semibold mb-12"> Select Template </h2>
        <form className="bg-neutral-100 border border-neutral-200 rounded-lg p-4 w-96">
          <div className="backdrop-blur-md flex flex-1 w-full justify-around">
            <div className="w-full hover:bg-pink-50 hover:text-neutral-100 flex flex-col items-center">
              <input type="radio" className="hidden w-full peer/professional" id="professional" value="professional" name="template" onChange={handleTemplateChange} />
              <label htmlFor="professional" className="py-4 block font-medium cursor-pointer w-full text-center peer-checked/professional:bg-pink-100 peer-checked/professional:text-neutral-100 peer-checked/professional:font-bold transition duration-100">
                Professional
              </label>
            </div>

            <div className="w-full hover:bg-pink-50 hover:text-neutral-100 flex flex-col items-center">
              <input type="radio" className="hidden w-full peer/academic" id="academic" value="academic" name="template" onChange={handleTemplateChange} />
              <label htmlFor="academic" className="py-4 block font-medium cursor-pointer w-full text-center border-primary-100 peer-checked/academic:bg-pink-100 peer-checked/academic:text-neutral-100 peer-checked/academic:font-bold transition duration-100">
                Academic
              </label>
            </div>

            <div className="w-full hover:bg-pink-50 hover:text-neutral-100 flex flex-col items-center">
              <input type="radio" className="hidden w-full peer/creative" id="creative" value="creative" name="template" onChange={handleTemplateChange} />
              <label htmlFor="creative" className="py-4 block font-medium cursor-pointer w-full text-center border-primary-100 peer-checked/creative:bg-pink-100 peer-checked/creative:text-neutral-100 peer-checked/creative:font-bold transition duration-100">
                Creative
              </label>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <Button onClick={handleNavigate} isDisabled={!state.template}>
              Next
            </Button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Templates