
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('product').del()
    .then(function () {
      // Inserts seed entries
      return knex('product').insert([
        {name: 'chocolate',
        shelfLife: '10/10/2032',
        location: 'second floor',
        id: 'cpe1234',
        type: 'alimento',
        lastBuyDate: '10/10/2019',
        lastBuyPrice: '30,00',
        amount: '11',
        allertAmount: '2',
        description: 'nada como um chocolate, ne nao?'
        },
        {name: 'rapadura',
        shelfLife: '10/10/2067',
        location: 'first floor',
        id: 'cpe1235',
        type: 'alimento',
        lastBuyDate: '10/10/2018',
        lastBuyPrice: '1,00',
        amount: '24',
        allertAmount: '9',
        description: 'so nao e mais doce do que voce'
        },
        {name: 'bala',
        shelfLife: '10/10/2021',
        location: 'first floor',
        id: 'cpe1236',
        type: 'alimento',
        lastBuyDate: '10/10/2018',
        lastBuyPrice: '1,00',
        amount: '5',
        allertAmount: '1',
        description: 'cuidado com os dentes'
        },
        ]);
    });
};
