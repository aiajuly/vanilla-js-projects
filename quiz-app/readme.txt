what we did?

created a function "displayQuestion" and called it,
it calls a function to deselect from radio buttons,
it displays the question,
but if all the questions are consumed it will hide questions and show scores with a reload btn.

created a function "setAnswer" that sets the answer variable to what the user checked.

created an event listener, it does the following:
1- sets the answer by calling "setAnswer"
2- if there is no answer( meaning the user didn't checked anything),  we will do nothing
3- if there is an answer and a it's the correct one, we will update the score and the question by incrementing the "currentQuestion" and calling the "displayQuestion"
4- if there is an answer but the answer was wrong, we will only update the question by incrementing the "currentQuestion" and calling the "displayQuestion"