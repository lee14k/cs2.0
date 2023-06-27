const pictureStyles = `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom:100px;
`;

export default function Picture() {
  return (
    <div>
    <div class="picturewrapper">
      <img class="image" src="/picture.jpg" alt="" />

      <style>
        {`
          .picturewrapper {
            ${pictureStyles}
          }
          .picturewrapper::before {
            content: "";
            position: absolute;
            top: 100;
            left: 0;
            width: 100%;
            height: 66%;
            background: rgb(90,173,39);
            background: radial-gradient(circle, rgba(90,173,39,1) 5%, rgba(101,164,63,1) 66%, rgba(1,83,60,1) 100%);
            z-index: -1;
          }

          .image {
            padding-top:100px;
          }
    
        `}
      </style>
    </div>
    <h2 class="text-6xl">Working for you</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolorum, quam voluptates quibusdam libero excepturi tempore eaque natus vel quod recusandae qui doloremque nam impedit voluptatem enim nesciunt pariatur. Iure.</p>
    </div>
  );
}
