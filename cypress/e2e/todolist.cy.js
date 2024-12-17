describe('my first test case', () => {
 beforeEach('visit the url', () =>{
  cy.visit('https://example.cypress.io/todo')
 })

 //This test case verifies that the dropdown menu displays exactly 17 commands 
 // and that the text of each list item matches the expected list of commands in the correct order.
 it('Verify the dropdown menu contains 17 commands with correct text in order', () => {
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

 //This test verifies that multiple new todo items can be successfully added to the todo list 
 // and that the total count of items in the list is updated correctly.
 it('Verify adding multiple todo items updates the list count correctly', () => {
  const toDoListItem = [
    'Wake up',
    'Make the bed',
    'Wash the clothes',
    'Prepare breakfast',
    'Visit the museum',
    'Read a book',
    'Go for a walk',
    'Return home',
    'Go to sleep',
    'Set an alarm for the next day'
  ];

    cy.get('.todo-list li').its('length').as('initialItems');
    toDoListItem.forEach((item) => {
      cy.get('[data-test=new-todo]').type(`${item}{enter}`)
    });

    // Verify that the correct number of items were added to the todo list
    //cy.get('.todo-list li').should('have.length', numberOfItems.length + this.initialItems );
 })
})