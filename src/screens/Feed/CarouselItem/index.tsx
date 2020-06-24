import React from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {Avatar} from 'react-native-elements';

import {widthPercentageToDP} from '../../../utils/windowSize';

import {articleTypes} from '../index';
import {
  SlideContainer,
  ImageContainer,
  ParallaxImg,
  ImageS,
  AuthorContainer,
  TextContainer,
  Strong,
  Span,
  RatingContainer,
  RatingText,
} from './styles';

type parallaxProps = {};

interface Props {
  article: articleTypes;
  even: boolean;
  parallax: boolean;
  parallaxProps: parallaxProps;
}

const SliderEntry: React.FC<Props> = ({
  article,
  parallax,
  parallaxProps,
  // even,
}) => {
  function getImage() {
    return parallax ? (
      <ParallaxImg
        source={article.illustration}
        parallaxFactor={0.35}
        showSpinner={true}
        spinnerColor={'rgba(255, 255, 255, 0.4)'}
        {...parallaxProps}
      />
    ) : (
      <ImageS source={article.illustration} />
    );
  }

  return (
    <SlideContainer
      activeOpacity={1}
      onPress={() => {
        alert(`You've clicked '${article.title}'`);
      }}>
      <ImageContainer>{getImage()}</ImageContainer>
      <AuthorContainer>
        <Avatar rounded source={{uri: article.owner.avatar}} />
        <TextContainer>
          <Strong>{article.owner.name}</Strong>
          <Span>{article.owner.position}</Span>
          <Span>Fogo do Céu</Span>
        </TextContainer>
        <RatingContainer>
          <Fontisto
            name="fire"
            size={widthPercentageToDP('3.6')}
            color="#c42f33"
          />
          <RatingText>{article.rating}</RatingText>
        </RatingContainer>
      </AuthorContainer>
    </SlideContainer>
  );
};

export default SliderEntry;
