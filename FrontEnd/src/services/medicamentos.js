export function getMedicamentos() {
    return fetch('http://localhost:3000/medicamentos/')
      .then(data => data.json())
  }