# Comandos de Git

## 1. git init
Inicializa un nuevo repositorio Git.
git init

## 2. git config
Configura las opciones de Git a nivel de sistema, global o local.
git config --global user.name "Lilith"
git config --global user.email "lilith@ejemplo.com"

## 3. git clone
Clona un repositorio Git existente.
git clone https://github.com/usuario/taller-sistemas-operativos.git

## 4. git remote add
Añade una conexión de repositorio remoto.
git remote add origin https://github.com/usuario/mi-proyecto.git

## 5. git status
Comprueba el estado de los archivos del directorio de trabajo.
git status

## 6. git add
Añade archivos al área de preparación.
git add

## 7. git commit
Consigna los cambios por etapas en el repositorio local.
git commit -m 'Commit message'

## 8. git push
Empuja los cambios confirmados a un repositorio remoto.
git push origin main

## 9. git pull
Obtener y fusionar cambios de un repositorio remoto.
git pull origin main

## 10. git fetch
Obtener cambios de un repositorio remoto sin fusionar.
git fetch origin

## 11. git branch
Lista, crea o elimina ramas.
git branch ejemplo

## 12. git checkout
Cambiar entre ramas o restaurar archivos (método antiguo).
git checkout ejemplo

## 13. git merge
Fusiona los cambios de una rama en otra.
git merge ejemplo

## 14. git rebase
Vuelve a aplicar los commits de una rama a otra para tener un historial más limpio.
git rebase main

## 15. git log
Ver el historial de confirmaciones.
git log --oneline

## 16. git diff
Muestra las diferencias entre los distintos estados del depósito.
git diff main.c

## 17. git stash
Guarda temporalmente los cambios no comprometidos y restablece el directorio de trabajo.
git stash
git stash pop

## 18. git reset
Deshacer los cambios restableciendo HEAD a un estado anterior.
git reset --soft HEAD~1

## 19. git revert
En lugar de borrar la historia como reset, crea un nuevo commit que hace exactamente lo contrario de un commit anterior.
git revert <hash-del-commit-erroneo>

## 20. git cherry-pick
Te permite elegir un commit específico de cualquier otra rama y aplicarlo a tu rama actual.
git cherry-pick <hash-del-commit>
