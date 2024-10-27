function highestPaid(employees) {
    let highest = employees[0];
  
    for (const { salary, ...rest } of employees) {
      if (salary > highest.salary) {
        highest = { salary, ...rest };
      }
    }
  
    return highest;
  }
  
  // Example invocation
  const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
  ];
  
  console.log(highestPaid(employees));
  // Output: { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 }
  