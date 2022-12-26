import Utils from '../utils/utils.js';

class Hooks {
  getSelectorFromPage(element, page) {
    element = Utils.formatElementName(element);

    switch (page) {
      case 'Home Page':
        return {
          home_title: "[data-cy='home-title']",
          home_subtitle: "[data-cy='home-page-content']",
        }[element];

      default:
        throw new Error('The page sent as argument from the feature file does not exist in hooks.js');
    }
  }
}

export default new Hooks();
