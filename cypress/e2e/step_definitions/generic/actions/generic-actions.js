import { expect } from 'chai';
import Hooks from '../hooks/hooks.js';
import { collect, getValueCollectorMap } from '../utils/collector.js';

class GenericActions {
  openUrl(url) {
    cy.visit(url);
  }

  clickOnElement(element, page) {
    const selector = Hooks.getSelectorFromPage(element, page);
    if (!selector) {
      throw new Error('Element name does not exist in hooks.js under any page');
    }
    cy.get(selector).click();
  }

  validateExpectedTextOnElement(element, page, expectedText) {
    const selector = Hooks.getSelectorFromPage(element, page);
    if (!selector) {
      throw new Error('Element name does not exist in hooks.js under any page');
    }
    cy.get(selector).should('have.text', expectedText);
  }

  validateThatElementIsDisplayed(element, page) {
    const selector = Hooks.getSelectorFromPage(element, page);
    if (!selector) {
      throw new Error('Element name does not exist in hooks.js under any page');
    }
    cy.get(selector).should('be.visible');
  }

  validateExpectedElementAttribute(element, page, expectedAttribute, expectedValue) {
    const selector = Hooks.getSelectorFromPage(element, page);
    if (!selector) {
      throw new Error('Element name does not exist in hooks.js under any page');
    }
    cy.get(selector).invoke('attr', expectedAttribute).should('eq', expectedValue);
  }

  fillInputField(inputValue, element, page) {
    const selector = Hooks.getSelectorFromPage(element, page);
    if (!selector) {
      throw new Error('Element name does not exist in hooks.js under any page');
    }
    cy.get(selector).should('be.visible');
    cy.get(selector, { force: true }).type(inputValue);
  }

  expectElementToBeClickable(element, page) {
    const selector = Hooks.getSelectorFromPage(element, page);
    if (!selector) {
      throw new Error('Element name does not exist in hooks.js under any page');
    }
    cy.get(selector).should('be.enabled');
  }

  scrollToElement(element, page) {
    const selector = Hooks.getSelectorFromPage(element, page);
    if (!selector) {
      throw new Error('Element name does not exist in hooks.js under any page');
    }
    cy.get(selector).scrollIntoView({ duration: 1000 });
  }

  waitForElementToDisappear(element, page) {
    const selector = Hooks.getSelectorFromPage(element, page);
    if (!selector) {
      throw new Error('Element name does not exist in hooks.js under any page');
    }
    cy.get(selector).should('not.be.visible');
  }

  validateWebPageUrl(url) {
    cy.url().should('eq', url);
  }

  expectNewTabToHaveBeenOpened(element, page, newTabUrl) {
    const selector = Hooks.getSelectorFromPage(element, page);
    cy.get(selector).invoke('attr', 'target').should('eq', '_blank');
    cy.get(selector).invoke('removeAttr', 'target').click();
    cy.url().should('eq', newTabUrl);
  }

  storeElementText(element, page, key) {
    const selector = Hooks.getSelectorFromPage(element, page);
    if (!selector) {
      throw new Error('Element name does not exist in hooks.js under any page');
    }
    cy.get(selector)
      .invoke('text')
      .then((text) => {
        collect(key, text.replace(/(\r\n|\n|\r)/gm, ' '));
      });
  }

  getStoredElementText(element, page, key) {
    const selector = Hooks.getSelectorFromPage(element, page);
    if (!selector) {
      throw new Error('Element name does not exist in hooks.js under any page');
    }
    cy.get(selector)
      .invoke('text')
      .then((text) => {
        expect(text.replace(/(\r\n|\n|\r)/gm, ' ')).to.eq(getValueCollectorMap(key));
      });
  }

  sendRequest(method, url, headers, body, key) {
    cy.request({
      method: method,
      url: url,
      headers: JSON.parse(headers),
      body: JSON.parse(body),
    }).then((responseData) => {
      collect(key, responseData);
    });
  } //Sends a HTTP request to the targeted URL, using any HTTP request method (GET, POST, DELETE, etc.), and a request body, if this is required.

  validateResponseStatus(key, statusCode) {
    let responseData = getValueCollectorMap(key);
    expect(responseData.status).to.eq(parseInt(statusCode));
  }

  interceptRequest(method, url, alias) {
    cy.intercept({
      method: method,
      url: url,
    }).as(alias);
  } //Creates an alias for a possible HTTP request occurring at a certain point. An aliased request can be waited upon inside the automated tests.

  waitForRequest(alias) {
    cy.wait(`@${alias}`);
  } //Waits for the aliased HTTP request to occur.
}

export default new GenericActions();
