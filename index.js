// Your solution should consider the following criteria:
//  - Users in the deposit list have an association to a property with status value of `deactivated`.
//  - User `properties` in the POST should include first name, last name, company, company website, email, phone


const apiUsers = 'data/users.json'
const apiProperties = 'data/properties.json'
async function acitveUsers() {
  const responseUsers = await fetch(apiUsers)
  const responseProperties = await fetch(apiProperties)
  const dataUsers = await responseUsers.json()
  const dataProperties = await responseProperties.json()
  const filteredProperties = dataProperties.filter(function (n) {
    return n.status === 'active'
  })

  console.log(dataUsers)
  console.log(filteredProperties)
}
  
acitveUsers()
