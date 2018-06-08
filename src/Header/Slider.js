import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 79.5%;
  height: 22.2rem;
  margin: 0 auto;
  overflow: hidden;
  & .swiper-slide {
    /* width: auto !important; */
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
`;

const Img = styled.img`
  max-width: 12.3rem;
  max-height: 100%;
`;

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.slider = React.createRef();
  }

  componentDidMount() {
    this.initSlider();
  }

  initSlider() {
    new window.Swiper(this.slider.current, {
      slidesPerView: 9,
    })
  }

  render() {
    return (
      <Wrapper innerRef={this.slider}>
        <div className="swiper-wrapper">
          <div className="swiper-slide"><Img src={require('./../_assets/images/bottles/bottle1.png')} /></div>
          <div className="swiper-slide"><Img src={require('./../_assets/images/bottles/bottle2.png')} /></div>
          <div className="swiper-slide"><Img src={require('./../_assets/images/bottles/bottle3.png')} /></div>
          <div className="swiper-slide"><Img src={require('./../_assets/images/bottles/bottle4.png')} /></div>
          <div className="swiper-slide"><Img src={require('./../_assets/images/bottles/bottle5.png')} /></div>
          <div className="swiper-slide"><Img src={require('./../_assets/images/bottles/bottle6.png')} /></div>
          <div className="swiper-slide"><Img src={require('./../_assets/images/bottles/bottle7.png')} /></div>
          <div className="swiper-slide"><Img src={require('./../_assets/images/bottles/bottle8.png')} /></div>
          <div className="swiper-slide"><Img src={require('./../_assets/images/bottles/bottle9.png')} /></div>
          <div className="swiper-slide"><Img src={require('./../_assets/images/bottles/bottle4.png')} /></div>
          <div className="swiper-slide"><Img src={require('./../_assets/images/bottles/bottle5.png')} /></div>
          <div className="swiper-slide"><Img src={require('./../_assets/images/bottles/bottle2.png')} /></div>
          <div className="swiper-slide"><Img src={require('./../_assets/images/bottles/bottle8.png')} /></div>
          <div className="swiper-slide"><Img src={require('./../_assets/images/bottles/bottle3.png')} /></div>
          <div className="swiper-slide"><Img src={require('./../_assets/images/bottles/bottle7.png')} /></div>
          <div className="swiper-slide"><Img src={require('./../_assets/images/bottles/bottle6.png')} /></div>
          <div className="swiper-slide"><Img src={require('./../_assets/images/bottles/bottle7.png')} /></div>
          <div className="swiper-slide"><Img src={require('./../_assets/images/bottles/bottle8.png')} /></div>
          <div className="swiper-slide"><Img src={require('./../_assets/images/bottles/bottle9.png')} /></div>
          <div className="swiper-slide"><Img src={require('./../_assets/images/bottles/bottle4.png')} /></div>
          <div className="swiper-slide"><Img src={require('./../_assets/images/bottles/bottle5.png')} /></div>
          <div className="swiper-slide"><Img src={require('./../_assets/images/bottles/bottle2.png')} /></div>
          <div className="swiper-slide"><Img src={require('./../_assets/images/bottles/bottle8.png')} /></div>
          <div className="swiper-slide"><Img src={require('./../_assets/images/bottles/bottle3.png')} /></div>
          <div className="swiper-slide"><Img src={require('./../_assets/images/bottles/bottle7.png')} /></div>
        </div>
      </Wrapper>
    )
  }
};

export default Slider;
