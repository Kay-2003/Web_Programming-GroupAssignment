document.addEventListener('DOMContentLoaded', function () {
    // #6.a - ShowUserFrequency() – Show’s user requency based on Gender and Age 
    const userFrequencyData = JSON.parse(localStorage.getItem('UserFrequency')) || {
        maleUsers: 0,
        femaleUsers: 0,
        otherUsers: 0,
        ageGroups: { '18-25': 0, '26-35': 0, '36-50': 0, '50+': 0 }
    };

    const allInvoices = JSON.parse(localStorage.getItem('AllInvoices')) || [];

    function showUserFrequency() {
        document.getElementById('male-users').textContent = userFrequencyData.maleUsers;
        document.getElementById('female-users').textContent = userFrequencyData.femaleUsers;
        document.getElementById('other-users').textContent = userFrequencyData.otherUsers;
        document.getElementById('age-18-25').textContent = userFrequencyData.ageGroups['18-25'];
        document.getElementById('age-26-35').textContent = userFrequencyData.ageGroups['26-35'];
        document.getElementById('age-36-50').textContent = userFrequencyData.ageGroups['36-50'];
        document.getElementById('age-50-plus').textContent = userFrequencyData.ageGroups['50+'];
    }

    // #6.b - ShowInvoices() - displays all invoices and allow the visitor to search for any of the invoices (using trn) stored in AllInvoices from localStorage using console.log().
    function showInvoices() {
        const invoiceList = document.getElementById('invoice-list');
        invoiceList.innerHTML = '';

        allInvoices.forEach(invoice => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${invoice.trn}</td>
                <td>${invoice.invoiceNumber}</td>
                <td>${invoice.customerName}</td>
                <td>${invoice.date}</td>
                <td>${invoice.total}</td>
            `;
            invoiceList.appendChild(row);
        });
    }

    document.getElementById('search-button').addEventListener('click', function () {
        const searchValue = document.getElementById('trn-search').value.trim().toLowerCase();
        const filteredInvoices = allInvoices.filter(invoice =>
            invoice.trn.toLowerCase().includes(searchValue)
        );

        // #6.c - GetUserInvoices() – displays all the invoices for a user based on trn stored in the localStorage key called, RegisterData. 

        const invoiceList = document.getElementById('invoice-list');
        invoiceList.innerHTML = '';

        if (filteredInvoices.length > 0) {
            filteredInvoices.forEach(invoice => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${invoice.trn}</td>
                    <td>${invoice.invoiceNumber}</td>
                    <td>${invoice.customerName}</td>
                    <td>${invoice.date}</td>
                    <td>${invoice.total}</td>
                `;
                invoiceList.appendChild(row);
            });
        } else {
            invoiceList.innerHTML = '<tr><td colspan="5">No invoices found.</td></tr>';
        }
    });

    showUserFrequency();
    showInvoices();
});
