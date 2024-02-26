import { Mentor } from "./mentor";
import { Hero } from "./hero";
import teamm from "./teamm.json";
export function Team() {
  return (
    <>
      <Hero />
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Our team
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400"></p>
          </div>
          <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {teamm.map((obj, index) => (
              <div
                key={index}
                className="text-center text-gray-500 dark:text-gray-400"
              >
                <img
                  className="mx-auto mb-4 w-36 h-36 rounded-full"
                  src={obj.imageSrc}
                  alt="Avatar"
                />
                <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">{obj.name}</a>
                </h3>
                <p>{obj.university}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Mentor />
    </>
  );
}
