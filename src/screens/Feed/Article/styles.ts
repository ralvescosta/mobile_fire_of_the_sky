import {styled} from '../../../Theme';

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from '../../../utils/windowSize';

export const Container = styled.View`
  flex: 1;
  margin: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #fff;
  elevation: 3;
`;

export const Image = styled.Image`
  width: 100%;
  height: ${heightPercentageToDP('30')}px;
  resize-mode: cover;
  border-radius: 10px;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  padding-top: 10px;
`;

export const AvatarContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const OwnerName = styled.Text`
  letter-spacing: 1.05px;
  font-weight: bold;
  margin-left: 5px;
  font-size: ${widthPercentageToDP('3.8')}px;
`;

export const PostDate = styled.Text`
  letter-spacing: 1.05px;
  font-style: italic;
  color: ${({theme}) => theme.colors.gray};
  font-size: ${widthPercentageToDP('3.8')}px;
`;

export const Content = styled.View`
  padding: 10px;
  margin: 10px 0;
`;

export const Title = styled.Text`
  letter-spacing: 1.05px;
  font-weight: bold;
  font-size: ${widthPercentageToDP('4')}px;
  align-self: flex-start;
  margin-bottom: 10px;
  text-transform: uppercase;
`;
export const P = styled.Text`
  letter-spacing: 1.05px;
  text-align: justify;
  font-size: ${widthPercentageToDP('3.2')}px;
`;

export const Footer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-top-width: 0.5px;
  border-top-color: ${({theme}) => theme.colors.gray};
  padding: 10px 0;
`;
export const ButtonMask = styled.TouchableOpacity`
  flex-direction: row;
  padding: 5px;
  align-items: center;
`;

export const Rating = styled.Text`
  padding: 0 10px;
  font-size: ${widthPercentageToDP('4')}px;
  color: ${({theme}) => theme.colors.primary};
  font-weight: bold;
`;
