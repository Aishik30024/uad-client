  import './globals.css';
  export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ backgroundColor: '#1c1c1c' }}>
      <head>
      <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js" async />
           <script
             src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/CustomEase.min.js"
             async
           />
          </head>      
        <body style={{ margin: 0, padding: 0, backgroundColor: 'white', overflow: 'hidden', height: '100vh', width: '100vw' }}>
        {children}
      </body>
    </html>
  );
}