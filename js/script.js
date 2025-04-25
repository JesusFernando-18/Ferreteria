const productos = [
    {
      id: 1,
      nombre: "Taladro Eléctrico",
      descripcion: "Potente y versátil, ideal para todo tipo de perforaciones.",
      imagen: "img/taladro.webp",
      precio: 120.00,
      precioOferta: 99.99,
      detalles: "Taladro inalámbrico con batería de larga duración, 20 velocidades, luz LED integrada."
    },
    {
      id: 2,
      nombre: "Caja de Herramientas",
      descripcion: "Completa y resistente para profesionales y aficionados.",
      imagen: "img/cajaherramientas.webp",
      precio: 80.00,
      precioOferta: 65.00,
      detalles: "Incluye destornilladores, llaves, martillo y más. Material resistente a golpes."
    },
    {
      id: 3,
      nombre: "Pintura Exterior",
      descripcion: "Duradera y resistente a la intemperie, colores vibrantes.",
      imagen: "img/pintura.webp",
      precio: 45.00,
      precioOferta: 39.50,
      detalles: "Pintura ecológica, secado rápido, resistente a la humedad y rayos UV."
    }
  ];
  
  const carrito = [];
  
  function agregarCarrito(nombreProducto) {
    const producto = productos.find(p => p.nombre === nombreProducto);
    if (!producto) {
      alert("Producto no encontrado.");
      return;
    }
    carrito.push(producto);
    alert(`Has agregado "${producto.nombre}" al carrito.`);
    console.log("Carrito actual:", carrito);
  }
  
  function mostrarDetallesProducto(idProducto) {
    const detallesContainerId = "detallesProductoContainer";
    let detallesContainer = document.getElementById(detallesContainerId);
  
    if (!detallesContainer) {
      const productosSection = document.getElementById("productos");
      detallesContainer = document.createElement("div");
      detallesContainer.id = detallesContainerId;
      detallesContainer.classList.add("container", "py-4");
      detallesContainer.style.borderTop = "2px solid #ff6f00";
      detallesContainer.style.marginTop = "2rem";
      productosSection.insertAdjacentElement("afterend", detallesContainer);
    }
  
    const producto = productos.find(p => p.id === idProducto);
    if (!producto) {
      detallesContainer.innerHTML = `<p class="text-danger">Producto no encontrado.</p>`;
      return;
    }
  
    detallesContainer.innerHTML = `
      <h3 class="fw-bold" style="color:#ff6f00;">Detalles del Producto: ${producto.nombre}</h3>
      <div class="row align-items-center mt-3">
        <div class="col-md-4 text-center">
          <img src="${producto.imagen}" alt="${producto.nombre}" class="img-fluid rounded shadow-sm" />
        </div>
        <div class="col-md-8">
          <p>${producto.detalles}</p>
          <p><strong>Precio normal:</strong> $${producto.precio.toFixed(2)}</p>
          <p><strong>Precio en oferta:</strong> <span class="text-success fs-5">$${producto.precioOferta.toFixed(2)}</span></p>
          <button class="btn btn-success btn-primary-custom" id="btnAgregarDetalle">Agregar al carrito</button>
        </div>
      </div>
    `;
  
    detallesContainer.style.opacity = 0;
    setTimeout(() => {
      detallesContainer.style.transition = "opacity 0.5s";
      detallesContainer.style.opacity = 1;
    }, 50);
  
    const btnAgregarDetalle = document.getElementById("btnAgregarDetalle");
    btnAgregarDetalle.addEventListener("click", () => {
      agregarCarrito(producto.nombre);
    });
  
    detallesContainer.scrollIntoView({ behavior: "smooth" });
  }
  
  function inicializarBotonesProductos() {
    const botones = document.querySelectorAll("#productos .btn-primary");
  
    botones.forEach((btn, index) => {
      const producto = productos[index];
      if (!producto) return;
  
      btn.removeAttribute("onclick");
      btn.addEventListener("click", () => {
        agregarCarrito(producto.nombre);
        mostrarDetallesProducto(producto.id);
      });
    });
  }
  
  (function () {
    const form = document.getElementById('contactForm');
    const alertBox = document.getElementById('formAlert');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      event.stopPropagation();
  
      if (!form.checkValidity()) {
        form.classList.add('was-validated');
        alertBox.classList.add('d-none');
        return;
      }
  
      alertBox.classList.remove('d-none', 'alert-danger');
      alertBox.classList.add('alert-success');
      alertBox.textContent = '¡Gracias por contactarnos! Te responderemos pronto.';
  
      form.reset();
      form.classList.remove('was-validated');
    }, false);
  })();
  
  document.addEventListener("DOMContentLoaded", () => {
    inicializarBotonesProductos();
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const brand = document.querySelector("a.navbar-brand");
    if (!brand) return;
  
    brand.style.transition = "transform 0.2s ease-in-out";
  
    brand.addEventListener("mouseenter", () => {
      brand.style.transform = "scale(1.1)";
    });
  
    brand.addEventListener("mouseleave", () => {
      brand.style.transform = "scale(1)";
    });
  });
  