export function navigateTo(
  navigationProp: Object,
  screenName: string,
  propParams?: Object,
) {
  navigationProp.navigate(screenName, propParams);
}

export function pushTo(
  navigationProp: Object,
  screenName: string,
  propParams?: Object,
) {
  navigationProp.push(screenName, propParams);
}

export function goBack(navigationProp: Object) {
  navigationProp.goBack();
}

export function goToFirstScreenInStack(navigationProp: Object) {
  navigationProp.popToTop();
}
