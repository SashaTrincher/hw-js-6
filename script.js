// 1

const user = {
    name: 'John',
    age: 30,
    hobby: 'reading',
    premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

for (const key of Object.keys(user)) {
    console.log(`${key}: ${user[key]}`);
}


// 2

function countProps(obj) {
    return Object.keys(obj).length;
}


// 3

function findBestEmployee(employees) {
    let maxTasks = 0;
    let bestEmployee = '';

    for (const employee in employees) {
        if (employees[employee] > maxTasks) {
            maxTasks = employees[employee];
            bestEmployee = employee;
        }
    }

    return bestEmployee;
}

// 4

function countTotalSalary(employees) {
    let totalSalary = 0;

    for (const employee in employees) {
        totalSalary += employees[employee];
    }

    return totalSalary;
}

// 5 

function getAllPropValues(arr, prop) {
    const propValues = [];

    for (const obj of arr) {
        if (prop in obj) {
            propValues.push(obj[prop]);
        }
    }

    return propValues;
}

// 6

function calculateTotalPrice(allProducts, productName) {
    let totalPrice = 0;

    for (const product of allProducts) {
        if (product.name === productName) {
            totalPrice += product.price * product.quantity;
        }
    }

    return totalPrice;
}