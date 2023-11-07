const Hero = () => {
  return (
    <div><section>
    <div
      className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div
          className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
        >
          <img
            alt="Party"
            src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
  
        <div className="lg:py-24">
          <h2 className="text-3xl font-bold sm:text-4xl">UI Personalization</h2>
  
          <p className="mt-4 text-gray-600">
          Certainly! Personalization in user interfaces is the future of user experience. It's about creating tailored, individualized experiences for users rather than offering a one-size-fits-all approach. Through customization, UIs can better meet the diverse needs of users, offering the right choices and adapting to individual preferences. Personalization is not just a trend but a fundamental aspect of modern UI design, enabling a more engaging and user-centric experience for everyone.
          </p>
  
          <a
            href="#"
            className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
          >
<<<<<<< HEAD
            Get Started Today
=======
            Buttons
>>>>>>> b5a5547c6e71d6d7c76056ea0956831dbd53ea57
          </a>
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default Hero