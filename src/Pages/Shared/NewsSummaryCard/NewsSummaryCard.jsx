import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";

/** home components theke news name a 1ti object pathano hoise ta amra akhane {news} parameter name a receive korlam 
 * ata amra ager niom like (props) parameter name a o receive kore use krr smy 
 * props.news o korte partam */
const NewsSummaryCard = ({ news }) => {
    const { _id, title, author, details, image_url, total_view, rating } = news;
    console.log(news);


    return (
        <Card className='mb-5'>
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex'>
                    <Image
                        height={55}
                        roundedCircle
                        src={author?.img}
                    ></Image>
                    <div className='ms-2'>
                        <small>{author?.name}</small>
                        <br />
                        <small>{author?.published_date}</small>
                    </div>
                </div>

                <div><FaRegBookmark /> <FaShareAlt /></div>
            </Card.Header>

            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant='top' src={image_url}></Card.Img>
                <Card.Text>
                    {
                        details.length > 250 ?
                            <p>
                                {details.slice(0, 250) + '...'}
                                <Link to={`/news/${_id}`}>Read More</Link>
                            </p>
                            : <p>{details}</p>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
                <div>
                    <FaStar className='text-warning me-2'></FaStar>
                    <span>{rating?.number}</span>
                </div>

                <div>
                    <FaEye className='me-2'></FaEye>
                    <span>{total_view}</span>
                </div>

            </Card.Footer>
        </Card>
    );
};

export default NewsSummaryCard;