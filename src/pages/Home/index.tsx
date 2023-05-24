import { useCallback, useEffect, useState } from "react";
import { FlatList, ScrollView, Text, View } from 'react-native';

import { List } from "../../components";
import { api } from "../../services/api";

import { styles } from './style';
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const [movies, setMovies] = useState<Movies[]>([]);

  const navigation = useNavigation();

  useEffect(() => {
    api.get('/')
      .then(response => setMovies(response.data));
  }, []);

  const navigateToMovie = useCallback((movie: Movies) => {
    navigation.navigate('Movie' as never, movie as never);
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <FlatList
          nestedScrollEnabled
          contentContainerStyle={{ gap: 32 }}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          data={movies}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <List {...item} onPress={() => navigateToMovie(item)} />}
        />
      </View>
    </ScrollView>
  );
}