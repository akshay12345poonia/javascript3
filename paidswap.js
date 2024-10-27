
function highestPaid(employees) {
    let highest = employees[0];
  
    for (const { salary, ...rest } of employees) {
      if (salary > highest.salary) {
        highest = { salary, ...rest };
      }
    }
  
    return highest;
  }
  
  
  function destructuringToSwap(employees) {
    if (employees.length > 1) {
      
      [employees[0], employees[employees.length - 1]] = [employees[employees.length - 1], employees[0]];
    }
    return employees;
  }
  

  const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
  ];
  
  console.log("Highest Paid Employee:", highestPaid(employees));
  
  
  console.log("After Swapping First and Last Employees:", destructuringToSwap(employees));
    
  