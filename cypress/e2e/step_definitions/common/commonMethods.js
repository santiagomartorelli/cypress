export class CommonMethods {
  checkElementContainsExpectedText(webElement, text) {
    cy.get(webElement, { timeout: 5000 }).contains(text);
  }

  typeTextIntoElementWithFocus(webElement, text) {
    cy.get(webElement, { timeout: 5000 }).type(text);
  }

  typeTextIntoElement(webElement, text) {
    cy.get(webElement, { timeout: 5000 }).type(text);
  }

  verifyUserIsRedirectedToExpectedPage(paths) {
    cy.url({ timeout: 7000 }).should('include', paths);
  }

  clickOnElement(webElement) {
    cy.get(webElement, { timeout: 4000 }).click();
  }

  clickOnElementUsingForce(webElement) {
    cy.get(webElement, { timeout: 4000 }).click({ force: true });
  }

  selectElementFromDropDownByText(webElement, text) {
    cy.get(webElement, { timeout: 3000 }).select(text);
  }

  waitUntilElementIsVisible(webElement) {
    cy.get(webElement, { timeout: 5000 }).should('be.visible');
  }

  clearField(webElement) {
    cy.get(webElement, { timeout: 3000 }).clear();
  }

  clickOutsideField(webElement) {
    cy.get(webElement, { timeout: 3000 }).blur();
  }

  navigateToPage(path) {
    cy.visit(path, { timeout: 3000 });
  }

  validateUrl(expUrl) {
    cy.url().should('include', expUrl);
  }

  validateWindowUrl(expUrl) {
    cy.location('href').should('include', expUrl);
  }

  verifyText(seeFlag, expText, typeText) {
    if (typeText === 'link') {
      if (seeFlag === "don't see") {
        cy.get('a', { timeout: 9000 }).should('not.contain', expText);
      } else {
        cy.get('a', { timeout: 9000 }).should('contain', expText).should('be.visible');
      }
    }
    if (typeText === 'heading') {
      if (seeFlag === "don't see") {
        cy.get('h1').should('not.contain', expText);
      } else {
        cy.get('h1').should('contain', expText).should('be.visible');
      }
    }
    if (typeText === 'subheading') {
      if (seeFlag === "don't see") {
        cy.get('h2').should('not.contain', expText);
      } else {
        cy.get('h2').should('contain', expText).should('be.visible');
      }
    }
    if (typeText === 'paragraph') {
      if (seeFlag === "don't see") {
        cy.get('p').should('not.contain', expText);
      } else {
        cy.get('p').should('contain', expText).should('be.visible');
      }
    }

    if (typeText === 'subsubheading') {
      if (seeFlag === "don't see") {
        cy.get('h3').should('not.contain', expText);
      } else {
        cy.get('h3').should('contain', expText).should('be.visible');
      }
    }

    if (typeText === 'button') {
      if (seeFlag === "don't see") {
        if (expText === 'any buttons') {
          cy.get('.button').should('not.exist');
        } else {
          cy.get('.button').should('not.contain', expText);
        }
      } else {
        cy.get('.button').should('contain', expText).should('be.visible');
      }
    }
    if (typeText === 'span') {
      if (seeFlag === "don't see") {
        cy.get('span').should('not.contain', expText);
      } else {
        cy.get('span').should('contain', expText).should('be.visible');
      }
    }
    if (typeText === 'subsubsubheading') {
      if (seeFlag === "don't see") {
        cy.get('h4').should('not.contain', expText);
      } else {
        cy.get('h4').should('contain', expText).should('be.visible');
      }
    }
  }

  clickButtonWithText(btnText) {
    cy.get('.button')
      .contains(btnText, { matchCase: false })
      .scrollIntoView()
      .then((button) => {
        button.click();
      });
  }

  ValidateElementPresent(elementSelectors) {
    cy.get(elementSelectors).should('be.visible');
  }

  checkButtonLinksToExpectedLink(expButtonText, expLink) {
    cy.get('.button').contains(expButtonText).should('have.attr', 'href', expLink);
  }

  clickLinkWithText(linkText) {
    cy.contains(linkText).as('textLink');
    cy.get('@textLink').scrollIntoView();
    cy.wait(500);
    cy.get('@textLink').click();
    //@todo - this will resolve in C2AM-4341
  }

  /** To scroll the page until element is visible */
  scrollintoviewfor(webElement) {
    webElement.scrollIntoView().should('be.visible');
    cy.wait(1000);
  }

}

export const commonMethods = new CommonMethods();
