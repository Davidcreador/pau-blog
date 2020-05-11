import gql from "graphql-tag";
import { graphql } from "react-apollo";
import Layout from "../components/Layout";
import PostList from "../components/PostList";

const query = gql`
  {
    global {
      imagenDePortada {
        id
        url
      }
      descripcion
      encabezado
    }
  }
`;

const Index = ({ data }) => {
  if (data) {
    return (
      <Layout
        title={`${data && data.global && data.global.encabezado}`}
        description={data && data.global && data.global.descripcion}
        coverImage={data && data.global && data.global.imagenDePortada.url}
      >
        <div className="bg-gray-200 w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t">
          <PostList />
        </div>

        {/* <div className="container font-sans bg-teal-100 rounded mt-8 p-4 md:p-24 text-center">
          <h2 className="font-bold break-normal text-2xl md:text-4xl">
            Subscribe to Ghostwind CSS
          </h2>
          <h3 className="font-bold break-normal font-normal text-gray-600 text-base md:text-xl">
            Get the latest posts delivered right to your inbox
          </h3>
          <div className="w-full text-center pt-4">
            <form action="#">
              <div className="max-w-xl mx-auto p-1 pr-0 flex flex-wrap items-center">
                <input
                  type="email"
                  placeholder="youremail@example.com"
                  className="flex-1 appearance-none rounded shadow p-3 text-gray-600 mr-2 focus:outline-none"
                />
                <button
                  type="submit"
                  className="flex-1 mt-4 md:mt-0 block md:inline-block appearance-none bg-teal-500 text-white text-base font-semibold tracking-wider uppercase py-4 rounded shadow hover:bg-teal-400"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div> */}

        {/* <div className="flex w-full items-center font-sans p-8 md:p-24">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src="http://i.pravatar.cc/300"
            alt="Avatar of Author"
          />
          <div className="flex-1">
            <p className="text-base font-bold text-base md:text-xl leading-none">
              Ghostwind CSS
            </p>
            <p className="text-gray-600 text-xs md:text-base">
              Tailwind CSS version of Ghost's Casper theme by{" "}
              <a
                className="text-gray-800 hover:text-teal-500 no-underline border-b-2 border-teal-500"
                href="https://www.tailwindtoolbox.com"
              >
                TailwindToolbox.com
              </a>
            </p>
          </div>
          <div className="justify-end">
            <button className="bg-transparent border border-gray-500 hover:border-teal-500 text-xs text-gray-500 hover:text-teal-500 font-bold py-2 px-4 rounded-full">
              Read More
            </button>
          </div>
        </div> */}
      </Layout>
    );
  }

  return null;
};

export default graphql(query, {
  props: ({ data }) => ({
    data,
  }),
})(Index);
