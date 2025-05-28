$(document).ready(function () {
  cargarPaquetes();


  $('#form-paquete').submit(function (e) {
  e.preventDefault();

    // Comprobaciones generales antes de mandarlos al backend

  const codigo = $('input[name="codigo"]').val().trim();
  const descripcion = $('input[name="descripcion"]').val().trim();

  if (codigo === '' || descripcion === '') {
    alert('Todos los campos son obligatorios.');
    return;
  }

  if (!/^[A-Z0-9\-]{3,50}$/i.test(codigo)) {
    alert('Código inválido: usa letras, números o guiones (3-50 caracteres).');
    return;
  }

  if (descripcion.length > 500) {
    alert('La descripción es demasiado larga (máx. 500 caracteres).');
    return;
  }

  // 
  $.post('Php/insertar_paquete.php', $(this).serialize(), function (r) {
    alert(r.mensaje);
    cargarPaquetes();
    $('#form-paquete')[0].reset();
  }, 'json');
  });


  // Buscar
  $('#buscar').on('input', function () {
    let filtro = $(this).val().toLowerCase();
    $('#tabla-paquetes tr').each(function () {
      $(this).toggle($(this).text().toLowerCase().includes(filtro));
    });
  });

  // Mostrar modal
  $(document).on('click', '.btn-estado', function () {
    $('#paquete-id').val($(this).data('id'));
    $('#modalEstado').modal('show');
  });

  // Actualizar estado
  $('#form-estado').submit(function (e) {
    e.preventDefault();
    $.post('Php/actualizar_estado.php', $(this).serialize(), function (r) {
      alert(r.mensaje);
      $('#modalEstado').modal('hide');
      cargarPaquetes();
    }, 'json');
  });

  function cargarPaquetes() {
    $.get('Php/obtener_paquetes.php', function (data) {
      let html = '';
      data.forEach(p => {
        html += `<tr>
          <td>${p.codigo}</td>
          <td>${p.descripcion}</td>
          <td>${p.estado}</td>
          <td>${p.fecha_registro}</td>
          <td><button class="btn btn-warning btn-sm btn-estado" data-id="${p.id}">Cambiar Estado</button></td>
        </tr>`;
      });
      $('#tabla-paquetes').html(html);
    }, 'json');
  }
});
