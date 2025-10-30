# 🌤 WeatherApp

Una aplicación web simple y moderna para consultar el clima de cualquier ciudad usando la API de OpenWeather.
Esta app está construida con HTML, CSS/SASS y JavaScript vanilla y cuenta con animaciones, iconos dinámicos y un diseño responsive.

## ⚡ Características principales

- 🔍 Buscar el clima por ciudad
- 🌎 Muestra información detallada:
  - Nombre de la ciudad y país
  - Coordenadas geográficas.
  - Temperatura actual, mínima y máxima.
  - Sensación térmica.
  - Viento: velocidad y ráfagas.
  - Presión y humedad.
  - Clima general con icono dinámico según las condiciones.
- ✨Animaciones suaves al mostrar la información.
- 📱Diseño Responsive.

## 💻Tecnologías

- HTML5
- CSS3/SASS
- JavaScript ES6+

## 🚀 Cómo usar

1. Clona este repositorio:

```bash
git clone https://github.com/javilopezleza/weatherAppJll
```

2. Instala dependencias si usas SASS o bien un preprocesador (opcional):

```bash
npm install -g sass
```

3. Compila SASS a CSS:

```bash
sass scss/style.scss css/style.css
```

4. Abre `index.html` en tu navegador.
   > ⚠️ Recuerda configurar tu API Key de OpenWeather en el Environments de Netlify.

---

## 📂 Estructura del proyecto
```text
├─ index.html
├─ css/
│   └─ style.css
├─ scss/
│   └─ style.scss
├─ js/
│   └─ apps.js
└─ api/
    └─ getWeather.js
```

## 📝 Autor

_Javier Lopez Lezama_
[Portfolio](https://jllportfolioapp.netlify.app/)
