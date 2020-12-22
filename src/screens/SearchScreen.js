import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native';

import SearchBar from '../components/SearchBar';
import useResult from '../hooks/useResults';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResult();

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results.</Text>
    </View>
  );
};
const styles = StyleSheet.create({});
export default SearchScreen;
