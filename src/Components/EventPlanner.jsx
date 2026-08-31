import React, { useState } from "react";
import "./EventPlanner.css";

const EventPlanner = () => {
    const [messageSent, setMessageSent] = useState(false);

    const handleGetStarted = () => {
        document.getElementById("event-categories")?.scrollIntoView({
            behavior: "smooth",
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessageSent(true);

        setTimeout(() => {
            setMessageSent(false);
        }, 3000);

        e.target.reset();
    };

    return (
        <div className="event-planner-container">

            {/* HERO */}
            <header>
                <h1>Welcome to Event Planner</h1>
                <p>We make your special moments unforgettable.</p>
            </header>


            {/* DESCRIPTION */}
            <section className="description">
                <h2>Plan Your Perfect Event</h2>

                <p>
                    Event Planner helps you organize and plan
                    personal and corporate events with ease.
                </p>

                <button
                    className="get-started-button"
                    onClick={handleGetStarted}
                >
                    Get Started
                </button>
            </section>


            {/* EVENT CATEGORIES */}
            <section
                className="events_categories"
                id="event-categories"
            >

                <div className="section-title">
                    <h2>Choose Your Event</h2>
                    <p>Select the type of event you want to plan.</p>
                </div>


                {/* PERSONAL EVENTS */}
                <div className="category-card">

                    <h3>Personal Events</h3>

                    <p>
                        Celebrate your important
                        personal moments.
                    </p>

                    <ul>
                        <li>Birthday Parties</li>
                        <li>Weddings</li>
                        <li>Anniversaries</li>
                        <li>Graduation Parties</li>
                    </ul>
                </div>


                {/* CORPORATE EVENTS */}
                <div className="category-card">

                    <h3>Corporate Events</h3>

                    <p>
                        Organize professional and
                        memorable company events.
                    </p>

                    <ul>
                        <li>Meetings</li>
                        <li>Conferences</li>
                        <li>Team Building</li>
                        <li>Company Parties</li>
                    </ul>
                </div>


                {/* SPECIAL EVENTS */}
                <div className="category-card special-card">

                    <h3>Special Events</h3>

                    <p>
                        Make every special occasion
                        worth remembering.
                    </p>

                    <ul>
                        <li>Holiday Events</li>
                        <li>Debut</li>
                        <li>Family Gatherings</li>
                        <li>Other Celebrations</li>
                    </ul>
                </div>

            </section>


            {/* FEATURES */}
            <section className="features">

                <h2>Our Features</h2>

                <div className="feature-grid">

                    <div className="feature-box">
                        <span>✓</span>
                        <p>Easy Event Planning</p>
                    </div>

                    <div className="feature-box">
                        <span>✓</span>
                        <p>Multiple Event Categories</p>
                    </div>

                    <div className="feature-box">
                        <span>✓</span>
                        <p>Organized Event Details</p>
                    </div>

                    <div className="feature-box">
                        <span>✓</span>
                        <p>Simple and User-Friendly Design</p>
                    </div>

                </div>

            </section>


            {/* TESTIMONIALS */}
            <section className="testimonials">

                <h2>What Our Clients Say</h2>

                <div className="testimonial">
                    <p>
                        "Event Planner made organizing our
                        event simple and stress-free."
                    </p>
                    <span>— Maria</span>
                </div>

                <div className="testimonial">
                    <p>
                        "Everything was organized and
                        easy to manage."
                    </p>
                    <span>— John</span>
                </div>

                <div className="testimonial">
                    <p>
                        "A great way to plan special events!"
                    </p>
                    <span>— Angela</span>
                </div>

            </section>


            {/* CONTACT */}
            <section className="contact">

                <h2>Contact Us</h2>

                <p className="contact-description">
                    Have questions or need help planning
                    your event? Send us a message.
                </p>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        placeholder="Your Name"
                        required
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                        required
                    />

                    <textarea
                        placeholder="Your Message"
                        required
                    ></textarea>

                    <button
                        type="submit"
                        className="submit-button"
                    >
                        Send Message
                    </button>

                    {messageSent && (
                        <p className="success-message">
                            ✓ Your message has been sent successfully!
                        </p>
                    )}

                </form>

            </section>


            {/* FOOTER */}
            <footer>
                © 2026 Event Planner. All rights reserved.
            </footer>

        </div>
    );
};

export default EventPlanner;