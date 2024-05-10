const affirmText = document.getElementById('affirm');
const newAffirmBtn = document.getElementById('new-affirm');


  // show new affirmation
async function newAffirm() {
    //loading();
    // Pick a random quote from apiQuotes array
    const affirmations = await fetchAffirmations();
    const randIndex = Math.floor(Math.random() * affirmations.length);
    const randAffirm = affirmations[randIndex];
    affirmText.textContent = randAffirm;

  }


  // fetch affirmations from API
  async function fetchAffirmations() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/avyrie/affirmations-api/main/affirmations.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        data = await response.json();
        return data.affirmations;
    } catch (error) {
        console.error('Error fetching affirmations:', error);
        return []; // Return an empty array in case of an error
    }
}
    
newAffirm();
newAffirmBtn.addEventListener('click', newAffirm);
 