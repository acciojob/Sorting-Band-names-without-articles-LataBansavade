//your code here

// Function to sort band names in lexicographic order excluding articles
function sortBandNames(bandNames) {
  return bandNames.sort((a, b) => {
    // Define a regular expression to match articles ('a', 'an', 'the') at the beginning of band names
    const articleRegex = /^(a |an |the )/i;

    // Remove articles from both band names for comparison
    const nameA = a.replace(articleRegex, '');
    const nameB = b.replace(articleRegex, '');

    // Compare the names without articles in lexicographic order
    return nameA.localeCompare(nameB);
  });
}

// Example array of band names
let bandNames = ['The Rolling Stones', 'Led Zeppelin', 'Aerosmith', 'The Beatles'];

// Sort the band names
const sortedBandNames = sortBandNames(bandNames);

// Get the ul element by its id
const ulElement = document.getElementById('band');

// Create li elements and append them to the ul element
sortedBandNames.forEach((bandName) => {
  const liElement = document.createElement('li');
  liElement.textContent = bandName;
  ulElement.appendChild(liElement);
});
