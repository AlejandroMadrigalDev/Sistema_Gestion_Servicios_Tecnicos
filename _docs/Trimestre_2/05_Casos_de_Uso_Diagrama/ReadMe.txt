Diagramas a Desarrollar:

Modulos por funcionalidad:
	1. Usuarios
		1. Inicial
		2. Extendido
	2. Servicios
		1. Inicial
		2. Extendido
	3. Solicitudes
		1. Inicial
		2. Extendido
	4. Ordenes de trabajo
		1. Inicial
		2. Extendido
	5. Pagos
		1. Inicial
		2. Extendido
	6. Atención al cliente
		1. Inicial
		2. Extendido

Modulos por usuarios:
	1. Admin
		1. Inicial
		2. Extendido
	2. Tecnico
		1. Inicial
		2. Extendido
	3. Cliente
		1. Inicial
		2. Extendido

Modulos Generales:
	1. Vista completa General en cascada.
		1. Inicial
		2. Extendido
	2. Vista completa general en secuencia circular.
		1. Inicial
		2. Extendido
	3. Individuales por Caso de uso.
__________________________________________________________________________________
_______________________________________________________________________________
CONSTRUCCION DE MODULOS:
Create. Registrar.
Read.   Consultar.
Update. Actualizar.
Delete. Eliminar.
GetID.  ObtenerID.

	(CREATE) -------------------------------ADMIN
	(READ)   -------------------------------ADMIN
	(UPDATE) -------------------------------ADMIN
	(DELETE) -------------------------------ADMIN
	(ID)     -------------------------------ADMIN

_______________________________________________________________________________
_______________________________________________________________________________
MODULO USUARIOS:

GESTION ROLES
	(CREATE) REGISTRAR ROLES:               ADMIN
	(READ)   CONSULTAR ROLES:               ADMIN
	(UPDATE) ACTUALIZAR ROLES:              ADMIN
	(DELETE) ELIMINAR ROLES:                ADMIN
	(ID)     OBTENER ROL POR ID:            INCLUDE

AUTOGESTION USUARIOS
	(CREATE) AUTO REGISTRO:                 ADMIN - TECNICO - CLIENTE
	(READ)   AUTO CONSULTAR:                ADMIN - TECNICO - CLIENTE
	(UPDATE) AUTO ACTUALIZAR:               ADMIN - TECNICO - CLIENTE
	(DELETE) AUTO ELIMINAR:                 ADMIN - TECNICO - CLIENTE
	(ID)     OBTENER ROL POR ID:            INCLUDE

GESTION USUARIOS
	(CREATE) CREAR PERFIL (CUALQUIER):      ADMIN
	(READ)   CONSULTAR PERFIL TECNICO:      ADMIN - CLIENTE
		 (ADMIN VISTA COMPLETA - CLIENTE VISTA LIMITADA)
		 CONSULTAR PERFIL CLIENTE:       ADMIN - TECNICO
		 (ADMIN VISTA COMPLETA - TECNICO VISTA LIMITADA)
	(UPDATE) ACTUALIZAR USUARIOS:           ADMIN
	(DELETE) ELIMINAR USUARIOS:             ADMIN
	(ID)     OBTENER USUARIO POR ID:        INCLUDE

INGRESO
	(READ)   INICIO DE SESION:              ADMIN - TECNICO - CLIENTE
		(VISTAS DIFERENTES DEPENDIENDO DEL ROL)
	(UPDATE) CERRAR SESION:                 ADMIN - TECNICO - CLIENTE
__________________________________________________________________________________
CU------2. CREACION DE PERFILES PARA LOS TECNICOS (Admin)                                ---AD - TC
CUAD----	CU: Creacion de usuarios admin                                           ---AD
EXTENDAD	EX: Codigo de seguridad para crear perfiles de Admin y Tecnico           ---AD
	También podemos generar un auto registro como cliente y que tenga la 
		opción de actualizarse?
