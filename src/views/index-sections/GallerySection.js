import PropTypes from "prop-types";
import React from "react";
import Gallery from "react-grid-gallery";

export default class GalerySection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: this.props.images,
    };
  }

  render() {
    return (
      <div
        style={{
          minHeight: "1px",
          border: "1px solid #ddd",
          overflow: "auto",
          margin: 50,
        }}
      >
        <Gallery
          images={this.state.images}
          enableLightbox={true}
          enableImageSelection={false}
          rowHeight={420}
        />
      </div>
    );
  }
}

GalerySection.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      srcset: PropTypes.array,
      caption: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
      thumbnailWidth: PropTypes.number.isRequired,
      thumbnailHeight: PropTypes.number.isRequired,
    })
  ).isRequired,
};

GalerySection.defaultProps = {
  images: [
    {
      src: require("assets/img/webimg/1.jpg"),
      thumbnail: require("assets/img/webimg/1.jpg"),
      thumbnailWidth: 204,
      thumbnailHeight: 136,
    },
    {
      src: require("assets/img/webimg/2.jpg"),
      thumbnail: require("assets/img/webimg/2.jpg"),
      thumbnailWidth: 204,
      thumbnailHeight: 136,
    },
    {
      src: require("assets/img/webimg/3.jpg"),
      thumbnail: require("assets/img/webimg/3.jpg"),
      thumbnailWidth: 204,
      thumbnailHeight: 136,
    },
    {
      src: require("assets/img/webimg/4.jpg"),
      thumbnail: require("assets/img/webimg/4.jpg"),
      thumbnailWidth: 204,
      thumbnailHeight: 136,
    },
    {
      src: require("assets/img/webimg/5.jpg"),
      thumbnail: require("assets/img/webimg/5.jpg"),
      thumbnailWidth: 204,
      thumbnailHeight: 136,
    },
    {
      src: require("assets/img/webimg/6.jpg"),
      thumbnail: require("assets/img/webimg/6.jpg"),
      thumbnailWidth: 204,
      thumbnailHeight: 136,
    },
    {
      src: require("assets/img/webimg/7.jpg"),
      thumbnail: require("assets/img/webimg/7.jpg"),
      thumbnailWidth: 204,
      thumbnailHeight: 136,
    },
    {
      src: require("assets/img/webimg/8.jpg"),
      thumbnail: require("assets/img/webimg/8.jpg"),
      thumbnailWidth: 204,
      thumbnailHeight: 136,
    },
    {
      src: require("assets/img/webimg/9.jpg"),
      thumbnail: require("assets/img/webimg/9.jpg"),
      thumbnailWidth: 204,
      thumbnailHeight: 136,
    },
    {
      src: require("assets/img/webimg/10.jpg"),
      thumbnail: require("assets/img/webimg/10.jpg"),
      thumbnailWidth: 204,
      thumbnailHeight: 136,
    },
    {
      src: require("assets/img/webimg/11.jpg"),
      thumbnail: require("assets/img/webimg/11.jpg"),
      thumbnailWidth: 204,
      thumbnailHeight: 136,
    },
    {
      src: require("assets/img/webimg/12.jpg"),
      thumbnail: require("assets/img/webimg/12.jpg"),
      thumbnailWidth: 204,
      thumbnailHeight: 136,
    },
    {
      src: require("assets/img/webimg/13.jpg"),
      thumbnail: require("assets/img/webimg/13.jpg"),
      thumbnailWidth: 204,
      thumbnailHeight: 136,
    },
    {
      src: require("assets/img/webimg/14.jpg"),
      thumbnail: require("assets/img/webimg/14.jpg"),
      thumbnailWidth: 204,
      thumbnailHeight: 136,
    },
    {
      src: require("assets/img/webimg/15.jpg"),
      thumbnail: require("assets/img/webimg/15.jpg"),
      thumbnailWidth: 204,
      thumbnailHeight: 136,
    },
    {
      src: require("assets/img/webimg/16.jpg"),
      thumbnail: require("assets/img/webimg/16.jpg"),
      thumbnailWidth: 204,
      thumbnailHeight: 136,
    },
    {
      src: require("assets/img/webimg/17.jpg"),
      thumbnail: require("assets/img/webimg/17.jpg"),
      thumbnailWidth: 272,
      thumbnailHeight: 408,
    },
    {
      src: require("assets/img/webimg/18.jpg"),
      thumbnail: require("assets/img/webimg/18.jpg"),
      thumbnailWidth: 136,
      thumbnailHeight: 204,
    },
    {
      src: require("assets/img/webimg/19.jpg"),
      thumbnail: require("assets/img/webimg/19.jpg"),
      thumbnailWidth: 136,
      thumbnailHeight: 204,
    },
    {
      src: require("assets/img/webimg/20.jpg"),
      thumbnail: require("assets/img/webimg/20.jpg"),
      thumbnailWidth: 136,
      thumbnailHeight: 204,
    },
  ],
};
