async function searchInternships() {
    const query = document.getElementById('search').value;
    const response = await fetch(`/api/internships?query=${query}`);
    const data = await response.json();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = data.map(job => `<div><h3>${job.title}</h3><p>${job.company}</p></div>`).join('');
  }
  async function saveTestBookmark() {
    const response = await fetch('http://localhost:3000/api/bookmark', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: 'Backend Intern',
        company: 'Netflix'
      })
    });
  
    const data = await response.json();
    console.log('Saved:', data);
    alert('Bookmark saved!');
  }
  