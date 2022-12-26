class Utils {
  formatElementName(element) {
    element = element.replace(/ |-/g, '_').toLowerCase();
    return element;
  }

  clearJsonData(pathToFile) {
    cy.readFile(pathToFile).then((jsonData) => {
      jsonData = [];
      cy.writeFile(pathToFile, jsonData);
    });
  }
}

export default new Utils();
