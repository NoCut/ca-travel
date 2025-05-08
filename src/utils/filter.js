export const filterByCountries = (tours, selectedCountries) => {
  if (!selectedCountries || selectedCountries.length === 0) return tours;
  return tours.filter(tour =>
    selectedCountries.some(country => tour.countries.includes(country))
  );
};

export const filterByDate = (tours, selectedDate, selectedMonth, selectedYear) => {
  if (!selectedDate) return tours;
  const dateStr = `${selectedYear}-${(selectedMonth + 1).toString().padStart(2, '0')}-${selectedDate.toString().padStart(2, '0')}`;
  return tours.filter(tour => tour.dates.includes(dateStr));
};

export const filterByDuration = (tours, selectedDurationRange) => {
  if (selectedDurationRange === 'ЛЮБОЕ') return tours;
  const [min, max] = selectedDurationRange.split('-').map(Number) || [8, Infinity];
  return tours.filter(tour =>
    selectedDurationRange === '8+' ? tour.duration >= 8 : tour.duration >= min && tour.duration <= max
  );
};

export const sortTours = (tours, sortOption) => {
  return [...tours].sort((a, b) => {
    if (sortOption === 'price') return a.price - b.price;
    if (sortOption === 'duration') return a.duration - b.duration;
    return 0;
  });
};

export const applyFilters = (tours, selectedCountries, selectedDate, selectedMonth, selectedYear, selectedDurationRange, sortOption) => {
  let filteredTours = [...tours];
  filteredTours = filterByCountries(filteredTours, selectedCountries);
  filteredTours = filterByDate(filteredTours, selectedDate, selectedMonth, selectedYear);
  filteredTours = filterByDuration(filteredTours, selectedDurationRange);
  return sortTours(filteredTours, sortOption);
};
