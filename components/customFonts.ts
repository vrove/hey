import * as Font from 'expo-font';
import { useFonts as useGoogleFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat';

export const useFonts = async () => {
  await Font.loadAsync({
    Inter_400Regular,
    Inter_700Bold,
    Montserrat_700Bold,
  });
};