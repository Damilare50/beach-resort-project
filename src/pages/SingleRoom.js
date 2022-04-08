import React, { useContext } from 'react';
import Banner from '../components/Banner';
import { useParams, Link } from 'react-router-dom';
import { RoomContext } from '../context';
import StyledHero from '../components/StyledHero';


const SingleRoom = () => {
    const params = useParams();

    const { getRoom } = useContext(RoomContext);
    const room = getRoom(params.slug);
    if (!room) {
        return (
            <>
                <div className='error'>
                    <h3>No such room could be found...</h3>
                    <Link to="/rooms" className='btn-primary'>
                    back to rooms
                    </Link>
                </div>
            </>
        )
    }
    const { name, description, capacity, size, price, extras, breakfast, pets, images } = room;
    const [ mainImg, ...otherImages] = images;

    return (
        <>
            <StyledHero image={mainImg}>
                <Banner title={`${name} room`}>
                    <Link to="/rooms" className='btn-primary'>
                        back to rooms
                    </Link>
                </Banner>
            </StyledHero>
            <section className="single-room">
                <div className="single-room-images">
                    {otherImages.map((item, index) => {
                        return <img key={index} src={item} alt={name} />
                    })}
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>details</h3>
                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>info</h3>
                        <h6>price: &euro;{price}</h6>
                        <h6>size: {size} Ft<sup>2</sup></h6>
                        <h6>max capacity: {capacity > 1 ? `${capacity} people` : `${capacity} person` } </h6>
                        <h6>{ pets ? 'pets allowed' : 'no pets allowed'}</h6>
                        <h6>{breakfast && "free breakfast included"}</h6>
                    </article>
                </div>
            </section>
            <section className="room-extras">
                <h6>extras</h6>
                <ul className="extras">
                    {extras.map((extra, index) => {
                        return <li key={index}>- {extra}</li>
                    })}
                </ul>
            </section>
        </>
    )
};

export default SingleRoom;