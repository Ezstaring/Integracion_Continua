const API_URL = "http://127.0.0.1:8000/api/productos/";

const productForm = document.getElementById("product-form");
const productList = document.getElementById("product-list");

// Cargar productos
async function fetchProducts() {
  const res = await fetch(API_URL);
  const data = await res.json();
  productList.innerHTML = "";

  data.forEach(prod => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${prod.id}</td>
      <td>${prod.nombre}</td>
      <td>${prod.descripcion}</td>
      <td>${prod.precio}</td>
      <td>${prod.stock}</td>
      <td>
        <button onclick="deleteProduct(${prod.id})">Eliminar</button>
      </td>
    `;
    productList.appendChild(row);
  });
}

// Crear producto
productForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const producto = {
    nombre: document.getElementById("nombre").value,
    descripcion: document.getElementById("descripcion").value,
    precio: document.getElementById("precio").value,
    stock: document.getElementById("stock").value
  };

  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(producto)
  });

  if (res.ok) {
    productForm.reset();
    fetchProducts();
  }
});

// Eliminar producto
async function deleteProduct(id) {
  if (!confirm("¿Seguro que deseas eliminar este producto?")) return;

  const res = await fetch(`${API_URL}${id}/`, { method: "DELETE" });
  if (res.ok) fetchProducts();
}

// Cargar lista al iniciar
fetchProducts();
