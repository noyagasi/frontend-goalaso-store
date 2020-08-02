import React from 'react'
import Whirligig from 'react-whirligig'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Slider = () => {
  let whirligig
  const next = () => whirligig.next()
  const prev = () => whirligig.prev()

  return (
    <div className="whirligig-wraper">
      <ArrowBackIosIcon className="slider-arrow" fontSize="large" onClick={prev}>Prev</ArrowBackIosIcon>
      <Whirligig className="whirligig"
        preventScroll = "false"
        visibleSlides={4}
        startAt = "4"
        gutter="3em"
        ref={(_whirligigInstance) => { whirligig = _whirligigInstance}}
      >
        <img src="http://www.fillmurray.com/400/300" />
        <img src="http://www.fillmurray.com/300/400" />
        <img src="http://www.fillmurray.com/400/200" />
        <img src="http://www.fillmurray.com/200/400" />
        <img src="http://www.fillmurray.com/500/300" />
      </Whirligig>
      <ArrowForwardIosIcon className="slider-arrow" fontSize="large" onClick={next}>Next</ArrowForwardIosIcon>
    </div>
  )
}

export default Slider;