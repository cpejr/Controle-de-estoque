
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('userData').del()
    .then(function () {
      // Inserts seed entries
      return knex('userData').insert([
        {userName: 'Angela',
        userType: 'adm',
        userCPF: '101010202020',
        userDate: '19/10/2019',
        password: 'angela123',
        },
        {userName: 'Paola',
        userType: 'gerente',
        userCPF: '101010202120',
        userDate: '19/10/2009',
        password: 'paola123',
        },
        ]);
    });
};
