function getCustomer(id, callback) {
    console.log("get customer informations");
    setTimeout(() => {
        callback({ email: "mo1@gmail", name: "mohammed", id: 1 })
    }, 3000)
}
const getCustomerOrder = (email, callback) => {
    console.log("read orders")
    setTimeout(() => {
        callback({ order: "PC", customerId: 1, creationDate: "2022-06-16" })
    }, 3000)
}

getCustomer(1, (customer) => {
    console.log(customer)
    getCustomerOrder(customer.email, (order) => {
        console.log(order)
    })
})