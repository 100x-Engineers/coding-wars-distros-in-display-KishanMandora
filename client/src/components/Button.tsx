type ButtonProps = {
  variant?: "primary" | "primaryOutline"
  children: React.ReactNode
  size?: "sm" | "md" | "lg"
  rounded?: "sm" | "md" | "lg" | "full" | "normal",
  isDisabled?: boolean,
  onClick?: () => void
}


function Button(
  { variant = "primary", children, size = "md", rounded = "normal", isDisabled = false, onClick }: ButtonProps
) {

  const variantStyles = {
    primary: "bg-pink-200 text-black",
    primaryOutline: "border border-pink-50 text-pink-50"
  }

  const sizeStyles = {
    sm: "px-4 py-1",
    md: "px-6 py-2",
    lg: "px-8 py-3",
  }

  const roundedStyles = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
    normal: "rounded"
  }

  const disabledStyles = "opacity-50 cursor-not-allowed"
  const enabledStyles = "cursor-pointer"


  return (
    <button className={`${variantStyles[variant]} ${sizeStyles[size]} ${roundedStyles[rounded]} ${isDisabled ? disabledStyles : enabledStyles} h-max`}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button