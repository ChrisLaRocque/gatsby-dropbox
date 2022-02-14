import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import './Hero.scss';

function Hero(props) {
  console.log('hero props', props);
  const { body, field_h1 } = props;
  return (
    <section id="hero">
      <div className="pane-text">
        <h1>{field_h1}</h1>
        <button className=''>
          Find the plan for you
          {' '}
          <svg viewBox="0 0 24 24" fill="none" className="dig-UIIcon dig-UIIcon--standard" width="24" height="24" focusable="false"><path d="M5 11.75H17M11.75 5.25L18 11.75L11.75 18.25" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" /></svg>
        </button>
        <div className="body" dangerouslySetInnerHTML={{ __html: body.processed }} />
      </div>
      <div className="pane-graphics">
        <div className="video">
          <video autoPlay playsinline loop muted>
            <source src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/dropbox/DROP057_HomepageAnimation_V3_Transparent_1080x1080-corrected.mov" type="video/quicktime; codecs=hvc1" />
            <source src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/dropbox/DROP057_HomepageAnimation_V3_Transparent_1080x1080.webm" type="video/webm; codecs=vp9" />
            <source type="video/mp4" />
          </video>
        </div>
        <div className="image">
          {/* <StaticImage src="../../images/img.jpeg" layout="constrained" /> */}
        </div>
      </div>
    </section>
  );
}
export default Hero;
