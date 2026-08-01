import { Image, StyleSheet, Text, View } from 'react-native';
import { colors } from '@/src/theme/tokens';

type RepresentativeAvatarProps = {
  name: string;
  photoUrl?: string;
};

export function RepresentativeAvatar({ name, photoUrl }: RepresentativeAvatarProps) {
  const initials = name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('');

  return (
    <View accessibilityLabel={`${name} photo`} style={styles.avatar}>
      <Text style={styles.initials}>{initials}</Text>
      {photoUrl ? <Image source={{ uri: photoUrl }} style={styles.photo} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 86,
    height: 86,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 43,
    backgroundColor: colors.navy800,
  },
  initials: {
    color: colors.blue200,
    fontSize: 24,
    fontWeight: '800',
  },
  photo: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: 86,
    height: 86,
  },
});
