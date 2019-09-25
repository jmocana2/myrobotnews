const getWeekDay = () => {
  const newDate = new Date();

  const days = [
    'domingo',
    'lunes',
    'martes',
    'miercoles',
    'juev es',
    'viernes',
    'sabado',
  ];

  return days[newDate.getDay()];
};

const getDay = () => {
  const d = new Date();
  return d.getDate();
};

const getMonth = () => {
  const meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];
  const d = new Date();
  return meses[d.getMonth()];
};

const getYear = () => {
  const d = new Date();
  return d.getFullYear();
};

export { getWeekDay, getDay, getMonth, getYear };
