const pictureStyles = `
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export default function Picture() {
  return (
    <div class="bigwrap">
      <div class="picturewrapper">
        <h1 class="heading">here for you</h1>
        <img class="image" src="/picture.jpg" alt="" />
        <img class="image" src="/picture.jpg" alt="" />
        <img class="image" src="/picture.jpg" alt="" />

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

            }

            .picturewrapper::before {
              content: "";
              position: absolute;
              top: -10%;
              left: 0;
              width: 100%;
              height: 120%;
              background: rgb(90, 173, 39);
              background: radial-gradient(
                circle,
                rgba(90, 173, 39, 1) 5%,
                rgba(101, 164, 63, 1) 66%,
                rgba(1, 83, 60, 1) 100%
              );
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
