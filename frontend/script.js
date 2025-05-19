const backendBase = 'https://internship-backend-8az2.onrender.com';


async function saveTestBookmark() {
  const response = await fetch(`${backendBase}/api/bookmark`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: 'Backend Intern',
      company: 'Netflix'
    })
  });
  const data = await response.json();
  alert('Bookmark saved!');
}


async function loadBookmarks() {
  try {
    const response = await fetch('https://internship-backend-8az2.onrender.com/api/bookmarks');
    const bookmarks = await response.json();
    console.log("Loaded bookmarks:", bookmarks);

    const container = document.getElementById('bookmarksList');
    container.innerHTML = '';
    
    bookmarks.forEach(bookmark => {
      const item = document.createElement('div');
      item.classList.add('bookmark-item');
      item.innerHTML = `<strong>${bookmark.title}</strong> at ${bookmark.company}`;
      container.appendChild(item);
    });
  } catch (error) {
    console.error("Failed to load bookmarks:", error);
  }
}

async function searchInternships(query) {
  const response = await fetch(`${backendBase}/api/internships?query=${query}`);
  const jobs = await response.json();
  const results = document.getElementById('internshipResults');
  results.innerHTML = '';
  jobs.forEach(job => {
    const item = document.createElement('div');
    item.innerHTML = `<strong>${job.title}</strong> at ${job.company.display_name}`;
    results.appendChild(item);
  });
}
async function searchInternships() {
  const major = document.getElementById('searchMajor').value.toLowerCase();
  const location = document.getElementById('searchLocation').value.toLowerCase();

  const mockData = [
    {
      title: "Software Intern",
      company: "Google",
      location: "Remote",
      apply: "https://careers.google.com"
    },
    {
      title: "Marketing Intern",
      company: "Spotify",
      location: "New York",
      apply: "https://spotifyjobs.com"
    },
    {
      title: "Data Analyst Intern",
      company: "Meta",
      location: "Remote",
      apply: "https://metacareers.com"
    }
  ];

  const filtered = mockData.filter(job =>
    job.title.toLowerCase().includes(major) &&
    job.location.toLowerCase().includes(location)
  );

  const container = document.getElementById('homeResults');
  container.innerHTML = '';

  if (filtered.length === 0) {
    container.innerHTML = '<p>No matching internships found.</p>';
    return;
  }

  filtered.forEach(job => {
    const div = document.createElement('div');
    div.classList.add('bookmark-item');
    div.innerHTML = `
      <strong>${job.title}</strong> at ${job.company}<br>
      <em>${job.location}</em><br>
      <a href="${job.apply}" target="_blank">Apply</a>
    `;
    container.appendChild(div);
  });
}
