import Navbar from "../components/navbar.jsx"
import {Link } from 'react-router-dom'
 const Home = () => {
  return (
    <>
    <div className="bg-[#610C9F]">
      <Navbar/>
    </div>
    <div className=" bg-gradient-to-t from-white via-purple-100 to-indigo-200">
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
             Create with your choice!
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Give your preference and we will create it for you.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              
                <Link to='/SignUp'  className="rounded-md bg-[#940B92] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Register</Link>
             
              
              <Link to='/login' className="text-sm font-semibold leading-6 text-gray-900">Login</Link> <span aria-hidden="true">→</span>
              
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        </div>
      

    </>
    
  )
}

export default Home;
