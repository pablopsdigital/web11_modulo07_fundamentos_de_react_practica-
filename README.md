# Entrega de la práctica del módulo 07 Fundamento de React

Práctica orientada a la creación de un frontend completo con React, sin la utilización de ninguna librería o framework adicional.

# Vídeo funcionamiento

  <a href="https://www.loom.com/share/bffb4799b49b44e98c807c7692ba701c">
    <img style="max-width:100%;" src="https://cdn.loom.com/sessions/thumbnails/bffb4799b49b44e98c807c7692ba701c-with-play.gif">
    <p>React Introducción - Ver Video</p>
  </a>

# Instalación servidor de pruebas

La tarea está basada en el uso del servidor **nodepop-api**. Se pueden seguir las instrucciones de instalación desde el siguiente link: https://github.com/davidjj76/nodepop-api

    git clone https://github.com/davidjj76/nodepop-api.git

Con el servidor instalado, es necesario realizar el mismo proceso con el proyecto front-end, para ello se debe clonar el proyecto desde esta dirección: https://gitkc.cloud/pablopsdigital/web11_modulo07_fundamentos_de_react_practica

    git clone https://gitkc.cloud/pablopsdigital/web11_modulo07_fundamentos_de_react_practica.git

Finalmente se instalan las dependencias de ambos proyectos ejecutando

    npm init

y por último se levantaran cada uno de los proyectos ejecutando

    npm start

Se puede comprobar si el servidor se encuentra funcionando añadiendo la siguiente url en el navegador de forma que se obtendrá una lista de anuncio en formato json.
http://localhost:3001/api/v1/adverts

Se puede acceder a la documentación del api en la ruta:
http://localhost:3001/swagger/#/

# Notas

El slider implementado (rc-slider) de los filtros, lanza un warning al comenzar a modificar el rango de precios (`findDOMNode is deprecated in StrictMode`) este es un error definido a nivel interno del componente.

Algunos enlaces al problema: https://github.com/react-component/slider/issues/750

![enter image description here](documentation/images/warning.png)

# Capturas

![enter image description here](documentation/screencaptures/captura_00.png)

![enter image description here](documentation/screencaptures/captura_01.png)

![enter image description here](documentation/screencaptures/captura_02.png)

![enter image description here](documentation/screencaptures/captura_03.png)
