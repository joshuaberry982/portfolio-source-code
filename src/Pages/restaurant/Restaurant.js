import React from 'react';
import './restaurant.css';

export default function Restaurant() {
  return (
    <div className="container3">
        <div className="header3">
            <img src="./pics/logo.jpg" width="160px" />
            <ul>
                <li><a href="#" target="_blank">Home</a></li>
                <li><a href="#" target="_blank">Our Chef</a></li>
                <li><a href="./menu/menu.html" target="_blank">Menu</a></li>
                <li><a href="#" target="_blank">Bookings</a></li>
            </ul>
        </div>
        <section className="left3">
            <p>Uncle Josh, a well renowned chef in Northern England founded several resraurants over the years, and since the launch of his flagship establishment in the outskirts of the beautiful yet historical tranquility that is Manchester.
            <br /><br />
            Uncle Josh and his team of industry-changing chefs have developed a mouthwatering menu consisting of both your favourite Mediterranian classics such as Spanish Gambas, Spiced Moroccan Meatballs and Egyptian Grilled Chicken, but they also bring some little known but revolutionary dishes with the likes of Shakshouka, Armenian Losh and Tabbouleh.</p>
        </section>
        <section className="right3">
            <p>Menus are styled by an international theme and a added traditional Lancashire twist so you can be sure that there will be a dish to suit everyone's taste from either the A La Carte menu or our Weekly Menu Specials we provide. The restaurant boasts great modern decor and a friendly ambience offering a full Wine List with draft and bottled beers available.</p>
        </section>
        <br /><br />
        <section className="photo-container3">
            <h2>Our Chef</h2>
            <h4>Chef Berry</h4>
            <div className="imgs3">
                <figure>
                    <img src="./pics/carbonara.jpg" alt="An image of a Carbonara Pasta" width="160px" />
                    <figcaption><h4>Italian-Style Carbonara</h4></figcaption>
                </figure>
                <figure>
                    <img src="./pics/palace.jpg" alt="An image of Chef Berry with CPFC Women" />
                    <figcaption><h4>Crystal Palace Women</h4></figcaption>
                </figure>
                <figure>
                    <img src="./pics/chinese.jpg" alt="A Chinese dish from Chinese buffet night" />
                    <figcaption><h4>Chinese Buffet Night</h4></figcaption>
                </figure>
                <figure>
                    <img src="./pics/tea.jpg" alt="An image of Afternoon Tea" width="160px" />
                    <figcaption><h4>Afternoon Tea</h4></figcaption>
                </figure>
                <figure>
                    <img src="./pics/steak.jpg" alt="An image of a Butcher's Cut Steak" width="160px" className="stk3" />
                    <figcaption><h4>Butcher's Cut</h4></figcaption>
                </figure>
            </div>
        </section>
        <section className="review-container3">
            <div class="review3">
                <h3>"Best in Manchester"</h3>
                <h5>- The Sun</h5>
            </div>
            <div class="review3">
                <h3>"Exceed Expectations"</h3>
                <h5>- Daily Mail</h5>
            </div>
            <div class="review3">
                <h3>"Revolutionary"</h3>
                <h5>- Manchester Evening News</h5>
            </div>
        </section>
        <section id="location3">
                
        </section>
    </div>
  )
}
