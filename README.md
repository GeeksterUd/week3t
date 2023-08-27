# week3t
i created  two files in html file in body section i created a div inside that div i created two buttons delete and undo button in delete button i added a 
onlick event which will call a function after click the same i did with undo button , then i created a canvas element and provided its hight and width
in head section i created a style tag in which i provide some styling to my buttons  and body of html page
in js i get the element of button and canvas using get element by id method  and then i provided different event listener to canvas like mousemove, mousedown, mouseout and mouseout in those events i gave different functions in startdraw function i used a move to method which allows to specific coordinates and to get coordinates i used .clientX and .clientY in draw function i used lineto and stroke which help in to add lines from point to another ie. in x and y coordinates
and in stopdraw function i used closedpath method which closes the ongoing path in delete i used clear rect method which is used to erase
