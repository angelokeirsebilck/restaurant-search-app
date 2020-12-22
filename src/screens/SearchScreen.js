import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';

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
    <>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResulstsLsit results={filterResultsByPrice('€')} title='Cost Effective' />
        <ResulstsLsit results={filterResultsByPrice('€€')} title='Bit pricier' />
        <ResulstsLsit results={filterResultsByPrice('€€€')} title='Big Spender' />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SearchScreen;
