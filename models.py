#import file
import sqlite3 as sql 

class schema:
    
    def __init__(self):
        

#create connection to the db
conn = sql.connect('todo.db')

#write an sql query
query = "<SQLite query goes here>"

#execute the query
result = conn.execute(query)

