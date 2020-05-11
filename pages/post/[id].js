import gql from "graphql-tag";
import { Query } from "react-apollo";
import ReactMarkdown from "react-markdown";
import RecomendedPosts from "../../components/RecommendedPosts";
import { useRouter } from "next/router";
import Link from "next/link";

const query = gql`
  query getPost($id: ItemId) {
    article(filter: { id: { eq: $id } }) {
      title
      createdAt
      resumen
      content(markdown: true)
      id
      featured
      links {
        id
        category
      }
      mainImage {
        id
        url
      }
      images {
        id
        url
      }
    }
  }
`;

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Query query={query} variables={{ id }}>
      {(post) => {
        const { data } = post;

        if (data && data.article) {
          return (
            <>
              <div className="text-center pt-16 md:pt-32">
                <p className="text-sm md:text-base text-teal-500 font-bold">
                  {data.article.createdAt}
                </p>
                <h1 className="font-bold break-normal text-3xl md:text-5xl">
                  {data.article.title}
                </h1>
              </div>

              {data.article.image && data.article.image.url ? (
                <div
                  className="container w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded"
                  style={{
                    backgroundImage: `url(${data.article.image.url})`,
                    height: "75vh",
                  }}
                />
              ) : null}

              <div className="container max-w-5xl mx-auto">
                <div className="mx-0 sm:mx-6">
                  <div className="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal">
                    <div className="max-w-2xl mx-auto">
                      <div
                        className="-mt-10"
                        dangerouslySetInnerHTML={{
                          __html: data.article.content,
                        }}
                      />

                      <div className="mt-10 flex items-center">
                        {data.article.links.map((link, index) => (
                          <Link key={index} href={`/category/${link.category}`}>
                            <a
                              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                              key={link.id}
                            >
                              {link.category}
                            </a>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
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
                    <div className="max-w-sm mx-auto p-1 pr-0 flex flex-wrap items-center">
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

              <div className="bg-gray-200">
                <div className="container w-full max-w-6xl mx-auto px-2 py-8">
                  <div className="flex flex-wrap -mx-2">
                    <RecomendedPosts postId={data.article.id} />
                  </div>
                </div>
              </div>
            </>
          );
        }

        return <h1>Loading...</h1>;
      }}
    </Query>
  );
};

export default Post;
