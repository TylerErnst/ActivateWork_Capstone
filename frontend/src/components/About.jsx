import React from 'react';

function About() {
    return (
        <div className="about-container">
            <h1>Welcome to NetWealthPro!</h1>
            <p>
                NetWealthPro is a robust tool designed to assist users in determining the net worth of their possessions for renter insurance purposes. Whether you're tracking eBay prices or managing your assets, NetWealthPro provides an intuitive platform to keep your financial information organized and up-to-date.
            </p>
            
            <h2>Features</h2>
            <ul>
                <li><strong>Add and Manage Items:</strong> Easily add new items, delete old ones, and refresh item data to keep your inventory current.</li>
                <li><strong>Item List with Pagination:</strong> View your items in a paginated list, making it simple to manage large inventories.</li>
                <li><strong>Item Inclusion:</strong> Mark items as included or excluded from your net worth calculations with a simple checkbox.</li>
                <li><strong>Summary Table:</strong> See a summary of the total price of all averages, medians, maximums, and minimums for your current item list.</li>
            </ul>
            
            <h2>How It Works</h2>
            <ul>
                <li><strong>Add Items:</strong> Use the search functionality to add items to your list. Each item can have details like name, condition, keywords, and pricing information.</li>
                <li><strong>Manage Your Items:</strong> Each item in the list can be updated, deleted, or marked as included/excluded from calculations.</li>
                <li><strong>Pagination:</strong> Easily navigate through your items using the pagination controls, which allow you to set the number of items displayed per page.</li>
                <li><strong>Summary Statistics:</strong> The summary table provides an overview of the total average, median, maximum, and minimum prices of your included items, helping you understand the value of your possessions at a glance.</li>
            </ul>
        </div>
    );
}

export default About;
