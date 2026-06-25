fetch('data.json')
  .then(res => res.json())
  .then(data => {
    const output = document.getElementById("output");

    output.innerHTML = data.topics.map(item => `
      <div style="border:1px solid #ccc; margin:10px; padding:10px;">
        <h3>${item.title}</h3>
        <p><b>الجهة:</b> ${item.from}</p>
        <p><b>المسؤول:</b> ${item.responsible}</p>
        <p><b>التاريخ:</b> ${item.date}</p>
      </div>
    `).join('');
  })
  .catch(err => {
    console.error("Error loading data:", err);
  });
