const form = document.forms["myForm"]
const input = form["taskinput"]
const ul = document.getElementById
("tasklist")

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    const val = input.value

    const newLi = document.createElement("li") /* we have to create a new element li*/
    /* passing this means which object/task is clicked that will be passed*/
    newLi.innerHTML = val + "<i onclick=\"deleteTask(this)\" class=\"fa-solid fa-rectangle-xmark\" style=\"float:right\"></i>"
    /* the new element plus what was already in list */
    /* if this had text we would use inner text but this has html too */
    /* the inverted commas you want javascript to not recognise put a \ before them */

    /* element is created aboce now we place it in the list div */
    ul.appendChild(newLi)
})

/* whenever browser listens to the event it will call the function 
the default page of the browser in which page is reloaded or the action file specified, page goes there, we prevent these behaviours with prevent default */

/* e is needed to know which task to be deleted when cross is clicked */
/* below code removes the cross
function deleteTask(element){
   element.remove()
}
*/

function deleteTask(element){
    element.parentElement.remove()
 }

 /* element.parentElement.style.textDecoration="line-through" */