const { supportsHTMLInterface } = require('../util');

const CloseGameDetailIntentHandler = (Alexa) => ({
  canHandle(handlerInput) {
    const { requestEnvelope } = handlerInput;
    return (
      supportsHTMLInterface(handlerInput, Alexa) &&
      Alexa.getRequestType(requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(requestEnvelope) === 'CloseGameDetailIntent'
    );
  },
  handle(handlerInput) {
    const { attributesManager, responseBuilder } = handlerInput;

    const sessionAttributes = attributesManager.getSessionAttributes();
    sessionAttributes.inGameDetail = false;
    sessionAttributes.gameTitle = null;
    attributesManager.setSessionAttributes(sessionAttributes);

    responseBuilder.addDirective({
      type: 'Alexa.Presentation.HTML.HandleMessage',
      message: {
        intent: 'CloseGameDetailIntent',
        gameTitle,
      },
    });

    const speakOutput = 'Ammunìdarreri';
    return responseBuilder.speak(speakOutput).getResponse();
  },
});

module.exports = CloseGameDetailIntentHandler;