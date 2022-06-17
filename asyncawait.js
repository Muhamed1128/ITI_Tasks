function getCustomer(id) {
    console.log("get customer informations");
    return new Promise((resolvev, reject) => {
        setTimeout(() => {
            resolve({ email: "mo1@gmail", name: "mohamed", id: 1 })
        }, 3000);
    })
}
const getCustomerOrder = (email) => {
    console.log("Read orders")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ order: "Pc", customerId: 1, creationDate: "2022-06-16" })
        }, 3000)

    })
}

async function get() {
    const customer = await getCustomer(1);
    const order = await getCustomerOrder(customer.email)
    console.log(customer);
}