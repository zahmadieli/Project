async function searchInternships() {
    const query = document.getElementById('search').value;
    const response = await fetch(`/api/internships?query=${query}`);
    const data = await response.json();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = data.map(job => `<div><h3>${job.title}</h3><p>${job.company}</p></div>`).join('');
  }