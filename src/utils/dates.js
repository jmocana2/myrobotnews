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

export default getWeekDay;
