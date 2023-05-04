import psycopg2

conexion = psycopg2.connect(
    user='postgres',
    password='admin,',
    host='127.0.0.1',
    port='5432',
    database='test_bd'
)
print(conexion)

'''
cursor = conexion.cursor()
sentencia = 'SELECT * FROM persona'
cursor.execute(sentencia) # ejecutamos la sentencia
registros = cursor.fetchall() # recuperamos todos los registros que serán una lista
print(registros)

cursor.close()
conexion.close()
'''
