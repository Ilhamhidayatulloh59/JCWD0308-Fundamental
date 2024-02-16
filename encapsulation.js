class Employee {
    constructor() {
        this.employeeName
    }

    setEmployeeName(newName) {
        if (typeof newName !== 'string') {
            throw new Error("Name should be a string") // ngebuat error
        }
        this.employeeName = newName
    }

    getEmployeeName() {
        return this.employeeName
    }
}

let employee1 = new Employee()
employee1.setEmployeeName('123')
console.log(employee1.employeeName)

console.log(employee1)
