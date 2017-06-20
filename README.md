# managamentApi

Zatwierdzil mi projekt :wink: dlateog sie oddzywam, chce abys zrobil jeszcze jedna rzecz, a jak wroce z warszawy to ogarne wszystko z finansami, temrinami i wroce do Ciebie.

[10:12] 
*Projekty*.
Kazdy user moze zrobic projekt.
Projekt na ten moment ma :
title: string,
price: number,
createdData: (to jest data ktorej my nie wysylamy, ty domyslnie masz ja dodawac przy tworzeniu).
owner: idUsera ktory dodaje
teamId: string //id zespolu
commends: [] //opisze to ponizej.

Czyli moj uzytkownikwnik moze stworzyc wiele projektow. Dodajac projekt domyslnie dodajesz createdData.
Wiadomo caly project ma caly crud / update.create,delete, get all projekct, get/:id (po 1 tylko 1).

szabloreki [10:15 PM] 
createdData ?\

michal [10:15 PM] 
Jak chodzi o komentarze:
Inny uzytkownik - moze dodac komentarz do mojego projektu (np mozesz Ty jako Dawid skomentowac moj projekt). Komentarz ma miec budowe:
createdDate: typu Date (dzien i godzina) - ty sam dodajesz po stronie backendu
authorId: String / twoje id jako usera ktory dodaje komentarze
description: string

[10:16] 
Tak, to jest pole, ktore domyslnie ma byc dodawane, ja nie bede przez postmana go dodawac, ale ty masz go dodawac po stronie backendu

[10:16] 
chodzi o to, ze musze wiedizec kiedy projekt byl stwozrzony

[10:16] 
to samo z komentarzem, kiedy on byl stworzony

szabloreki [10:16 PM] 
createdData przechowuje komentarze?

[10:17] 
acha teraz przeczytałem

michal
[10:17 PM] 
nie przechowuje komentarzy :wink:

szabloreki [10:17 PM] 
commends

[10:18] 
dobra rozumiem idea

michal
[10:18 PM] 
I jak ot bedzie dizalac + wczesniejszedzialaja (nie sprawdzalem)

[10:18] 
to 40% aplikacji za toba

szabloreki [10:19 PM] 
czek ten projekt co ja teraz robie to TO jest ten projekt?

[10:19] 
podejrzewałem to, ale w to nie wierzyłem XD

[10:20] 
dobra

[10:20] 
zaczynam od jutra

[10:20] 
jak czegoś nie bd wiedział (tzn. nie problem) tylko co mam zrobić jkb co

[10:20] 
to napiszę

[10:20] 
dziękować

[10:21] 
i w sumie dobranoc XD
