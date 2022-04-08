import React, { useContext } from 'react';
import { RoomContext } from '../context';
import Title from './Title';

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
}

const RoomsFilter = ({rooms}) => {
    const context = useContext(RoomContext);
    const { handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = context;

    // get unique rooms for <select> field
    let types = getUnique(rooms, 'type');
    types = [...types, 'all'];
    let capacities = getUnique(rooms, 'capacity');
    return (
        <>
            <section className="filter-container">
                <Title title="search rooms" />
                <form className="filter-form">
                    {/* room type filter */}
                    <div className="form-group">
                        <label htmlFor="type">room type</label>
                        <select name="type" id="type" value={type} onChange={handleChange} className="form-control">
                            {types.map((type, index) => {
                                return <option key={index} value={type}>{type}</option>
                            })}
                        </select>
                    </div>
                    {/* room capacity filter */}
                    <div className="form-group">
                        <label htmlFor="capacity">Guests</label>
                        <select name="capacity" id="capacity" value={capacity} onChange={handleChange} className="form-control">
                            {capacities.map((capacity, index) => {
                                return <option key={index} value={capacity}>{capacity}</option>
                            })}
                        </select>
                    </div>
                    {/* room price filter */}
                    <div className="form-group">
                        <label htmlFor="price">room price &euro;{price}</label>
                        <input type="range" name="price" id="price" min={minPrice} max={maxPrice} value={price} onChange={handleChange} className="form-control"/>
                    </div>
                    {/* room size filter */}
                    <div className="form-group">
                        <label htmlFor="size">room size</label>
                        <div className="size-inputs">
                            <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input" />
                            <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input" />
                        </div>
                    </div>
                    {/* room extras filter */}
                    <div className="form-group">
                        <div className="single-extra">
                            <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
                            <label htmlFor="breakfast">breakfast</label>
                        </div>
                        <div className="single-extra">
                            <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
                            <label htmlFor="pets">pets</label>
                        </div>
                    </div>
                </form>
            </section>
        </>
    )
}

export default RoomsFilter;