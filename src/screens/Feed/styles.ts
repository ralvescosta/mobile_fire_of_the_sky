import {StyleSheet} from 'react-native';
import {styled} from '../../Theme';

/**
 * TYPES
 */
type ContainerTypes = {
  paddingVertical?: number;
};

/** */

export const FeedNavigationHeader = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 10px;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const Container = styled.View<ContainerTypes>`
  flex: 1;
  padding-vertical: ${({paddingVertical}) => paddingVertical || 0}px;
`;

export const ScrollArea = styled.ScrollView`
  flex: 1;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

export const Input = styled.TextInput`
  width: 100%;
  color: #fff;
  height: 30px;
  padding: 5px;
`;

export const styles = StyleSheet.create({
  slider: {
    marginTop: 15,
    overflow: 'visible', // for custom animations
  },

  sliderContentContainer: {
    paddingVertical: 10, // for custom animation
  },

  paginationContainer: {
    paddingVertical: 8,
  },

  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 8,
  },
});
