import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css'

const imageURLs = [
    "https://www.jssor.com/demos/img/gallery/980x380/001.jpg",
    "https://www.jssor.com/demos/img/gallery/980x380/002.jpg",
    "https://www.jssor.com/demos/img/gallery/980x380/003.jpg",
    "https://www.jssor.com/demos/img/gallery/980x380/004.jpg"
];

const interval = 6000;

class ImageSlide extends React.Component{
  render(){
    return (
        <img id="image-slide" alt="alt" className={this.props.direction} src={this.props.imageURL}/>
    );
  }
}

class LeftArrow extends React.Component{
  render(){
    return(
        <span className="arrow left" onClick={this.props.onClick}/>
    );
  }
}

class RightArrow extends React.Component{
  render(){
    return(
        <span className="arrow right" onClick={this.props.onClick}/>
    );
  }
}

class Indicator extends React.Component{
  render(){
    return(
        <span className={this.props.isActive? "indicator active":"indicator"} 
        onClick={this.props.onClick}>
        </span>
    );
  }
}

class CarouselPanel extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        activeIndex: 0,
        direction: null
    };
}

  renderImageSlide(index, direction){
   let renderDirection = null;

    if(direction === 'next')
      renderDirection = 'animate-right';
    else if(direction === 'prev')
      renderDirection = 'animate-left';

    return(
      <ImageSlide direction={renderDirection}
      imageURL = {imageURLs[index]}
      />
    );
  }

  goToSlide(index){  
    if(this.state.activeIndex < index){
      this.setState({
        direction: 'next'
      });
    }else{
      this.setState({
        direction: 'prev'
      });
    }
    this.setState({
      activeIndex: index
    });

    this.resetImageClass();
  }

  nextSlide(){
    const length = imageURLs.length;
    if(this.state.activeIndex < length - 1)
    {
      this.setState({
        activeIndex: this.state.activeIndex + 1,
        direction: 'next'
      });
    }else{
      this.setState({
        activeIndex: 0,
        direction: 'next'
      });
    }

    this.resetImageClass();
  }

  prevSlide(){
    const length = imageURLs.length;
    if(this.state.activeIndex > 0)
    {
      this.setState({
        activeIndex: this.state.activeIndex - 1,
        direction: 'prev'
      });
    }else{
      this.setState({
        activeIndex: length - 1,
        direction: 'prev'
      });
    }

    this.resetImageClass();
  }

  /* use css reflow to quickly remove and add the class name so that the css animation can be retriggered */
  resetImageClass(){
    const image = document.getElementById("image-slide");
    let renderDirection = null;

    if(this.state.direction === 'next')
      renderDirection = 'animate-right';
    else if(this.state.direction === 'prev')
      renderDirection = 'animate-left';

    image.classList.remove(renderDirection);
    void image.offsetWidth;
    image.classList.add(renderDirection);
  }

  componentDidMount() {
    this.startTimer();
  }

  startTimer = ()=> {
    this.timer = setInterval(
      ()=> this.nextSlide(),
      interval);
  };

  stopTimer = ()=> {
    clearInterval(this.timer);
  };

  componentWillUnmount() {
    this.stopTimer();
  }

  render(){
    return(
      <div><h2 className="title">Image Carousel</h2>
        <div className="container"
        onMouseOver={this.stopTimer}
        onMouseOut={this.startTimer}>                             
          {this.renderImageSlide(this.state.activeIndex, this.state.direction)}
           <LeftArrow onClick={(e) =>this.prevSlide()}/>         
           <RightArrow onClick={(e) =>this.nextSlide()}/>

          <div className="indicators"> 
            {imageURLs.map((imageUrl, index)=>{
                return(
                  <Indicator 
                  key={index} 
                  isActive={index === this.state.activeIndex}
                  onClick={(e) => this.goToSlide(index)}
                  />
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
    <CarouselPanel/>,
    document.getElementById("carousel-container"),
);


