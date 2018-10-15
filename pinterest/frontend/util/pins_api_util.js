export const fetchPins = () => (
  $.ajax({
    method: 'GET',
    url: '/api/pins'
  })
);

export const fetchPin = id => (
  $.ajax({
    method: 'GET',
    url: `/api/pins/${id}`
  })
);

// export const createPin = formData => (
//   $.ajax({
//     url: '/api/pins',
//     method: 'POST',
//     data: formData,
//     contentType: false,
//     processData: false
//   })
// );

export const createPin = formData => {
  return $.ajax({
    url: '/api/pins',
    method: 'POST',
    data: formData,
    contentType: false,
    processData: false
  });
};

export const deletePin = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/pins/${id}`
  })
);
