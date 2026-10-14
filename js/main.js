(function () {
  "use strict";

  var cfg = SITE_CONFIG;

  // Íconos SVG por tipo de resorte (trazos simples, heredan el color actual)
  var ICONS = {
    compression: '<path d="M10 6h28M10 42h28M14 6l20 6-20 6 20 6-20 6 20 6-20 6" />',
    extension: '<path d="M24 4v6M24 38v6M24 10c-8 0-8 4-0 4h0c8 0 8 4 0 4s-8 4 0 4 8 4 0 4-8 4 0 4" />',
    torsion: '<path d="M8 40h14M40 8v14M22 40c-10 0-14-6-14-14S14 8 26 8c8 0 12 5 12 10s-4 8-8 8-6-3-6-6" />',
    custom: '<path d="M8 40l10-10M30 18l10-10M14 34l20-20M10 24a14 14 0 0 1 14-14M38 24a14 14 0 0 1-14 14" />',
    wireform: '<path d="M6 36c6-18 12 6 18-12s12 6 18-12" />',
    stainless: '<path d="M24 4l16 6v12c0 10-7 18-16 22C15 40 8 32 8 22V10zM17 24l5 5 9-10" />'
  };

  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $all(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

  // --- Datos de marca y contacto ---
  document.title = cfg.brand + " | " + cfg.tagline;
  $all("[data-brand]").forEach(function (el) { el.textContent = cfg.brand; });
  $all("[data-phone]").forEach(function (el) {
    el.textContent = cfg.phone;
    el.href = "tel:" + cfg.phone.replace(/[^\d+]/g, "");
  });
  $all("[data-email]").forEach(function (el) {
    el.textContent = cfg.email;
    el.href = "mailto:" + cfg.email;
  });
  $all("[data-address]").forEach(function (el) { el.textContent = cfg.address; });
  $all("[data-hours]").forEach(function (el) { el.textContent = cfg.hours; });
  $all("[data-wa-float]").forEach(function (el) {
    el.href = "https://wa.me/" + cfg.whatsapp + "?text=" + encodeURIComponent("Hola, quisiera consultar por resortes.");
  });
  $("#year").textContent = new Date().getFullYear();

  // --- Catálogo ---
  var grid = $("#product-grid");
  var select = $("#type");
  cfg.products.forEach(function (p) {
    var card = document.createElement("article");
    card.className = "card";

    var svgNS = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("viewBox", "0 0 48 48");
    svg.setAttribute("class", "card__icon");
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-width", "2.5");
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-linejoin", "round");
    svg.setAttribute("aria-hidden", "true");
    svg.innerHTML = ICONS[p.icon] || ICONS.custom;

    var h3 = document.createElement("h3");
    h3.textContent = p.name;
    var desc = document.createElement("p");
    desc.textContent = p.description;

    card.appendChild(svg);
    card.appendChild(h3);
    card.appendChild(desc);
    grid.appendChild(card);

    var opt = document.createElement("option");
    opt.value = p.name;
    opt.textContent = p.name;
    select.appendChild(opt);
  });
  var other = document.createElement("option");
  other.value = "Otro / no estoy seguro";
  other.textContent = "Otro / no estoy seguro";
  select.appendChild(other);

  // --- Menú móvil ---
  var toggle = $(".nav-toggle");
  var menu = $("#menu");
  function setMenu(open) {
    menu.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  }
  toggle.addEventListener("click", function () { setMenu(!menu.classList.contains("open")); });
  $all("a", menu).forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });

  // --- Formulario ---
  var form = $("#contact-form");
  var channel = "whatsapp";
  $all("button[type=submit]", form).forEach(function (b) {
    b.addEventListener("click", function () { channel = b.getAttribute("data-channel"); });
  });

  function setError(name, msg) {
    var field = $("#" + name).closest(".field");
    $('[data-error-for="' + name + '"]').textContent = msg;
    field.classList.toggle("invalid", !!msg);
  }

  function validate(data) {
    var ok = true;
    setError("name", "");
    setError("email", "");
    setError("message", "");
    if (!data.name.trim()) { setError("name", "Ingresá tu nombre."); ok = false; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) { setError("email", "Ingresá un email válido."); ok = false; }
    if (!data.message.trim()) { setError("message", "Escribí tu consulta."); ok = false; }
    return ok;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var data = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      type: form.type.value,
      message: form.message.value
    };
    if (!validate(data)) return;

    var lines = [
      "Hola, quisiera una cotización.",
      "Nombre: " + data.name.trim(),
      "Email: " + data.email.trim()
    ];
    if (data.phone.trim()) lines.push("Teléfono: " + data.phone.trim());
    lines.push("Tipo de resorte: " + data.type);
    lines.push("Consulta: " + data.message.trim());
    var text = lines.join("\n");

    if (channel === "email") {
      window.location.href = "mailto:" + cfg.email +
        "?subject=" + encodeURIComponent("Consulta de cotización - " + data.type) +
        "&body=" + encodeURIComponent(text);
    } else {
      window.open("https://wa.me/" + cfg.whatsapp + "?text=" + encodeURIComponent(text), "_blank", "noopener");
    }
  });
})();
