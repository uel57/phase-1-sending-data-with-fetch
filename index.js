function submitData(name, email) {
  const address = 'http://localhost:3000/users';
  const info = {
    name: "Steve",
    email: "steve@steve.com"
  };

  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(info)
  };

  return fetch(address, config)
    .then(response => response.json())
    .then(info => {
      const id = info.id;
      document.body.innerHTML += `<p>Created user with id: ${id}</p>`;
    })
    .catch(error => {
      document.body.innerHTML += `<p>Error: ${error.message}</p>`;
    });
}







