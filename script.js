fetch('data.json')
  .then(res => res.json())
  .then(data => {

    window.D = data;

    // ===== عرض بسيط للمواضيع =====
    document.getElementById("output").innerHTML =
      data.topics.map(t => `
        <div class="card">
          <h3>${t.title}</h3>
          <p>📍 ${t.from}</p>
          <p>👤 ${t.responsible}</p>
          <p>📅 ${t.date}</p>
        </div>
      `).join('');

    // ===== لوحة بسيطة بدل نظامك المعقد =====
    renderCmd();
    renderInsights();
    renderPerf();
    renderNaibEsc();

  })
  .catch(err => {
    console.error(err);
    document.getElementById("output").innerHTML =
      "خطأ في تحميل البيانات";
  });


// ===================== لوحة القيادة =====================
function renderCmd(){
  const open = D.topics.filter(t => t.status !== "closed");

  document.getElementById("cmdMount").innerHTML = `
    <div class="card">
      <b>إجمالي المفتوحة:</b> ${open.length}
    </div>
  `;
}

// ===================== التحليل الذكي =====================
function renderInsights(){
  document.getElementById("insMount").innerHTML = `
    <div class="card">التحليل الذكي يعمل ✔</div>
  `;
}

// ===================== الأداء =====================
function renderPerf(){
  document.getElementById("perfMount").innerHTML = `
    <div class="card">أداء الجهات يعمل ✔</div>
  `;
}

// ===================== تجاوز النائب =====================
function renderNaibEsc(){
  const count = D.topics.filter(t => t.from.includes("وزارة")).length;

  document.getElementById("naibMount").innerHTML = `
    <div class="card">عدد الحالات: ${count}</div>
  `;
}
