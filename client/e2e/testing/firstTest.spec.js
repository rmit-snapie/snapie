/*  test function for detox.
scope test name: fisrt test
*/
describe('first test', () => {
  // set up before test
  beforeEach(async () => {
    await device.reloadReactNative();
  });
  // check for home screen, select by id "howm-screen"
  // todo: add prop testID="home-screen" to view at home component
  it('should have home screen', async () => {
    await expect(element(by.id('home-screen'))).toBeVisible();
  });

  // it('should show hello screen after tap', async () => {
  //   await element(by.id('hello_button')).tap();
  //   await expect(element(by.text('Hello!!!'))).toBeVisible();
  // });

  // it('should show world screen after tap', async () => {
  //   await element(by.id('world_button')).tap();
  //   await expect(element(by.text('World!!!'))).toBeVisible();
  // });
});
