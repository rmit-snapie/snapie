//go to a screen inside the screens stack
export function navigateTo(
  navigationProp: Object,
  screenName: string,
  propParams?: Object,
) {
  navigationProp.navigate(screenName, propParams);
}

export function replaceTo(navigationProp: Object, screenName: string) {
  navigationProp.replace(screenName);
}

export function resetRoute(navigationProp: Object, screenName: string) {
  navigationProp.reset({
    routes: [{name: screenName}],
  });
}

//push to a new screen
export function pushTo(
  navigationProp: Object,
  screenName: string,
  propParams?: Object,
) {
  navigationProp.push(screenName, propParams);
}

//go back one screen
export function goBack(navigationProp: Object) {
  navigationProp.goBack();
}

//go to the first screen in the stack
export function goToFirstScreenInStack(navigationProp: Object) {
  navigationProp.popToTop();
}