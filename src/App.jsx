import React, { useState, useEffect } from 'react';
import { Home, User, Music, CalendarDays, Mail, Menu, X, Image as ImageIcon } from 'lucide-react'; // Renamed Image to ImageIcon
import heroImg from "./assets/HomeJohn.jpg"
import choir from "./assets/choir.jpg"
import deep from "./assets/eep.jpg"
import Hwcn from "./assets/Hwcn.jpg"
import power from "./assets/power.jpg"
import praise from "./assets/praise.jpg"
import worship from "./assets/worship.jpg"
import home from "./assets/HomenA.jpg"
// Main App Component
const App = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Function to handle smooth scrolling to sections
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false); // Close mobile menu on navigation
    };

    // Prevent Cumulative Layout Shift (CLS) for image loading if any
    useEffect(() => {
        const img = new Image(); // This refers to the native Image constructor
        img.src = "https://placehold.co/1920x1080/0A0A0A/FFFFFF?text=Minister's+Banner"; // Example placeholder image
        img.onload = () => {
            // Image loaded, no CLS from this image
        };
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 font-inter text-gray-900"> {/* Overall light background and dark text */}
            {/* Header and Navigation */}
            <header className="bg-white shadow-lg sticky top-0 z-50"> {/* Light header */}
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="text-2xl font-bold text-orange-600"> {/* Adjusted text color for fire/hunger theme */}
                        John Teidi
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-6">
                        <NavItem icon={<Home className="w-5 h-5" />} text="Home" onClick={() => scrollToSection('home-section')} />
                        <NavItem icon={<User className="w-5 h-5" />} text="About" onClick={() => scrollToSection('about-section')} />
                        <NavItem icon={<Music className="w-5 h-5" />} text="Ministration" onClick={() => scrollToSection('music-section')} />
                        <NavItem icon={<ImageIcon className="w-5 h-5" />} text="Gallery" onClick={() => scrollToSection('gallery-section')} /> {/* New Gallery Nav Item */}
                        <NavItem icon={<CalendarDays className="w-5 h-5" />} text="Events" onClick={() => scrollToSection('events-section')} />
                        <NavItem icon={<Mail className="w-5 h-5" />} text="Contact" onClick={() => scrollToSection('contact-section')} />
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 rounded-md text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500" // Adjusted for light mode
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation (Dropdown) */}
                {isMobileMenuOpen && (
                    <nav className="md:hidden bg-white shadow-lg pb-4"> {/* Light mobile nav */}
                        <MobileNavItem icon={<Home className="w-5 h-5" />} text="Home" onClick={() => scrollToSection('home-section')} />
                        <MobileNavItem icon={<User className="w-5 h-5" />} text="About" onClick={() => scrollToSection('about-section')} />
                        <MobileNavItem icon={<Music className="w-5 h-5" />} text="Ministration" onClick={() => scrollToSection('music-section')} />
                        <MobileNavItem icon={<ImageIcon className="w-5 h-5" />} text="Gallery" onClick={() => scrollToSection('gallery-section')} /> {/* New Gallery Nav Item */}
                        <MobileNavItem icon={<CalendarDays className="w-5 h-5" />} text="Events" onClick={() => scrollToSection('events-section')} />
                        <MobileNavItem icon={<Mail className="w-5 h-5" />} text="Contact" onClick={() => scrollToSection('contact-section')} />
                    </nav>
                )}
            </header>

            {/* Page Content - All sections rendered on one page */}
            <main className="container mx-auto px-4 py-8">
                <HomePage />
                <AboutPage />
                <MusicPage />
                <GalleryPage /> {/* New Gallery Section */}
                <EventsPage />
                <ContactPage />
            </main>

            {/* Footer */}
            <footer className="bg-white text-gray-800 py-6 text-center rounded-t-lg mt-8 shadow-inner"> {/* Light footer */}
                <p>&copy; {new Date().getFullYear()} John Teidi. All Rights Reserved.</p>
                <div className="flex justify-center space-x-4 mt-2">
                    {/* Social Media Links Placeholder */}
                    <a href="https://www.facebook.com/profile.php?id=100078291915303&sk=photos" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 transition-colors duration-200">Facebook</a>
                    <a href="https://www.instagram.com/teidi_john/" className="text-orange-600 hover:text-orange-800 transition-colors duration-200">Instagram</a>
                    <a href="https://www.youtube.com/@HwcnGlobal" className="text-orange-600 hover:text-orange-800 transition-colors duration-200">YouTube</a>
                </div>
            </footer>
        </div>
    );
};

