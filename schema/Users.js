cube('Users', {
    sql: 'SELECT *FROM users',

    measures: {
        count: {
            sql: 'id',
            type: 'count'
        }
    },

    dimensions: {
        symptoms: {
            sql: 'symptoms',
            type: 'string'
        },

        positiveContact: {
            sql: 'positive-contact',
            type: 'string'
        },

        domesticAnimals: {
            sql: 'domestic-animal',
            type: 'string'
        },
        addressPosition: {
            sql: 'address-position',
            type: 'string'
        }
    }
});
