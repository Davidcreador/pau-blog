import { createHttpLink } from "apollo-link-http";
import { withData } from "next-apollo";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";

const token = "57ba587149d255701211431aa8fe65";

const httpLink = createHttpLink({
  uri: "https://graphql.datocms.com",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: Object.assign(headers || {}, {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    }),
  };
});

const config = {
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
};

export default withData(config);
