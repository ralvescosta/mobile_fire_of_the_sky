import {ParallaxImage} from 'react-native-snap-carousel';

import styled from 'styled-components/native';

import {colors} from '../../../utils/themes';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from '../../../utils/windowSize';

export const SlideContainer = styled.TouchableOpacity`
  height: ${heightPercentageToDP('35')}px;
  width: ${widthPercentageToDP('63')}px;
  background-color: #fff;
  margin-bottom: 5px;

  elevation: 3;
  border-radius: 6px;
`;

export const ImageContainer = styled.View`
  flex: 1;
  background-color: #fff;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;

export const ParallaxImg = styled(ParallaxImage).attrs({
  containerStyle: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
})`
  resize-mode: stretch;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;

export const ImageS = styled.Image`
  flex: 1;
  background-color: 'white';
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;

export const AuthorContainer = styled.View`
  padding-vertical: 10px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const TextContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Strong = styled.Text`
  color: ${colors.black};
  font-size: ${widthPercentageToDP('3.5')}px;
  font-weight: bold;
  letter-spacing: 0.5px;
`;

export const Span = styled.Text`
  color: ${colors.gray};
  font-size: ${widthPercentageToDP('2.7')}px;
  font-style: italic;
`;

export const RatingContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 40px;
  justify-content: space-evenly;
`;

export const RatingText = styled.Text`
  color: ${colors.primary};
  font-size: ${widthPercentageToDP('3.6')}px;
`;
