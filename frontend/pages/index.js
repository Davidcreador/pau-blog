import Layout from '../components/Layout'

export default () => (
  <Layout title="Paula de Mamá | Home">
    <div className="bg-gray-200 w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t">
      <div className="flex h-full bg-white rounded overflow-hidden shadow-lg">
        <a href="post.html" className="flex flex-wrap no-underline hover:no-underline">
          <div className="w-full md:w-2/3 rounded-t">
            <img src="https://source.unsplash.com/collection/494263/800x600"
              className="h-full w-full shadow" />
          </div>

          <div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
              <p className="w-full text-gray-600 text-xs md:text-sm pt-6 px-6">GETTING STARTED</p>
              <div className="w-full font-bold text-xl text-gray-900 px-6">👋 Welcome fellow Tailwind CSS
                    and Ghost fan</div>
              <p className="text-gray-800 font-serif text-base px-6 mb-5">
                This starter template is an attempt to replicate the default Ghost theme "Casper"
                using Tailwind CSS and vanilla Javascript.
                  </p>
            </div>

            <div
              className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
              <div className="flex items-center justify-between">
                <img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name"
                  src="http://i.pravatar.cc/300" alt="Avatar of Author" />
                <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
              </div>
            </div>
          </div>

        </a>
      </div>


      <div class="flex flex-wrap justify-between pt-12 -mx-6">

        <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
            <a href="#" class="flex flex-wrap no-underline hover:no-underline">
              <img src="https://source.unsplash.com/collection/225/800x600"
                class="h-64 w-full rounded-t pb-6" />
              <p class="w-full text-gray-600 text-xs md:text-sm px-6">GETTING STARTED</p>
              <div class="w-full font-bold text-xl text-gray-900 px-6">Lorem ipsum dolor sit amet.
								</div>
              <p class="text-gray-800 font-serif text-base px-6 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc
                commodo posuere et sit amet ligula.
								</p>
            </a>
          </div>
          <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
            <div class="flex items-center justify-between">
              <img class="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name"
                src="http://i.pravatar.cc/300" alt="Avatar of Author" />
              <p class="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
            </div>
          </div>
        </div>

        <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
            <a href="#" class="flex flex-wrap no-underline hover:no-underline">
              <img src="https://source.unsplash.com/collection/3106804/800x600"
                class="h-64 w-full rounded-t pb-6" />
              <p class="w-full text-gray-600 text-xs md:text-sm px-6">GETTING STARTED</p>
              <div class="w-full font-bold text-xl text-gray-900 px-6">Lorem ipsum dolor sit amet.
								</div>
              <p class="text-gray-800 font-serif text-base px-6 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. ipsum dolor sit amet,
                consectetur adipiscing elit. Aliquam at ip Aliquam at ipsum eu nunc commodo posuere
                et sit amet ligula.
								</p>
            </a>
          </div>
          <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
            <div class="flex items-center justify-between">
              <img class="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name"
                src="http://i.pravatar.cc/300" alt="Avatar of Author" />
              <p class="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
            </div>
          </div>
        </div>


        <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
            <a href="#" class="flex flex-wrap no-underline hover:no-underline">
              <img src="https://source.unsplash.com/collection/539527/800x600"
                class="h-64 w-full rounded-t pb-6" />
              <p class="w-full text-gray-600 text-xs md:text-sm px-6">GETTING STARTED</p>
              <div class="w-full  font-bold text-xl text-gray-900 px-6">Lorem ipsum dolor sit amet.
								</div>
              <p class="text-gray-800 font-serif text-base px-6 mb-5">
                Lorem ipsum eu nunc commodo posuere et sit amet ligula.
								</p>
            </a>
          </div>
          <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
            <div class="flex items-center justify-between">
              <img class="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name"
                src="http://i.pravatar.cc/300" alt="Avatar of Author" />
              <p class="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
            </div>
          </div>
        </div>


        <div class="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
          <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
            <a href="#" class="flex flex-wrap no-underline hover:no-underline">
              <img src="https://source.unsplash.com/collection/3657445/800x600"
                class="h-full w-full rounded-t pb-6" />
              <p class="w-full text-gray-600 text-xs md:text-sm px-6">GETTING STARTED</p>
              <div class="w-full font-bold text-xl text-gray-900 px-6">Lorem ipsum dolor sit amet.
								</div>
              <p class="text-gray-800 font-serif text-base px-6 mb-5">
                Lorem ipsum eu nunc commodo posuere et sit amet ligula.
								</p>
            </a>
          </div>
          <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
            <div class="flex items-center justify-between">
              <img class="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name"
                src="http://i.pravatar.cc/300" alt="Avatar of Author" />
              <p class="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
            </div>
          </div>
        </div>


        <div class="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
          <div class="flex-1 flex-row bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
            <a href="#" class="flex flex-wrap no-underline hover:no-underline">
              <img src="https://source.unsplash.com/collection/764827/800x600"
                class="h-full w-full rounded-t pb-6" />
              <p class="w-full text-gray-600 text-xs md:text-sm px-6">GETTING STARTED</p>
              <div class="w-full font-bold text-xl text-gray-900 px-6">Lorem ipsum dolor sit amet.
								</div>
              <p class="text-gray-800 font-serif text-base px-6 mb-5">
                Lorem ipsum eu nunc commodo posuere et sit amet ligula.
								</p>
            </a>
          </div>
          <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
            <div class="flex items-center justify-between">
              <img class="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name"
                src="http://i.pravatar.cc/300" alt="Avatar of Author" />
              <p class="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
            </div>
          </div>
        </div>


        <div class="w-full md:w-2/3 p-6 flex flex-col flex-grow flex-shrink">
          <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
            <a href="#" class="flex flex-wrap no-underline hover:no-underline">
              <img src="https://source.unsplash.com/collection/325867/800x600"
                class="h-full w-full rounded-t pb-6" />
              <p class="w-full text-gray-600 text-xs md:text-sm px-6">GETTING STARTED</p>
              <div class="w-full font-bold text-xl text-gray-900 px-6">Lorem ipsum dolor sit amet.
								</div>
              <p class="text-gray-800 font-serif text-base px-6 mb-5">
                Lorem ipsum eu nunc commodo posuere et sit amet ligula.
								</p>
            </a>
          </div>
          <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
            <div class="flex items-center justify-between">
              <img class="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name"
                src="http://i.pravatar.cc/300" alt="Avatar of Author" />
              <p class="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
            </div>
          </div>
        </div>


        <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
            <a href="#" class="flex flex-wrap no-underline hover:no-underline">
              <img src="https://source.unsplash.com/collection/1118905/800x600"
                class="h-full w-full rounded-t pb-6" />
              <p class="w-full text-gray-600 text-xs md:text-sm px-6">GETTING STARTED</p>
              <div class="w-full font-bold text-xl text-gray-900 px-6">Lorem ipsum dolor sit amet.
								</div>
              <p class="text-gray-800 font-serif text-base px-6 mb-5">
                Lorem ipsum eu nunc commodo posuere et sit amet ligula.
								</p>
            </a>
          </div>
          <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
            <div class="flex items-center justify-between">
              <img class="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name"
                src="http://i.pravatar.cc/300" alt="Avatar of Author" />
              <p class="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container font-sans bg-teal-100 rounded mt-8 p-4 md:p-24 text-center">
      <h2 class="font-bold break-normal text-2xl md:text-4xl">Subscribe to Ghostwind CSS</h2>
      <h3 class="font-bold break-normal font-normal text-gray-600 text-base md:text-xl">Get the latest posts
					delivered right to your inbox</h3>
      <div class="w-full text-center pt-4">
        <form action="#">
          <div class="max-w-xl mx-auto p-1 pr-0 flex flex-wrap items-center">
            <input type="email" placeholder="youremail@example.com"
              class="flex-1 appearance-none rounded shadow p-3 text-gray-600 mr-2 focus:outline-none" />
            <button type="submit"
              class="flex-1 mt-4 md:mt-0 block md:inline-block appearance-none bg-teal-500 text-white text-base font-semibold tracking-wider uppercase py-4 rounded shadow hover:bg-teal-400">Subscribe</button>
          </div>
        </form>
      </div>
    </div>


    <div class="flex w-full items-center font-sans p-8 md:p-24">
      <img class="w-10 h-10 rounded-full mr-4" src="http://i.pravatar.cc/300" alt="Avatar of Author" />
      <div class="flex-1">
        <p class="text-base font-bold text-base md:text-xl leading-none">Ghostwind CSS</p>
        <p class="text-gray-600 text-xs md:text-base">Tailwind CSS version of Ghost's Casper theme by <a
          class="text-gray-800 hover:text-teal-500 no-underline border-b-2 border-teal-500"
          href="https://www.tailwindtoolbox.com">TailwindToolbox.com</a></p>
      </div>
      <div class="justify-end">
        <button
          class="bg-transparent border border-gray-500 hover:border-teal-500 text-xs text-gray-500 hover:text-teal-500 font-bold py-2 px-4 rounded-full">Read
						More</button>
      </div>
    </div>
  </Layout>
)