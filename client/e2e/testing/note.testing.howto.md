- [] testing with Detox and Jest

* brew tap wix/brew
  brew install applesimutils
* npm install -g detox-cli
  npm install detox --save-dev
* yarn add jest --dev
* add script in package.json
  "scripts": {
  "test": "jest"
  },
  "jest": {
  "preset": "react-native"
  }

* detox init -r jest
  (this will create config... in e2e folder)
* add to package.json
  {
  "name": "<your_project_name>",
  "version": "0.0.1"
  }
  "detox": {
  "test-runner": "jest",
  "runner-config":"e2e/config.json",
  "configurations": {
  "ios.sim.debug": {
  "binaryPath": "ios/build/Build/Products/Debug-iphonesimulator/<your_project_name>.app",
  "build": "xcodebuild -project ios/<your_project_name>.xcodeproj -scheme <your_project_name> -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build",
  "type": "ios.simulator",
  "device": {
  "type": "iPhone 11 Pro"
  }
  }
  }
  }
  use -workspace ios/<your_project_name>.xcworkspace instead of -project.

  - Applying jest-circus
    npm install --save-dev jest-circus
  - Update jest's config
    // e2e/config.json

{

<!-- "testEnvironment": "node" -->

- "testEnvironment": "detox/runners/jest/JestCircusEnvironment",
- "testRunner": "jest-circus/runner"

* Update init script
  <!-- -jasmine.getEnv().addReporter(adapter);
  -jasmine.getEnv().addReporter(specReporter);
  -jasmine.getEnv().addReporter(assignReporter); -->
  +detoxCircus.getEnv().addEventsListener(adapter);
  +detoxCircus.getEnv().addEventsListener(specReporter);
  +detoxCircus.getEnv().addEventsListener(assignReporter);
* write function with export module
* write funcition.test.js that import module and test
* run yarn test
* edit test logic in e2e/fistTest.spec.js
* run the simulator first
* check package.json
* detox build
* detox test
* gitignore

## Final outputs

Detox-android/
Detox-ios-src.tbz
Detox-ios.tbz
