import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId, maxWidth, maxHeight }) => (
  <div className="video-responsive flex center">
    <iframe
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      className="youtube-view"
      // style="height: 57vw;maxHeight: 350px;maxWidth: 600px;"
      style={{
        height: "57vw",
        maxHeight: maxHeight || "350px",
        maxWidth: maxWidth || "1024px",
        borderRadius: "var(--base-border-radius)",
        boxShadow: "var( --base-shadow )",
      }}
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
