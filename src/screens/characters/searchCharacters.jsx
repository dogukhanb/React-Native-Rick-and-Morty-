//import liraries
import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, FlatList} from 'react-native';
import {screensStyle} from '../../styles/screensStyle';
import {useDispatch, useSelector} from 'react-redux';
import {
  changeParams,
  getCharacterList,
  loadMoreCharacters,
} from '../../store/actions/charactersActions';
import Colors from '../../theme/colors';
import CustomButton from '../../components/ui/customButton';
import SearchItem from '../../components/characters/searchItem';

// create a component
const SearchCharacters = () => {
  const {characterList, pending, params} = useSelector(
    state => state.characters,
  );
  const [searchText, setSearchText] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCharacterList(params));
  }, []);

  const handleSumbit = () => {
    dispatch(changeParams({name: searchText}));
  };
  const ListHeaderComponent = () => {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TextInput
          value={searchText}
          returnKeyType="search"
          placeholder="Search Character"
          onSubmitEditing={handleSumbit}
          style={{
            width: '95%',
            height: 40,
            backgroundColor: Colors.BACKTITLECOLOR,
            borderWidth: 0.5,
            borderRadius: 100,
            borderColor: Colors.BROWN,
            padding: 10,
          }}
          onChangeText={text => {
            setSearchText(text);
          }}
        />
        <CustomButton
          onPress={() => handleSumbit()}
          title="Search"
          backgroundColor={Colors.GREEN}
          titleColor={Colors.WHITE}
        />
      </View>
    );
  };
  return (
    <View style={screensStyle.container}>
      <FlatList
        data={characterList}
        renderItem={({item}) => <SearchItem item={item} />}
        ListHeaderComponent={ListHeaderComponent}
        // onEndReachedThreshold={0.5}
        // onEndReached={handleLoadMore}
        // ListFooterComponent={<Spinner />}
      />
    </View>
  );
};

export default SearchCharacters;
