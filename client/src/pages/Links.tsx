import Button from "../components/Button"
import TextInput from "../components/TextInput"
import { useForm } from "../hooks/useForm"

function Links() {
    const { state, dispatch } = useForm();

    const handlePortfolioLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: 'SET_PORTFOLIO_LINK', payload: e.target.value });
    }

    const handleGithubLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: 'SET_GITHUB_LINK', payload: e.target.value });
    }

    const handleTwitterLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: 'SET_TWITTER_LINK', payload: e.target.value });
    }

    const handleLinkedInLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: 'SET_LINKEDIN_LINK', payload: e.target.value });
    }

    return (
        <section className="h-full w-full flex flex-col px-8 py-4 items-center justify-center">
            <form className="bg-neutral-100 border border-neutral-200 rounded-lg p-4 w-96">
                <TextInput label="Portfolio Link" placeholder="Portfolio Link" id="Portfolio Link"
                    onChange={handlePortfolioLinkChange}
                    value={state.portfolioLink} />
                <TextInput label="Github Link" placeholder="Github Link" id="Github Link" mt="mt-4"
                    onChange={handleGithubLinkChange}
                    value={state.githubLink} />
                <TextInput label="Twitter Link" placeholder="Twitter Link" id="Twitter Link" mt="mt-4"
                    onChange={handleTwitterLinkChange}
                    value={state.twitterLink} />
                <TextInput label="LinkedIn Link" placeholder="LinkedIn Link" id="LinkedIn Link" mt="mt-4"
                    onChange={handleLinkedInLinkChange}
                    value={state.linkedInLink} />

                <div className="flex justify-center mt-6">
                    <Button>
                        Provide Summary
                    </Button>
                </div>
            </form>
        </section>
    )
}

export default Links