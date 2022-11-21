select unique_id, name
from Employees e
    left join EmployeeUNI u ON u.id = e.id