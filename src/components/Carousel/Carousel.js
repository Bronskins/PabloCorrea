
import React from 'react';
import { Carousel } from 'react-bootstrap';

export const Carousel2 = () => {

    return (
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src="https://wallpaperaccess.com/full/625497.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Mass Effect: Legendary Edition</h3>
            <p>La franquicia vuelve mas remasterizada que nunca.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src="https://wallpaperaccess.com/full/672903.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Horizon: Forbidden West</h3>
            <p>Recorre un mundo nunca antes visto.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src="https://wallpaper.dog/large/20433613.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Assassin's Creed: Unity </h3>
            <p>Entra en Paris durante la revolucion francesa.</p>
          </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    )

}