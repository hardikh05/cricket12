import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const CricketNews = () => {
  const newsItems = [
    {
      title: 'Cricket World Cup 2024 Begins',
      description: 'The Cricket World Cup 2024 kicks off with exciting matches and high anticipation among fans worldwide.',
      image: 'https://img.jagranjosh.com/images/2023/September/2092023/ICC-T20-World-Cup-2024.webp',
      link: 'https://www.business-standard.com/cricket/icc-t20-world-cup/t20-world-cup-2024-full-schedule-format-match-time-ist-live-streaming-124053100763_1.html'
    },
    {
      title: 'New Record Set in T20 League',
      description: 'A new record was set in the T20 League as a player scores the fastest century of the season.',
      image: 'https://static.toiimg.com/thumb/msid-104256760,width-1280,height-720,resizemode-4/104256760.jpg',
      link: 'https://timesofindia.indiatimes.com/sports/cricket/news/aussie-batter-breaks-ab-de-villiers-record-slams-fastest-ever-hundred-in-list-a-cricket/articleshow/104256694.cms'
    },
    {
      title: 'Upcoming Test Series Announcement',
      description: 'The schedule for the upcoming Test series has been announced with thrilling matches lined up.',
      image: 'https://assets.bcci.tv/bcci/articles/1725810150_ALPHA7RV21270.jpg',
      link: 'https://www.bcci.tv/articles/2024/news/55556143/india-s-squad-for-the-1st-test-of-the-idfc-first-bank-test-series-against-bangladesh-announced'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextNewsItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
  };

  const prevNewsItem = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? newsItems.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextNewsItem();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-12">
      {/* Cricket News Heading */}
      <h2 className="font-semibold text-center text-[#316685]" style={{ fontSize: '36px' }}>Cricket News</h2>

      <div className="relative flex items-center justify-center mt-8">
        {/* Previous button */}
        <motion.button
          onClick={prevNewsItem}
          className="absolute left-2 sm:left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-[#316685] text-white rounded-full p-3 z-10"
          style={{ fontSize: '1.5rem', cursor: 'pointer' }}
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.3 }}
        >
          &#8592;
        </motion.button>

        {/* News items in a slider */}
        <div className="flex items-center justify-center space-x-4">
          {/* Previous item (visible on larger screens) */}
          <motion.div
            className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 sm:p-6 hidden lg:block"
            style={{
              width: '20%',
              minWidth: '250px',
              transform: 'scale(0.9)',
              opacity: 0.9,
            }}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            <img
              src={newsItems[(currentIndex - 1 + newsItems.length) % newsItems.length].image}
              alt={newsItems[(currentIndex - 1 + newsItems.length) % newsItems.length].title}
              className="w-full h-auto object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold" style={{ fontSize: '1rem' }}>
              {newsItems[(currentIndex - 1 + newsItems.length) % newsItems.length].title}
            </h3>
          </motion.div>

          {/* Current item (fully visible) */}
          <motion.div
            className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 sm:p-6"
            style={{
              width: '35%',
              minWidth: '300px',
              transform: 'scale(1)',
              opacity: 1,
            }}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            <img
              src={newsItems[currentIndex].image}
              alt={newsItems[currentIndex].title}
              className="w-full h-auto object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold" style={{ fontSize: '1.25rem', marginBottom: '8px' }}>
              {newsItems[currentIndex].title}
            </h3>
            <p className="text-gray-600 mb-4" style={{ fontSize: '0.875rem' }}>
              {newsItems[currentIndex].description}
            </p>
            <a
              href={newsItems[currentIndex].link}
              className="inline-block mt-4 text-blue-500 hover:underline"
              style={{ fontSize: '0.875rem' }}
            >
              Read More
            </a>
          </motion.div>

          {/* Next item (visible on larger screens) */}
          <motion.div
            className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 sm:p-6 hidden lg:block"
            style={{
              width: '20%',
              minWidth: '250px',
              transform: 'scale(0.9)',
              opacity: 0.9,
            }}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            <img
              src={newsItems[(currentIndex + 1) % newsItems.length].image}
              alt={newsItems[(currentIndex + 1) % newsItems.length].title}
              className="w-full h-auto object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold" style={{ fontSize: '1rem' }}>
              {newsItems[(currentIndex + 1) % newsItems.length].title}
            </h3>
          </motion.div>
        </div>

        {/* Next button */}
        <motion.button
          onClick={nextNewsItem}
          className="absolute right-2 sm:right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-[#316685] text-white rounded-full p-3 z-10"
          style={{ fontSize: '1.5rem', cursor: 'pointer' }}
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.3 }}
        >
          &#8594;
        </motion.button>
      </div>
    </section>
  );
};

export default CricketNews;
