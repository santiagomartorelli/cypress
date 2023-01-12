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
          continue: ".mid > #next-btn",
          name: "#t-name",
          email: "#t-mail",
          phone: "#t-phone",
          moved_yes: "#t-moved-before-answers-button_yes",
          moved_no: "#t-moved-before-answers-button_no",
          moved_before_next: "#moved-before-next",
          recommend_yes: "#t-recommended-answers-button_yes",
          recommend_no: "#t-recommended-answers-button_no",
          recommend_next: "#recommended-next",
          recommend_name: "#t-recommended-name",
          general_comments: "#t-general-comments",
          general_comments_next: "#general-comments > :nth-child(1) > .col-md-12 > .row > .mid > #recommended-next-btn",
          recommend_name_next: "#recommendation-name > :nth-child(1) > .col-md-12 > .row > .mid > #recommended-next-btn",
          as_soon_as_possible: ":nth-child(1) > .dna-chkbox-option",
          get_my_quote: "#home-quote-form-submit",
        }[element];

      default:
        throw new Error('The page sent as argument from the feature file does not exist in hooks.js');
    }
  }
}

export default new Hooks();
