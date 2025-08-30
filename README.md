Esto es un proyecto de [**React Native**](https://reactnative.dev) , usando [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Configuracion inicial

> **Note**: Seguir los pasos de la guia [ Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) antes de proceder.

## Step 1: Instalar las dependencias

Primero, necesitamos instalar las dependencias.

Para instalar usaremos el siguiente comando:

```sh
# npm
npm install

# Yarn
yarn install
```

## Step 2: Ejecutar la version debug de desarrollo

Con el ambiente configurado y con las dependencias instaladas ejecutaremos el siguiente comando para ejecutarlo en android

### Android

```sh
# npm
npm run android:dev

# Yarn
yarn android:dev
```
> **Note**: La aplicacion no esta pensada en ejecutarse de momento en IOS.

## Step 2: Generar Build de produccion

Para generar el AAB necesitamos ejecutar el siguiente comando
```sh
keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```
Nos pedira una contraseña la cual nosotros la crearemos
### Configurando las variables de Gradle
 1.  Colocar el archivo  my-upload-key.keystore en android/app de los archivos del proyecto.
 
 1. Editar el archivo  android/gradle.properties, y añadir las siguientes variables al final del archivo (Reemplazando ***** con el correcto keysPassword y alias )
 ```
MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
MYAPP_UPLOAD_STORE_PASSWORD=*****
MYAPP_UPLOAD_KEY_PASSWORD=*****
```
 1. Editar el archivo android/build.gradle, y añadir la siguiente configuracion sobre la linea 95
 ```
release {
             if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
                 storeFile file(MYAPP_UPLOAD_STORE_FILE)
                 storePassword MYAPP_UPLOAD_STORE_PASSWORD
                 keyAlias MYAPP_UPLOAD_KEY_ALIAS
                 keyPassword MYAPP_UPLOAD_KEY_PASSWORD
             }
         }
```
 1. Agregar en el mismo archivo sobre la linea 111 la configuracion:
 ```
 signingConfig signingConfigs.release
```
Una vez heecho esto ahora si podremos generar el AAB.
```shell
npm run android:build
```
