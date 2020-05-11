import gql from "graphql-tag";
import Link from "next/link";
import { graphql } from "react-apollo";
import ReactMarkdown from "react-markdown";

const query = gql`
  {
    allArticles(orderBy: _createdAt_ASC) {
      resumen
      content(markdown: true)
      id
      title
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
      avatar {
        id
        url
      }
    }
  }
`;

const PostList = (articles) => {
  const { data } = articles;

  if (data && data.allArticles && data.allArticles.length) {
    return (
      <>
        {data.allArticles.map((post) => {
          return (
            <div key={post.id}>
              {post.featured ? (
                <div className="flex h-full bg-white rounded overflow-hidden shadow-lg">
                  <Link href={`/post/${post.id}`}>
                    <a className="flex flex-wrap no-underline hover:no-underline">
                      <div className="w-full md:w-2/3 rounded-t">
                        <img
                          src={post.mainImage && post.mainImage.url}
                          className="h-full w-full shadow"
                        />
                      </div>

                      <div
                        key={post.id}
                        className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink pt-10"
                      >
                        <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                          {post.links &&
                            post.links.map((cat, index) => (
                              <p
                                key={index}
                                className="w-full text-gray-600 text-xs md:text-sm pt-6 px-6"
                              >
                                {cat.category}
                              </p>
                            ))}

                          <div className="w-full font-bold text-xl text-gray-900 px-6">
                            👋 {post.title}
                          </div>
                          <div
                            className="text-gray-800 font-serif text-base px-6 mb-5"
                            dangerouslySetInnerHTML={{
                              __html: post.resumen,
                            }}
                          ></div>
                        </div>

                        <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                          <div className="flex items-center justify-between">
                            <img
                              className="w-8 h-8 rounded-full mr-4 avatar object-cover"
                              data-tippy-content="Author Name"
                              src={post.avatar ? post.avatar.url : ""}
                              alt="Avatar of Author"
                            />
                            <p className="text-gray-600 text-xs md:text-sm">
                              1 MIN READ
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              ) : (
                <div className="flex flex-wrap justify-between pt-12 -mx-6">
                  <div className="w-full md:w-1/3 p-6 flex flex-col flex-shrink">
                    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                      <Link href={`/post/${post.id}`}>
                        <a className="flex flex-wrap no-underline hover:no-underline">
                          <img
                            src={post.mainImage && post.mainImage.url}
                            className="h-64 w-full rounded-t pb-6"
                          />

                          {/* {post.categories &&
                            post.categories.map((cat, index) => (
                              <p
                                key={index}
                                className="w-full text-gray-600 text-xs md:text-sm px-6"
                              >
                                {cat.name}
                              </p>
                            ))} */}

                          <div className="w-full font-bold text-xl text-gray-900 px-6">
                            {post.title}
                          </div>
                          <div
                            className="text-gray-800 font-serif text-base px-6 mb-5"
                            dangerouslySetInnerHTML={{
                              __html: post.resumen,
                            }}
                          ></div>
                        </a>
                      </Link>
                    </div>
                    <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                      <div className="flex items-center justify-between">
                        <img
                          className="w-8 h-8 rounded-full mr-4 avatar"
                          data-tippy-content="Author Name"
                          src={post.avatar ? post.avatar.url : ""}
                          alt="Avatar of Author"
                        />
                        <p className="text-gray-600 text-xs md:text-sm">
                          1 MIN READ
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </>
    );
  }

  return <h1>Loading</h1>;
};

export default graphql(query, {
  props: ({ data }) => ({
    data,
  }),
})(PostList);
