describe('LOGIN', () => {

  it('standard user', () => {
   cy.visit ('https://www.saucedemo.com/') 
   cy.get('[data-test="username"]') .type('standard_user')
   cy.get('[data-test="password"]') .type('secret_sauce')
   cy.get('[data-test="login-button"]') .click()
   cy.get('[data-test="shopping-cart-link"]') .click()
   cy.get('[data-test="continue-shopping"]') .click()
   cy.get('[data-test="add-to-cart-sauce-labs-backpack"]') .click()
   cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]') .click()
   cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]') .click()
   cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]') .click()
   cy.get('[data-test="add-to-cart-sauce-labs-onesie"]') .click()
   cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]') .click()
   cy.get('[data-test="shopping-cart-link"]') .click()
   cy.get('[data-test="checkout"]') .click()
   cy.get('[data-test="firstName"]') .type('Oyindamola')
   cy.get('[data-test="lastName"]') .type('Rasheed')
   cy.get('[data-test="postalCode"]') .type('1234')
   cy.get('[data-test="continue"]') .click()
   cy.get('[data-test="finish"]') .click()
   cy.get('[data-test="back-to-products"]') .click()
   cy.get('#react-burger-menu-btn').click ()
   cy.get('[data-test="logout-sidebar-link"]') .click()
   
     
  })
})