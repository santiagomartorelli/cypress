import Utils from '../utils/utils.js';

class Hooks {
  getSelectorFromPage(element, page) {
    element = Utils.formatElementName(element);

    switch (page) {
      case 'Flatrate - HomePage':
        return {
          from: "#t-from",
          to: "#t-to",
          next: ".current > .input-row > .small > #next-btn",
        }[element];

      default:
        throw new Error('The page sent as argument from the feature file does not exist in hooks.js');
    }
  }
}

export default new Hooks();
