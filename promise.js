function getCustomer(id) {
    console.log("get customer informations");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ email: "mo1@gmail", name: "mohamed", id: 1 })
        }, 3000);
    })
}
const getCustomerOrder = (email) => {
    console.log("Read orders")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ order: "PC", customerId: 1, creationDate: "2022-06-16" })
        }, 3000)

    })
}


getCustomer(1)
    .then((customer) => getCustomerOrder(customer.email))
    .then(order => console.log(order))
    .catch(error => console.log(error))
