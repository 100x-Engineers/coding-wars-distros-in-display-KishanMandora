type TextareaProps = {
  label: string
  placeholder: string
  id: string
  value: string,
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
  mt?: "mt-2" | "mt-4",
  maxLength?: number
}


function Textarea(
  { label, placeholder, id, onChange, value, mt, maxLength = 250 }: TextareaProps
) {
  return (

    <div className={`flex flex-col gap-1 ${mt ? mt : ""}`}>
      <label className="text-pink-50 text-sm" htmlFor={id}>{label}</label>
      <textarea className="bg-slate-50 h-60 rounded-lg p-4 w-full outline-none text-black"
        placeholder={placeholder}
        id={id}
        onChange={onChange}
        value={value}
        maxLength={maxLength} />
    </div>
  )
}

export default Textarea