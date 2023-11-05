import { useState } from 'react'
import Navbar from '../components/Navbar'
import Textarea from '../components/Textarea'
import Button from '../components/Button'

function Summary() {
  const [summary, setSummary] = useState("")

  const handleSummaryChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSummary(e.target.value)
  }

  return (
    <>
      <Navbar />
      <section className="h-9/10 w-full flex flex-col px-8 py-4 items-center">
        <h2 className="text-4xl font-semibold mb-12"> Add Summary </h2>
        <form className="bg-neutral-100 border border-neutral-200 rounded-lg p-4 w-2/3">
          <Textarea
            label='Summary'
            id='summary'
            value={summary}
            placeholder='A Frontend Developer with X years of exp...'
            onChange={handleSummaryChange}
          />

          <div className="flex justify-center mt-6">
            <Button
              // onClick={}
              isDisabled={!summary}>
              Next
            </Button>
          </div>
        </form>
      </section>
    </>

  )
}

export default Summary