import React, { Component } from 'react'
import tennisImg from './img/tennisnyy-myach-tennis-ball.jpg'
import footballImg from './img/wp3616722 (1).png'
import basketballImg from './img/36f75d87668f0a3fe0e5ebff7e4e4364.jpg'
import UFCImg from './img/images.png'
import fitness from './img/istockphoto-1276373630-1024x1024.jpg';

class HomePage extends Component {
    render() {
        return (<>
        <h3 style={{marginLeft : '45%'}}>Sports</h3>
            <div style={{marginLeft : '7%'}}>
                <span className='homePageSpan'>
                    <h3>Football</h3>
                    <a href='/Football'>
                        <img src={footballImg} className='homepageImgs' /></a>
                </span>

                <span className='homePageSpan'>
                    <h3>Tennis</h3>
                    <a href='/tennis'>
                        <img src={tennisImg} alt='tennis' className='homepageImgs' />
                    </a>
                </span >

                <span className='homePageSpan'>
                    <h3>Basketball</h3>
                    <a href='/basketball'>
                        <img src={basketballImg} className='homepageImgs' /></a>
                </span>

                <span className='homePageSpan'>
                    <h3>UFC</h3>
                    <a href='/UFC'>
                        <img src={UFCImg} className='homepageImgs' />
                    </a>
                </span>
            </div>
            <div>
            <span id='fitness'>
                    <h3 style={{marginLeft : '45%'}}>Fitness</h3>
                    <a href='/fitness'>
                        <img src={fitness} className='fitness' />
                    </a>
                </span>
            </div>
            </>
        )
    }
}

export default HomePage
