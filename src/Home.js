import React from 'react'
import "./Home.css";
import Product from './Product';

const Home = () => {
  return (
    <div className='home'>
        <div className='home__container'>
            <img className='home__image' src='https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/Other/BRND_MTH21_SADLPDesktop_1453x363_Final_nolocale_PVD7436_Canada.jpg' alt=''/>

            <div className='home__row'>
                <Product
                id="12321341"
                title="The lean startup"
                price={29.99}
                image="https://m.media-amazon.com/images/I/417KWv-EtEL._SY264_BO1,204,203,200_QL40_ML2_.jpg"
                rating={3}/>
                <Product
                id="12321341"
                title="Dark truths uncovered . . . The buried contents of a Nazi train. An aging SS killer—with a final sting in his tail. And the World War II secrets of a US presidential hopeful’s Jewish family, hidden in London for 70 years.
                "
                price={19.99}
                image="https://m.media-amazon.com/images/I/417KWv-EtEL._SY264_BO1,204,203,200_QL40_ML2_.jpg"
                rating={2}
                />
                
                

                
            </div>

            <div className='home__row'>
            <Product
                id="12321341"
                title="Dark truths uncovered . . . The buried contents of a Nazi train. An aging SS killer—with a final sting in his tail. And the World War II secrets of a US presidential hopeful’s Jewish family, hidden in London for 70 years.
                "
                price={29.99}
                image="https://m.media-amazon.com/images/I/417KWv-EtEL._SY264_BO1,204,203,200_QL40_ML2_.jpg"
                rating={3}/>
                <Product
                id="12321341"
                title="Dark truths uncovered . . . The buried contents of a Nazi train. An aging SS killer—with a final sting in his tail. And the World War II secrets of a US presidential hopeful’s Jewish family, hidden in London for 70 years.
                "
                price={19.99}
                image="https://m.media-amazon.com/images/I/417KWv-EtEL._SY264_BO1,204,203,200_QL40_ML2_.jpg"
                rating={2}
                />
                <Product
                id="12321341"
                title="Dark truths uncovered . . . The buried contents of a Nazi train. An aging SS killer—with a final sting in his tail. And the World War II secrets of a US presidential hopeful’s Jewish family, hidden in London for 70 years.
                "
                price={19.99}
                image="https://m.media-amazon.com/images/I/417KWv-EtEL._SY264_BO1,204,203,200_QL40_ML2_.jpg"
                rating={2}
                />
                
            </div>

            <div className='home__row'>
            <Product
                id="12321341"
                title="Dark truths uncovered . . . The buried contents of a Nazi train. An aging SS killer—with a final sting in his tail. And the World War II secrets of a US presidential hopeful’s Jewish family, hidden in London for 70 years.
                "
                price={19.99}
                image="https://m.media-amazon.com/images/I/417KWv-EtEL._SY264_BO1,204,203,200_QL40_ML2_.jpg"
                rating={2}
                />
                
                
            </div>



        </div>
    </div>
  )
}

export default Home;