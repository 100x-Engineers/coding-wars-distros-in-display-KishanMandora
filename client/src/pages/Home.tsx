function Home() {
  return (
    <section className="bg-black h-screen w-full flex flex-col px-8 py-4 items-center justify-center">
      <h1 className="font-mono text-pink-50 text-9xl">
        RESUMAGIC
      </h1>
      <p className="text-pink-100 w-3/4 font-medium text-xl mt-12 text-center">
        Elevate Your First Impression - Begin with a Resume that Captures Excellence! Stand out from the crowd
        and land your dream job with a stunning, unforgettable resume crafted by professionals.
      </p>
      <button className="border border-pink-50 text-pink-50 mt-8 px-6 py-2 rounded-full cursor-pointer">
        Create Resume
      </button>
    </section>
  )
}

export default Home