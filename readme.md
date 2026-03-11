## Reflection

1. How did you ensure unique keys for your list items?
   I made sure to create unique property ids for each list item
   thats not based on their index value in the array.

2. What considerations did you make when implementing the filtering functionality?
 
 For the filter system I made sure to pass dom event to get task status and 
 task priority. However, I coudn't figure out how reset the tasklist as it was filtered.

3. How did you handle state updates for task status changes?
I used passed the dom event onclick as props, but couldn't get to implementation.


4. What challenges did you face when implementing conditional rendering?

Making sure to convert the value to the right type was always an issue.
Its not something you can get right the first time. Another issue I ran into
was getting the curly brace position right.