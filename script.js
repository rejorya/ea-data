fetch('data.json')
  .then(res => {
    if (!res.ok) throw new Error("Failed to load data.json");
    return res.json();
  })
  .then(data => {

    // 🔥 ربط البيانات بالنظام (أهم سطر)
    window.D = data;

    // ====== عرض topics ======
    const output = document.getElementById("output");

    if (output) {
      output.innerHTML = (data.topics || []).map(item => `
        <div style="border:1px solid #ccc; margin:10px; padding:10px;">
          <h3>${item.title || ""}</h3>
          <p><b>الجهة:</b> ${item.from || ""}</p>
          <p><b>المسؤول:</b> ${item.responsible || ""}</p>
          <p><b>التاريخ:</b> ${item.date || ""}</p>
        </div>
      `).join('');
    }

    // ====== تشغيل لوحة الذكاء الإداري ======
    if (typeof renderCmd === "function") renderCmd();
    if (typeof renderInsights === "function") renderInsights();
    if (typeof renderPerf === "function") renderPerf();
    if (typeof renderNaibEsc === "function") renderNaibEsc();

  })
  .catch(err => {
    console.error("Error loading data:", err);

    const output = document.getElementById("output");
    if (output) {
      output.innerHTML = "في مشكلة في تحميل البيانات";
    }
  });
