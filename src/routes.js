import React from "react";
import {Route, IndexRoute} from "react-router";

import App from "./components/app.js";
import PostsIndex from "./containers/postsIndex.js"
import PostsNew from "./containers/postsNew.js"
import PostShow from "./containers/postShow.js"



export default(
  <Route path="/" component={App}>
    <IndexRoute component={PostsIndex} />
    <Route path="/posts/new" component={PostsNew} />
    <Route path="/posts/:id" component={PostShow} />
  </Route>
);
