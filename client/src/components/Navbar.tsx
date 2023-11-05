import Button from "./Button"

function Navbar() {

  return (
    <nav className="bg-black w-full h-1/10 flex justify-between px-6 py-2 items-center">
      <h1 className="font-mono text-pink-50 text-2xl">
        RESUMAGIC
      </h1>
      <Button variant="primaryOutline" size="sm">
        Logout
      </Button>
    </nav>
  )
}

export default Navbar