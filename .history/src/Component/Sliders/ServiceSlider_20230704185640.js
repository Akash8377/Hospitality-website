import React , {useEffect , useRef , useState} from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'

const ServiceSlider = () => {
    const [slidesToShow, setSlidesToShow] = useState(3); 

    useEffect(() => {
      const updateSlidesToShow = () => {
        if (window.innerWidth < 768) {
          setSlidesToShow(1);
        } else if (window.innerWidth < 992) {
          setSlidesToShow(2);
        } else {
          setSlidesToShow(3);
        }
      };
  
      updateSlidesToShow();
      window.addEventListener('resize', updateSlidesToShow);
      return () => {
        window.removeEventListener('resize', updateSlidesToShow);
      };
    }, []);
  
    const sliderRef = useRef(null);
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: slidesToShow,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
    };
  
    const nextSlide = () => {
      sliderRef.current.slickNext();
    };
  
    const prevSlide = () => {
      sliderRef.current.slickPrev();
    };
  
    return (
      <>
        <div className="Service_Slider_Container">
          <Slider {...settings} ref={sliderRef} className='Service_Slider'>
                <div className='Main'>
                    

                </div>
          </Slider>
          <div className="Prev-Next_cont">
            <img src={""} onClick={prevSlide} className="PrevImg" alt="" />
            <img src={""} onClick={nextSlide} className="NextImg" alt="" />
          </div>
        </div>
      </>
    );
  };
  

export default ServiceSlider