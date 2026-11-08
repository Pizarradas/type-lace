# Ganzúa Lacre — página de descarga y proceso

Página de [Ganzúa Lacre](https://pizarradas.github.io/ganzua-lacre/) (nombre provisional): una tipografía de plumilla y cincel para una empresa de salas de escape, hecha de principio a fin con la skill abierta [syx--typography](https://github.com/Pizarradas/syx--typography). La página se puede descargar, probar y leer: cuenta cómo se hizo la fuente y cómo funciona la skill.

Construida sobre [SYX](https://github.com/pizarradas/syx) 5.1 (tema base `example-01`, modo claro) con una identidad propia, minimalista y blanca a la manera japonesa (papel, tinta sumi y el rojo de un sello) escrita como sobrescritura de tokens semánticos y piezas `lacre-*`, según `CONSUMING.md` de SYX. `npx syx-scan index.html css js --tema example-01` no da hallazgos.

## Estructura

| Ruta | Qué es |
|---|---|
| `index.html` | La página, estática, sin compilación |
| `css/lacre.css` | Fuente, identidad (tokens de SYX sobrescritos) y piezas `lacre-*` en `@layer syx.app` |
| `js/lacre.js` | Probador (tamaño y frases) y comparación A/B de la retícula |
| `fonts/` | Lacre v0.5.2 en WOFF2 (la de la página) y la v0.4 para la comparación |
| `descargas/` | ZIP, TTF y OTF |
| `OFL.txt` | Licencia de la fuente |
| `img/direcciones.webp` | Hoja de bocetos de la fase 0 |
| `vendor/syx/` | CSS y JS de SYX copiados de `node_modules` (licencia MIT, incluida) |

## Publicar en GitHub Pages

1. Crea el repositorio `ganzua-lacre` en GitHub y sube esta carpeta a `main`.
2. *Settings → Pages → Build and deployment*: «Deploy from a branch», rama `main`, carpeta `/ (root)`.
3. La página queda en `https://pizarradas.github.io/ganzua-lacre/`.

## Actualizar SYX

```bash
npm install
npx syx-init --update
cp node_modules/syx-design-system/dist/example-01.full.min.css vendor/syx/
cp node_modules/syx-design-system/js/syx-site-nav.js vendor/syx/js/
npx syx-scan index.html css js --tema example-01
```

## Licencia

- **La fuente** (`fonts/`, `descargas/`): SIL Open Font License 1.1, en `OFL.txt`. Sin nombre reservado.
- **SYX** (`vendor/syx/`): MIT, en `vendor/syx/LICENSE`.

## Estado

Versión de trabajo 0.5.2: el nombre es provisional y faltan el kerning, la arroba, el et y otros signos de uso menos frecuente.

Procedencia: las formas las decidió y dibujó un agente de IA (Claude) por código con la skill, siguiendo el brief; dirección, elecciones y aprobaciones de José Luis Pizarro.
