import { Mentor } from "./mentor"
import {Hero} from "./hero"
export function Team() {
  return (
   <>
  <Hero/>
   <section className="bg-white dark:bg-gray-900">
   
  <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
    <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
        Our team
      </h2>
      <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
 
      </p>
    </div>
    <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div className="text-center text-gray-500 dark:text-gray-400">
        <img
          className="mx-auto mb-4 w-36 h-36 rounded-full"
          src="http://www.sciastra.com/new_admin/teams/files/Aditya%20Nayak_Biology.jpeg"
          alt="Avatar"
        />
        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <a href="#">Aditya Nayak</a>
        </h3>
        <p>IISER Mohali</p>
       
      </div>
      <div className="text-center text-gray-500 dark:text-gray-400">
        <img
          className="mx-auto mb-4 w-36 h-36 rounded-full"
          src="http://www.sciastra.com/new_admin/teams/files/Kedar_Tornekar1.jpg"
          alt="Avatar"
        />
       <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <a href="#">Mandar Tornekar</a>
        </h3>
        <p>GMC Dhule</p>
       
      </div>
      <div className="text-center text-gray-500 dark:text-gray-400">
        <img
          className="mx-auto mb-4 w-36 h-36 rounded-full"
          src="http://www.sciastra.com/new_admin/teams/files/Sehasree_Mohanta.jpg"
          alt="Avatar"
        />
         <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <a href="#">Sehasree Mohanta</a>
        </h3>
        <p>IACS</p>
        
      </div>
      <div className="text-center text-gray-500 dark:text-gray-400">
        <img
          className="mx-auto mb-4 w-36 h-36 rounded-full"
          src="http://www.sciastra.com/new_admin/teams/files/Screenshot(49).png"
          alt="Avatar"
        />
        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <a href="#">Tanmay</a>
        </h3>
        <p>NISER</p>
       
      </div>
      <div className="text-center text-gray-500 dark:text-gray-400">
        <img
          className="mx-auto mb-4 w-36 h-36 rounded-full"
          src="http://www.sciastra.com/new_admin/teams/files/Siddharth_Bhatt_physics.jpg"
          alt="Avatar"
        />
        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <a href="#">Siddhart Bhatt</a>
        </h3>
        <p>IISER Thiruvananthapuram</p>
       
      </div>
      <div className="text-center text-gray-500 dark:text-gray-400">
        <img
          className="mx-auto mb-4 w-36 h-36 rounded-full"
          src="http://www.sciastra.com/new_admin/teams/files/Siddharth_Bhatt_physics.jpg"
          alt="Avatar"
        />
       <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <a href="#">Ripunjay Dwivedi</a>
        </h3>
        <p>CMI</p>
       
      </div>
      <div className="text-center text-gray-500 dark:text-gray-400">
        <img
          className="mx-auto mb-4 w-36 h-36 rounded-full"
          src="http://www.sciastra.com/new_admin/teams/files/Saumya_Sharma_mathematics.png"
          alt="Avatar"
        />
       <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <a href="#">Saumya Prakash</a>
        </h3>
        <p>NISER</p>
        
      </div>
      <div className="text-center text-gray-500 dark:text-gray-400">
        <img
          className="mx-auto mb-4 w-36 h-36 rounded-full"
          src="http://www.sciastra.com/new_admin/teams/files/Saumya_Shisodiya_mathematics.jpg"
          alt="Avatar"
        />
       <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <a href="#">Saumya Shisodiya</a>
        </h3>
        <p>HBTU Kanpur</p>
       
      </div>
    </div>
  </div>
</section>
   <Mentor/>
   </>
  )
}
