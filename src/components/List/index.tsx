import { GestureResponderEvent, Image, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './style';

type Props = Movies & {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
};

export function List(props: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{props.nome}</Text>

        <TouchableOpacity onPress={props.onPress}>
          <Text style={styles.btnText}>Leia mais</Text>
        </TouchableOpacity>
      </View>

      <Image source={{ uri: props.foto }} style={styles.image} />
    </View>
  );
}