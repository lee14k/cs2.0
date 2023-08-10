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
        <h1 class="heading">here for you</h1>

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

            .picturewrapper::before {
              content: "";
              position: absolute;
              top: -10%;
              left: 0;
              width: 100%;
              height: 120%;
              background: rgb(90, 173, 39);
              z-index: -1;
            }

            .image {
              max-height: 300px;
              max-width: 100%;
            }

            .heading {
              text-align: center;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              font-size: 24px;
              color: white;
              text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
              z-index: 1;
            }

            .bigwrap {
              position:relative;
            }
          `}
        </style>
      </div>
    </div>
  );
}
