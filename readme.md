Esta aplicacion corresponde al tercer Desafio del modulo Backend con Node y Express de la carrera Full Stack Developer en Javascript de Desafio Latam, en particular a la unidad de Acceso a Base de Datos con Node (Parte I).

Este desafio consiste en una pagina web que despliega a traves de cards imagenes y fotografias, las cuales son ingresadas como input en un formulario con un titulo, el url de la imagen y una descripcion de la misma,la parte principal del desafio consiste en la conexion entre un frontend y el backend, y como este ultimo guarda la informacion en una base de datos a traves del paquete "pg".
El envio de la informacion desde el frontend se realiza a traves del metodo POST de una API REST, y por otra parte el despliegue de las fotografias en el front se realizara a traves de un metodo GET de la misma API, ambos metodos utilizan consultas SQL para obtener o agregar registros a la base de datos.

Para poder ver las imagenes desplegadas es necesario que se ingrese a la siguiente url:
http://localhost:3001/posts
