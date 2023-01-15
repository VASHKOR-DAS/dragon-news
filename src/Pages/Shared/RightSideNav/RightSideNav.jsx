import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { FaDiscord, FaFacebook, FaGithub, FaGoogle, FaRulerHorizontal, FaServer, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { } from "react-icons/fc";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {
    return (
        <div className='mt-3 mt-lg-0'>
            <ListGroup>
                <ButtonGroup vertical>
                    <Button variant="outline-primary mb-2"><FaGoogle /> Login via Google</Button>
                    <Button variant="outline-dark mb-3"> <FaGithub /> Login via Github</Button>
                </ButtonGroup>
            </ListGroup>

            <div>
                <h5>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaYoutube /> Youtube</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter /> Twiter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp /> WhatsApp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaDiscord /> Discord</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaRulerHorizontal /> Private Policy</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaServer /> Terms & Condition</ListGroup.Item>
                </ListGroup>
            </div>

            <div>
                <BrandCarousel></BrandCarousel>
            </div>

        </div>
    );
};

export default RightSideNav;