export type RootStackParamList = {
  Splash: undefined;
  TelaInicial: undefined;
  Login: undefined;
  Main: undefined;
};

export type TabParamList = {
  Home: undefined;
  Settings: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}
