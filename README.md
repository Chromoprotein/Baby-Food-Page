Baby food tracker

This is a Next.js/Typescript website for tracking what foods your baby has tasted and how much your baby liked them. The purpose is to track foods without getting bogged down with details, focusing on food diversity.

app/page.tsx: The landing page. The registration form is here.

app/baby/page.tsx: The statistics or profile page. It shows how many percentage of the database's foods the baby has tasted and groups the foods by opinion (love, like, dislike). You can click on the foods to edit the opinion.

app/babyfoods/page.tsx: The food page. Currently, it shows a list of foods with a simple emoji-based form system. The foods are paginated and searchable. You can also filter main meals or snacks.

To do:
- Currently, the website shows all the food options regardless of the baby's age. I should calculate the baby's age from the DOB, then show only stage 1 foods to 6-month-old babies, add stage 2 foods then the baby is 7 months, and add stage 3 foods when the baby is 9 months.
- Some parts of the UI are still unstyled. They should be improved.
- A "read more" button in the food statistics page would be useful if the number of foods grows large.