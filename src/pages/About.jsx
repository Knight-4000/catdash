import about from '../assets/about.jpg'


export default function About() {
  return (
        <>
          <div className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center h-100'>
            <h1 className='text-4xl font-bold leading-none tracking-tight sm:text-6xl mt-10'>
              Cat Hungry?
            </h1>
          </div>
          <p className='mt-6 text-lg leading-8 max-w-2xl mx-auto text-justify'>
            When your cat is hungry, they don't like to wait. And with nutrious meals that fit your cat's needs, 
            lifestyle and taste preferences, Cat Dash has what your little one needs. Search our menu with the tastiest 
            delights caught daily by our professional four-legged helpers who help your cat feel their very best.
          </p>
          <div class="p-20">
             <h3 class="font-bold mb-4">Our chief fish catcher, Charlie</h3>
              <div class="bg-white rounded-lg shadow-2xl md:flex">
              <img src={about} alt="cat" class="md:w-1/3 rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
                <div class="p-6">
                  <h2 class="font-bold text-xl md:text-3xl mb-2 text-orange-700">Fresh Food</h2>
                  <p class="text-orange-700">
                    Want fresh? Try caught that day! Can't get any fresher than what our talented guys and gals bring 
                    your cat. Let our babies treat yours to a meal they'll never forget!
                  </p>
                </div>
              </div>
          </div>
        </>
      )
     }
