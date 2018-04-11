# Examen Modelos de Proceso

## Instrucciones del examen

El examen tedrá una duración de **1,5h màximo** en la cual el estudiante deberá responder correctamente cada una de las preguntas propuestas. Cada pregunta se debe responder en el hueco proporcionado. Ademas, para aquellas preguntas de tipo test o de selección, **unicamente habrá una respuesta válida**. 

En términos de evaluación, cada pregunta tiene especificada su valoración, por lo tanto una respuesta válida supondrá sumar la puntuación data. Por el contrario, una respuesta incorrecta o errónea, supondra no sumar la cantidad de puntos espeficada. **Se descontarán puntos de la pregunta por fallos ortográficos graves (0,25ptos por falta grave.)**

## Preguntas del Examen

**<u>Pregunta 1 [1pto]</u>**. **¿Cuales son las principales características de la metodología Agile?**

- Proyectos medio/bajos 
- Alta adaptacion a cambios 
- Involucración del cliene en todo el ciclo de desarrollo y despliegue.

**<u>Pregunta 2 [1pto]</u>. ¿Como se define un proyecto?¿Cuales son sus caracteristicas principales?**

Un proyecto es un esfuerzo temporal con el objetivo de crear un producto, un servicio o un resultado unico.

Sus caracteristicas principales son: 

- **Temporalidad**: Acotado en el tiempo, en recusrsos y sin repetición
- **Unicidad/Unico**: El resultado es unico (producto, servicio, mejoras, etc)

**<u>Pregunta 3 [1pto]</u>** . **¿Cual de las siguientes afirmaciones es cierta?**

- [ ] PMBook ofrece una serie de guidelines para la gestión de proyectos.
- [ ] Lean Software Development intenta de ajustar la producción incrementando los gastos y realzando los puntos ineficientes
- [ ] SCRUM es una metodología ágil de gestión que ayuda a decrementar el tiempo de desarollo a la vez que se adapta a los requerimientos del usuario.
- [ ] La primera y la segunda son ciertas.
- [x] La primera y la tercera son ciertas.



**<u>Pregunta 4 [1pto]</u>**. **Dada las siguientes caracteristicas del proyecto:** 

- **Tamaño**: Gran proyecto
- **Interacción del usuario**: Normal (en la media)
- **Previsión de cambios en los requerimientos**: Baja (sin muchos cambios)

**¿Que modelos de desarrollo de software usarías?**

Iterativo/Incremental.

**<u>Pregunta 5 [1pto]</u>**. **Teniendo en cuenta las sigientes caracteristicas de la empresa:** 

- **Autoridad del project Manager**: Baja
- **Gestión presupuestaria**: Manager Funcional
- **Rol del Project Manager**: Tiempo-parcial

**¿A que tipo de empresa estamos haciendo referencia?**

Weak Matrix o Matricial Debil.

**<u>Pregunta 6 [1pto]</u>**. **¿Cual de las siguientes afirmaciones <u>NO</u> es cierta?** 

- [ ] Pair Programming se centra en programar dos personas en el mismo PC, una haciendo de "Programador" y otra de "Observador".
- [ ] El concepto de test driven development hace referencia a la integración y despliegue del código manteniendo en todo momento una versión funcional.
- [ ] Peer Review se centra en revisar el código utilizando tests e integrando los test dentro de un proceso de integración contínua.
- [ ] La primera y la segunda son falsas
- [x] La segunda y la tercera son falsas
- [ ] La primera y la tercera son falsas

**<u>Pregunta 7 [1 pto]</u>.  ¿Que es el sprint Backlog?**

El sprint backlog es el conjunto de tareas planificadas, acotadas temporalmente y asignadas dentro de un sprint. Es decir, es el trabajo a realizar dentro de dicho sprint. 

**<u>Pregunta 8 [1 pto]</u>. Supongamos las siguientes user Stories en el product backlog con el respectivo feedback del cliente en cuanto a importancia de las tareas y nuestra estimación en horas y coste de cada una de ellas. ¿Cual sería el orden de las tareas dentro del product backlog?**

| User Story | Level  | Hours (H) | Value (k€) | Priority |
| :--------: | :----: | :-------: | :--------: | :------: |
|  Story A   |  HIGH  |    150    |     1      |    2     |
|  Story B   | MEDIUM |    200    |     10     |    3     |
|  Story C   |  HIGH  |    450    |     5      |    1     |
|  Story D   | MEDIUM |    500    |     4      |    4     |
|  Story E   |  LOW   |    100    |     50     |    5     |

 **<u>Pregunta 9 [1pto]</u>. Explica brevemente este esquema de trabajo en Django:**

![django](/Users/aitor/Downloads/Gitlab/ProcessModelTheory/examen-final/img/django.png)

(FireFox - Chrome - Opera) → [se conecta al servidor web → el server se Conecta a Django] ->urls.py Contiene las rutas que están disponibles en el proyecto. Estas urls apuntan a vistas en las que se define el comportamiento de la aplicación -> modelo (Cada clase de tu modelo representa a una tabla en tu base de datos y los atributos de tu clase son los campos que tiene tu tabla.). Cuando ese proceso termina crea la vista que renderiza a texto html, para luego ser interpretado por el Navegador.

**<u>Pregunta 10 [1pto]</u>. Comenta brevemente la función que tienen los siguientes ficheros en Django:**

- **manage.py [0,25 ptos]:** 

  Este archivo contiene una porción de código que permite interactuar con el proyecto de Django.

- **settings.py [0,25ptos]:**

  Este archivo contiene todas las configuraciones para el proyecto.

- **urls.py [0,25 ptos]**:

  Contiene las rutas URL que están disponibles en el proyecto.

- **models.py [0,25 ptos]:**

  Contiene los campos esenciales y comportamientos de la información almacenada. Cada clase del modelo representa una tabla de la base de datos y los atributos de la clase son los campos que tiene dicha tabla.