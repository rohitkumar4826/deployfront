import mento from "./mentor.json";
export function Mentor() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Mentor and Advisor
            </h2>
          </div>
          <div className="grid gap-8 p-4 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {mento.map((obj, index) => (
              <div
                key={index}
                className="flex flex-col justify-between items-center p-4 box-content text-gray-500 dark:text-gray-400"
              >
                <div>
                  <img
                    className="mx-auto mb-4 w-36 h-36 rounded-full"
                    src={obj.imgurl}
                    alt="Avatar"
                  />
                  <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">{obj.name}</a>
                  </h3>
                  <p>{obj.detail}</p>
                </div>
                <button className="mt-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  Message him now
                </button>
              </div>
            ))}
            {/* Add similar structures for other mentors */}
          </div>
        </div>
      </section>
    </>
  );
}
