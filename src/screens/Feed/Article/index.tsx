import React, {useState} from 'react';
import {Animated} from 'react-native';
import {Avatar} from 'react-native-elements';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LottieView from 'lottie-react-native';

import {widthPercentageToDP} from '../../../utils/windowSize';

import {
  Container,
  Image,
  Header,
  AvatarContainer,
  OwnerName,
  PostDate,
  Content,
  Title,
  P,
  Footer,
  Rating,
  ButtonMask,
} from './styles';

const blackImg = require('../../../assets/black.png');
const userImg = require('../../../assets/user.jpg');

export default function Article() {
  const [liked, setLiked] = useState(false);
  const [animationInitialize, setAnimationInitialize] = useState(false);

  function handleLike() {
    setLiked(!liked);
    if (!liked) {
      setAnimationInitialize(true);

      setTimeout(() => {
        setAnimationInitialize(false);
      }, 1260);
    }
  }

  return (
    <Container>
      {animationInitialize ? (
        <Animated.View
          style={{
            position: 'absolute',
            zIndex: 666,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <LottieView
            source={require('../../../assets/like_animation.json')}
            autoPlay
            loop
            style={{width: 300, height: 300}}
          />
        </Animated.View>
      ) : null}
      <Image source={blackImg} />
      <Header>
        <AvatarContainer>
          <Avatar source={userImg} />
          <OwnerName>Rafael Alves</OwnerName>
        </AvatarContainer>

        <PostDate>13/01/2020</PostDate>
      </Header>
      <Content>
        <Title>O grande milagre da Vida</Title>
        <P>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </P>
      </Content>
      <Footer>
        <ButtonMask>
          <Rating>4.3</Rating>
          <Fontisto
            name="fire"
            size={widthPercentageToDP('4.4')}
            color="#c42f33"
          />
        </ButtonMask>
        <ButtonMask>
          <MaterialIcons
            name="chrome-reader-mode"
            size={widthPercentageToDP('6')}
            color="#c42f33"
          />
        </ButtonMask>
        <ButtonMask onPress={handleLike}>
          {!liked ? (
            <MaterialIcons
              name="favorite-border"
              size={widthPercentageToDP('6')}
            />
          ) : (
            <MaterialIcons
              name="favorite"
              color="#c42f33"
              size={widthPercentageToDP('6')}
            />
          )}
        </ButtonMask>
      </Footer>
    </Container>
  );
}
