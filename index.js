document.getElementById('employeeForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents the default form submission
  
    // Get values from the form
    const name = document.getElementById('name').value;
    const employeeID = document.getElementById('employeeID').value;
    const department = document.getElementById('department').value;
    const experience = parseInt(document.getElementById('experience').value);
    const email = document.getElementById('email').value;
    const mobileNumber = document.getElementById('mobileNumber').value;
  
    // Determine the role based on experience
    let role;
    if (experience > 5) {
      role = 'Senior';
    } else if (experience >= 2 && experience <= 5) {
      role = 'Junior';
    } else {
      role = 'Fresher';
    }
  
    // Create a new table row
    const newRow = document.createElement('tr');
  
    // Create eight table cells (columns)
    const nameCell = document.createElement('td');
    nameCell.textContent = name;
  
    const employeeIDCell = document.createElement('td');
    employeeIDCell.textContent = employeeID;
  
    const departmentCell = document.createElement('td');
    departmentCell.textContent = department;
  
    const experienceCell = document.createElement('td');
    experienceCell.textContent = experience;
  
    const emailCell = document.createElement('td');
    emailCell.textContent = email;
  
    const mobileNumberCell = document.createElement('td');
    mobileNumberCell.textContent = mobileNumber;
  
    const roleCell = document.createElement('td');
    roleCell.textContent = role;
  
    const deleteCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', function () {
      deleteRow(newRow);
    });
    deleteCell.appendChild(deleteButton);
  
    // Append cells to the row
    newRow.appendChild(nameCell);
    newRow.appendChild(employeeIDCell);
    newRow.appendChild(departmentCell);
    newRow.appendChild(experienceCell);
    newRow.appendChild(emailCell);
    newRow.appendChild(mobileNumberCell);
    newRow.appendChild(roleCell);
    newRow.appendChild(deleteCell);
  
    // Add a class to the row based on role for background color
    newRow.classList.add(role.toLowerCase());
  
    // Append the row to the table
    document.getElementById('employeeList').appendChild(newRow);
  
    // Clear the form fields
    document.getElementById('name').value = '';
    document.getElementById('employeeID').value = '';
    document.getElementById('department').value = 'frontend';
    document.getElementById('experience').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mobileNumber').value = '';
  });
  
  function deleteRow(row) {
    row.parentNode.removeChild(row);
  }
  
  function filterByDepartment() {
    const selectedDepartment = document.getElementById('departmentFilter').value;
    const rows = document.querySelectorAll('#employeeList tr');
  
    rows.forEach(row => {
      const departmentCell = row.querySelector('td:nth-child(3)');
      const shouldDisplay = selectedDepartment === 'all' || departmentCell.textContent === selectedDepartment;
      row.style.display = shouldDisplay ? '' : 'none';
    });
  }
  