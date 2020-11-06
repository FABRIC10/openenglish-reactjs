import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export const Slide = () => {
    return (
    <section className="container__slide">

        <div className="container">
            <div className="row">
                <div className="col">
                    <Carousel>

                        <Carousel.Item>
                            <img className="" src="assets/images/pics/pic01.png" alt="First slide" />
                            <Carousel.Caption>
                                <h3>Title 1</h3>
                                </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img className="" src="assets/images/pics/pic02.png" alt="First slide" />
                            <Carousel.Caption>
                                <h3>Title 2</h3>
                                </Carousel.Caption>
                        </Carousel.Item>
                        
                        <Carousel.Item>
                            <img className="" src="assets/images/pics/pic03.png" alt="First slide" />
                            <Carousel.Caption>
                                <h3>Title 3</h3>
                                </Carousel.Caption>
                        </Carousel.Item>
                        
                        <Carousel.Item>
                            <img className="" src="assets/images/pics/pic04.png" alt="First slide" />
                            <Carousel.Caption>
                                <h3>Title 4</h3>
                                </Carousel.Caption>
                        </Carousel.Item>
                        
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