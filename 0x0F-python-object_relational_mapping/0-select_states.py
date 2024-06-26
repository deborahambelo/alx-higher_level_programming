#!/usr/bin/python3
"""
Lists all states from the database hbtn_0e_0_usa.
Usage: ./0-select_states.py <mysql username> \
                            <mysql password> \
                            <database name>
"""
import sys
import MySQLdb


def list_states(username, password, db_name):
    """
Connects to a MySQL database and lists all states.
    
    Args:
        username (str): The MySQL username.
        password (str): The MySQL password.
        db_name (str): The name of the database.
    """
    db = MySQLdb.connect(
        host="localhost",
        port=3306,
        user=username,
        passwd=password,
        db=db_name
    )
    c = db.cursor()
    c.execute("SELECT * FROM `states` ORDER BY `id` ASC")
    for state in c.fetchall():
        print(state)
    c.close()
    db.close()


if __name__ == "__main__":
    if len(sys.argv) != 4:
        print("Usage: ./0-select_states.py <mysql username>
                <mysql password> <database ")
    else:
        list_states(sys.argv[1], sys.argv[2], sys.argv[3])
