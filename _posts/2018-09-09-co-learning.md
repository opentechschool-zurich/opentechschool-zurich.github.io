---
layout: post
title: "Co-Learning: 9. September 2018"
---

This Sunday's Co-Learning was a small but busy group:

![Co-Learning on Stempber 4th](/assets/posts/2018-09-09.jpg)

Julien: Heute habe ich angefangen, ein Spiel in PyGame namens "Ready Player One" zu programmieren:
Fertig: Startbildschirm welcher fuer 2 Sekunden angezeigt wird.
Noch zu tun: Der ganze Rest XD (z.B Bilder, Musik und Gamemechanik)


Herve: Angefangen einen SQLITE3 PYTHON Code zu schreiben
Soweit fertig: User Input in einem Sqlite DB zu schreiben
Nachstes Ziel: Search Query zu bauen ;-)

```py
import sqlite3
conn = sqlite3.connect('test3.db')
cursor = conn.cursor()

while True:

    Title = input ("Enter event: ")
    Year = input ("Enter year: ")
    Organiser = input ("Enter Organiser: ")

    cursor.execute("""CREATE TABLE IF NOT EXISTS Event
                (PID INTEGER PRIMARY KEY AUTOINCREMENT,
                Title VARCHAR (100),
                Year VARCHAR (6),
                Organiser VARCHAR (100))""")


    cursor.execute("insert into Event (Title, Year, Organiser) values (?, ?, ?)", (Title, Year, Organiser))

    answer = input("Continue? [ok] ")
    if answer != "ok" :
        break

# SearchEvent = input ("Search Event: ")

cursor.execute("SELECT * FROM Event)

print(cursor.fetchall())

conn.commit()

conn.close()
```


Ale: ein bisschen allen geholfen und an meinem patch für Scribus (multiple duplicate) weitergearbeitet.

Jesse: Ich habe eine Aufgabe aus meinem Online-Kurs bei Coursera ENDLICH bewältigt und mein eigenes Projekt vorangetrieben. Ich habe mit "itertools.combinations" die schlankste Lösung zur Bildung von Paaren angewendet und damit begonnen, eine Eingabekontrolle zu erstellen.
