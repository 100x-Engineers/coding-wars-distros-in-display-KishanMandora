import { useNavigate } from "react-router-dom";
import Button from "../components/Button"
import TextInput from "../components/TextInput"
import { useForm } from "../hooks/useForm";
import { LINKS } from "../utils/routeConsts";
import Navbar from "../components/Navbar";
import GeneratePDF from "./GeneratePDF";

function SignIn() {
  const { state, dispatch } = useForm();
  const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_EMAIL', payload: e.target.value });
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_NAME', payload: e.target.value });
  }

  const handleNavigate = () => {
    navigate(LINKS);
  }

  return (
    <>
      <Navbar />
      <div className="flex h-9/10">
        <section className="h-full w-1/2 flex flex-col px-8 py-4 items-center print:hidden">
          <h2 className="text-4xl font-semibold mb-12"> Sign In </h2>
          <form className="bg-neutral-100 border border-neutral-200 rounded-lg p-4 w-96">
            <TextInput label="Username" placeholder="Username" id="username" onChange={handleNameChange} value={state.name} />
            <TextInput type="email" label="Email" placeholder="Email" id="email" mt="mt-4" onChange={handleEmailChange} value={state.email} />

            <div className="flex justify-center mt-6">
              <Button onClick={handleNavigate} isDisabled={!state.email || !state.name}>
                Next
              </Button>
            </div>
          </form>
        </section>
        <GeneratePDF />
      </div>
    </>

  )
}

export default SignIn