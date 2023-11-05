import Button from "../components/Button"
import TextInput from "../components/TextInput"

function SignIn() {
  return (
    <section className="h-full w-full flex flex-col px-8 py-4 items-center justify-center">
      <form className="bg-neutral-100 border border-neutral-200 rounded-lg p-4 w-96">
        <TextInput type="email" label="Email" placeholder="Email" id="email" />
        <TextInput label="Username" placeholder="Username" id="username" mt="mt-4" />

        <div className="flex justify-between mt-4">
          <Button variant="primaryOutline">
            Create Resume
          </Button>
          <Button>
            Create Resume
          </Button>
        </div>
      </form>
    </section>
  )
}

export default SignIn