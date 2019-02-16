const { PromptView, BotTextMessage } = require('botfuel-dialog');

class TravelView extends PromptView {
  render(userMessage, { matchedEntities }) {
    const destination =
      matchedEntities.destination &&
      matchedEntities.destination.values[0].value;

    if (!destination) {
      return [new BotTextMessage('Where do you want to go?')];
    }

    return [new BotTextMessage(`${destination} is a very nice place.`)];
  }
}

module.exports = TravelView;