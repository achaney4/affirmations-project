
const affirmContainer = document.getElementById('affirm-container');
const affirmText = document.getElementById('affirm');
const newAffirmBtn = document.getElementById('new-affirm');


let apiAffirm = [];

  

  // Show New Quote
function newAffirm() {
    //loading();
    // Pick a random quote from apiQuotes array
    const affirmation = apiAffirm[Math.floor(Math.random() * apiAffirm.length)];
    
    affirmText.textContent = affirmation.text;
    
  }

    // Get Quotes From API 
    /*async function getAffirms() {
        //loading();
        const apiUrl = 'https://type.fit/api/quotes';
        try {
          const response = await fetch(apiUrl);
          apiAffirm = await response.json();
          newAffirm();
        } catch (error) {
          // Catch Error Here
        }
      }*/

  // Get Quotes From API 
    async function getAffirms() {
        //loading();
        const apiUrl = 'affirmApi.json';
        try {
          const response = await fetch(apiUrl);
          apiAffirm = await response.json();
          newAffirm();
        } catch (error) {
          // Catch Error Here
        }
      }


getAffirms();

 