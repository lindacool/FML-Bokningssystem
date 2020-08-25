import React from 'react';
import './date.scss';

export default function Date() {
    
    return (
        <div className='date-container'>
            <h2>Make a reservation</h2>
            <hr className='hr-line'/>
            
            <p className='text-left'>Dinner - Restaurant Vasagatan can be found on Tulegatan</p>
            <p className='text-left'>FML is a "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quaeb ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo."
            </p>
            <hr className='hr-line'/>

            <p className='text-left'>Reservation 1-15 guests</p>
            <hr className='hr-line'/>

            <div>
                <p>Choose the number of your party</p>
                <select className='select'>
                    <option value='0'>Guests</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                    <option value='8'>8</option>
                    <option value='9'>9</option>
                    <option value='10'>10</option>
                    <option value='11'>11</option>
                    <option value='12'>12</option>
                    <option value='13'>13</option>
                    <option value='14'>14</option>
                    <option value='15'>15</option>
                </select>
            </div>

            <div>
                <p>Choose date</p>
           
            </div>
        </div>
    );
}