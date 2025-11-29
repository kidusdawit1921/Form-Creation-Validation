async function fetchUserData() {
    // API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Select container
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch user data
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Clear loading message
        dataContainer.innerHTML = '';

        // Create a list
        const userList = document.createElement('ul');

        // Add each user to the list
        users.forEach(function(user) {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Add list to page
        dataContainer.appendChild(userList);

    } catch (error) {
        // Handle any errors
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// Run after DOM loads
document.addEventListener('DOMContentLoaded', fetchUserData);