CU------30. REGISTRO (Cliente)                                                           ---AD - TC - CL
EXTEND		31. VERIFICACION Y ACEPTACION DE TERMINOS Y CONDICIONES (Cliente)        ---AD - TC - CL
EXTENDAD	EX: CRUD TERMINOS Y CONDICIONES                                          ---AD
CU------1. INGRESO Y VERIFICACION DE ROL (Admin)                                         ---AD - TC - CL
CUAD----	Espec: Creacion de rol.                                                  ---AD
CU------19. INGRESO Y AUTENTICACION (Tecnico)                                            ---AD - TC - CL
CU------32. INGRESO Y AUTENTICACION (Cliente)                                            ---AD - TC - CL
CU------3. GESTION DE TECNICOS (Admin)                                                   ---AD - TC
CU------	4. ADMINISTRACION DE INFORMACION DE LOS TECNICOS (Admin)                 ---AD - TC
CU------5. GESTION DE CLIENTES (Admin)                                                   ---AD - TC - CL
CU------	6. ADMINISTRACION DE LA INFORMACION DE LOS CLIENTES (Admin)              ---AD - CL
__________________________________________________________________________________
__________________________________________________________________________________
GESTION DE SERVICIOS: 
	7. CREACION DE LOS TIPOS DE SERVICIOS DISPONIBLES (Admin)
	8. PUBLICACION DE SERVICIOS DISPONIBLES Y MODULO DE SOLICITUD (Admin)
	33. CONSULTA DE SERVICIOS DISPONIBLES Y SELECCION DE TIPO DE SERVICIO (Cliente)

GESTION DE SOLICITUDES: 
	9. GESTION DE SOLICITUD DE SERVICIO (Admin)
		10. EVALUACION DE SOLICITUD DE SERVICIO (Admin) 
			11. CONFIRMACION DE HORA Y FECHA DE VISITA (Admin)
		21. VERIFICACION DE FORMATO DE SOLICITUD DE SERVICIO (Tecnico)
	34. DILIGENCIAMIENTO DE FORMATO DE SOLICITUD DE SERVICIO (Cliente)
		35. ENVIO DE SOLICITUD DE SERVICIO (VERIFICACION DE ESTADO) (Cliente)

		37. ACORDAR LA HORA Y FECHA DE LA VISITA (Cliente)

GESTION DE ORDENES DE TRABAJO: 
	12. ADMINISTRACION DE ORDENES DE TRABAJO (Admin)
		13. CREACION DE ORDEN DE TRABAJO (Admin)
			14. ASIGNACION DE ORDEN DE TRABAJO A UN TECNICO (Admin)
				15. CONTROL DE ORDEN DE TRABAJO (Admin)
	20. REVISION DE ORDENES DE TRABAJO (Tecnico)
	22. SELECCION DE ORDENES DE TRABAJO (Tecnico)
		23. REPORTE DE UBICACION (Tecnico)
	25. GESTION DE ORDENES DE TRABAJO (Tecnico)
		26. CONFIRMACION DE LLEGADA A DOMICILIO - CONTROL DE SEGURIDAD (Tecnico)
	27. CONTROL DE ESTADO DE SERVICIO (Tecnico)
		28. GENERAR CAMBIOS ACERCA DEL SERVICIO (Tecnico)
	38. SEGUIMIENTO DEL SERVICIO (Cliente)
		39. VERIFICAR DETALLES DEL TECNICO (Cliente)
		40. GENERAR CAMBIOS ACERCA DEL SERVICIO (Cliente)
	41. CONTROL DE PROCESOS DEL SERVICIO (Cliente)
		42. CONTROL DE SEGURIDAD (Cliente)

GESTION DE PAGOS: 
	16. ADMINISTRACION DE PAGO Y MEDIOS DE PAGO (Admin)
	17. ENVIO DE FACTURA ELECTRONICA (Admin)
	43. GENERAR PAGO (Cliente)
		45. CONFIRMACION DE PAGO / ENVIO DE SOPORTE (Cliente)
	44. VERIFICAR FACTURA / GARANTIA (Cliente)

SOPORTE AL CLIENTE: 
	18. SOPORTE AL CLIENTE (Admin)
	24. COMUNICACION CON EL CLIENTE (Tecnico)
	29. ENVIO DE REPORTE A ADMINISTRATIVO (Tecnico)
	36. COMUNICACION CON EL TECNICO (Cliente)
