/* ---------- Datos de países y ciudades ---------- */
const data = {
  "México": ["Ciudad de México", "Guadalajara", "Monterrey"],
  "Estados Unidos": ["Nueva York", "Los Ángeles", "Chicago"],
  "Colombia": ["Bogotá", "Medellín", "Cali"],
  "España": ["Madrid", "Barcelona", "Valencia"],
  "Argentina": ["Buenos Aires", "Córdoba", "Rosario"]
};

/* ---------- Cargar selects dinámicos ---------- */
const paisSelect   = document.getElementById('pais');
const ciudadSelect = document.getElementById('ciudad');

Object.keys(data).forEach(pais => {
  const opt = document.createElement('option');
  opt.value = pais;
  opt.textContent = pais;
  paisSelect.appendChild(opt);
});

paisSelect.addEventListener('change', () => {
  ciudadSelect.innerHTML = '<option value="">-- Selecciona una ciudad --</option>';
  (data[paisSelect.value] || []).forEach(ciudad => {
    const opt = document.createElement('option');
    opt.value = ciudad;
    opt.textContent = ciudad;
    ciudadSelect.appendChild(opt);
  });
});


/* Cargar listado al inicio y después de cada envío */
function cargarListado(){
  fetch('/listar.php')
    .then(r => r.text())
    .then(html => document.getElementById('lista-registros').innerHTML = html);
}
document.addEventListener('DOMContentLoaded', cargarListado);


/* Cargar listado al inicio y después de cada envío */
document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();
  const data = new FormData(e.target);

  fetch('/procesar.php', {method:'POST', body:data})
    .then(r => r.json())                 // ← ahora esperamos JSON
    .then(res => {
      if(res.status === 'ok'){
        e.target.reset();                // limpia el form
        cargarListado();                 // recarga el listado
        /* mensaje suave (opcional) */
        const ok = document.createElement('div');
        ok.textContent = 'Registro guardado';
        ok.className = 'flash-ok';
        document.querySelector('.form-container').prepend(ok);
        setTimeout(() => ok.remove(), 2000);
      }else{
        alert(res.msg || 'Error desconocido');
      }
    })
    .catch(err => alert('Error de red: ' + err));
});

