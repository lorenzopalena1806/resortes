# Resortes Industriales – Sitio web

Sitio estático en español (HTML + CSS + JS, sin build) para un fabricante de resortes de metal.

## Ver el sitio localmente

Abrir `index.html` en el navegador, o levantar un servidor local:

```bash
npx serve .
```

## Editar el contenido

Los datos del negocio y el catálogo están en [`js/config.js`](js/config.js):

- `brand`, `tagline`: nombre y eslogan.
- `whatsapp`: número internacional solo con dígitos (ej. `5491112345678`).
- `email`, `phone`, `address`, `hours`: datos de contacto.
- `products`: lista de productos (`name`, `description`, `icon`).
  Íconos disponibles: `compression`, `extension`, `torsion`, `custom`, `wireform`, `stainless`.

El título de la página y el texto del `<title>` en `index.html` se actualizan por JS desde `brand`.

## Imágenes

Reemplazar `img/logo.png` por el logo real del cliente (mantener el nombre o actualizar las referencias en `index.html`). El header es oscuro: el CSS (`.logo__img`) invierte el logo a blanco, así que funciona con logos negros sobre fondo blanco. Si el nuevo logo ya es claro o tiene colores, quitar `filter` y `mix-blend-mode` de esa regla.

## Formulario

No usa backend. El botón de WhatsApp abre el chat con el mensaje prellenado; el de email abre el cliente de correo (`mailto:`). Para recibir envíos automáticos se puede integrar un servicio como Formspree.

## Publicación (opcional)

Al ser un sitio estático, puede publicarse con GitHub Pages: *Settings → Pages → Deploy from branch → `main` / root*.
