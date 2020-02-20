const { PetApi } = require('./generated-code/api-services/src/');

const petApi = new PetApi();

let petId = null;

console.log('++++ Using Generated Code ++++')

console.log('PetApi: Add a pet')

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
      console.log('Check the pet added ok')
      console.log('petId', petId);
      petApi.getPetById(petId, (err, data, res) => {
        if (!err) {
          console.log(res.body);
          console.log('Pet successfully added!')
        } else {
          console.log('err', err);
        }
      });
    }
  }
);
