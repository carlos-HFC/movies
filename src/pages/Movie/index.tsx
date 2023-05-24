import { Image, Text, View } from 'react-native';

import { styles } from './style';
import { useRoute } from "@react-navigation/native";

export function Movie() {
  const route = useRoute();

  const movie = route.params as Movies;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {movie.nome}
      </Text>

      <Image source={{ uri: movie.foto }} style={styles.image} />

      <View style={styles.box}>
        <Text style={styles.boxText}>
          {movie.sinopse}
        </Text>
      </View>
    </View>
  );
}