………………………………………………………………………………………………………………………………………………………MODULOS ADICIONALES POR EVALUAR
GESTION DE CALIDAD DEL SERVICIO:
	46. VALORACION DEL TECNICO / SERVICIO (Cliente)


GESTION DE ELECTRODOMESTICOS?

GESTION DE REPORTES?
__________________________________________________________________________________
OK --- PASO ADICIONAL: EN EL CAMINO PODEMOS IR AGREGANDO NUEVOS CASOS DE USO SI LOS VEMOS PERTINENTES.
OK --- PASO 1: CLASIFICAR EL CASO DE USO ANTERIOR A UNO DE LOS MODULOS IDENTIFICADOS.
OK --- PASO 2: ESPECIFICAR EL ACTOR DE CADA CASO.
PASO 3: DEFINIR QUE OTROS ACTORES COMPARTEN EL MISMO CASO DE USO.

PASO 4: JUNTAR LOS CASOS DE USO QUE ESTEN RELACIONADOS ENTRE SI. ES DECIR, EL PASO 1
PASO 5: DESGLOSAR LOS CASOS DE USO EN CRUD.ID.
	LOS CASOS DE USO DE "GESTION" LOS PODEMOS USAR COMO RECUADROS QUE CONTENGAN LOS CRUD.ID

Create.  Registrar.
Read.     Consultar.
Update.  Actualizar.
Delete.   Eliminar.
GetID.    ObtenerID.
__________________________________________________________
                       MODULOS
1. Gestion de usuarios.
2. Gestion de servicios.
3. Gestion de solicitudes.
4. Gestion de ordenes de trabajo.
5. Gestion de pagos.
6. Atencion al cliente.
.......................................................posibles adiciones
7. Gestion de calidad del servicio.
    Reseñas, calificaciones, comentarios, etc.
8. Gestion de reportes.
    Reportes en general de toda la info y bases de datos en la pagina.
_________________________________________________________
ADMIN
1. Ingreso y verificacion de rol
2. Creacion de perfiles para los tecnicos
3. Gestion de tecnicos
    4. Administracion de informacion del tecnico
5. Gestion de clientes
    6. Administracino de informacion del cliente
7. Creacion de tipos de servicios disponibles
8. Publicacion de servicios disponibles y modulo de solicitud
9. Gestion de solicitud de servicio
    10. Evaluacion de solicitud de servicio
        11. Confirmacion hora y fecha de visita
12. Administracion de ordenes de trabajo
    13. Creacion de orden de trabajo
        14. Asignacion de orden de trabajo a un tecnico
             15. Control de orden de trabajo
16. Administracion y gestion de pago y medios de pago
17. Envio de factura electronica
18. Soporte al cliente

TECNICO
19. Ingreso y autenticacion
20. Revision de ordenes de trabajo
    21. Verificacion de formato de solicitud de servicio
22. Seleccion de ordenes de trabajo
    23. Reporte de ubicacion
    24. Comunicacion con el cliente
25. Gestion de ordenes de trabajo
    26. Confirmacion de llegada a domicilio - Control de seguridad
27. Control de estado del servicio
    28. Generar cambios acerca del servicio
29. Envio de reporte a administrativo

CLIENTE
30. Registro
    31. Verificacion y aceptacion de terminos y condiciones
32. Ingreso / Autenticacion
33. Consulta de servicios disponibles y seleccion de tipo de servicio
34. Diligenciamiento de formatio de solicitud de servicio
    35. Envio de solicitud de servicio (Verificacion de estado)
36. Comunicacion con el tecnico
    37. Acordar hora y fecha de la visita
38. Seguimiento del servicio
    39. Verificar detalles del tecnico
    40. Generar cambios acerca del servicio
41. Control de procesos del servicio
    42. Control de seguridad
43. Generar pago
    45. Confirmacino de pago / Envio de soporte
44. Verificar faactura / Garantia 
   46. Valoracion del tecnico / Valoracion del servicio

::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::