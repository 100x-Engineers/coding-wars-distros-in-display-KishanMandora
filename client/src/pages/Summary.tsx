import Navbar from '../components/Navbar'
import Textarea from '../components/Textarea'
import Button from '../components/Button'
import GeneratePDF from './GeneratePDF'
import { downloadPDf } from '../utils/downloadPdf'
import { useForm } from '../hooks/useForm'

function Summary() {
  const { state, dispatch } = useForm()

  const handleSummaryChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch({ type: 'SET_SUMMARY', payload: e.target.value })
  }

  return (
    <>
      <Navbar />
      <div className="flex h-9/10">
        <section className="h-9/10 w-1/2 flex flex-col px-8 py-4 items-center print:hidden">
          <h2 className="text-4xl font-semibold mb-12"> Add Summary </h2>
          <form className="bg-neutral-100 border border-neutral-200 rounded-lg p-4 w-3/4">
            <Textarea
              label='Summary'
              id='summary'
              value={state.summary}
              placeholder='A Frontend Developer with X years of exp...'
              onChange={handleSummaryChange}
            />

            <div className="flex justify-center mt-6">
              <Button
                onClick={downloadPDf}
                isDisabled={!state.summary}>
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

export default Summary