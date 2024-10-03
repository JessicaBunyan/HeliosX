# Running the app

Should run fine with `npm i` followed by `npm start`. Tested on my local machine with node 22.5.1 and npm 10.8.2

## Notes / Q&A

### Overall design

With the requirement that each question should only appear after the previous one was answered, I decided to go with a "conversation" based approach to mirror the experience of an in-person consultation. The UI was designed to meet the brief but is otherwise unrefined

Due to the importance of each answer, I added a slight delay after answering each question so users could not accidentally input wrong answers by double-clicking the button - also hopefully ensuring they take the time to read each new question

### Why useState over redux? / etc

Didn't wan't the extra boiler plate of using a library here. I think the state in this case should be transient as we probably don't want a user to walk away halfway through a consultation and come back to have it half filled. Especially in the case of shared devices etc

### Why "Yes" | "No" instead of boolean?

1. Extensible for other questions with multiple choice answers
2. Avoids the "ternary boolean" situation with a nullable boolean. Will avoid any issues where undefined is incorrectly considered the same as `false` due to truthiness concerns

### What compromises were made for speed of delivery?

A number - including but not limited to

1. UI page design, colours & theming
2. CSS variables could be more robust, and also could be used for margins/padding/breakpoints etc
3. Animations for conversation messages - "..." typing animation would further sell the "conversation" aspect
4. Unit Testing
