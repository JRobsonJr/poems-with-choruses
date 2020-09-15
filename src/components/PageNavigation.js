import React from 'react';
import { Link } from 'gatsby';

const PageNavigation = ({ previousPagePath, nextPagePath }) => (
  <div className="page-navigation">
      {previousPagePath && (
          <Link to={previousPagePath}>
              <div className="blog-post-list-item-link">Previous</div>
          </Link>
      )}
      {nextPagePath && (
          <Link to={nextPagePath}>
              <div className="blog-post-list-item-link">Next</div>
          </Link>
      )}
  </div>
);

export default PageNavigation;
