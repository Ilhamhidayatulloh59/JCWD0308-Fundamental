class Employee {
    name = ""
    type = ""
    hour = 0

    constructor(name, type) {
        this.name = name
        this.type = type
    }

    addWorkingHour(hour) {
        this.hour = hour
    }
}

class FullTime extends Employee {
    constructor(name) {
        super(name, "Fulltime")
    }

    getSalary() {
        if (this.hour <= 6) {
            console.log(100000 * this.hour)
        } else {
            console.log(600000 + (this.hour - 6) * 75000)
        }
    }
}

class PartTime extends Employee {
    constructor(name) {
        super(name, "PartTime")
    }

    getSalary() {
        if (this.hour <= 6) {
            console.log(50000 * this.hour)
        } else {
            console.log(300000 + (this.hour - 6) * 30000)
        }
    }
}

const fulltime1 = new FullTime("Andi")
fulltime1.addWorkingHour(8)
fulltime1.getSalary()

console.log(fulltime1)
