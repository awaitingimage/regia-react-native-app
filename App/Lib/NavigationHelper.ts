import { NavigationAction, NavigationActions,
    NavigationDrawerScreenOptions,
    NavigationRoute,
    NavigationScreenProp,
    NavigationScreenProps,
    NavigationState} from "react-navigation";
  
  export const navigateToScreen = (
    route: string,
    navigation: NavigationScreenProp<NavigationRoute<any>, NavigationAction>,
  ) => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    navigation.dispatch(navigateAction);
  };
  
  export const resetAction = (
    routeName: string,
    navigation: NavigationScreenProp<NavigationRoute<any>, NavigationAction>,
  ) => {
    const navigateAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName }),
      ],
      key: null,
    });
    navigation.dispatch(navigateAction);
  };
  