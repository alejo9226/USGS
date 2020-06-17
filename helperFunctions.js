// Formats response to look presentable on webpage
const renderResponse = (res) => {
    // Handles if res is falsey
    if(!res.features){
      console.log(res.status);
    }
    // In case res comes back as a blank array
    if(!res.features.length){
      responseField.innerHTML = "<p>Try again!</p><p>There were no suggestions found!</p>";
      return;
    }
  
    // Creates an empty array to contain the HTML strings
    let wordList = [];
    // Loops through the response and caps off at 10
    for(let i = 0; i < Math.min(res.features.length, 15); i++){
      // creating a list of words
      const earthQuakeDate = new Date(res.features[i].properties.time);
      const earthquakeLink = res.features[i].properties.url;
      wordList.push(`<li><a href="${earthquakeLink}">${res.features[i].properties.place} with a magnitude of ${res.features[i].properties.mag} on ${earthQuakeDate}</a></li>`);
    }
    // Joins the array of HTML strings into one string
    wordList = wordList.join("");
  
    // Manipulates responseField to render the modified response
    responseField.innerHTML = `<p>Earthquakes between ${initialDateField.value} and ${finalDateField.value} and mag greater than ${minMagnitudeField.value}:</p><ol>${wordList}</ol>`;
    return
  }
  
  // Renders response before it is modified
  const renderRawResponse = (res) => {
    // Takes the first 10 words from res
    let trimmedResponse = res.slice(0, 10);
    // Manipulates responseField to render the unformatted response
    responseField.innerHTML = `<text>${JSON.stringify(trimmedResponse)}</text>`;
  }

  // export {renderResponse, renderRawResponse};
  
  