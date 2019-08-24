const fs = require('fs');
const express = require('express');

const app = express();

app.use(express.json());

const port = 3000;

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

const getTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours,
    },
  });
};

const getTour = (req, res) => {
  const id = Number(req.params.id);
  const tour = tours.find(el => el.id === id);

  if (!tour) {
    return res.status(404).json({ status: 'fail', message: 'Invalid id!' });
  }

  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  });
};

const postTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = { id: newId, ...req.body };

  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    err => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );
};

const patchTour = (req, res) => {
  const id = Number(req.params.id);
  const tour = tours.find(el => el.id === id);

  if (!tour) {
    return res.status(404).json({ status: 'fail', message: 'Invalid id!' });
  }

  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here...>',
    },
  });
};

const deleteTour = (req, res) => {
  const id = Number(req.params.id);
  const tour = tours.find(el => el.id === id);

  if (!tour) {
    return res.status(404).json({ status: 'fail', message: 'Invalid id!' });
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
};

// app.get('/api/v1/tours', getTours);
// app.get('/api/v1/tours/:id', getTour);
// app.post('/api/v1/tours', postTour);
// app.patch('/api/v1/tours/:id', patchTour);
// app.delete('/api/v1/tours/:id', deleteTour);

app
  .route('/api/v1/tours')
  .get(getTours)
  .post(postTour);

app
  .route('/api/v1/tours/:id')
  .get(getTour)
  .patch(patchTour)
  .delete(deleteTour);

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
