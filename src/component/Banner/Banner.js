import { Carousel } from "bootstrap";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import banner1 from '../../image/pexels-josh-sorenson-1714208.jpg'
import banner2 from '../../image/how-to-free-up-RAM-hero.jpg'
import banner3 from '../../image/photo-1453928582365-b6ad33cbcf64.png'
import banner4 from '../../image/crew-4Hg8LH9Hoxc-unsplash.jpg'


const Banner = () => {

    const content = [
		{
			image: banner1,
			title: `30% off With Promo Code`,
			description: 'LIMITED OFFER',
			button: 'SHOP NOW'
		},
		{
			image: banner4,
			title: `10% off for Graphics Card`,
			description: 'LIMITED OFFER',
			button: 'SHOP NOW'
		},
		{
			image: banner2,
			title: `20% off for Gigabite Ram`,
			description: 'EXCLUSIVE OFFER',
			button: 'SHOP NOW'
		},
		{
			image:banner1,
			title: `10% off for Black Friday`,
			description: 'PREMIUM OFFER',
			button: 'VISIT NOW'
		}
	];

     
    return (
        <Slider autoplay={3000}>
        {content.map((item, index) => (
            <div key={index} style={{ background: `url(${item.image}) no-repeat center center` }}>
                <div className="slider-content">
                    <p className="lead">{item.description}</p>
                    <h2 className="mb-4 banner-text">{item.title}</h2>
                    <button
                        className="btn btn-danger banner-button"
                        onClick={() => {
                            window.scrollTo(0, 800);
                        }}
                    >
                        {item.button}
                    </button>
                </div>
            </div>
        ))}
    </Slider>
    );
};

export default Banner;