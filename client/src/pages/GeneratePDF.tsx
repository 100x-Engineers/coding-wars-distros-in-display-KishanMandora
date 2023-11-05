import { useForm } from "../hooks/useForm"

function GeneratePDF() {
  const { state } = useForm()

  return (
    <>
      <section className="h-full w-1/2 flex flex-col p-4 items-center bg-white text-black print:w-full">
        <div className="flex flex-col gap-2 items-center">
          <h3 className="font-bold text-lg"> {state.name} </h3>
          <ul className="flex gap-4">
            {state.email &&
              <li>
                <a className="text-links text-sm" href={`mailto:${state.email}`}> Mail </a>
              </li>
            }

            {state.portfolioLink &&
              <li>
                <a className="text-links text-sm" href={state.portfolioLink}> Portfolio </a>
              </li>
            }

            {state.githubLink &&
              <li>
                <a className="text-links text-sm" href={state.githubLink}> Github </a>
              </li>
            }

            {state.twitterLink &&
              <li>
                <a className="text-links text-sm" href={state.twitterLink}> Twitter </a>
              </li>
            }

            {state.linkedInLink &&
              <li>
                <a className="text-links text-sm" href={state.linkedInLink}> LinkedIn </a>
              </li>
            }
          </ul>
        </div>

        {state.summary &&
          <div className="mt-4 border-t border-t-black w-full pt-2">
            <h4 className="font-semibold"> Summary </h4>
            <p className="text-sm">
              {state.summary}
            </p>
          </div>
        }


      </section>
    </>
  )
}

export default GeneratePDF