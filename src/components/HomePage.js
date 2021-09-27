import React, { Component } from 'react';
import tennisImg from './img/tennisnyy-myach-tennis-ball.jpg';
import footballImg from './img/wp3616722 (1).png';
import basketballImg from './img/36f75d87668f0a3fe0e5ebff7e4e4364.jpg';
import UFCImg from './img/images.png';
import fitness from './img/istockphoto-1276373630-1024x1024.jpg';
import { Card } from 'react-bootstrap';

class HomePage extends Component {
    render() {
        return (<>
                <h3 style={{ marginLeft: '45%' }}>Sports</h3>
                
                <span className='homePageSpan'>
                <Card style={{ width: '18rem' ,margin: '30%'}}>
                <Card.Title>Legues</Card.Title>
                <Card.Link href="/legues"><Card.Img variant="top" src={footballImg} className='homepageImgs'/></Card.Link>
            </Card>
            </span>

            <span className='homePageSpan'>
            <Card style={{ width: '18rem' ,margin: '30%'}}>
                <Card.Title>Teams</Card.Title>
                <Card.Link href="/teams"><Card.Img variant="top" src={tennisImg} className='homepageImgs' /></Card.Link>
            </Card>
            </span>

            <span className='homePageSpan'>
            <Card style={{ width: '18rem' ,margin: '30%'}}>
                <Card.Title>Players</Card.Title>
                <Card.Link href="/players"><Card.Img variant="top" src={basketballImg}className='homepageImgs' /></Card.Link>
            </Card>
            </span>

            <span className='homePageSpan'>
            <Card style={{width: '18rem' , margin: '30%' }}>
                <Card.Title>Profile Page</Card.Title>
                <Card.Link href="/profile"><Card.Img variant="top" src={UFCImg} className='homepageImgs'/></Card.Link>
            </Card>
            </span>
            <div>
                <span id='fitness'>
                    <h3 style={{ marginLeft: '45%' }}>Fitness</h3>
                    <a href='/fitness'>
                        <img src={fitness} className='fitness' alt='' />
                    </a>
                </span>
            </div>
        </>
        )
    }
}

export default HomePage
