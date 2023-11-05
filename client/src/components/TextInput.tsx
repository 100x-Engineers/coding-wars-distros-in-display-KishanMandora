type TextInputProps = {
  type?: "text" | "email"
  label: string
  placeholder: string
  id: string
  mt?: "mt-2" | "mt-4"
}

function TextInput(
  { type, label, placeholder, id, mt }: TextInputProps
) {
  return (
    <div className={`flex flex-col gap-1 ${mt ? mt : ""}`}>
      <label className="text-pink-50 text-sm" htmlFor={id}>{label}</label>
      <input type={type ? type : "text"} className="bg-slate-50 rounded-lg p-4 w-full outline-none text-black"
        placeholder={placeholder}
        id={id} />
    </div>
  )
}

export default TextInput