// Information to reach API
const url = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&';
const startTime = 'starttime=';
const endTime = '&endtime=';
const minMag = '&minmagnitude=';

// Selecting page elements
const initialDateField = document.querySelector('#initdate');
const finalDateField = document.querySelector('#finaldate');
const minMagnitudeField = document.querySelector('#mag');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');


// AJAX function
const getSuggestions = () => {
  const firstDate = initialDateField.value;
  const lastDate = finalDateField.value;
  const minMagnintude = minMagnitudeField.value;
  const endpoint = `${url}${startTime}${firstDate}${endTime}${lastDate}${minMag}${minMagnintude}`;
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
  renderResponse(xhr.response)
}
  }
  xhr.open('GET', endpoint);
  //xhr.setRequestHeader('Content-type', 'application/json');
  //xhr.setRequestHeader('Authorization', apiKey);
  xhr.send();
}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
    while(responseField.firstChild){
      responseField.removeChild(responseField.firstChild);
    };
  if (initialDateField.value && finalDateField.value && minMagnitudeField.value) {
    getSuggestions();
  } else {
    responseField.innerHTML = "<p>Please input both start time and end time</p>";
  }
}

submit.addEventListener('click', displaySuggestions);

