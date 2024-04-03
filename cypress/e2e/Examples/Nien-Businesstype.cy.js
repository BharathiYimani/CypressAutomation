///<reference types="Cypress" />
import registrationPage from "../NIEN-POM/NIEN-RegistrationPage"; //POM
import Form_SelectIndustries from "../NIEN-POM/RegistrationForm-selectIndustries"; 
describe('NIEN-Registration From Join',() => {
    let data;
beforeEach(() =>{
cy.visit('http://ec2-52-14-64-70.us-east-2.compute.amazonaws.com/login',{
         failOnStatusCode: false,timeout: 200000},
         // get predefined data from Fixture folder
cy.fixture('NIEN-SampleData').then((jsonData) => {
            data=jsonData
            })
)
 })

it('Register A Company', () => {
    const federalIDNumber = parseInt(data.FederalIDNumber); // Explicitly parse the string to an integer
    const ZIP =parseInt(data.ZIP)
        const RegistrationPage = new registrationPage()
        const SelectIndustry_Checkbox = new Form_SelectIndustries()
        const Phone=parseInt(data.Phone)
        const Ext=parseInt(data.Ext)
        //const CellNumber=parseInt(data.CellNumber)
        RegistrationPage.getClick_Joinbtn().contains('Join').click()
        RegistrationPage.getScroll().scrollIntoView()
        RegistrationPage.getRegisterbtn_Click().contains('Register').click({ timeout: 20000 })
        RegistrationPage.getHeader_validation().contains('Company')
        RegistrationPage.getCompanyName().type(data.companyName) //use fixtures to enter data
       // RegistrationPage.getFederalIDNumber().type(data.FederalIDNumber),wrong because we are passing a number
       RegistrationPage.getFederalIDNumber().type(federalIDNumber.toString());
// Complete command code is written in support folder for selection of Industry check boxes and using fixture data below is the code 
data.Industry.forEach(function(element)
{
cy.selectIndustry(element)
})

// describe and it closings 
})
})
