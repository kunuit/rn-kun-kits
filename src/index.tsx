import { NativeModules, Platform } from 'react-native';
import * as KKComponents from './components';
import * as KKCommon from './common';

const LINKING_ERROR =
  `The package 'rn-kun-kits' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const RnKunKits = NativeModules.RnKunKits
  ? NativeModules.RnKunKits
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function multiply(a: number, b: number): Promise<number> {
  return RnKunKits.multiply(a, b);
}

export { KKComponents, KKCommon }
