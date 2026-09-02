describe("Shopware 6 Guest Checkout", () => {
  it("should complete a guest checkout successfully", () => {
    // Open storefront
    cy.visit("https://www.shopware6-demo.development-s25.com/");

    cy.url().should("include", "shopware6-demo");

    // Search for a product
    cy.get('input[type="search"]').type("Variant product");
    cy.get('input[type="search"]').type("{enter}");

    cy.contains("Variant product", { timeout: 10000 }).should("be.visible");

    // Add product to cart
    cy.contains("In den Warenkorb").should("be.visible").click();

    // Open cart
    cy.visit("https://www.shopware6-demo.development-s25.com/checkout/cart");

    cy.url().should("include", "/checkout/cart");

    // Proceed to checkout
    cy.contains("Zur Kasse").scrollIntoView().should("be.visible").click();

    // Fill guest customer information
    cy.get('input[name="billingAddress[firstName]"]').type("Test");

    cy.get('input[name="billingAddress[lastName]"]').type("Tester");

    cy.get('input[name="email"]').type("test@example.com");

    cy.get('input[name="billingAddress[street]"]').type("Test Street 10");

    cy.get('input[name="billingAddress[zipcode]"]').type("10115");

    cy.get('input[name="billingAddress[city]"]').type("Berlin");

    // Select country/state
    cy.get('select[name="billingAddress[countryId]"]').should("be.visible");

    cy.get('select[name="billingAddress[countryStateId]"]').select("Berlin");

    // Continue to payment
    cy.contains("Weiter").should("be.visible").click();

    // Select Cash on Delivery
    cy.contains("Cash on delivery").should("be.visible").click();

    // Accept terms and conditions
    cy.get("#tos").check().should("be.checked");

    // Confirm order
    cy.get("#confirmFormSubmit").should("be.visible");

    cy.get("#confirmFormSubmit").click();

    // Verify order confirmation
    cy.url().should("include", "/checkout/finish");
  });
});
