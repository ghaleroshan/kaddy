import React from "react";
import styled from "styled-components";
import { asRem } from "../../helper";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 20%;
  max-width: ${asRem(400)};
  width: 100%;
  height: 100%;
  margin: ${asRem(5)};
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`;

const Img = styled.img`
  height: ${asRem(200)};
  margin-top: ${asRem(8)};
  border-radius: ${asRem(4)} ${asRem(4)} 0 0;
  transition: transform 0.2s;
  box-shadow: ${asRem(2)} ${asRem(2)} ${asRem(6)} rgba(0, 0, 0, 0.5);
`;

const TitleWrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 0 0 ${asRem(4)} ${asRem(4)};
  text-align: center;
  padding: ${asRem(4)} ${asRem(2)};
  font-size: ${asRem(10)};
  display: flex;
  flex-direction: column;
  box-shadow: ${asRem(2)} ${asRem(2)} ${asRem(6)} rgba(0, 0, 0, 0.5);
`;

export const ImageList = ({ images }) => {
  return (
    <>
      <Container>
        {images &&
          images.map((img) => (
            <ImageWrapper key={img.id}>
              <Img src={img.urls.regular} alt={img.alt_description} />
              <TitleWrapper>
                <span>
                  Photo By: <a href={img.user.links.self}> {img.user.name}</a>
                </span>
                <span>
                  <a href={img.links.html}> Go to original link</a>
                </span>
              </TitleWrapper>
            </ImageWrapper>
          ))}
        {!images.length && <p> No Results Found</p>}
      </Container>
    </>
  );
};
