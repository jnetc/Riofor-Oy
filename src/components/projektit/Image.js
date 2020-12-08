import React from 'react';

const Image = ({ image, alt }) => {
  if (!image?.fluid) {
    return <div id="modal-pic">Picture not found</div>;
  }

  const arrWebp = image.fluid.srcSetWebp.split('\n');
  const arr = image.fluid.srcSet.split('\n');
  console.log(arrWebp);

  return (
    <picture style={{ gridColumn: '1/-1' }}>
      <source
        type="image/webp"
        media="(min-width: 1201px)"
        srcSet={arrWebp[4]}
      />
      <source type="image/png" media="(min-width: 1201px)" srcSet={arr[4]} />
      <source
        type="image/webp"
        media="(min-width: 801px) and (max-width: 1200px)"
        srcSet={arrWebp[3]}
      />
      <source
        type="image/png"
        media="(min-width: 801px) and (max-width: 1200px)"
        srcSet={arr[3]}
      />
      <source
        type="image/webp"
        media="(min-width: 401px) and (max-width: 800px)"
        srcSet={arrWebp[2]}
      />
      <source
        type="image/png"
        media="(min-width: 401px) and (max-width: 800px)"
        srcSet={arr[2]}
      />
      <source
        type="image/webp"
        media="(max-width: 400px)"
        srcSet={arrWebp[1]}
      />
      <source type="image/png" media="(max-width: 400px)" srcSet={arr[1]} />
      <img
        src={image.fluid.src}
        alt={alt.name}
        width="1240"
        height="422"
        id="modal-pic"
      />
    </picture>
  );
};

export default Image;
