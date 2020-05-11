import gql from "graphql-tag";
import Link from "next/link";
import { graphql } from "react-apollo";
import ReactMarkdown from "react-markdown";

const query = gql`
  {
    categories {
      name
      id
      posts {
        id
        Title
        Resumen
      }
    }
  }
`;

const RecomendedPosts = ({ data: { loading, error, categories }, postId }) => {
  if (error) return "Error loading posts";

  if (categories && categories.length) {
    return (
      <>
        {categories.map((category) => (
          <div className="flex" key={category.id}>
            {category &&
              category.posts.map(
                (post) =>
                  post.id !== postId && (
                    <div key={post.id} className="w-full md:w-1/3 px-2 pb-12">
                      <Link href={`/post/${post.id}`}>
                        <a className="h-full bg-white block rounded overflow-hidden shadow-md hover:shadow-lg relative smooth no-underline hover:no-underline">
                          <img
                            src="https://source.unsplash.com/_AjqGGafofE/400x200"
                            className="h-48 w-full rounded-t shadow-lg"
                          />
                          <div className="p-6 h-auto md:h-48">
                            <p className="text-gray-600 text-xs md:text-sm">
                              {category.name}
                            </p>
                            <div className="font-bold text-xl text-gray-900">
                              {post.Title}
                            </div>
                            <p className="text-gray-800 font-serif text-base mb-5">
                              {post.Resumen}
                            </p>
                          </div>
                          <div className="flex items-center justify-between inset-x-0 bottom-0 p-6">
                            <img
                              className="w-8 h-8 rounded-full mr-4"
                              src="http://i.pravatar.cc/300"
                              alt="Avatar of Author"
                            />
                            <p className="text-gray-600 text-xs md:text-sm">
                              2 MIN READ
                            </p>
                          </div>
                        </a>
                      </Link>
                    </div>
                  )
              )}
          </div>
        ))}
      </>
    );
  }
  return <h1>Loading...</h1>;
};

export default graphql(query, {
  props: ({ data }) => ({
    data,
  }),
})(RecomendedPosts);

