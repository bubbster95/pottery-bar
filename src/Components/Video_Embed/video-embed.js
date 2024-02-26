import React from "react";
import PropTypes from "prop-types";

import './video-embed.scss'

/*
    Some code pulled form the following article
    https://dev.to/bravemaster619/simplest-way-to-embed-a-youtube-video-in-your-react-app-3bk2
    This works well but hade to add "-nocookie" into url src to remove a ton of errors.
*/
const VideoEmbed = ({ embedId, title }) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube-nocookie.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={title}
    />
  </div>
);

VideoEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default VideoEmbed;