import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Slide = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    
    return (
    <section className="container__slide">

        <div className="container">

            <div className="row">
                <div className="col">
                <Carousel
                    swipeable={true}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={2}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                    deviceType={responsive}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    >
                    <div><img className="" src="assets/images/pics/pic01.png" alt="First slide" /></div>
                    <div><img className="" src="assets/images/pics/pic02.png" alt="First slide" /></div>
                    <div><img className="" src="assets/images/pics/pic03.png" alt="First slide" /></div>
                    <div><img className="" src="assets/images/pics/pic04.png" alt="First slide" /></div>
                    </Carousel>
                </div>
            </div>  


            <div className="row">
                <div className="col-sm">
                    <p>This opera’s as lousy as it is brilliant! Your lyrics <span>lack subtlety</span>. 
                        You can’t just have your characters announce how they feel. 
                        That makes me feel angry! Hello, little man.</p>
                </div>
            </div>
        </div>
    </section>
      
      

    )
}