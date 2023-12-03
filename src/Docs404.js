import React from 'react';
import jpg404 from './404.jpg';
export const Docs404 = () => {


    return (
        <div className="Docs404">
        <h1>404</h1>
        <p>Page not found.</p>
        <picture>
          <img
            src={jpg404} // Fallback image (JPEG or other format)
            alt="404 Illustration"
            className="not-found-image"
          />
        </picture>
        <p>Sorry, the requested page could not be found.</p>
        <a href="/">Go back to the homepage</a>
      </div>
    );
  };
  
  export default Docs404;