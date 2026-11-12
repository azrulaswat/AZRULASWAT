// =====================================================
//  EDIT BAGIAN INI SAJA
// =====================================================
const profile = {
  name: "Azrul Aswat",
  username: "@azrulaswat",
  roles: ["Instrumentation", "Electrical", "Automation"],
  bio: "Lulusan D3 Teknik Instrumentasi Politeknik Negeri Batam. Maintenance Technician di Schneider Electric. Terbuka untuk peran Electrical, Instrumentation & PLC/Automation.",
  openToWork: true,   // false = sembunyikan badge "Open to Work"
  photo: "assets/foto.jpg"   // kosong "" = pakai inisial
};

// Tiga pilar keahlian (ubah teks kecilnya sesuai yang kamu kuasai)
const pillars = [
  { icon: "gauge", title: "Instrumentasi", sub: "Sensor · Kontrol" },
  { icon: "bolt",  title: "Elektrikal",    sub: "Panel · Uji MV" },
  { icon: "chip",  title: "Otomasi",       sub: "PLC · Kontrol" }
];

// Tombol dengan url "" otomatis tampil sebagai "Segera".
// Isi URL kalau sudah siap, tombol langsung aktif.
// type: "primary" (biru terang) atau "secondary" (kaca gelap)
const links = [
  { label: "LinkedIn",             desc: "Terhubung secara profesional", url: "https://www.linkedin.com/in/azrul-aswat", icon: "linkedin",  type: "primary" },   // "https://www.linkedin.com/in/usernamekamu"
  { label: "Download CV",          desc: "CV Azrul Aswat (PDF)",         url: "assets/CV_Azrul_Aswat.pdf", icon: "file",      type: "primary" },   // link Google Drive
  { label: "Portofolio Proyek",    desc: "Karya & proyek E&I",           url: "", icon: "briefcase", type: "primary" },   // link Notion / Canva / Drive
  { label: "Hubungi via WhatsApp", desc: "Peluang kerja & kolaborasi",   url: "https://wa.me/628136788350", icon: "whatsapp",  type: "primary" },   // "https://wa.me/628123456789"
  { label: "Instagram",            desc: "Aktivitas & konten",           url: "", icon: "instagram", type: "secondary" }, // "https://instagram.com/usernamekamu"
  { label: "GitHub",               desc: "Proyek & kode",                url: "", icon: "github",    type: "secondary" },
  { label: "Jasa / Usaha Saya",    desc: "Nama usaha menyusul",          url: "", icon: "tool",      type: "secondary" }
];

// true = tombol tanpa URL tampil "Segera" | false = disembunyikan
const showComingSoon = true;

// =====================================================
//  KODE (tidak perlu diubah)
// =====================================================
const icons = {
  gauge: '<path d="M4 16a8 8 0 1 1 16 0"/><path d="M12 16l4-5"/><circle cx="12" cy="16" r="1.3"/>',
  bolt: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
  chip: '<rect x="6" y="6" width="12" height="12" rx="2"/><rect x="10" y="10" width="4" height="4"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>',
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="16" y2="17"/>',
  briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>',
  whatsapp: '<path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z"/>',
  instagram: '<rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.4A4 4 0 1 1 12.6 8 4 4 0 0 1 16 11.4z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>',
  github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3.1-.4 6.4-1.5 6.4-7A5.4 5.4 0 0 0 20 4.8 5.1 5.1 0 0 0 19.900 1S18.700.7 16 2.500a13.400 13.400 0 0 0-7 0C6.300.7 5.100 1 5.100 1A5.100 5.100 0 0 0 5 4.800a5.400 5.400 0 0 0-1.500 3.800c0 5.400 3.300 6.600 6.400 7A3.400 3.400 0 0 0 9 18.100V22"/>',
  tool: '<path d="M14.700 6.300a1 1 0 0 0 0 1.400l1.600 1.600a1 1 0 0 0 1.400 0l3.800-3.800a6 6 0 0 1-7.900 7.900l-6.900 6.900a2.100 2.100 0 0 1-3-3l6.900-6.900a6 6 0 0 1 7.900-7.900l-3.800 3.800z"/>',
  arrow: '<path d="M7 17L17 7M8 7h9v9"/>'
};

const svg = (name, cls = "") =>
  `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.briefcase}</svg>`;

const $ = (id) => document.getElementById(id);

