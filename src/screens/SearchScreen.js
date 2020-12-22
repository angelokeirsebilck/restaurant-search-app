import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native';

import useResult from '../hooks/useResults';

import ResulstsLsit from '../components/ResultsList';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResult();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };
  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results.</Text>
      <ResulstsLsit results={filterResultsByPrice('€')} title='Cost Effective' />
      <ResulstsLsit results={filterResultsByPrice('€€')} title='Bit pricier' />
      <ResulstsLsit results={filterResultsByPrice('€€€')} title='Big Spender' />
    </View>
  );
};
const styles = StyleSheet.create({});
export default SearchScreen;
