const { PetApi } = require('./api-services/src/');

const petApi = new PetApi();

let petId = null;

petApi.addPet(
  {
    id: '9216678377732771000',
    name: 'Gizmo',
    tags: [
      {
        name: 'Dog'
      },
      {
        name: 'Good girl'
      }
    ],
    status: 'available'
  },
  (err, data, res) => {
    if (!err) {
      console.log(err, data, res.body);
      petId = res.body.id;
      console.log('petId', petId);
      petApi.getPetById(petId, (err, data, res) => {
        if (!err) {
          console.log(res.body);
        } else {
          console.log('err', err);
        }
      });
    }
  }
);
