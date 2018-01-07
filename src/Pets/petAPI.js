const pets = [
  { id: "a234", name: "Oreo", species: "cat", img:"https://www.petmd.com/sites/default/files/petmd-cat-happy-10.jpg"},
  { id: "a345", name: "Luna", species: "dog", img:"https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg"},
  { id: "b234", name: "Bell", species: "hamster", img:"https://www.omlet.co.uk/images/originals/hamsters-make-great-pets.jpg"},
  { id: "cda2", name: "Snowball", species: "rabbit", img:"https://www.peta.org/wp-content/uploads/2010/06/iStock_000008440542XSmall1.jpg"},
  { id: "def4", name: "Nibbles", species: "goldfish", img:"https://www.petmd.com/sites/default/files/goldfish-swimmingtoward_285011336_0.jpg" },
  { id: "eft2", name: "Bella", species: "parrot", img:"http://animals.sandiegozoo.org/sites/default/files/2016-12/Parrot_ZN.jpg"}
];

const getAll = () => pets;

const getOne = id => pets.find(pet => pet.id === id);

export default {
  getOne,
  getAll
};
