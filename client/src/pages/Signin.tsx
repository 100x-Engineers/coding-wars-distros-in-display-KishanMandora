import { useNavigate } from "react-router-dom";
import Button from "../components/Button"
import TextInput from "../components/TextInput"
import { useForm } from "../hooks/useForm";
import { LINKS } from "../utils/routeConsts";
import Navbar from "../components/Navbar";

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
      <section className="h-9/10 w-full flex flex-col px-8 py-4 items-center justify-center">
        <form className="bg-neutral-100 border border-neutral-200 rounded-lg p-4 w-96">
          <TextInput type="email" label="Email" placeholder="Email" id="email" onChange={handleEmailChange} value={state.email} />
          <TextInput label="Username" placeholder="Username" id="username" mt="mt-4" onChange={handleNameChange} value={state.name} />

          <div className="flex justify-center mt-6">
            <Button onClick={handleNavigate} isDisabled={!state.email || !state.name}>
              Provide Links
            </Button>
          </div>
        </form>
      </section>
    </>

  )
}

export default SignIn