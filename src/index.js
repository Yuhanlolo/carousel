import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from 'react-bootstrap/Carousel'

const imageURLs = [
  "https://www.jssor.com/demos/img/gallery/980x380/001.jpg",
  "https://www.jssor.com/demos/img/gallery/980x380/002.jpg",
  "https://www.jssor.com/demos/img/gallery/980x380/003.jpg",
  "https://www.jssor.com/demos/img/gallery/980x380/004.jpg"
];

const width = '100%', height = 'auto';
const imageAlt = "Image Carousel";
const interval = 5000;

const hStyle ={
  textAlign: 'center',
  marginTop: 20,
  marginBottom: 20,
};

class CarouselPanel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction } = this.state;

    const images = imageURLs.map((imageUrl, index)=>{
      return(
        <Carousel.Item key={index}>
        <img width={width} height={height} alt={imageAlt} src={imageUrl} />
          <Carousel.Caption>
            <h4>Image {index + 1}</h4>
        </Carousel.Caption>
      </Carousel.Item>
      );
    });

    return (
      <div className = "carousel">
        <h2 style={hStyle}>{imageAlt}</h2>
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
          interval={interval}
        >
          {images}
        </Carousel>
      </div>
    );
  }
}

ReactDOM.render(
<CarouselPanel />,
document.getElementById('root'),
);
