# Base de datos girag (Prueba tecnica)
## Descripcion
Base de datos simple para mantener el inventario de un centro logistico

## Caracteristicas
- Syntaxis simple
- Esquema facilmente escalable
- Codigo modular
- Verificacion de imputs (En frontend y backend)
- Buscador de items
- Alertas por errores
- No es necesario recargar para que se muestren actualizaciones de la tabla de datos.

# Implementacion
## Requisitos
Un servidor (virtul o fisico), una sesion de Mysql, apache, Bootstrap 5 y jquery.
> Puedes usar cualquier otro pero para probar apache basta.

## Pasos a seguir
1. Descargar el .zip
2. Descomprimir el .zip
3. Buscar y ejecutar el archivo `./MySql/girag.sql`
4. Verificar que la base de datos `girag_logistica` existe
5. Levantar apache
6. Copiar y pegar `index.html`, `app.js` y la carpeta `Php` en el directorio raiz de apache
7. Entrar al index.html a traves de un buscador

## Atencion
Para efectos de esta prueba la base de datos no tiene contraseña ni usuario. En caso de tener una base de datos preexitente y esta ya posea un usuario y contraseña se debe de cambiar en el archivo `db.php`.
