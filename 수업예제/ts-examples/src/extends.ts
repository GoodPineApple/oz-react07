// 상속 · 확장
interface Person {
  name: string;
}
interface Employee extends Person {
  employeeId: string;
}
type PersonType = { name: string };
type EmployeeType = PersonType & { employeeId: string };
let emp1: Employee = { name: "Grace", employeeId: "E123" };
let emp2: EmployeeType = { name: "Hank", employeeId: "E124" };
