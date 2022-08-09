const CancelAndStopIntentHandler = require('./CancelAndStopIntentHandler');
const ErrorHandler = require('./ErrorHandler');
const FallbackIntentHandler = require('./FallbackIntentHandler');
const HelloWorldIntentHandler = require('./HelloWorldIntentHandler');
const HelpIntentHandler = require('./HelpIntentHandler');
const IntentReflectorHandler = require('./IntentReflectorHandler');
const LaunchRequestHandler = require('./LaunchRequestHandler');
const OpenGameDetailIntentHandler = require('./OpenGameDetailIntentHandler');
const SearchGameByTitleIntentHandler = require('./SearchGameByTitleIntentHandler');
const SearchGameByCategoryIntentHandler = require('./SearchGameByCategoryIntentHandler');
const SessionEndedRequestHandler = require('./SessionEndedRequestHandler');
const SpeakIntentHandler = require('./SpeakIntentHandler');

module.exports = {
  CancelAndStopIntentHandler,
  ErrorHandler,
  FallbackIntentHandler,
  HelloWorldIntentHandler,
  HelpIntentHandler,
  IntentReflectorHandler,
  LaunchRequestHandler,
  OpenGameDetailIntentHandler,
  SearchGameByTitleIntentHandler,
  SearchGameByCategoryIntentHandler,
  SessionEndedRequestHandler,
  SpeakIntentHandler,
};
