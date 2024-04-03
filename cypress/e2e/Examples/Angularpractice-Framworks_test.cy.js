// // using fixtures concept and also on angular practice
 describe('Data Driven from Fixtures', () => {
   let data;

 beforeEach(() => {
     cy.fixture('Example-AngularPractice').then((jsonData) => {
          data = jsonData;
           console.log(data);
    });
 });

  it('Set data in the Fixtures', () => {
       cy.visit("https://rahulshettyacademy.com/angularpractice/");
       cy.get('input[name="name"]:nth-child(2)').type(data.name);
        cy.get('select').select(data.gender);
  });
 });
// The below script is not working because,
//it is showing error as:Cannot set properties of undefined (setting 'data')

//Because this error occurred during a before each hook we are skipping the remaining tests in the current suite: Data Driven from Fixtures
// describe('Data Driven from Fixtures', () =>{
// // before() /beforeEach() should be added adter description before it
// beforeEach( () =>{
//     cy.fixture('Example-AngularPractice').then( (data) =>{
//  this.data=data
//     })
//  })
//     it('Set data in the Fixuters', () =>{
// cy.visit("https://rahulshettyacademy.com/angularpractice/")
// cy.get('input[name="name"]:nth-child(2)').type('this.data.name')
// cy.get('select').select('this.data.gender')
//     })
// })