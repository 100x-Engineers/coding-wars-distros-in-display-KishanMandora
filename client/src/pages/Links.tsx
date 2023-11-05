import Button from "../components/Button"
import TextInput from "../components/TextInput"

function Links() {
    return (
        <section className="h-full w-full flex flex-col px-8 py-4 items-center justify-center">
            <form className="bg-neutral-100 border border-neutral-200 rounded-lg p-4 w-96">
                <TextInput label="Portfolio Link" placeholder="Portfolio Link" id="Portfolio Link" />
                <TextInput label="Github Link" placeholder="Github Link" id="Github Link" mt="mt-4" />
                <TextInput label="Twitter Link" placeholder="Twitter Link" id="Twitter Link" mt="mt-4" />
                <TextInput label="LinkedIn Link" placeholder="LinkedIn Link" id="LinkedIn Link" mt="mt-4" />

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

export default Links