function toast(msg) {
  const t = $("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => t.classList.remove("show"), 2000);
}

function renderProfile() {
  $("name").textContent = profile.name;
  $("username").textContent = profile.username;
  $("bio").textContent = profile.bio;
  $("role").innerHTML = profile.roles.join(" <b>·</b> ").toUpperCase();
  $("year").textContent = new Date().getFullYear();
  $("status").classList.toggle("hidden", !profile.openToWork);

  const avatar = $("avatar");
  if (profile.photo) {
    avatar.textContent = "";
    avatar.style.backgroundImage = `url("${profile.photo}")`;
  } else {
    avatar.textContent = profile.name.split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase();
  }
}

function renderPillars() {
  const wrap = $("pillars");
  pillars.forEach((p, i) => {
    const el = document.createElement("div");
    el.className = "pillar";
    el.style.animationDelay = (420 + i * 90) + "ms";
    el.innerHTML = `${svg(p.icon)}<b>${p.title}</b><small>${p.sub}</small>`;
    wrap.appendChild(el);
  });
}

function renderLinks() {
  const wrap = $("links");
  links.filter(l => showComingSoon || (l.url && l.url.trim() !== "")).forEach((l, i) => {
    const ready = !!(l.url && l.url.trim() !== "");
    const el = document.createElement(ready ? "a" : "div");
    el.className = `link ${l.type === "secondary" ? "secondary" : "primary"}${ready ? "" : " disabled"}`;
    el.style.animationDelay = (700 + i * 80) + "ms";

    if (ready) {
      el.href = l.url;
      el.target = "_blank";
      el.rel = "noopener noreferrer";
    } else {
      el.setAttribute("aria-disabled", "true");
      el.addEventListener("click", () => toast("Segera hadir"));
    }

    el.innerHTML = `
      <span class="ico">${svg(l.icon)}</span>
      <span class="txt">
        <span class="label">${l.label}</span>
        ${l.desc ? `<span class="desc">${l.desc}</span>` : ""}
      </span>
      ${ready ? svg("arrow", "go") : '<span class="soon">Segera</span>'}`;
    wrap.appendChild(el);
  });
}

// Gelombang sinyal di bagian atas halaman
function initWave() {
  const c = $("wave");
  if (!c || !c.getContext) return;
  const ctx = c.getContext("2d");
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let w = 0, h = 0;

  const layers = [
    { amp: 26, freq: .011, speed: .8,  color: "rgba(47,109,246,.65)",  y: .50, lw: 2 },
    { amp: 16, freq: .019, speed: -1.2, color: "rgba(34,211,238,.5)",  y: .54, lw: 1.5 },
    { amp: 34, freq: .006, speed: .45, color: "rgba(79,140,255,.28)",  y: .46, lw: 1.5 }
  ];

  function size() {
    const d = Math.min(window.devicePixelRatio || 1, 2);
    w = c.clientWidth; h = c.clientHeight;
    c.width = w * d; c.height = h * d;
    ctx.setTransform(d, 0, 0, d, 0, 0);
  }
  const yAt = (l, x, t) =>
    h * l.y + Math.sin(x * l.freq + t * l.speed) * l.amp * (0.6 + 0.4 * Math.sin(x * .004 + t * .3));

  function frame(ms) {
    const t = ms / 1000;
    ctx.clearRect(0, 0, w, h);
    layers.forEach(l => {
      ctx.beginPath();
      for (let x = 0; x <= w; x += 4) {
        const y = yAt(l, x, t);
        x ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
      }
      ctx.strokeStyle = l.color;
      ctx.lineWidth = l.lw;
      ctx.stroke();
    });
    // titik sinyal yang berjalan di sepanjang gelombang
    const px = ((t * 90) % (w + 80)) - 40;
    const py = yAt(layers[0], px, t);
    const g = ctx.createRadialGradient(px, py, 0, px, py, 14);
    g.addColorStop(0, "rgba(34,211,238,.95)");
    g.addColorStop(1, "rgba(34,211,238,0)");
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.arc(px, py, 14, 0, Math.PI * 2); ctx.fill();

    if (!reduce) requestAnimationFrame(frame);
  }

  size();
  window.addEventListener("resize", () => { size(); if (reduce) frame(0); });
  requestAnimationFrame(frame);
}

$("shareBtn").addEventListener("click", async () => {
  const data = { title: profile.name, text: profile.bio, url: location.href };
  try {
    if (navigator.share) {
      await navigator.share(data);
    } else {
      await navigator.clipboard.writeText(location.href);
      toast("Link disalin!");
    }
  } catch (e) { /* dibatalkan pengguna */ }
});

renderProfile();
renderPillars();
renderLinks();
initWave();
