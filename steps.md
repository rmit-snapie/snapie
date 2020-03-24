- set up:
  nodejs
  create-react-native-app
- [] helloworld
  create-react-native-app helloworld

* [] redux with react native

- init, npm i redux react-redux --save
- create a folder called src, and add Books.js and actions.js, bookReducer.js and index.js
- app.js provider...
- book.js
  actions,
  const mapStateToProps = state => ({books: state.bookReducer.books});
  const mapDispatchToProps = {dispatchAddBook: book => addBook(book)};
  export default connect(mapStateToProps, mapDispatchToProps)(Books)

* [] react native with voice

- set up
  create-react-native-app VoiceNative
  cd VoiceNative / npm run eject
- dependencies:
  npm i react-native-voice --save
  react-native link react-native-voice
- for ios: pod install
  for android: local.confg
- permission:
  ios: ios/VoiceNative/Info.plist
- components:
  VoiceNative
  App.js
- Voice.start("VI") for vietnamese, us for english...
  - [] nav app

* [] react native text to speech

- npm install --save react-native-tts
  react-native link react-native-tts
  ios => pod install

* [] testing with Detox and Jest

- brew tap wix/brew
  brew install applesimutils
- npm install -g detox-cli
  npm install detox --save-dev
- yarn add jest --dev
- add script in package.json
  "scripts": {
  "test": "jest"
  },
  "jest": {
  "preset": "react-native"
  }

- detox init -r jest
- add to package.json
  {
  "name": "<your_project_name>",
  "version": "0.0.1"
  }
  "detox": {
  "configurations": {
  "ios.sim.debug": {
  "binaryPath": "ios/build/Build/Products/Debug-iphonesimulator/example.app",
  "build": "xcodebuild -project ios/example.xcodeproj -scheme example -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build",
  "type": "ios.simulator",
  "device": {
  "type": "iPhone 11 Pro"
  }
  }
  }
  }
  use -workspace ios/example.xcworkspace instead of -project.
- write function with export module
- write funcition.test.js that import module and test
- run yarn test
- edit test logic in e2e/fistTest.spec.js
- run the simulator first
- check package.json
- detox build
- detox test
- gitignore

# Xcode

#

build/
_.pbxuser
!default.pbxuser
_.mode1v3
!default.mode1v3
_.mode2v3
!default.mode2v3
_.perspectivev3
!default.perspectivev3
xcuserdata
_.xccheckout
_.moved-aside
DerivedData
_.hmap
_.ipa
\*.xcuserstate
project.xcworkspace

## Final outputs

Detox-android/
Detox-ios-src.tbz
Detox-ios.tbz
