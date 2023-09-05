import { createSignal, onCleanup } from 'solid-js';

const pictureStyles = `
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-position: center center;  
  background-repeat: no-repeat;        
  background-size: cover; 
  height:500px;
`;

const images = [
  "/unbw.jpg",
  "/gal3.jpeg",
  "/gal2.jpeg",
  // Add more images as needed
];

export default function Picture() {
  const [activeIndex, setActiveIndex] = createSignal(0);

  const nextImage = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Start the timer as soon as the component mounts
  const timer = setInterval(nextImage, 1700); // Change every 2 seconds

  // Cleanup the timer when the component is unmounted
  onCleanup(() => {
    clearInterval(timer);
  });

  return (
    <div class="bigwrap">
      <div class="picturewrapper">
        <h1 class="slideheading">Here for you
        <span class="slidesub">Empowering clients to crush conflict and embrace solutions</span>
        </h1>
        <style>
          {`
            .picturewrapper {
              ${pictureStyles}
              max-width: 100%;
              margin: 0 auto;
              overflow: hidden;
              padding-top: 5%;
              padding-bottom: 15%;
              border-radius:50px;
              margin-top:20px;
              margin-bottom:20px;
              background-image:url(${images[activeIndex()]});
            }

          

            .image {
              max-height: 300px;
              max-width: 100%;
            }

        

            .bigwrap {
              position:relative;
              margin-top:100px;
            }
          `}
        </style>
      </div>
    </div>
  );
}