// Navigation Item Component for Desktop
const NavItem = ({ icon, text, onClick }) => (
    <button
        onClick={onClick}
        className="flex items-center space-x-2 px-3 py-2 rounded-md transition-all duration-200 text-gray-700 hover:bg-gray-100 hover:text-orange-600"
    >
        {icon}
        <span>{text}</span>
    </button>
);

// Navigation Item Component for Mobile
const MobileNavItem = ({ icon, text, onClick }) => (
    <button
        onClick={onClick}
        className="flex items-center space-x-3 px-4 py-3 w-full text-left transition-all duration-200 text-gray-800 hover:bg-gray-100"
    >
        {icon}
        <span>{text}</span>
    </button>
);

// Home Page Component
const HomePage = () => (
    <section id="home-section" className="text-center py-16 bg-white rounded-lg shadow-xl mb-12"> {/* Light background */}
        <div className="max-w-4xl mx-auto">
            <img
                src={home} // New image URL
                alt="Minister's Portrait"
                className="mx-auto rounded-full w-48 h-48 object-cover border-4 border-orange-600 shadow-lg mb-8"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/200x200/FF5722/FFFFFF?text=Error"; }}
            />
            <h1 className="text-5xl font-extrabold text-orange-600 mb-4 leading-tight">
                Welcome to the Official Page of <br className="hidden sm:inline" /> John Teidi
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                Spreading the Gospel through powerful worship and inspiring melodies. Join us on a journey of faith and music.
            </p>
            <div className="flex justify-center space-x-4">
                <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
                    Listen Now
                </button>
                <button className="bg-gray-200 border-2 border-orange-600 text-orange-600 font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
                    View Events
                </button>
            </div>
        </div>
    </section>
);

// About Page Component
const AboutPage = () => (
    <section id="about-section" className="py-12 bg-white rounded-lg shadow-xl p-6 md:p-10 mb-12"> {/* Light background */}
        <h2 className="text-4xl font-bold text-orange-600 mb-8 text-center">About John Teidi</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
            <div className="md:w-1/3 mb-8 md:mb-0">
                <img
                    src={heroImg} // New image URL
                    alt="Minister's Bio Image"
                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x400/FF5722/FFFFFF?text=Error"; }}
                />
            </div>
            <div className="md:w-2/3 text-lg text-gray-700 leading-relaxed"> {/* Adjusted text color */}
                <p className="mb-4">
                    John Teidi is a passionate gospel music minister known for his soul-stirring worship and heartfelt praise. He is prominently associated with "Fiery Worshippers" and has ministered at significant events, bringing a divine anointing through his voice. He has dedicated his life to spreading the message of hope, healing, and salvation through music.
                </p>
                <p className="mb-4">
                    Born and raised in Oyo, Nigeria. John Teidi discovered his musical gift at a young age. He began leading worship in local churches, quickly gaining recognition for his unique sound and profound ability to connect with audiences on a spiritual level.
                </p>
                <p>
                    Beyond the stage, John Teidi is also committed to the Lord, believing in the power of God to transform lives and bring people closer to JESUS. He continues to minister at concerts, conferences, and crusades, leaving a lasting impression wherever he goes. For more of his ministrations, you can check out the HWCN Global YouTube channel.
                </p>
            </div>
        </div>
    </section>
);

