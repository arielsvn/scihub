
/* Landing page component */

import React from 'react';
import {Link} from 'react-router-dom';

export default function Home({}) {
  return <div>
    <div className="jumbotron">
      <p className="">
        Sci-Hub is a pirate website that provides access to full texts from the scholarly literature,
        including paywalled articles. This webapp provides coverage and usage statistics for Sci-Hub.
        The authors are not affiliated with Sci-Hub, and all reported statistics are calculated from
        publicly available data. This webapp is a companion to the study, <a href="https://doi.org/10.7554/eLife.32822" target="_blank">"Sci-Hub provides access to
        nearly all scholarly literature"</a>.
      </p>
    </div>

    <div className="row">
      <div className="col-sm-6 text-center">
        <Link to="/journals" className="btn btn-primary btn-lg">Journal Coverage Table</Link>
      </div>
      <p className="clarfix visible-xs"/>
      <div className="col-sm-6 text-center">
        <Link to="/publishers" className="btn btn-primary btn-lg">Publisher Coverage Table</Link>
      </div>
    </div>
  </div>;
}

