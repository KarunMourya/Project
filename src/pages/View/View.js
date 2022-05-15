// import style from './View.module.css';
import {Carousel} from 'react-bootstrap';
function View(){
    return (
<>
    <div>
    <div className="d-flex align-items-center justify-content-center">
        <Carousel className="carousel" pause={false} interval={5000}>
          <Carousel.Item>
            <img
              className="d-block w-100 h-25"
              src="public\logo512.png"
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
</>
    )
}
export default View;