// Music Page Component
const MusicPage = () => {
    const songs = [
        {
            id: 1,
            title: "Mimo Mimo Ni Oluwa",
            event: "IMAC 2025",
            duration: "27:15",
            cover: "https://img.youtube.com/vi/AxLpfJRbt7Y/hqdefault.jpg", // YouTube thumbnail
            youtubeLink: "https://www.youtube.com/watch?v=AxLpfJRbt7Y"
        },
        {
            id: 2,
            title: "HOLY",
            event: "SHIFT'24",
            duration: "27:15",
            cover: "https://img.youtube.com/vi/4xbPUOs--mI/hqdefault.jpg", // YouTube thumbnail
            youtubeLink: "https://www.youtube.com/watch?v=4xbPUOs--mI"
        },
        {
            id: 3,
            title: "HUNGER",
            event: "Fiery Worshippers",
            duration: "24:39",
            cover: "https://img.youtube.com/vi/tk2tdg-3EcM/hqdefault.jpg", // YouTube thumbnail
            youtubeLink: "https://www.youtube.com/watch?v=tk2tdg-3EcM"
        },
    ];

    return (
        <section id="music-section" className="py-12 bg-white rounded-lg shadow-xl p-6 md:p-10 mb-12"> {/* Light background */}
            <h2 className="text-4xl font-bold text-orange-600 mb-8 text-center">Latest Ministrations</h2>
            {/* Adjusted grid columns to make cards bigger and centered for 3 items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {songs.map((song) => (
                    <div key={song.id} className="bg-gray-50 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300"> {/* Lighter card background */}
                        <img
                            src={song.cover}
                            alt={`${song.title} Cover`}
                            className="w-full h-48 object-cover"
                            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/300x300/FF5722/FFFFFF?text=Error"; }}
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-800 mb-1">{song.title}</h3>
                            <p className="text-gray-600 text-sm mb-2">Event: {song.event}</p>
                            <p className="text-gray-500 text-sm">Duration: {song.duration}</p>
                            {song.youtubeLink && (
                                <a
                                    href={song.youtubeLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md shadow-md block text-center text-sm"
                                >
                                    Watch on YouTube
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

// Gallery Page Component
const GalleryPage = () => {
    const galleryImages = [
        { id: 1, src: Hwcn, alt: "Ministering at HWCN" },
        { id: 2, src: worship, alt: "Worship Session" },
        { id: 3, src: choir, alt: "Choir Ministration" }, // Changed title
        { id: 4, src: praise, alt: "Praise and Worship" },
        { id: 5, src: deep, alt: "Deep Worship Moment" },
        { id: 6, src: power, alt: "Powerful Ministration" }, // New card added
    ];

    return (
        <section id="gallery-section" className="py-12 bg-white rounded-lg shadow-xl p-6 md:p-10 mb-12">
            <h2 className="text-4xl font-bold text-orange-600 mb-8 text-center">Gallery</h2>
            <p className="text-gray-700 text-center mb-8">
                Here are some moments from ministrations and events.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"> {/* Added max-w-6xl and mx-auto */}
                {galleryImages.map((image) => (
                    <div key={image.id} className="bg-gray-50 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-64 object-cover"
                            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x300/FF5722/FFFFFF?text=Error"; }}
                        />
                        <div className="p-4 text-gray-700 text-center">
                            {image.alt}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

const EventsPage = () => {
    const events = [
        {
            id: 3,
            date: "Upcoming Events",
            time: "To be announced",
            title: "Stay Tuned for New Events",
            location: "Check back soon!",
            description: "Details of future worship nights, concerts, and conferences will be posted here and on the HWCN Global YouTube channel.",
            link: "https://www.youtube.com/@HwcnGlobal"
        },
    ];

    return (
        <section id="events-section" className="py-12 bg-white rounded-lg shadow-xl p-6 md:p-10 mb-12"> {/* Light background */}
            <h2 className="text-4xl font-bold text-orange-600 mb-8 text-center">Upcoming Events</h2>
            <div className="space-y-6">
                {events.map((event) => (
                    <div key={event.id} className="flex flex-col md:flex-row bg-gray-50 rounded-lg shadow-md p-6 items-start md:items-center space-y-4 md:space-y-0 md:space-x-6"> {/* Lighter card background */}
                        <div className="flex-shrink-0 text-center md:text-left">
                            <p className="text-orange-600 text-xl font-bold">{event.date}</p>
                            <p className="text-gray-600 text-sm">{event.time}</p>
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-1">{event.title}</h3>
                            <p className="text-gray-700">{event.description}</p>
                        </div>
                        <div className="flex-shrink-0">
                            {event.link && (
                                <a
                                    href={event.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-5 rounded-full shadow-md transform hover:scale-105 transition-all duration-300 inline-block"
                                >
                                    View Details
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
// Contact Page Component
const ContactPage = () => {
    return (
        <section id="contact-section" className="py-12 bg-white rounded-lg shadow-xl p-6 md:p-10 mb-12"> {/* Light background */}
            <h2 className="text-4xl font-bold text-orange-600 mb-8 text-center">Get in Touch</h2>
            <div className="max-w-3xl mx-auto text-center"> {/* Centered content */}
                <p className="text-gray-700 mb-8">
                    To reach out, please connect with me through my social media channels.
                </p>
                <div className="flex justify-center space-x-6">
                    <a href="https://www.facebook.com/profile.php?id=100078291915303&sk=photos" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 transition-colors duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                    </a>
                    <a href="#" className="text-orange-600 hover:text-orange-800 transition-colors duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                    </a>
                    <a href="#" className="text-orange-600 hover:text-orange-800 transition-colors duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M2.8 2.8A2.8 2.8 0 0 0 0 5.6v12.8A2.8 2.8 0 0 0 2.8 21.2h18.4a2.8 2.8 0 0 0 2.8-2.8V5.6a2.8 2.8 0 0 0-2.8-2.8H2.8z" /><path d="m10 15 5-3-5-3v6z" /></svg>
                    </a>
                </div>
            </div>
        </section>
    );
};
export default App;
