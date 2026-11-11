# Global Trade Ecommerce - Angular OpenShift Deployment

Este repositorio contiene la aplicación de comercio electrónico desarrollada en Angular 18, optimizada y configurada con sus respectivos manifiestos de Red Hat OpenShift para el espacio de trabajo `samuel6501-dev`.

## Estructura del Proyecto
- `src/`: Contiene los componentes principales de Angular (`home`, `catalog`, `product-detail`, `cart`, `checkout`).
- `Dockerfile` y `nginx.conf`: Configuración del contenedor multi-etapa con Nginx escuchando en el puerto 8080.
- `openshift/`: Contiene los manifiestos YAML (`deployment.yaml`, `service.yaml`, `route.yaml`, `configmap.yaml`).

## Instrucciones de Despliegue en OpenShift

1. **Editar** `openshift/buildconfig.yaml` y poner la URL real de tu repositorio de GitHub (debe ser público o usar un secret de pull).

2. **Aplicar todos los manifiestos (ImageStream, BuildConfig, ConfigMap, Deployment, Service, Route):**
   ```bash
   oc apply -f openshift/ -n samuel6501-dev
   ```

3. **Lanzar y seguir la compilación:**
   ```bash
   oc start-build global-trade-app --follow -n samuel6501-dev
   ```
   Alternativa sin GitHub, subiendo el directorio local:
   ```bash
   oc start-build global-trade-app --from-dir=. --follow -n samuel6501-dev
   ```

4. **Ver la URL pública:**
   ```bash
   oc get route global-trade-route -n samuel6501-dev -o jsonpath='{.spec.host}'
   ```

## Notas
- La imagen usa `nginx-unprivileged` porque OpenShift ejecuta los contenedores con un UID aleatorio.
- El Deployment se actualiza solo cuando termina un build nuevo (trigger del ImageStream).
