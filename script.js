let codingMode = false; // Set to true for coding mode (no api calls to bible passage)

//https://labs.bible.org/api/?passage=random&formatting=plain&type=text
async function fetchBiblePassage() {
  try {
    let textData;
    if (codingMode == true) {
      textData = 'Samuel 16:9 “And he said, "I now know de wae" in zimbabwe.';
    } else {
      const response = await fetch('https://labs.bible.org/api/?passage=random&formatting=plain&type=text');
      textData = await response.text();
    }
    document.getElementById('biblepassage').textContent = `${textData}`;
  } catch (error) {
    console.error('Error fetching Bible passage:', error);
    // Handle the error gracefully, e.g., display an error message to the user
  }
}

 fetchBiblePassage();

const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value;
  if (searchTerm) {
    window.location.href = `https://search.brave.com/search?q=${searchTerm}`;
  } else {
    alert('Please enter a search term.');
  }
});
