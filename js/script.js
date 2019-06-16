/******************************************
 Treehouse Techdegree:
 Full-Stack JavaScript - project 2 - List Filter and Pagination
 ******************************************/

// Global variables
const totalStudents = document.querySelector(".student-list").children;
const studentsPerPage = 10;

// Function that shows only the appropriate elements on the page
const showPage = (list, page) => {
    const startIndex = (page * studentsPerPage) - studentsPerPage;
    const endIndex = page * studentsPerPage;

    // loop over all the items in the list to either hide or show them
    for (let index = 0; index < list.length; index += 1) {
        list[index].style.display = 'none';
        if (index >= startIndex && index < endIndex) {
            list[index].style.display = 'block';
        }
    }
};

// Function for appending page links to the page
const appendPageLinks = (list) => {
    // Show the first page by default
    showPage(totalStudents, 1);

    // calculate the maximum number of pages needed
    const maxPages = Math.ceil(list.length / studentsPerPage);

    const pageDiv = document.querySelector('.page');
    const paginationDiv = document.createElement('div');
    paginationDiv.className = 'pagination';

    // create a ul for the pagination
    const paginationUl = document.createElement('ul');

    // create page numbers and append them to the ul
    for (let index = 1; index <= maxPages; index += 1) {
        const paginationListItem = document.createElement('li');

        const paginationLink = document.createElement('a');
        paginationLink.textContent = index.toString();

        paginationListItem.append(paginationLink);
        paginationUl.appendChild(paginationListItem);
    }

    paginationDiv.appendChild(paginationUl);
    pageDiv.appendChild(paginationDiv);

    const allPageLinks = document.querySelectorAll('a');
    allPageLinks[0].className = 'active';

    // remove the className 'active' from all the links
    for (let i = 0; i < maxPages; i++) {
        allPageLinks[i].addEventListener('click', (event) => {
            const eventTag = event.target;
            for (let index = 0; index < allPageLinks.length; index++) {
                allPageLinks[index].className = '';
            }

            // show the right students for the active page
            showPage(list, eventTag.textContent);

            // set className to 'active' on the current page
            event.target.className = 'active';
        });
    }
};

appendPageLinks(totalStudents);
