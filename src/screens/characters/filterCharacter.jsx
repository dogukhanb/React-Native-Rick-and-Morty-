import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {screensStyle} from '../../styles/screensStyle';
import CustomButton from '../../components/ui/customButton';
import Colors from '../../theme/colors';
import {genders, status} from '../../utils/constans';
import {
  changeParams,
  getCharacterList,
} from '../../store/actions/charactersActions';

const FilterCharacters = () => {
  const {params} = useSelector(state => state.characters);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const filterCharacters = () => {
    dispatch(getCharacterList(params));
    navigation.goBack();
  };

  const clearFilter = () => {
    dispatch(changeParams({gender: null, status: null}));
    navigation.goBack();
  };

  return (
    <View style={screensStyle.container}>
      <View style={{flex: 1}}>
        <ScrollView>
          <Text style={styles.title}>Gender</Text>
          <View style={styles.buttonGroup}>
            {genders.map(item => (
              <TouchableOpacity
                key={item.id}
                onPress={() => dispatch(changeParams({gender: item.value}))}
                style={[
                  styles.button,
                  {
                    backgroundColor:
                      params.gender === item.value
                        ? Colors.GREEN
                        : Colors.BROWN,
                  },
                ]}>
                <Text style={styles.buttonText}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text style={styles.title}>Status</Text>
          <View style={styles.buttonGroup}>
            {status.map(item => (
              <TouchableOpacity
                key={item.id}
                onPress={() => dispatch(changeParams({status: item.value}))}
                style={[
                  styles.button,
                  {
                    backgroundColor:
                      params.status === item.value
                        ? Colors.GREEN
                        : Colors.BROWN,
                  },
                ]}>
                <Text style={styles.buttonText}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <CustomButton
          onPress={filterCharacters}
          title="Filter"
          backgroundColor={Colors.GREEN}
          titleColor={Colors.WHITE}
        />
        <CustomButton
          onPress={clearFilter}
          title="Clear"
          backgroundColor={Colors.BACKTITLECOLOR}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    color: Colors.BROWN,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    padding: 10,
    margin: 3,
    borderRadius: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.WHITE,
  },
  footer: {
    flexDirection: 'row',
    paddingBottom: 20,
  },
});

export default FilterCharacters;
