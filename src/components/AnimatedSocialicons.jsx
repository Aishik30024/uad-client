import { useState } from 'react';

export default function AnimatedSocialIcons() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const socialLinks = [
    {
      name: 'Facebook',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      baseColor: '#3b5999',
      beforeColor: '#2e4a86',
      afterColor: '#4a69ad'
    },
    {
      name: 'Twitter',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      baseColor: '#55acee',
      beforeColor: '#4184b7',
      afterColor: '#4d9fde'
    },
    {
      name: 'Google Plus',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7.635 10.909v2.619h4.335c-.173 1.125-1.31 3.295-4.335 3.295-2.612 0-4.747-2.164-4.747-4.836s2.135-4.836 4.747-4.836c1.498 0 2.499.647 3.068 1.198l2.081-2.064c-1.365-1.266-3.138-2.052-5.149-2.052-4.259 0-7.7 3.451-7.7 7.704 0 4.252 3.441 7.704 7.7 7.704 4.446 0 7.396-3.125 7.396-7.521 0-.509-.054-1.094-.124-1.563H7.635z"/>
          <path d="M21.8 10.909h-2.188v2.188h-1.094v-2.188h-2.188v-1.094h2.188V7.627h1.094v2.188H21.8v1.094z"/>
        </svg>
      ),
      baseColor: '#dd4b39',
      beforeColor: '#c13929',
      afterColor: '#e83322'
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      baseColor: '#0077b5',
      beforeColor: '#036aa0',
      afterColor: '#0d82bf'
    },
    {
      name: 'Instagram',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      baseColor: 'linear-gradient(#400080, transparent), linear-gradient(200deg, #d047d1, #ff0000, #ffff00)',
      beforeColor: 'linear-gradient(#400080, transparent), linear-gradient(200deg, #d047d1, #ff0000, #ffff00)',
      afterColor: 'linear-gradient(#400080, transparent), linear-gradient(200deg, #d047d1, #ff0000, #ffff00)'
    }
  ];

  const getBaseStyle = (index) => ({
    position: 'relative',
    display: 'block',
    width: '80px',
    height: '80px',
    backgroundColor: '#fff',
    textAlign: 'center',
    transform: hoveredIndex === index 
      ? 'perspective(1000px) rotate(-30deg) skew(25deg) translate(20px, -20px)'
      : 'perspective(100px) rotate(-30deg) skew(25deg) translate(0, 0)',
    transition: '0.5s',
    boxShadow: hoveredIndex === index 
      ? '-50px 50px 50px rgba(0, 0, 0, 0.5)'
      : '-20px 20px 10px rgba(0, 0, 0, 0.5)',
    textDecoration: 'none',
    background: hoveredIndex === index ? socialLinks[index].baseColor : '#fff'
  });

  const getBeforeStyle = (index) => ({
    content: '""',
    position: 'absolute',
    top: '10px',
    left: '-20px',
    height: '100%',
    width: '20px',
    background: hoveredIndex === index ? socialLinks[index].beforeColor : '#b1b1b1',
    transition: '0.5s',
    transform: 'rotate(0deg) skewY(-45deg)'
  });

  const getAfterStyle = (index) => ({
    content: '""',
    position: 'absolute',
    top: '80px',
    left: '-11px',
    height: '20px',
    width: '100%',
    background: hoveredIndex === index ? socialLinks[index].afterColor : '#b1b1b1',
    transition: '0.5s',
    transform: 'rotate(0deg) skewX(-45deg)'
  });

  const getIconStyle = (index) => ({
    fontSize: '40px',
    color: hoveredIndex === index ? '#fff' : '#262626',
    lineHeight: '80px',
    transition: '0.5s'
  });

  return (
    <>
      {/* Background image and global styles */}
      <style jsx global>{`
        body {
          background-image: url("https://hdwallsource.com/img/2014/9/blur-26347-27038-hd-wallpapers.jpg");
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }
      `}</style>

      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        margin: 0,
        padding: 0,
        display: 'flex'
      }}>
        <ul style={{
          margin: 0,
          padding: 0,
          display: 'flex',
          listStyle: 'none'
        }}>
          {socialLinks.map((social, index) => (
            <li 
              key={index}
              style={{
                listStyle: 'none',
                margin: '0 40px'
              }}
            >
              <a 
                href="#"
                style={getBaseStyle(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onFocus={() => setHoveredIndex(index)}
                onBlur={() => setHoveredIndex(null)}
              >
                {/* Before pseudo-element */}
                <div style={getBeforeStyle(index)} />
                
                {/* After pseudo-element */}
                <div style={getAfterStyle(index)} />
                
                {/* Icon */}
                <div style={getIconStyle(index)}>
                  {social.icon}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}


