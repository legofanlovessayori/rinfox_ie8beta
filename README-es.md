# ¿Qué es RinFox?
![](banner.png)

Rinfox es un tema para Mozilla Firefox 115ESR que copia la apariencia de Internet Explorer 7 (and 8). El nombre Rinfox es por "Rincon" (Nombre en clave de IE7) y fupe creado por [travis](https://github.com/travy-patty) quien también creó [Windows eXPerience](https://experience.noncities.com/). Esto es solo un simple repositiorio de GitHub de su versión 0.4.1 para un facil y simple alcance, y si alguna persona piensa arreglarlo (ya que algunas cosas están semi rotas).

## Características

* Barra de herramientas personalizadas con iconos e interfaz idénticas
* Barra de búsqueda y menú con la misma apariencia.
* Soporte completo para Aero y temas con soporte a Aero (en msstyles).
* Logo InPrivate en el modo de navegación privada.
* Páginas personalizadas para la nueva pestaña, página de inicio y navegación InPrivate.
* Extensión TipTab para asemejarse al menú Pestañas Rápidas.
* Menú `Acerca de...` personalizado para verse idéntico al de IE7/8.
* Iconos de Internet Explorer 7.
* Switch activable para alternar entre la interfaz de IE7 e IE8.
* Compatible con Firefox 115ESR.
* *Opcionalmente, se puede modificar para que funcione en Waterfox.*

![](screen_2.png)

## Instalación

###### Este tema es compatible con 115ESR y se aconseja usarlo. ESR recibe actualizaciones de seguridad por mas tiempo comparado con las versiones normales de Firefox y las actualizaciones pueden no romper los temas. A partir de Firefox 117, Mozilla dejó de soportar Windows 7 y por ende eliminando la capacidad de usar temas de Aero con este.

1. Descarga e instala Firefox 115ESR:
   * https://ftp.mozilla.org/pub/firefox/releases/115.3.1esr/win64/es-ES/
2. Una vez instalado, ve a Acerca de Firefox y deja que se actualice al último parche de seguridad.
3. Ahora que Firefox está actualizado, podemos empezar a aplicar el tema. En Firefox, escribe about:config en la barra de direcciones y busca y edita los siguientes valores:

* `toolkit.legacyUserProfileCustomizations.stylesheets` == Booleano == true
* `browser.theme.dark-private-windows` == Booleano == false
* `browser.display.windows.non_native_menus` == Número == 0
* `ui.prefersReducedMotion` == Crear como **Número** == 1
* `browser.privateWindowSeparation.enabled` == Booleano == false
* `browser.tabs.secondaryTextUnsupportedLocales` == Cadena == Agrega tu idioma junto a los demás (ej. `en, es`)
* `xpinstall.signatures.required` == Booleano == fakse
> ¡ADVERTENCIA! **Esto evita que Firefox verifique las firmas de extensiones, lo cual puede ser un riesgo de seguridad**. Puedes omitir esto si no quieres instalar el tema para la extensión TipTab para verse como Pestañas Rápidas al ser pulsado (El icono de la extensión sera cambiado de todos modos).

4. Ve al directorio donde instalaste Firefox (normalmente en C:\Program Files\Mozilla Firefox) y copia los **contenidos** de la carpeta `ffroot` dentro de la carpeta `rinfox-0.4.1\Spanish` folder dentro de éste, y reemplazar archivos si se le pregunta.
5. Abre Firefox, escribe `about:support` en la barra de direcciones. Busca hasta que encuentres una pestaña que diga `Carpeta del perfil` y haz clic en `Abrir carpeta`. Copia la carpeta "chrome" dentro de la carpeta `rinfox-0.4.1\Spanish` dentro de ésta. Ademas dentro de `about:support` sube y haz clic en `Limpiar caché de inicio...`.
6. Deja que Firefox se reinicie.
7. El tema esta aplicado, pero el orden de los elementos no se ve bien. Para arreglar esto haz clic derecho en la barra de pestañas y luego en "Personalizar barra de herramientas".
  * Si tienes el tema oscuro de Windows, el tema no se verá bien, así que desactivalo yendo a `about:addons` > Temas > y activa el tema claro
9. En la pestaña que se abre, marca la casilla `Barra de titulo` abajo del todo, y quita todo lo que se pueda quitar de la barra de herramientas haciendo clic derecho en el elemento y luego en "Quitar de la barra de herramientas". Ahora agrega poco a poco los elementos copiando el diseño que se muestra en la imagen:
![](ie7%20layout.png)
   * Recordar que la barra de menú está oculta, y queza debas desmarcar la opción de "Ocultar descargas".
10. Para tener Pestañas Rápidas, si omitiste el desactivar `xpinstall.signatures.required` [puedes simplemente instalarlo de la tienda de add-ons de Firefox](https://addons.mozilla.org/es-ES/firefox/addon/tip-tab/). Al instalarlo así su apariencia no sera modificada cuando se active pero aun asi tendrá su icono modificado en la barra de herramientas. Simplemente instálalo, anclalo a la barra, vuelve a "Personalizar barra de herramientas" y mueve la extensión al lado del ícono de la estrella con un más (Biblioteca). Su ícono deberia cambiar automaticamente.
   * Para ir mas allá y tener una mejor apariencia entonces tentras que tener `xpinstall.signatures.required` desactivados, ve a `about:addons` haz clic en la pequeña rueda y luego en "Instalar Add-on desde archivo" y elige el archivo xpi dentro de la carpeta "Quick Tabs Extension". Simplemente instálalo, anclalo a la barra, vuelve a "Personalizar barra de herramientas" y mueve la extensión al lado del ícono de la estrella con un más (Biblioteca). Su ícono deberia cambiar automaticamente.
11. Ahora sería una buena idea desactivar las actualizaciones de Firefox. Aunque actualizar Firefox ESR **no debería** romper cosas, siempre va a romper cambios a omni.ja (página de inicio, página de inprivate y nueva pestaña) junto que los iconos (iconos de Firefox) serán revertidos, si esto no te importa mucho puedes simplemente omitir este paso. Y si quieres desactivarlo, puedes hacerlo [siguiendo la siguiente guía](https://www.askvg.com/tip-disable-automatic-updates-in-mozilla-firefox/#how_to_disable_automatic_updates_in_mozilla_firefox) (en inglés):

## Extras

* The extras part is optional, however it does make it more convincing overall. Extras contain replacing HomePage, New Tab page and inPrivate page (omni.ja tweaks), and lets you replace the Firefox icon system-wide as well as enabling Aero for themes that support it.
* **This part is recommended to be used with disabled updates, as they WILL get overwritten when a new ESR update is installed.**

### Replacing Firefox icons and enabling Aero

1. Download and install Resource Hacker:
  * http://www.angusj.com/resourcehacker/
2. Open Resource Hacker and load firefox.exe from Firefox installation folder (usually inside C:\Program Files\Mozilla Firefox).
3. Edit the following values accordingly:

> Inside String Table tab
>> Simply change "Firefox" to "Internet Explorer" then hit compile (green play button).

> Inside Icon Group tab
>> Go to IconGroup 1, 2, 5, 6 & 32512, do right click and hit Change Resource and replace each to the .icos inside "icon and aero" folder accordingly

> Inside Manifest tab
>> Simply remove all but last supportedID (should only be supportedOS Id="{35138b9a-5d96-4fbd-8e2d-a2440225f93a}"/>), then hit compile (green play button).

4. Do File > Save and save it as firefox.exe on Desktop. Do Ctrl+C and Ctrl+V and replace firefox.exe from the installation folder.

### Omni.ja tweaks

1. Go to Firefox installation folder (usually inside C:\Program Files\Mozilla Firefox) > browser folder. There you should find a file called omni.ja. Simply open it with WinRar or 7Zip and extract it somewhere on your Desktop.
2. Copy and replace "chrome" folder inside the extracted files.
3. Take all folders and zip it back(do not create have extra folders). Change extension from .zip to .ja.
4. Copy and replace omni.ja.
5. Open Firefox, navigate to Settings > Home and change inside New Windows and Tabs:
  * Homepage and new windows > Firefox Home (Default)
  * New tabs > Blank Page
6. Back to Settings > Privacy & Security > Clear Data. Check only Cookies and Site Data then hit Clear.
7. Back to Settings > Privacy & Security > History (scroll down). In the drop-down menu next to Firefox will, choose Use custom settings for history. Turn on Clear history when Firefox closes and hit Settings button. Inside settings dialog, uncheck everything besides Cache (only Cache should be checked). Hit OK.
8. Finally, go to Firefox installation folder, and right click firefox.exe > Send to > Desktop (create shortcut).
9. Go to the shortcut, right-click to it > Properties > Shorcut, and in Target, change it to:
  * "C:\Program Files\Mozilla Firefox\firefox.exe" --purgecaches --purgecache
10. Hit Apply, OK. You should open Firefox from this shorcut, so pin it to taskbar or send it to Start Menu.

## Credits

* Rinfox is made by [travis](https://github.com/travy-patty) which also made [Windows eXPerience](https://experience.noncities.com/).
