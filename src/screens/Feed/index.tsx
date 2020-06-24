/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef, useLayoutEffect} from 'react';
import {Animated, Keyboard, TouchableOpacity, ImageProps} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import MDIcons from 'react-native-vector-icons/MaterialIcons';
import {Avatar} from 'react-native-elements';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {withTheme} from 'styled-components';

import {widthPercentageToDP} from '../../utils/windowSize';

import CarouselItem from './CarouselItem';
import ArticleComponent from './Article';

import {
  styles,
  SafeArea,
  Container,
  ScrollArea,
  FeedNavigationHeader,
  InputContainer,
  Input,
} from './styles';

/**
 * Types
 */
import {Theme as ThemeProps} from '../../Theme';

type ListScreenNavigationProp = StackNavigationProp<{}>;

export type articleTypes = {
  id: number;
  owner: {
    name: string;
    position: string;
    avatar: string;
  };
  title: string;
  subtitle: string;
  rating: number;
  reviews: number;
  illustration: ImageProps;
};

type Props = {
  navigation: ListScreenNavigationProp;
  articles: articleTypes[];
  theme: ThemeProps;
};
/** */

/**
 * STATICS
 */
const fakeIllustration = require('../../assets/black.png');

const FdCLogo = require('../../assets/logo.jpeg');

const Feed: React.FC<Props> = ({navigation, articles, theme}) => {
  const [inputLength] = useState(new Animated.Value(0));
  const [inputLengthState, setInputLengthState] = useState('contracted');

  useLayoutEffect(() => {
    function searchAnimated() {
      switch (inputLengthState) {
        case 'contracted':
          Animated.timing(inputLength, {
            toValue: 200,
            duration: 250,
          }).start();
          setInputLengthState('expanded');
          break;
        case 'expanded':
          Keyboard.dismiss();
          Animated.timing(inputLength, {
            toValue: 0,
            duration: 150,
          }).start(() => {
            setInputLengthState('contracted');
          });
          break;
        default:
          break;
      }
    }

    navigation.setOptions({
      header: () => (
        <FeedNavigationHeader>
          <TouchableOpacity>
            <MDIcons name="menu" color="#fff" size={30} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Avatar source={FdCLogo} size="medium" />
          </TouchableOpacity>
          <InputContainer>
            <Animated.View
              style={{
                width: inputLength,
                justifyContent: 'center',
                alignItems: 'flex-end',
                borderColor: '#fff',
                borderBottomWidth: 1,
              }}>
              <Input
                placeholder="Search"
                placeholderTextColor="rgba(255,255,255,0.5)"
              />
            </Animated.View>

            <TouchableOpacity style={{}} onPress={searchAnimated}>
              <MDIcons name="search" color="#fff" size={25} />
            </TouchableOpacity>
          </InputContainer>
        </FeedNavigationHeader>
      ),
    });
  }, [inputLength, inputLengthState, navigation]);
  const slider1Ref = useRef(null);
  const [slider1ActiveSlide, setSlider1ActiveSlide] = useState(1);

  function renderItemWithParallax({item, index}, parallaxProps) {
    return (
      <CarouselItem
        article={item}
        even={(index + 1) % 2 === 0}
        parallax={true}
        parallaxProps={parallaxProps}
      />
    );
  }

  return (
    <SafeArea>
      <Container>
        <ScrollArea scrollEventThrottle={200} directionalLockEnabled={true}>
          <Container paddingVertical={5}>
            <Carousel
              ref={slider1Ref}
              data={articles}
              renderItem={renderItemWithParallax}
              sliderWidth={widthPercentageToDP('100')}
              itemWidth={widthPercentageToDP('65')}
              hasParallaxImages={true}
              firstItem={1}
              inactiveSlideScale={0.94}
              inactiveSlideOpacity={0.7}
              inactiveSlideShift={20}
              containerCustomStyle={styles.slider}
              contentContainerCustomStyle={styles.sliderContentContainer}
              onSnapToItem={index => setSlider1ActiveSlide(index)}
            />
            <Pagination
              dotsLength={articles.length}
              activeDotIndex={slider1ActiveSlide}
              containerStyle={styles.paginationContainer}
              dotColor={theme.colors.primaryLight}
              dotStyle={styles.paginationDot}
              inactiveDotColor={theme.colors.primary}
              inactiveDotOpacity={0.8}
              inactiveDotScale={0.6}
              carouselRef={slider1Ref}
              tappableDots={!!slider1Ref}
            />
          </Container>
          <ArticleComponent />
        </ScrollArea>
      </Container>
    </SafeArea>
  );
};

Feed.defaultProps = {
  articles: [
    {
      id: 1,
      owner: {
        name: 'Rafael Bodão',
        position: 'Missionario da Fraternidade',
        avatar: 'https://avatars0.githubusercontent.com/u/45952161?v=4',
      },
      title: 'Música, a Paixão Divina',
      subtitle:
        'A ministração da música é a mais bela forma de se elevar uma oração a Deus',
      rating: 4.3,
      reviews: 3212,
      illustration: fakeIllustration,
    },
    {
      id: 2,
      owner: {
        name: 'Maria Regina',
        position: 'Missionario da Fraternidade',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      },
      title: 'Música 2',
      subtitle:
        'A ministração da música é a mais bela forma de se elevar uma oração a Deus',
      rating: 4.3,
      reviews: 3212,
      illustration: fakeIllustration,
    },
    {
      id: 3,
      owner: {
        name: 'Thiago Nunes',
        position: 'Amigo da Fraternidade',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      },
      title: 'Música 3',
      subtitle:
        'A ministração da música é a mais bela forma de se elevar uma oração a Deus',
      rating: 4.3,
      reviews: 3212,
      illustration: fakeIllustration,
    },
    {
      id: 4,
      owner: {
        name: 'Maria Regina',
        position: 'Missionario da Fraternidade',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      },
      title: 'Música 4',
      subtitle:
        'A ministração da música é a mais bela forma de se elevar uma oração a Deus',
      rating: 4.3,
      reviews: 3212,
      illustration: fakeIllustration,
    },
  ],
};

export default withTheme(Feed);
