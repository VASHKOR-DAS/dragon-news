import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaStar } from 'react-icons/fa';

const News = () => {
    const news = useLoaderData(); // backend theke route hisebe pathalam news
    // console.log(news);
    // Read More a click korle ai component ta show hobe
    const { title, details, image_url, author, rating, category_id } = news;

    return (
        <Card>
            <Card.Img variant='top' src={image_url}></Card.Img>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Header className='d-flex justify-content-between flex-wrap'>
                    <div>
                        <strong>Author:</strong> {author?.name}
                    </div>

                    <div>
                        <strong>Published Date:</strong> {author?.published_date}
                    </div>

                    <div>
                        <FaStar className='text-warning'></FaStar> {rating?.number}
                    </div>
                </Card.Header>
                <Card.Text>
                    {details}
                </Card.Text>
                <Link to={`/category/${category_id}`}>
                    <Button variant="primary">All news in this category</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default News;