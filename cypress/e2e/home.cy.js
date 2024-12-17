describe('my first test case', () => {
 beforeEach('visit the url', () =>{
  cy.visit('https://example.cypress.io/todo')
 })

 //Objective: This test case verifies that the dropdown menu displays exactly 17 commands 
 // and that the text of each list item matches the expected list of commands in the correct order.
 it('should check the list of commands in the dropdown menu', () => {
    cy.get('.dropdown-menu li').should('have.length', 17)

    cy.get('.dropdown-menu li').first().should('have.text', 'Querying')

    //Define the expected list of command texts
    const expectedCommands = [
      'Querying', 'Traversal', 'Actions', 'Window', 'Viewport', 'Location',  'Navigation', 'Assertions', 'Misc', 
      'Connectors', 'Aliasing', 'Waiting', 'Network Requests', 'Files', 'Storage', 'Cookies', 'Spies, Stubs & Clocks'
    ];

    // check that the dropdown menu contains the correct number of list items
    cy.get('.dropdown-menu li').should('have.length', expectedCommands.length);

    // Verify the text of each list item matches the expected command
    cy.get('.dropdown-menu li').each((li, index) =>{
      cy.wrap(li).should('have.text', expectedCommands[index]);
  })

 })

 it('add new to do item to the list', () => {

  const numberOfItems = ['Wash the clothes', 'Visit the museum', 'Go to sleep']

  
  cy.get('.todo-list li').its('length').as('initialItems');

  
  numberOfItems.forEach((item) => {
    cy.get('[data-test=new-todo]').type(`${item}{enter}`)
  });

  // Verify that the correct number of items were added to the todo list
   cy.get('.todo-list li').should('have.length', numberOfItems.length + this.initialItems );
  
  
 })



})