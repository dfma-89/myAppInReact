import Carousel from 'react-bootstrap/Carousel';
import foto1 from '../Assets/One.jpg';
import foto2 from '../Assets/Two.jpg';
import foto3 from '../Assets/Three.jpg';

function Home () {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={foto1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={foto2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={foto3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;